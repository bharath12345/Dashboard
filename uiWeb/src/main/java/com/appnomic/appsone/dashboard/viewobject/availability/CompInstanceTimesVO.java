package com.appnomic.appsone.dashboard.viewobject.availability;

public class CompInstanceTimesVO {
	
	private String time;
	private CompInstanceDataPointVO [] instances;
	
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public CompInstanceDataPointVO[] getInstances() {
		return instances;
	}
	public void setInstances(CompInstanceDataPointVO[] host) {
		this.instances = host;
	}
	
}
