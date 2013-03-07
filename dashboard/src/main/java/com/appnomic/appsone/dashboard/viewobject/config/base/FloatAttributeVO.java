package com.appnomic.appsone.dashboard.viewobject.config.base;

import com.appnomic.appsone.dashboard.config.ConfigType;

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
