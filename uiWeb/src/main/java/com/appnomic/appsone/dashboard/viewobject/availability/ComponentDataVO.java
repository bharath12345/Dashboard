package com.appnomic.appsone.dashboard.viewobject.availability;

public class ComponentDataVO {
	
	private String instanceName;
	private ClusterTimesVO [] times;
	
	public String getInstanceName() {
		return instanceName;
	}
	public void setInstanceName(String instanceName) {
		this.instanceName = instanceName;
	}
	public ClusterTimesVO[] getTimes() {
		return times;
	}
	public void setTimes(ClusterTimesVO[] times) {
		this.times = times;
	}

}
