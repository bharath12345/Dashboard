package com.appnomic.noc.viewobject.config;

import com.appnomic.noc.config.ConfigType;

public class StringAttributeVO extends AttributeVO {

	String value;
	
	public StringAttributeVO() {
		setType(ConfigType.STRING.name());
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
}
