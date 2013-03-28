package com.appnomic.appsone.dashboard.viewobject.config.base;

public class StringArrayAttributeVO extends AttributeVO {

	String [] value;
	
	public StringArrayAttributeVO() {
		setType("STRINGARRAY");
	}

	public String[] getValue() {
		return value;
	}

	public void setValue(String [] value) {
		this.value = value;
	}
	
}
