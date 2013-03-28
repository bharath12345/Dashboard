package com.appnomic.appsone.config.persistence;

import com.appnomic.appsone.config.leveldb.LevelDBManager;
import com.google.gson.Gson;

/**
 * User: bharadwaj
 * Date: 28/03/13
 * Time: 8:29 PM
 */
public class Persistence {

    protected static final Gson gson = new Gson();

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

    public String get(String userUuid) {
        LevelDBManager instance = null;
        String json = null;
        try {
            instance = LevelDBManager.getInstance();
            System.out.println("retrieving: key = " + userUuid);
            json = instance.read(userUuid);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return json;
    }

}
