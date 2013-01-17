package com.appnomic.noc.availability;

public class ComponentData {
	
	private String instanceName;
	private ClusterTimes [] times;
	
	public String getInstanceName() {
		return instanceName;
	}
	public void setInstanceName(String instanceName) {
		this.instanceName = instanceName;
	}
	public ClusterTimes[] getTimes() {
		return times;
	}
	public void setTimes(ClusterTimes[] times) {
		this.times = times;
	}

}
