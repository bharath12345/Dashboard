package com.appnomic.appsone.config.persistence;

import java.util.*;

import com.appnomic.appsone.common.ActionConstants;
import com.appnomic.appsone.config.leveldb.LevelDBManager;
import com.appnomic.appsone.config.entity.PageListEntity;
import com.appnomic.appsone.config.entity.TabListEntity;
import com.appnomic.appsone.config.entity.UserConfigEntity;

import com.google.gson.Gson;

public class UserConfigPersistance {

    /*
      * 1) The persist() method of this class is invoked on deployment
      * 2) The get() and set() methods are called from UI interactions
      */

    public boolean set(int userId) {
        return true;
    }

    public boolean persist() {
        // 1) Iterate over the list of users
        // 2) create a UserConfigEntity for each user - save this

        LevelDBManager instance = null;
        try {
            instance = LevelDBManager.getInstance();
            Gson gson = new Gson();

            // ToDo: currently doing for only one user
            String userUuid = UUID.randomUUID().toString();

            UserConfigEntity uce = new UserConfigEntity();
            uce.setUserUuid(userUuid);

            Map<String, ArrayList<String>> uuidMap = new HashMap<String, ArrayList<String>>();
            ArrayList<String> uuidList = new ArrayList<String>();
            uuidList.add(TabListEntity.getDefaultConfig().getUuid());
            uuidMap.put(ActionConstants.ACCORDION.PANES.name(), uuidList);
            uce.setUuidMap(uuidMap);

            uuidMap = new HashMap<String, ArrayList<String>>();
            uuidList = new ArrayList<String>();
            uuidList.add(PageListEntity.getDefaultAlertsPageEntity().getUuid());
            uuidList.add(PageListEntity.getDefaultConfigPageEntity().getUuid());
            uuidList.add(PageListEntity.getDefaultCustomPageEntity().getUuid());
            uuidList.add(PageListEntity.getDefaultNocPageEntity().getUuid());
            uuidList.add(PageListEntity.getDefaultTopologyPageEntity().getUuid());
            uuidMap.put(ActionConstants.ACCORDION.LINKS.name(), uuidList);
            uce.setUuidMap(uuidMap);

            String json = gson.toJson(uce);
            System.out.println("saving: key = " + userUuid + " value = " + json);
            instance.write(userUuid, json);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }
}
