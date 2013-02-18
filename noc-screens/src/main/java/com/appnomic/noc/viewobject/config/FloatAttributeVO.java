package com.appnomic.noc.viewobject.config;

import com.appnomic.noc.config.ConfigType;

public class FloatAttributeVO extends AttributeVO {

	float value;

	public FloatAttributeVO() {
		setType(ConfigType.FLOAT.name());
	}

	public float getValue() {
		return value;
	}

	public void setValue(float value) {
		this.value = value;
	}
	
}
