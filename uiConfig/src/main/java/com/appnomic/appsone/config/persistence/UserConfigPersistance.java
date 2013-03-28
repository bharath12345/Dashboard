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

    private static final Gson gson = new Gson();

    public boolean set(String userUuid, String json) {
        LevelDBManager instance = null;
        try {
            instance = LevelDBManager.getInstance();
            System.out.println("saving: key = " + userUuid + " value = " + json);
            instance.write(userUuid, json);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public UserConfigEntity get(String userUuid) {
        LevelDBManager instance = null;
        UserConfigEntity uce = null;
        try {
            instance = LevelDBManager.getInstance();
            System.out.println("retrieving: key = " + userUuid);
            String json = instance.read(userUuid);
            uce = gson.fromJson(json, UserConfigEntity.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return uce;
    }

    public boolean persist() {
        // 1) Iterate over the list of users
        // 2) create a UserConfigEntity for each user - save this

        LevelDBManager instance = null;
        try {
            instance = LevelDBManager.getInstance();

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
