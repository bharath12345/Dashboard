package com.appnomic.appsone.config.entity;

public abstract class AbstractConfigEntity {

    protected String uuid; // key
    protected int userId;

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

}