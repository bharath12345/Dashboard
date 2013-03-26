package com.appnomic.appsone.dashboard.viewobject.alert;


public class ApplicationDataVO {
	
	String applicationName;
	int applicaitonId;
	MetricData [] metrics;
	
	public int getApplicaitonId() {
		return applicaitonId;
	}
	public void setApplicaitonId(int applicaitonId) {
		this.applicaitonId = applicaitonId;
	}
	
	public String getApplicationName() {
		return applicationName;
	}
	public void setApplicationName(String applicationName) {
		this.applicationName = applicationName;
	}
	public MetricData[] getMetrics() {
		return metrics;
	}
	public void setMetrics(MetricData[] metrics) {
		this.metrics = metrics;
	}

}
