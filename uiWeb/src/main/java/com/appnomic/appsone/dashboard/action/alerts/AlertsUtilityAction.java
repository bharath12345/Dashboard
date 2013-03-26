package com.appnomic.appsone.dashboard.action.alerts;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.appsone.config.entity.AlertGridEntity;
import com.appnomic.appsone.config.entity.AlertsPageListEntity;
import com.appnomic.appsone.config.entity.PageListEntity;
import com.appnomic.appsone.config.entity.TabListEntity;
import com.appnomic.appsone.common.ActionConstants;
import com.appnomic.appsone.dashboard.action.noc.AbstractNocAction;
import com.appnomic.appsone.config.AccordionPageConfigManager;
import com.appnomic.appsone.config.AlertGridConfigManager;
import com.appnomic.appsone.config.ConfigType;
import com.appnomic.appsone.config.LevelDBManager;
import com.appnomic.appsone.config.attribute.*;
import com.appnomic.appsone.dashboard.viewobject.config.AlertGridConfigVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.BooleanAttributeVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.IntegerAttributeVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.StringAttributeVO;

@ParentPackage("json-default")
@Namespace("/alerts")
public class AlertsUtilityAction extends AbstractNocAction {

	private PageListEntity.PageEntity [] pageListVO;
	private Map<String, String[]> param;
	
	public PageListEntity.PageEntity[] getPageListVO() {
		return pageListVO;
	}

	public void setPageListVO(PageListEntity.PageEntity[] pageListVO) {
		this.pageListVO = pageListVO;
	}

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	@Action(value="/alerts/pages", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,agcVO,levelDbMap",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String pagesAction() {
		param = getParameters();
		
		AccordionPageConfigManager accordionPageConfigManager = AccordionPageConfigManager.getInstance();
		AlertsPageListEntity aple = accordionPageConfigManager.getAlertsPageListEntity();
		pageListVO = aple.getPageEntity();
		return SUCCESS;
	}
	
}
