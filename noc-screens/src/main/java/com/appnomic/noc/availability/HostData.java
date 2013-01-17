package com.appnomic.noc.availability;

public class HostData {
	private String instanceName;
	private KpiTimes [] times;
	
	public String getInstanceName() {
		return instanceName;
	}
	public void setInstanceName(String instanceName) {
		this.instanceName = instanceName;
	}
	public KpiTimes[] getTimes() {
		return times;
	}
	public void setTimes(KpiTimes[] times) {
		this.times = times;
	}
	
}
