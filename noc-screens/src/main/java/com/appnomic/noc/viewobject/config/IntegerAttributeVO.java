package com.appnomic.noc.viewobject.config;

import com.appnomic.noc.config.ConfigType;

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
