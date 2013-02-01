package com.appnomic.noc.viewobject.alert;


public class ApplicationDataVO {
	
	String applicationName;
	MetricData [] metrics;
	
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
