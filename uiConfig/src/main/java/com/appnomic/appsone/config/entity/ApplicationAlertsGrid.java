package com.appnomic.appsone.config.entity;

import java.util.ArrayList;
import java.util.List;

public class ApplicationAlertsGrid extends AbstractConfigEntity {

	int refreshTime = 60;
	List<String> applications = new ArrayList<String>();
	
	public int getRefreshTime() {
		return refreshTime;
	}
	public void setRefreshTime(int refreshTime) {
		this.refreshTime = refreshTime;
	}
	public List<String> getApplications() {
		return applications;
	}
	public void setApplications(List<String> applications) {
		this.applications = applications;
	}
}
