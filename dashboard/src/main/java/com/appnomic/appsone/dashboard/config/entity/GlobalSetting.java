package com.appnomic.appsone.dashboard.config.entity;

import java.util.List;

import com.appnomic.appsone.dashboard.config.attribute.*;

public class GlobalSetting {

	StringAttribute [] screenOrder;
	IntegerAttribute screenRefreshTime;
	
	public IntegerAttribute getScreenRefreshTime() {
		return screenRefreshTime;
	}
	public StringAttribute[] getScreenOrder() {
		return screenOrder;
	}
	public void setScreenOrder(StringAttribute[] screenOrder) {
		this.screenOrder = screenOrder;
	}
	public void setScreenRefreshTime(IntegerAttribute screenRefreshTime) {
		this.screenRefreshTime = screenRefreshTime;
	}
	
}
