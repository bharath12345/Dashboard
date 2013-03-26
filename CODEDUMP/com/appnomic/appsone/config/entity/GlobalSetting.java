package com.appnomic.appsone.config.entity;

import java.util.List;

import com.appnomic.appsone.config.attribute.*;

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
