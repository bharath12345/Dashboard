package com.appnomic.noc.viewobject.availability;

public class ComponentVO {

	private String componentName;
	private int id;
	private ClusterVO [] clusters;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getComponentName() {
		return componentName;
	}
	public void setComponentName(String componentName) {
		this.componentName = componentName;
	}
	public ClusterVO[] getClusters() {
		return clusters;
	}
	public void setClusters(ClusterVO[] clusters) {
		this.clusters = clusters;
	}
}
