package com.appnomic.appsone.config.persistence;

import java.util.*;

import com.appnomic.appsone.common.ActionConstants;
import com.appnomic.appsone.config.entity.LinksListEntity;
import com.appnomic.appsone.config.entity.PaneListEntity;
import com.appnomic.appsone.config.leveldb.LevelDBManager;
import com.appnomic.appsone.config.entity.UserConfigEntity;

public class UserConfigPersistence extends Persistence {

    /*
      * 1) The persist() method of this class is invoked on deployment
      * 2) The get() and set() methods are called from UI for interactions
      */

    public boolean persist() {
        // 1) Iterate over the list of users
        // 2) create a UserConfigEntity for each user - save this

        LevelDBManager instance = null;
        try {
            instance = LevelDBManager.getInstance();

            // ToDo: currently doing for only one user
            String defaultUser = "default-panes";
            String userUuid = new UserPersistence().getUserUuid(defaultUser);

            UserConfigEntity uce = new UserConfigEntity();
            uce.setUuid(userUuid);

            Map<String, ArrayList<String>> uuidMap = new HashMap<String, ArrayList<String>>();
            ArrayList<String> uuidList = new ArrayList<String>();
            PaneListEntity tle = PaneListEntity.getDefaultConfig();
            uuidList.add(tle.getUuid());
            uuidMap.put(ActionConstants.ACCORDION.PANES.name(), uuidList);

            //ToDo: How will someone distinguish between these different object types ???
            //ToDo: How will the Alert's LinksListEntity get picked up correctly ??
            //ToDo: Fix this along with Debasis

            uuidList = new ArrayList<String>();
            LinksListEntity alertPLE = LinksListEntity.getDefaultAnalyticsPageEntity();
            uuidList.add(alertPLE.getUuid());
            LinksListEntity configPLE = LinksListEntity.getDefaultConfigPageEntity();
            uuidList.add(configPLE.getUuid());
            LinksListEntity customPLE = LinksListEntity.getDefaultCustomPageEntity();
            uuidList.add(customPLE.getUuid());
            LinksListEntity nocPLE = LinksListEntity.getDefaultNocPageEntity();
            uuidList.add(nocPLE.getUuid());
            LinksListEntity topoPLE = LinksListEntity.getDefaultTopologyPageEntity();
            uuidList.add(topoPLE.getUuid());
            uuidMap.put(ActionConstants.ACCORDION.LINKS.name(), uuidList);
            uce.setUuidMap(uuidMap);

            String json = gson.toJson(uce);
            System.out.println("saving: key = " + userUuid + " value = " + json);
            instance.write(userUuid, json);

            // Now persist the actual config objects for this user - those
            // whose UUID has been returned above

            json = gson.toJson(tle);
            instance.write(tle.getUuid(), json);

            json = gson.toJson(alertPLE);
            instance.write(alertPLE.getUuid(), json);
            json = gson.toJson(configPLE);
            instance.write(configPLE.getUuid(), json);
            json = gson.toJson(customPLE);
            instance.write(customPLE.getUuid(), json);
            json = gson.toJson(nocPLE);
            instance.write(nocPLE.getUuid(), json);
            json = gson.toJson(topoPLE);
            instance.write(topoPLE.getUuid(), json);


        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }
}
