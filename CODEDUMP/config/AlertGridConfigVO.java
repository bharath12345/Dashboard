package config;

import config.base.BooleanAttributeVO;
import config.base.IntegerAttributeVO;
import config.base.StringArrayAttributeVO;
import config.base.StringAttributeVO;

public class AlertGridConfigVO {

	BooleanAttributeVO showAllGreenApplications;
	StringAttributeVO fontName;
	IntegerAttributeVO fontSize;
	IntegerAttributeVO applicationRefreshTime;
	StringArrayAttributeVO applications;
	
	public StringArrayAttributeVO getApplications() {
		return applications;
	}
	public void setApplications(StringArrayAttributeVO applications) {
		this.applications = applications;
	}
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
