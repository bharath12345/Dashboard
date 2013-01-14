package com.appnomic.noc.availability;

public class Component {

	private String componentName;
	private Cluster [] clusters;
	
	public String getComponentName() {
		return componentName;
	}
	public void setComponentName(String componentName) {
		this.componentName = componentName;
	}
	public Cluster[] getClusters() {
		return clusters;
	}
	public void setClusters(Cluster[] clusters) {
		this.clusters = clusters;
	}
}
