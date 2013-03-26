package com.appnomic.appsone.config.attribute;

public class IntegerAttribute {
	int factoryReadOnly;
	int factoryModified;
	int adminSetting;
	int userSetting;
	
	public IntegerAttribute() {
	}
	
	public IntegerAttribute(int factoryModified, int adminSetting, int userSetting) {
		this.factoryModified = factoryModified;
		this.adminSetting = adminSetting;
		this.userSetting = userSetting;
	}
	
	public int getFactoryReadOnly() {
		return factoryReadOnly;
	}
	public void setFactoryReadOnly(int factoryReadOnly) {
		this.factoryReadOnly = factoryReadOnly;
	}
	public int getFactoryModified() {
		return factoryModified;
	}
	public void setFactoryModified(int factoryModified) {
		this.factoryModified = factoryModified;
	}
	public int getAdminSetting() {
		return adminSetting;
	}
	public void setAdminSetting(int adminSetting) {
		this.adminSetting = adminSetting;
	}
	public int getUserSetting() {
		return userSetting;
	}
	public void setUserSetting(int userSetting) {
		this.userSetting = userSetting;
	}
}
