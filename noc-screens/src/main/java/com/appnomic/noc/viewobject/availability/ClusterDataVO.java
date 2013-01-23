package com.appnomic.noc.viewobject.availability;

public class ClusterDataVO {
	
	private String instanceName;
	private CompInstanceTimesVO [] times;
	
	public String getInstanceName() {
		return instanceName;
	}
	public void setInstanceName(String instanceName) {
		this.instanceName = instanceName;
	}
	public CompInstanceTimesVO[] getTimes() {
		return times;
	}
	public void setTimes(CompInstanceTimesVO[] times) {
		this.times = times;
	}
	
}
