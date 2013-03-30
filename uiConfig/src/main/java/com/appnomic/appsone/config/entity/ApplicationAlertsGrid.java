package com.appnomic.appsone.config.entity;

import java.util.ArrayList;
import java.util.List;

public class ApplicationAlertsGrid extends AbstractConfigEntity {

	private int refreshTime = 60;

	private String [] applications; // user setting

    // applications to choose from - this field should always be set at runtime from the
    // ApplicatonService Bean and is never persisted
    private String [] allApplications;
	
	public int getRefreshTime() {
		return refreshTime;
	}
	public void setRefreshTime(int refreshTime) {
		this.refreshTime = refreshTime;
	}
	public String [] getApplications() {
		return applications;
	}
	public void setApplications(String [] applications) {
		this.applications = applications;
	}
    public String[] getAllApplications() {
        return allApplications;
    }
    public void setAllApplications(String[] allApplications) {
        this.allApplications = allApplications;
    }

    /*
       'refreshTime' is a field which has a default value set in the POJO itself and shown
           on the UI as part of the default config

       'applications' is a field whose value is set by reading all the available applications from
           A1 db at run-time. So the default config will not have its value set

    */
    public static ApplicationAlertsGrid getDefaultConfig() {
        ApplicationAlertsGrid aag = new ApplicationAlertsGrid();
        return aag;
    }
}
