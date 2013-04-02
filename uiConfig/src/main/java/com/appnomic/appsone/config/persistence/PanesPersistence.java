package com.appnomic.appsone.config.persistence;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.appnomic.appsone.common.ActionConstants;
import com.appnomic.appsone.config.entity.PaneListEntity;
import com.appnomic.appsone.config.entity.UserConfigEntity;
import com.appnomic.appsone.config.leveldb.LevelDBManager;

public class PanesPersistence extends Persistence {
	
	public boolean persist() {
        // 1) Iterate over the list of users
        // 2) create a UserConfigEntity for each user - save this

        LevelDBManager instance = null;
        try {
            instance = LevelDBManager.getInstance();

            // ToDo: currently doing for only one user
            String defaultUser = "default-alerts";
            String userUuid = new UserPersistence().getUserUuid(defaultUser);

            UserConfigEntity uce = new UserConfigEntity();
            uce.setUuid(userUuid);

            Map<String, ArrayList<String>> uuidMap = new HashMap<String, ArrayList<String>>();
            ArrayList<String> uuidList = new ArrayList<String>();
            PaneListEntity ple = PaneListEntity.getDefaultConfig();
            uuidList.add(ple.getUuid());
            uuidMap.put(ActionConstants.NOC.APPLICATION_ALERTS.name(), uuidList);
            uce.setUuidMap(uuidMap);

            String json = gson.toJson(uce);
            System.out.println("saving: key = " + userUuid + " value = " + json);
            instance.write(userUuid, json);

            // Now persist the actual config objects for this user - those
            // whose UUID has been returned above

            json = gson.toJson(ple);
            instance.write(ple.getUuid(), json);

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

        return true;
	}
	
}
