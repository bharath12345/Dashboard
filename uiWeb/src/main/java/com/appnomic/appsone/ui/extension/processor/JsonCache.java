package com.appnomic.appsone.ui.extension.processor;

import net.sf.json.*;

import java.util.*;

/**
 * User: bharadwaj
 * Date: 11/04/13
 * Time: 10:50 PM
 */
public class JsonCache {

    public static Map<String, ExtensionCache> extensionCacheMap = new HashMap<String, ExtensionCache>();

    public class ExtensionCache {
        public JSONObject paneCache;

        public JSONObject menuCache;
        public JSONObject formsCache;

        public JSONArray attributesCache;
        public JSONArray toolbarCache;
        public JSONArray analysisPaneCache;
        public JSONArray labelCache;
    }
}


