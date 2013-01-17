package com.appnomic.noc.availability;

public class ClusterData {
	
	private String instanceName;
	private HostTimes [] times;
	
	public String getInstanceName() {
		return instanceName;
	}
	public void setInstanceName(String instanceName) {
		this.instanceName = instanceName;
	}
	public HostTimes[] getTimes() {
		return times;
	}
	public void setTimes(HostTimes[] times) {
		this.times = times;
	}
	
}
