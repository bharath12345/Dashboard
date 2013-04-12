package com.appnomic.appsone.ui.extension.processor;

import java.io.File;
import java.net.URISyntaxException;
import java.net.URL;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.JDOMException;
import org.jdom.input.SAXBuilder;

//import javax.management.*;
//import org.apache.catalina.Server;

import org.springframework.beans.factory.InitializingBean;

import org.apache.http.client.fluent.Request;

import net.sf.json.xml.*;
import net.sf.json.*;

/**
 * User: bharadwaj
 * Date: 09/04/13
 * Time: 2:27 PM
 */
public class ExtensionLoader implements InitializingBean {

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

    @Override
    public void afterPropertiesSet() throws Exception {
        try {
            XMLSerializer xmlSerializer = new XMLSerializer();
            Map<String, String> extensionMap = getExtensionSchemaUrls();
            Set<String> extensionNames = extensionMap.keySet();
            for (String extensionName : extensionNames) {
                String extensionURL = extensionMap.get(extensionName);
                String uiExtensionXML = getExtensionXML(extensionURL);
                // ToDo: cache this XML locally

                JSON json = xmlSerializer.read(uiExtensionXML);
                addJsonToCache(json);

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    private Map<String, String> getExtensionSchemaUrls() throws Exception {
        Map<String, String> extensionMap = new HashMap<String, String>();

        URL resourceUrl = URL.class.getResource("/WEB-INF/classes/appsoneExtensions.xml");
        File appsoneExtensions = new File(resourceUrl.toURI());

        SAXBuilder builder = new SAXBuilder();
        Document document = (Document) builder.build(appsoneExtensions);
        Element rootNode = document.getRootElement();
        List list = rootNode.getChildren();

        for (int i = 0; i < list.size(); i++) {

            Element node = (Element) list.get(i);

            String id = node.getAttributeValue("id");
            String url = node.getAttributeValue("url");
            extensionMap.put(id, url);
        }


        return extensionMap;
    }

    /*public Server getServerInstance() {

        MBeanServer mBeanServer = MBeanServerFactory.findMBeanServer(null).get(0);
        ObjectName name = new ObjectName("Catalina", "type", "Server");
        Server server = (Server) mBeanServer.getAttribute(name, "managedResource");
    }*/


    private String getExtensionXML(String extensionURL) throws Exception {
        return Request.Get(extensionURL)
                .connectTimeout(1000)
                .socketTimeout(1000)
                .execute().returnContent().asString();
    }

    private void addJsonToCache(JSON json) {
        JSONObject jsonObject = (JSONObject) json;
        String extensionName = (String)jsonObject.get("@label");

        JsonCache jsonCache = new JsonCache();
        JsonCache.ExtensionCache extensionCache = jsonCache.new ExtensionCache();
        JsonCache.extensionCacheMap.put(extensionName, extensionCache);

        extensionCache.paneCache = (JSONObject)jsonObject.get("pane");
        extensionCache.menuCache = (JSONObject)jsonObject.get("menu");
        extensionCache.formsCache = (JSONObject)jsonObject.get("forms");

        extensionCache.attributesCache = (JSONArray)jsonObject.get("attributes");
        extensionCache.toolbarCache = (JSONArray)jsonObject.get("toolbar");
        extensionCache.analysisPaneCache = (JSONArray)jsonObject.get("analysis-panes");
        extensionCache.labelCache = (JSONArray)jsonObject.get("labels");


    }

}
