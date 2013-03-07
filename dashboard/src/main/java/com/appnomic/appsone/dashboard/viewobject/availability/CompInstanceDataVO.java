package com.appnomic.appsone.dashboard.viewobject.availability;

public class CompInstanceDataVO {
	private String instanceName;
	private KpiTimesVO [] times;
	
	public String getInstanceName() {
		return instanceName;
	}
	public void setInstanceName(String instanceName) {
		this.instanceName = instanceName;
	}
	public KpiTimesVO[] getTimes() {
		return times;
	}
	public void setTimes(KpiTimesVO[] times) {
		this.times = times;
	}
	
}
