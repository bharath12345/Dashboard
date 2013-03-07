package com.appnomic.appsone.dashboard.viewobject.availability;

public class ClusterVO {

	private String clusterName;
	private InstanceVO [] instances;
	private int id;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getClusterName() {
		return clusterName;
	}
	public void setClusterName(String clusterName) {
		this.clusterName = clusterName;
	}
	public InstanceVO[] getInstances() {
		return instances;
	}
	public void setIntances(InstanceVO[] host) {
		this.instances = host;
	}
}
