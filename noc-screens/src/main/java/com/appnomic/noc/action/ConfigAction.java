package com.appnomic.noc.action;

import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.noc.config.AlertGridConfigManager;
import com.appnomic.noc.config.ConfigType;
import com.appnomic.noc.config.LevelDBManager;
import com.appnomic.noc.config.attribute.*;
import com.appnomic.noc.config.entity.AlertGridEntity;
import com.appnomic.noc.viewobject.config.AlertGridConfigVO;
import com.appnomic.noc.viewobject.config.BooleanAttributeVO;
import com.appnomic.noc.viewobject.config.IntegerAttributeVO;
import com.appnomic.noc.viewobject.config.PageListVO;
import com.appnomic.noc.viewobject.config.StringAttributeVO;

@ParentPackage("json-default")
@Namespace("/config")
public class ConfigAction extends AbstractNocAction {

	private PageListVO [] pageListVO;
	private Map<String, String[]> param;
	private AlertGridEntity age;
	private AlertGridConfigVO agcVO;
	private Map<String, String> levelDbMap;
	
	public Map<String, String> getLevelDbMap() {
		return levelDbMap;
	}

	public void setLevelDbMap(Map<String, String> levelDbMap) {
		this.levelDbMap = levelDbMap;
	}

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
	                "parameters,session,SUCCESS,ERROR,agcVO,levelDbMap",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String pagesAction() {
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
	
	@Action(value="/config/alertGridDetailsRetrieve", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,agcVO,pageListVO,levelDbMap",
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
	                "parameters,session,SUCCESS,ERROR,age,agcVO,pageListVO,levelDbMap",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String alertGridDetailsSaveAction() {
		param = getParameters();
		
		Integer refreshTime = getInteger("refreshTime");
		Integer fontSize = getInteger("fontSize");
		Boolean showGreenApp = getBoolean("showGreenApp");
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
		
	private Integer getInteger(String name) {
		Integer myint = null;
		try {
			myint = Integer.parseInt(parameters.get(name)[0]);
		} catch(Exception e) {
			//e.printStackTrace();
		}
		return myint;
	}
	
	private Boolean getBoolean(String name) {
		Boolean mybool = null;
		try {
			mybool = Boolean.parseBoolean(parameters.get(name)[0]);
		} catch(Exception e) {
			//e.printStackTrace();
		}
		return mybool;
	}
	
	@Action(value="/config/applicableAlertGridDetailsRetrieve", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,age,pageListVO,levelDbMap",
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
			appRefreshTime.setValue(age.getApplicationRefreshTime().getFactoryReadOnly());
			agcVO.setApplicationRefreshTime(appRefreshTime);
			
			StringAttributeVO fontName = new StringAttributeVO();
			fontName.setValue(age.getFontName().getFactoryReadOnly());
			agcVO.setFontName(fontName);
			
			IntegerAttributeVO fontSize = new IntegerAttributeVO();
			fontSize.setValue(age.getFontSize().getFactoryReadOnly());
			agcVO.setFontSize(fontSize);
			
			BooleanAttributeVO showAllGreenApp = new BooleanAttributeVO();
			showAllGreenApp.setValue(age.getShowAllGreenApplications().isFactoryReadOnly());
			agcVO.setShowAllGreenApplications(showAllGreenApp);
		}
		
		return SUCCESS;
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
	@Action(value="/config/allConfigDump", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,age,agcVO,pageListVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String allConfigDumpAction() {
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			//instance.init();
			levelDbMap = instance.getAllKeyValues();
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			if(instance!=null) {
				//instance.shutdown();
			}
		}
		return SUCCESS;
	}
	
}
