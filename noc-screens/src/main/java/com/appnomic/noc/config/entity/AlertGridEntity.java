package com.appnomic.noc.config.entity;

import com.appnomic.noc.config.attribute.*;

public class AlertGridEntity extends ConfigEntity {
	
	BooleanAttribute showAllGreenApplications;
	StringAttribute fontName;
	IntegerAttribute fontSize;
	IntegerAttribute applicationRefreshTime;
	
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
