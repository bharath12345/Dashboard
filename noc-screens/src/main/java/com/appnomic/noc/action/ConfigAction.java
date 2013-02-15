package com.appnomic.noc.action;

import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.noc.config.AlertGridConfigManager;
import com.appnomic.noc.config.attribute.*;
import com.appnomic.noc.config.entity.AlertGridEntity;
import com.appnomic.noc.viewobject.config.PageListVO;

@ParentPackage("json-default")
@Namespace("/config")
public class ConfigAction extends AbstractNocAction {

	private PageListVO [] pageListVO;
	private Map<String, String[]> param;
	AlertGridEntity age;
	
	public AlertGridEntity getAge() {
		return age;
	}

	public void setAge(AlertGridEntity age) {
		this.age = age;
	}

	public PageListVO[] getPageListVO() {
		return pageListVO;
	}

	public void setPageListVO(PageListVO[] pageListVO) {
		this.pageListVO = pageListVO;
	}

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	@Action(value="/config/pages", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String getPagesAction() {
		param = getParameters();
		pageListVO = getDummyList();
		return SUCCESS;
	}
	
	private PageListVO[] getDummyList() {
		PageListVO[] pageList = new PageListVO[4];
		
		pageList[0] = new PageListVO();
		pageList[0].setName("Alerts Grid");
		pageList[0].setId(0);
		
		pageList[1] = new PageListVO();
		pageList[1].setName("Clusters Grid");
		pageList[1].setId(1);
		
		pageList[2] = new PageListVO();
		pageList[2].setName("Transactions Grid");
		pageList[2].setId(2);
		
		pageList[3] = new PageListVO();
		pageList[3].setName("Topology View");
		pageList[3].setId(3);
		
		return pageList;
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
	@Action(value="/config/getAlertGridDetails", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String getAlertGridDetailsAction() {
		param = getParameters();
		AlertGridConfigManager agcm = AlertGridConfigManager.getInstance();
		age = (AlertGridEntity)agcm.getConfig();
		return SUCCESS;
	}
	
	@Action(value="/config/setAlertGridDetails", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String setAlertGridDetailsAction() {
		param = getParameters();
		AlertGridConfigManager agcm = AlertGridConfigManager.getInstance();
		AlertGridEntity age =  new AlertGridEntity();
		age.setFontName(new StringAttribute(null, null, null));
		age.setFontSize(new IntegerAttribute(0, 0, 0));
		age.setShowAllGreenApplications(new BooleanAttribute(false, false, false));
		agcm.saveConfig(age);
		return SUCCESS;
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
}
