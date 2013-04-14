package com.appnomic.appsone.ui.extension.servlet;

import com.appnomic.appsone.ui.extension.processor.JsonCache;
import com.google.gson.Gson;
import net.sf.json.JSONObject;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * User: bharadwaj
 * Date: 13/04/13
 * Time: 9:09 PM
 */
public class PaneMetaServlet extends HttpServlet {

    JsonCache jsonCache = JsonCache.getInstance();
    Gson gson = new Gson();

    protected void service(HttpServletRequest request, HttpServletResponse response) throws IOException {

        response.setContentType("APPLICATION/json");

        List<JSONObject> paneList = new ArrayList<JSONObject>();
        Set<String> extensionNames = jsonCache.extensionCacheMap.keySet();
        for(String extensionName: extensionNames) {
            JSONObject pane = jsonCache.extensionCacheMap.get(extensionName).paneCache;
            paneList.add(pane);
        }

        String paneJson = gson.toJson(paneList);
        PrintWriter out = response.getWriter();
        out.print(paneJson);
        out.flush();

    }
}
