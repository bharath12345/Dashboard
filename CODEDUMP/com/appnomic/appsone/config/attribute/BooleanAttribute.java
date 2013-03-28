package com.appnomic.appsone.config.attribute;

public class BooleanAttribute {
	boolean factoryReadOnly;
	boolean factoryModified;
	boolean adminSetting;
	boolean userSetting;
	
	public BooleanAttribute() {
	}
	
	public BooleanAttribute(boolean factoryModified, boolean adminSetting, boolean userSetting) {
		this.factoryModified = factoryModified;
		this.adminSetting = adminSetting;
		this.userSetting = userSetting;
	}
	
	public boolean isFactoryReadOnly() {
		return factoryReadOnly;
	}
	public void setFactoryReadOnly(boolean factoryReadOnly) {
		this.factoryReadOnly = factoryReadOnly;
	}
	public boolean isFactoryModified() {
		return factoryModified;
	}
	public void setFactoryModified(boolean factoryModified) {
		this.factoryModified = factoryModified;
	}
	public boolean isAdminSetting() {
		return adminSetting;
	}
	public void setAdminSetting(boolean adminSetting) {
		this.adminSetting = adminSetting;
	}
	public boolean isUserSetting() {
		return userSetting;
	}
	public void setUserSetting(boolean userSetting) {
		this.userSetting = userSetting;
	}
}
