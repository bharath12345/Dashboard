package com.appnomic.appsone.config.entity;

import java.util.*;

public class UserConfigEntity {


    // the persistence key in Level DB JSON store
	String userUuid;

    // 1) json of this is what gets persisted as value
    // 2) The key in this map is the 'kind' of config objects associated to this user
    // this 'kind' should always come from the definitions in ActionConstants.java
    // 3) The value is a list of UUID's - one uuid per config object
    // 4) Each config object is stored in Level DB by UUID as its key and a JSON of its attributes as value
	Map<String, ArrayList<String>> uuidMap;

    public Map<String, ArrayList<String>> getUuidMap() {
        return uuidMap;
    }

    public void setUuidMap(Map<String, ArrayList<String>> uuidMap) {
        this.uuidMap = uuidMap;
    }

    public String getUserUuid() {
        return userUuid;
    }

    public void setUserUuid(String userUuid) {
        this.userUuid = userUuid;
    }

}
