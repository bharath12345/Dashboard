package com.appnomic.appsone.dashboard.viewobject.alert;


public class ApplicationMetaVO {

	String [] metrics;
	ApplicationVO [] applications;
	
	public String[] getMetrics() {
		return metrics;
	}
	public void setMetrics(String[] metrics) {
		this.metrics = metrics;
	}
	public ApplicationVO[] getApplications() {
		return applications;
	}
	public void setApplications(ApplicationVO[] applications) {
		this.applications = applications;
	}
}

