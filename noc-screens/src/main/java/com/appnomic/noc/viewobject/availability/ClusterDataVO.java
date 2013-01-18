package com.appnomic.noc.viewobject.availability;

public class ClusterDataVO {
	
	private String instanceName;
	private HostTimesVO [] times;
	
	public String getInstanceName() {
		return instanceName;
	}
	public void setInstanceName(String instanceName) {
		this.instanceName = instanceName;
	}
	public HostTimesVO[] getTimes() {
		return times;
	}
	public void setTimes(HostTimesVO[] times) {
		this.times = times;
	}
	
}
