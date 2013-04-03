package com.appnomic.appsone.config.persistence;

import com.appnomic.appsone.common.ActionConstants;
import com.appnomic.appsone.config.entity.ApplicationAlertsGridEntity;
import com.appnomic.appsone.config.entity.UserConfigEntity;
import com.appnomic.appsone.config.leveldb.LevelDBManager;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: bharadwaj
 * Date: 28/03/13
 * Time: 8:45 PM
 */
public class AlertsGridPersistence extends Persistence {

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
            String defaultUser = "default-alerts";
            String userUuid = new UserPersistence().getUserUuid(defaultUser);

            UserConfigEntity uce = new UserConfigEntity();
            uce.setUuid(userUuid);

            Map<String, ArrayList<String>> uuidMap = new HashMap<String, ArrayList<String>>();
            ArrayList<String> uuidList = new ArrayList<String>();
            ApplicationAlertsGridEntity aag = ApplicationAlertsGridEntity.getDefaultConfig();
            uuidList.add(aag.getUuid());
            uuidMap.put(ActionConstants.NOC.APPLICATION_ALERTS.name(), uuidList);
            uce.setUuidMap(uuidMap);

            String json = gson.toJson(uce);
            System.out.println("saving: key = " + userUuid + " value = " + json);
            instance.write(userUuid, json);

            // Now persist the actual config objects for this user - those
            // whose UUID has been returned above

            json = gson.toJson(aag);
            instance.write(aag.getUuid(), json);

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }
}
