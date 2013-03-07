package com.appnomic.appsone.dashboard.config.attribute;

public class StringArrayAttribute {
	String [] factoryReadOnly;
	String [] factoryModified;
	String [] adminSetting;
	String [] userSetting;
	
	public StringArrayAttribute() {
	}
	
	public StringArrayAttribute(String [] factoryModified, String [] adminSetting, String [] userSetting) {
		this.factoryModified = factoryModified;
		this.adminSetting = adminSetting;
		this.userSetting = userSetting;
	}

	public String[] getFactoryReadOnly() {
		return factoryReadOnly;
	}

	public void setFactoryReadOnly(String[] factoryReadOnly) {
		this.factoryReadOnly = factoryReadOnly;
	}

	public String[] getFactoryModified() {
		return factoryModified;
	}

	public void setFactoryModified(String[] factoryModified) {
		this.factoryModified = factoryModified;
	}

	public String[] getAdminSetting() {
		return adminSetting;
	}

	public void setAdminSetting(String[] adminSetting) {
		this.adminSetting = adminSetting;
	}

	public String[] getUserSetting() {
		return userSetting;
	}

	public void setUserSetting(String[] userSetting) {
		this.userSetting = userSetting;
	}
}
