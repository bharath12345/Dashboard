package com.appnomic.noc.viewobject.config;

import com.appnomic.noc.config.ConfigType;

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
