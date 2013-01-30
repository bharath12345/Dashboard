package com.appnomic.noc.action.alert;

public class MetricData {
	String name;
	int count;
	boolean violated;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public boolean isViolated() {
		return violated;
	}
	public void setViolated(boolean violated) {
		this.violated = violated;
	}
}
