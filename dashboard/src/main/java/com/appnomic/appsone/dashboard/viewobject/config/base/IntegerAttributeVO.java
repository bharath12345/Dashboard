package com.appnomic.appsone.dashboard.viewobject.config.base;

import com.appnomic.appsone.dashboard.config.ConfigType;

public class IntegerAttributeVO extends AttributeVO {

	int value;

	public IntegerAttributeVO() {
		setType(ConfigType.INTEGER.name());
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}
	
}
