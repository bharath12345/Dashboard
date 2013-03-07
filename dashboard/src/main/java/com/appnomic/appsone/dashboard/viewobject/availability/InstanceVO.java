package com.appnomic.appsone.dashboard.viewobject.availability;

public class InstanceVO {

	private String instanceName;
	private int kpiCount;
	private int id;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getInstanceName() {
		return instanceName;
	}
	public void setInstanceName(String hostname) {
		this.instanceName = hostname;
	}
	public int getKpiCount() {
		return kpiCount;
	}
	public void setKpiCount(int kpiCount) {
		this.kpiCount = kpiCount;
	}	
}
