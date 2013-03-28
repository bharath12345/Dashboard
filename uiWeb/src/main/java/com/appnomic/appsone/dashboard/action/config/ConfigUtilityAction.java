package com.appnomic.appsone.dashboard.action.config;

import java.util.Map;

import com.appnomic.appsone.dashboard.action.AbstractAction;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.appsone.config.entity.PageListEntity;

@ParentPackage("json-default")
@Namespace("/config")
public class ConfigUtilityAction extends AbstractAction {

	private PageListEntity.PageEntity [] pageListVO;
	private Map<String, String[]> param;
	private Map<String, String> levelDbMap;
	
	public Map<String, String> getLevelDbMap() {
		return levelDbMap;
	}

	public void setLevelDbMap(Map<String, String> levelDbMap) {
		this.levelDbMap = levelDbMap;
	}

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
		AccordionPageConfigManager accordionPageConfigManager = AccordionPageConfigManager.getInstance();
		ConfigPageListEntity cple = accordionPageConfigManager.getConfigPageListEntity();
		pageListVO = cple.getPageEntity();
		return SUCCESS;
	}
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////

	public static Integer getInteger(String name, Map<String, String[]> parameters) {
		Integer myint = null;
		try {
			myint = Integer.parseInt(parameters.get(name)[0]);
		} catch(Exception e) {
			//e.printStackTrace();
		}
		return myint;
	}
	
	public static Boolean getBoolean(String name, Map<String, String[]> parameters) {
		Boolean mybool = null;
		try {
			mybool = Boolean.parseBoolean(parameters.get(name)[0]);
		} catch(Exception e) {
			//e.printStackTrace();
		}
		return mybool;
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
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
	
}
