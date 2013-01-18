package com.appnomic.noc.viewobject.availability;

public class HostDataVO {
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
