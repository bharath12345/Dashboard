package com.appnomic.noc.viewobject.config;

import com.appnomic.noc.viewobject.config.base.BooleanAttributeVO;
import com.appnomic.noc.viewobject.config.base.IntegerAttributeVO;
import com.appnomic.noc.viewobject.config.base.StringAttributeVO;

public class AlertGridConfigVO {

	BooleanAttributeVO showAllGreenApplications;
	StringAttributeVO fontName;
	IntegerAttributeVO fontSize;
	IntegerAttributeVO applicationRefreshTime;
	
	public BooleanAttributeVO getShowAllGreenApplications() {
		return showAllGreenApplications;
	}
	public void setShowAllGreenApplications(
			BooleanAttributeVO showAllGreenApplications) {
		this.showAllGreenApplications = showAllGreenApplications;
	}
	public StringAttributeVO getFontName() {
		return fontName;
	}
	public void setFontName(StringAttributeVO fontName) {
		this.fontName = fontName;
	}
	public IntegerAttributeVO getFontSize() {
		return fontSize;
	}
	public void setFontSize(IntegerAttributeVO fontSize) {
		this.fontSize = fontSize;
	}
	public IntegerAttributeVO getApplicationRefreshTime() {
		return applicationRefreshTime;
	}
	public void setApplicationRefreshTime(IntegerAttributeVO applicationRefreshTime) {
		this.applicationRefreshTime = applicationRefreshTime;
	}
}
