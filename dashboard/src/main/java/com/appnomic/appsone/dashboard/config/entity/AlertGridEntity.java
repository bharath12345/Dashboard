package com.appnomic.appsone.dashboard.config.entity;

import com.appnomic.appsone.dashboard.config.attribute.*;

public class AlertGridEntity extends ConfigEntity {
	
	BooleanAttribute showAllGreenApplications;
	StringAttribute fontName;
	IntegerAttribute fontSize;
	IntegerAttribute applicationRefreshTime;
	
	StringArrayAttribute applicationNames;
	String [] allUserApplications;
	
	public StringArrayAttribute getApplicationNames() {
		return applicationNames;
	}
	public void setApplicationNames(StringArrayAttribute applicationNames) {
		this.applicationNames = applicationNames;
	}
	public String[] getAllUserApplications() {
		return allUserApplications;
	}
	public void setAllUserApplications(String[] allUserApplications) {
		this.allUserApplications = allUserApplications;
	}
	public IntegerAttribute getApplicationRefreshTime() {
		return applicationRefreshTime;
	}
	public void setApplicationRefreshTime(IntegerAttribute applicationRefreshTime) {
		this.applicationRefreshTime = applicationRefreshTime;
	}
	public BooleanAttribute getShowAllGreenApplications() {
		return showAllGreenApplications;
	}
	public void setShowAllGreenApplications(
			BooleanAttribute showAllGreenApplications) {
		this.showAllGreenApplications = showAllGreenApplications;
	}
	public StringAttribute getFontName() {
		return fontName;
	}
	public void setFontName(StringAttribute fontName) {
		this.fontName = fontName;
	}
	public IntegerAttribute getFontSize() {
		return fontSize;
	}
	public void setFontSize(IntegerAttribute fontSize) {
		this.fontSize = fontSize;
	}
}
