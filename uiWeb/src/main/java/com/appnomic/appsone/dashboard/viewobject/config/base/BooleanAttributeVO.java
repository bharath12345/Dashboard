package com.appnomic.appsone.dashboard.viewobject.config.base;

import com.appnomic.appsone.config.ConfigType;

public class BooleanAttributeVO extends AttributeVO {

	boolean value;
	
	public BooleanAttributeVO() {
		setType(ConfigType.BOOLEAN.name());
	}

	public boolean isValue() {
		return value;
	}

	public void setValue(boolean value) {
		this.value = value;
	}
	
}
