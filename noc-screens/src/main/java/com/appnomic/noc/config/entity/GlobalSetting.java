package com.appnomic.noc.config.entity;

import java.util.List;

import com.appnomic.noc.config.attribute.*;

public class GlobalSetting {

	List<IntegerAttribute> screenList;
	IntegerAttribute screenRefreshTime;
	
	public List<IntegerAttribute> getScreenList() {
		return screenList;
	}
	public void setScreenList(List<IntegerAttribute> screenList) {
		this.screenList = screenList;
	}
	public IntegerAttribute getScreenRefreshTime() {
		return screenRefreshTime;
	}
	public void setScreenRefreshTime(IntegerAttribute screenRefreshTime) {
		this.screenRefreshTime = screenRefreshTime;
	}
	
}
