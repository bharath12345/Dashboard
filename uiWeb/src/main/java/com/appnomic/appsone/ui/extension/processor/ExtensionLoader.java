package com.appnomic.appsone.ui.extension.processor;

import java.io.File;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.net.URL;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.appnomic.service.BeanLocator;
import org.apache.catalina.connector.Connector;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.JDOMException;
import org.jdom.input.SAXBuilder;

//import javax.management.*;
//import org.apache.catalina.Server;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.InitializingBean;

import org.apache.http.client.fluent.Request;

import net.sf.json.xml.*;
import net.sf.json.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.Resource;

import javax.annotation.PostConstruct;
import javax.management.MBeanServer;
import javax.management.MBeanServerFactory;
import javax.management.ObjectName;

import org.apache.catalina.*;
import org.apache.coyote.*;
import org.apache.coyote.http11.*;
import org.springframework.stereotype.Component;

/**
 * User: bharadwaj
 * Date: 09/04/13
 * Time: 2:27 PM
 */

@Component
public class ExtensionLoader implements InitializingBean, ApplicationContextAware {

    /*
        1) Look at the appsoneExtensions.xml from both locations (look into that XML for more info)

        2) The URL of the various extensions are available in appsoneExtensions.xml

        3) Use a HTTP client to query the uiExtension.xml and cache it locally in tmp of tomcat

        4) Convert the XML to JSON and build various cache's for -
            4.1) Accordion Panes Links - These are visible at all times
            4.2) Forms, Attributes, Menu, Toolbar, Label, Analysis-Pane
            Note: No hot-deployment in first release planned. If a extension.xml changes on the fly,
                then the user has to restart the AppsOne Dashboard UI to see the changes

        5) For Accordion Panes and links - the UI has to be populated at all times. This data is sent over from
            the cache when the UI starts getting rendered

        6) When user clicks on an accordion link,
             - the struts action to fetch the 'meta' is invoked. The URL (struts action) to fetch
                the meta is singular - same for all links. It uses the incoming parameters to filter.
                Thus the URL for the meta is NOT part of any extension.xml but part of the framework.
                The meta (say of the grid) includes attributes like the refresh interval, column width etc.
             - Nextly, the data. Again the data-url between the browser and A1 UI framework is a constant. It fetches the
                right data by filtering based on parameters. The browser invokes this data-url at regular intervals per
                the refresh time to render data. Again, the URL for the data between the browser and A1 UI framework
                is NOT part of the extension.xml
            - On the server side, to publish data on the data-url, the server connects to the internal object-url,
                fetches data and sends it over after validation. The steps -
                    * HTTP client receives json data
                    * parse the data to make sure that the format is per the definition
                    * Send data to UI
     */

    private ApplicationContext applicationContext;

    @Autowired
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        System.out.println("bharath: setting the application context");
        this.applicationContext=applicationContext;
        BeanLocator.getInstance().setApplicationContext(applicationContext);
    }

    @PostConstruct
    public void init(){
        System.out.println("bharath: postconstruct");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("Starting UI Extension Loader...");
        try {
            XMLSerializer xmlSerializer = new XMLSerializer();
            Map<String, String> extensionMap = getExtensionSchemaUrls();
            Set<String> extensionNames = extensionMap.keySet();
            for (String extensionName : extensionNames) {
                String extensionURL = "http://localhost:" + getServerPort();
                extensionURL += extensionMap.get(extensionName);
                extensionURL += "/uiExtension.action";
                System.out.println("Fetching UI Extension from URL: " + extensionURL);

                String uiExtensionXML = getExtensionXML(extensionURL);
                String tempFilePath = System.getProperty("catalina.base") + "/temp/" + extensionName + "_Extension.xml";
                FileUtils.writeStringToFile(new File(tempFilePath), uiExtensionXML);

                JSON json = xmlSerializer.read(uiExtensionXML);
                addJsonToCache(json);

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    private Map<String, String> getExtensionSchemaUrls() throws Exception {
        Map<String, String> extensionMap = new HashMap<String, String>();

        //ApplicationContext ctx = new ClassPathXmlApplicationContext();
        Resource uiExtnResource = this.applicationContext.getResource("classpath:appsoneExtensions.xml");
        InputStream xmlStream = uiExtnResource.getInputStream();

        SAXBuilder builder = new SAXBuilder();
        Document document = (Document) builder.build(xmlStream);
        Element rootNode = document.getRootElement();
        List list = rootNode.getChildren();

        for (int i = 0; i < list.size(); i++) {
            Element node = (Element) list.get(i);
            String id = node.getAttributeValue("id");
            String url = node.getAttributeValue("url");
            System.out.println("Extension looked up: " + id + " url: " + url);
            extensionMap.put(id, url);
        }

        xmlStream.close();
        return extensionMap;
    }

    public long getServerPort() {
        long serverPort = 8080;
        try {
            MBeanServer mBeanServer = MBeanServerFactory.findMBeanServer(null).get(0);
            ObjectName name = new ObjectName("Catalina", "type", "Server");
            Server server = (Server) mBeanServer.getAttribute(name, "managedResource");
            Service[] services = server.findServices();
            for (Service service : services) {
                for (Connector connector : service.findConnectors()) {
                    ProtocolHandler protocolHandler = connector.getProtocolHandler();
                    if (protocolHandler instanceof Http11Protocol
                            || protocolHandler instanceof Http11AprProtocol
                            || protocolHandler instanceof Http11NioProtocol) {
                        serverPort = connector.getPort();
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("HTTP Port: " + serverPort);
        return serverPort;
    }


    private String getExtensionXML(String extensionURL) throws Exception {
        return Request.Get(extensionURL)
                .connectTimeout(10000)
                .socketTimeout(10000)
                .execute().returnContent().asString();
    }

    private void addJsonToCache(JSON json) {
        JSONObject jsonObject = (JSONObject) json;
        String extensionName = (String) jsonObject.get("@label");

        JsonCache jsonCache = new JsonCache();
        JsonCache.ExtensionCache extensionCache = jsonCache.new ExtensionCache();
        JsonCache.extensionCacheMap.put(extensionName, extensionCache);

        extensionCache.paneCache = (JSONObject) jsonObject.get("pane");
        extensionCache.menuCache = (JSONObject) jsonObject.get("menu");
        extensionCache.formsCache = (JSONObject) jsonObject.get("forms");

        extensionCache.attributesCache = (JSONArray) jsonObject.get("attributes");
        extensionCache.toolbarCache = (JSONArray) jsonObject.get("toolbar");
        extensionCache.analysisPaneCache = (JSONArray) jsonObject.get("analysis-panes");
        extensionCache.labelCache = (JSONArray) jsonObject.get("labels");


    }

}
