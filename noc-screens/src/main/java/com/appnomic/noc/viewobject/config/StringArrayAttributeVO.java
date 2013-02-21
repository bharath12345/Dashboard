package com.appnomic.noc.viewobject.config;

import com.appnomic.noc.config.ConfigType;

public class StringArrayAttributeVO extends AttributeVO {

	String [] value;
	
	public StringArrayAttributeVO() {
		setType(ConfigType.STRING.name());
	}

	public String[] getValue() {
		return value;
	}

	public void setValue(String [] value) {
		this.value = value;
	}
	
}
