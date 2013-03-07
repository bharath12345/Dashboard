package com.appnomic.appsone.dashboard.action.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.appsone.dashboard.action.AbstractNocAction;
import com.appnomic.appsone.dashboard.config.AlertGridConfigManager;
import com.appnomic.appsone.dashboard.config.ConfigType;
import com.appnomic.appsone.dashboard.config.LevelDBManager;
import com.appnomic.appsone.dashboard.config.attribute.*;
import com.appnomic.appsone.dashboard.config.entity.AlertGridEntity;
import com.appnomic.appsone.dashboard.viewobject.config.AlertGridConfigVO;
import com.appnomic.appsone.dashboard.viewobject.config.PageListVO;
import com.appnomic.appsone.dashboard.viewobject.config.TabListVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.BooleanAttributeVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.IntegerAttributeVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.StringAttributeVO;

@ParentPackage("json-default")
@Namespace("/config")
public class ConfigUtilityAction extends AbstractNocAction {

	private PageListVO [] pageListVO;
	private TabListVO [] tabListVO;
	private Map<String, String[]> param;
	private Map<String, String> levelDbMap;
	
	private enum ACCTYPE {
		GRID,
		WIZARD,
	}
	
	public Map<String, String> getLevelDbMap() {
		return levelDbMap;
	}

	public void setLevelDbMap(Map<String, String> levelDbMap) {
		this.levelDbMap = levelDbMap;
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

	public TabListVO[] getTabListVO() {
		return tabListVO;
	}

	public void setTabListVO(TabListVO[] tabListVO) {
		this.tabListVO = tabListVO;
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
		List<PageListVO> pageList = new ArrayList<PageListVO>();
		
		PageListVO pageListVO = new PageListVO();
		pageListVO.setName("Alerts Grid");
		pageListVO.setId(0);
		pageListVO.setType(ACCTYPE.GRID.name());
		pageList.add(pageListVO);
		
		pageListVO = new PageListVO();
		pageListVO.setName("Clusters Grid");
		pageListVO.setId(1);
		pageListVO.setType(ACCTYPE.GRID.name());
		pageList.add(pageListVO);
		
		pageListVO = new PageListVO();
		pageListVO.setName("Transactions Grid");
		pageListVO.setId(2);
		pageListVO.setType(ACCTYPE.GRID.name());
		pageList.add(pageListVO);
		
		pageListVO = new PageListVO();
		pageListVO.setName("Topology View");
		pageListVO.setId(3);
		pageListVO.setType(ACCTYPE.GRID.name());
		pageList.add(pageListVO);
		
		pageListVO = new PageListVO();
		pageListVO.setName("Global Config");
		pageListVO.setId(4);
		pageListVO.setType(ACCTYPE.GRID.name());
		pageList.add(pageListVO);
		
		PageListVO [] pageArray = pageList.toArray(new PageListVO[pageList.size()]);
		return pageArray;
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////

	@Action(value="/dashboard/panes", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,agcVO,levelDbMap",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String allconfig() {
		param = getParameters();
		
		List<TabListVO> tabList = new ArrayList<TabListVO>();
		
		TabListVO tabListObj = new TabListVO();
		tabListObj.setName("topology");
		tabListObj.setLabel("Topology Views");
		tabListObj.setId(0);
		tabListObj.setAction("topology/topology.action");
		tabList.add(tabListObj);
		
		tabListObj = new TabListVO();
		tabListObj.setName("noc");
		tabListObj.setLabel("Command Center Screens");
		tabListObj.setId(1);
		tabListObj.setAction("config/pages.action"); // just for now
		tabList.add(tabListObj);
		
		tabListObj = new TabListVO();
		tabListObj.setName("alerts");
		tabListObj.setLabel("Alerts");
		tabListObj.setId(2);
		tabListObj.setAction("dashboard/alerts.action");
		tabList.add(tabListObj);
		
		tabListObj = new TabListVO();
		tabListObj.setName("configurableDashboard");
		tabListObj.setLabel("Configurable Dashboards");
		tabListObj.setId(3);
		tabListObj.setAction("dashboard/configurableDashboard.action");
		tabList.add(tabListObj);
		
		tabListObj = new TabListVO();
		tabListObj.setName("config");
		tabListObj.setLabel("Configuration");
		tabListObj.setId(4);
		tabListObj.setAction("config/pages.action");
		tabList.add(tabListObj);
		
		tabListVO = tabList.toArray(new TabListVO[tabList.size()]);
		
		return SUCCESS;
	}
	
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
