package com.appnomic.appsone.dashboard.viewobject.config.base;

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
