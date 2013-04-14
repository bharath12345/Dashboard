package com.appnomic.appsone.ui.extension.processor;

import com.appnomic.appsone.ui.extension.*;
import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.xml.XMLSerializer;
import org.jdom.Document;

import java.io.File;

/**
 * User: bharadwaj
 * Date: 13/04/13
 * Time: 10:55 PM
 */
public class XmlProcessor {

    public XmlProcessor(File extensionXmlFile, String uiExtensionXmlContent) {
        fromXmlBeans(extensionXmlFile);

        XMLSerializer xmlSerializer = new XMLSerializer();
        JSON json = xmlSerializer.read(uiExtensionXmlContent);
        addJsonToCache(json);
    }

    private void addJsonToCache(JSON json) {
        JSONObject jsonObject = (JSONObject) json;
        String extensionName = (String) jsonObject.get("@label");
        System.out.println("extension name being added to json cache = " + extensionName);

        JsonCache jsonCache = JsonCache.getInstance();
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

    public void fromXmlBeans(File xmlDocument) {
        try {
            UiExtensionDocument uiExtensionDocument = UiExtensionDocument.Factory.parse(xmlDocument);
            UiExtensionType uiExtensionType = uiExtensionDocument.getUiExtension();
            PaneType paneType = uiExtensionType.getPane();
            System.out.println("pane label = " + paneType.getLabel());

            FormsType uiFormsType = uiExtensionType.getForms();
            GridFormType gridFormType = uiFormsType.getGridForm();
            System.out.println("Grid form details: ID = " + gridFormType.getId() +
                    " object-url = " + gridFormType.getObjectUrl());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
