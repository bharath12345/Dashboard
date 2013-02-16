package com.appnomic.noc.viewobject.config;

public class AlertGridConfigVO {

	Boolean showAllGreenApplications;
	String fontName;
	Integer fontSize;
	Integer applicationRefreshTime;
	
	public Boolean getShowAllGreenApplications() {
		return showAllGreenApplications;
	}
	public void setShowAllGreenApplications(Boolean showAllGreenApplications) {
		this.showAllGreenApplications = showAllGreenApplications;
	}
	public String getFontName() {
		return fontName;
	}
	public void setFontName(String fontName) {
		this.fontName = fontName;
	}
	public Integer getFontSize() {
		return fontSize;
	}
	public void setFontSize(Integer fontSize) {
		this.fontSize = fontSize;
	}
	public Integer getApplicationRefreshTime() {
		return applicationRefreshTime;
	}
	public void setApplicationRefreshTime(Integer applicationRefreshTime) {
		this.applicationRefreshTime = applicationRefreshTime;
	}
	
}
