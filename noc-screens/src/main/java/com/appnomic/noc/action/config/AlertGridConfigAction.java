package com.appnomic.noc.action.config;

import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.config.AlertGridConfigManager;
import com.appnomic.noc.config.ConfigType;
import com.appnomic.noc.config.LevelDBManager;
import com.appnomic.noc.config.attribute.*;
import com.appnomic.noc.config.entity.AlertGridEntity;
import com.appnomic.noc.viewobject.config.AlertGridConfigVO;
import com.appnomic.noc.viewobject.config.PageListVO;
import com.appnomic.noc.viewobject.config.base.BooleanAttributeVO;
import com.appnomic.noc.viewobject.config.base.IntegerAttributeVO;
import com.appnomic.noc.viewobject.config.base.StringAttributeVO;

@ParentPackage("json-default")
@Namespace("/config")
public class AlertGridConfigAction extends AbstractNocAction {

	private Map<String, String[]> param;
	private AlertGridEntity age;
	private AlertGridConfigVO agcVO;
	
	public AlertGridConfigVO getAgcVO() {
		return agcVO;
	}

	public void setAgcVO(AlertGridConfigVO agcVO) {
		this.agcVO = agcVO;
	}

	public AlertGridEntity getAge() {
		return age;
	}

	public void setAge(AlertGridEntity age) {
		this.age = age;
	}

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////
	
	@Action(value="/config/alertGridDetailsRetrieve", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,agcVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String alertGridDetailsRetrieveAction() {
		param = getParameters();
		AlertGridConfigManager agcm = AlertGridConfigManager.getInstance();
		age = (AlertGridEntity)agcm.getConfig();
		return SUCCESS;
	}
	
	@Action(value="/config/alertGridDetailsSave", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,age,agcVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String alertGridDetailsSaveAction() {
		param = getParameters();
		
		Integer refreshTime = ConfigUtilityAction.getInteger("refreshTime", param);
		Integer fontSize = ConfigUtilityAction.getInteger("fontSize", param);
		Boolean showGreenApp = ConfigUtilityAction.getBoolean("showGreenApp", param);
		String fontName = (parameters.get("fontName")[0]);
		
		AlertGridConfigManager agcm = AlertGridConfigManager.getInstance();
		age = (AlertGridEntity)agcm.getConfig();
		AlertGridEntity newAge =  new AlertGridEntity();
		
		if(fontName != null) {
			newAge.setFontName(new StringAttribute("Arial", "Arial", fontName));
		} else {
			newAge.setFontName(age.getFontName());
		}
		
		if(fontSize != null) {
			newAge.setFontSize(new IntegerAttribute(12, 12, fontSize));	
		} else {
			newAge.setFontSize(age.getFontSize());
		}
		
		if(showGreenApp != null) {
			newAge.setShowAllGreenApplications(new BooleanAttribute(true, true, showGreenApp));
		} else {
			newAge.setShowAllGreenApplications(age.getShowAllGreenApplications());
		}
		
		if(refreshTime != null) {
			newAge.setApplicationRefreshTime(new IntegerAttribute(60,60,refreshTime));
		} else {
			newAge.setApplicationRefreshTime(age.getApplicationRefreshTime());
		}
		
		agcm.saveConfig(newAge);
		return SUCCESS;
	}
		
	
	@Action(value="/config/applicableAlertGridDetailsRetrieve", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,age",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String applicableAlertGridDetailsRetriveAction() {
		param = getParameters();
		
		// inspect the param in query to find what level the user is at and form the response accordingly
		// do NOT return the same entity which is persisted but a ViewObject which has values just
		// right for the requesting user and is minimum in size - this object is what will be used by 
		// the dashboard to actually render the UI
		
		AlertGridConfigManager agcm = AlertGridConfigManager.getInstance();
		age = (AlertGridEntity)agcm.getConfig();
		agcVO = new AlertGridConfigVO();
		if(age != null) {
			IntegerAttributeVO appRefreshTime = new IntegerAttributeVO();
			appRefreshTime.setValue(age.getApplicationRefreshTime().getUserSetting());
			agcVO.setApplicationRefreshTime(appRefreshTime);
			
			StringAttributeVO fontName = new StringAttributeVO();
			fontName.setValue(age.getFontName().getUserSetting());
			agcVO.setFontName(fontName);
			
			IntegerAttributeVO fontSize = new IntegerAttributeVO();
			fontSize.setValue(age.getFontSize().getUserSetting());
			agcVO.setFontSize(fontSize);
			
			BooleanAttributeVO showAllGreenApp = new BooleanAttributeVO();
			showAllGreenApp.setValue(age.getShowAllGreenApplications().isUserSetting());
			agcVO.setShowAllGreenApplications(showAllGreenApp);
		}
		
		return SUCCESS;
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
}
