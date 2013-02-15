package com.appnomic.noc.config.attribute;

public class FloatAttribute {
	float factoryReadOnly;
	float factoryModified;
	float adminSetting;
	float userSetting;
	
	public FloatAttribute() {
	}
	
	public FloatAttribute(float factoryModified, float adminSetting, float userSetting) {
		this.factoryModified = factoryModified;
		this.adminSetting = adminSetting;
		this.userSetting = userSetting;
	}
	
	public float getFactoryReadOnly() {
		return factoryReadOnly;
	}
	public void setFactoryReadOnly(float factoryReadOnly) {
		this.factoryReadOnly = factoryReadOnly;
	}
	public float getFactoryModified() {
		return factoryModified;
	}
	public void setFactoryModified(float factoryModified) {
		this.factoryModified = factoryModified;
	}
	public float getAdminSetting() {
		return adminSetting;
	}
	public void setAdminSetting(float adminSetting) {
		this.adminSetting = adminSetting;
	}
	public float getUserSetting() {
		return userSetting;
	}
	public void setUserSetting(float userSetting) {
		this.userSetting = userSetting;
	}
}
