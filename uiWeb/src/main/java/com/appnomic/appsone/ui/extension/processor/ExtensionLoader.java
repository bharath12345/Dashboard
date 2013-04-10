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

import net.sf.json.xml.XMLSerializer;
import net.sf.json.JSON;

/**
 * User: bharadwaj
 * Date: 09/04/13
 * Time: 2:27 PM
 */
public class ExtensionLoader implements InitializingBean {

    /*
        1) Look at the appsoneExtensions.xml from both locations (look into that XML for more info)

        2) The URL of the various extensions are available in appsoneExtensions.xml

        3) Use a HTTP client to query the uiExtension.xml and cache it locally

        4) Parse the XML to build various cache's for -
            4.1) Accordion Panes - These are visible at all times
            4.2) Links
            4.3) Forms, Attributes, Menu, Toolbar, Label, Analysis-Pane
            Note: No hot-deployment in first release planned. If a extension.xml changes on the fly,
                then the user has to restart the AppsOne Dashboard UI to see the changes

        5) When the user clicks on an particular link, connect to the data-source and
            send the data after validation. The steps -
            5.1) HTTP client receives json data
            5.2) parse the data to make sure that the format is per the definition
            5.3) Send the data to the UI
            5.4) Depending on the refresh-time, send the data to UI regularly
     */

    @Override
    public void afterPropertiesSet() throws Exception {
        try {
            Map<String, String> extensionMap = getExtensionSchemaUrls();
            Set<String> extensionNames = extensionMap.keySet();
            for (String extensionName : extensionNames) {
                String uiExtensionXML = getExtensionXML(extensionName);
                // ToDo: cache this XML locally

                XMLSerializer xmlSerializer = new XMLSerializer();
                JSON json = xmlSerializer.read(uiExtensionXML);

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


    private String getExtensionXML(String extensionName) throws Exception {
        return Request.Get("http://somehost/")
                .connectTimeout(1000)
                .socketTimeout(1000)
                .execute().returnContent().asString();
    }

}
