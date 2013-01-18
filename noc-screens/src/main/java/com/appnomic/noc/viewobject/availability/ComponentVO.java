package com.appnomic.noc.viewobject.availability;

public class ComponentVO {

	private String componentName;
	private ClusterVO [] clusters;
	
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
