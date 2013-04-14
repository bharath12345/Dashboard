package com.appnomic.appsone.ui.extension.processor;

import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.jdom.Document;

/**
 * User: bharadwaj
 * Date: 13/04/13
 * Time: 10:55 PM
 */
public class XmlProcessor {

    public XmlProcessor(Document document, JSON json) {
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


}
