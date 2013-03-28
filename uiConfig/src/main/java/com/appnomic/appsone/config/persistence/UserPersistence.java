package com.appnomic.appsone.config.persistence;

import java.util.HashMap;
import java.util.UUID;

/**
 * Created with IntelliJ IDEA.
 * User: bharadwaj
 * Date: 28/03/13
 * Time: 10:48 PM
 * To change this template use File | Settings | File Templates.
 */
public class UserPersistence extends Persistence {

    public class Users {
        public HashMap<String, String> users;
    }

    String userMapKey = "userlist";

    public String getUserUuid(String username) {
        String uuid = null;
        String userJson = get(userMapKey);
        if(userJson == null) {
            uuid = UUID.randomUUID().toString();
            Users users = new Users();
            users.users = new HashMap<String, String>();
            users.users.put(username, uuid);
            userJson = gson.toJson(users);
            set(userMapKey, userJson);
        } else {
            Users users = gson.fromJson(userJson, Users.class);
            uuid = users.users.get(username);
            if(uuid == null) {
                // add a new user to the store
                uuid = UUID.randomUUID().toString();
                users.users.put(username, uuid);
                userJson = gson.toJson(users);
                set(userMapKey, userJson);
            }
        }
        return uuid;
    }
}
