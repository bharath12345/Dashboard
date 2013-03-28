package com.appnomic.appsone.dashboard.action.alerts;

import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.appsone.config.entity.PageListEntity;
import com.appnomic.appsone.dashboard.action.noc.AbstractNocAction;

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
