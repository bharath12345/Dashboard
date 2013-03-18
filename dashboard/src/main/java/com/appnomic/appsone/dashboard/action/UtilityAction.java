package com.appnomic.appsone.dashboard.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.appsone.dashboard.action.ActionConstants;
import com.appnomic.appsone.dashboard.action.ActionConstants.ACCORDION;
import com.appnomic.appsone.dashboard.action.noc.AbstractNocAction;
import com.appnomic.appsone.dashboard.config.AccordionTabConfigManager;
import com.appnomic.appsone.dashboard.config.AlertGridConfigManager;
import com.appnomic.appsone.dashboard.config.ConfigType;
import com.appnomic.appsone.dashboard.config.LevelDBManager;
import com.appnomic.appsone.dashboard.config.attribute.*;
import com.appnomic.appsone.dashboard.config.entity.AlertGridEntity;
import com.appnomic.appsone.dashboard.config.entity.PageListEntity;
import com.appnomic.appsone.dashboard.config.entity.TabListEntity;
import com.appnomic.appsone.dashboard.viewobject.config.AlertGridConfigVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.BooleanAttributeVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.IntegerAttributeVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.StringAttributeVO;

@ParentPackage("json-default")
@Namespace("/utility")
public class UtilityAction extends AbstractNocAction {

	private TabListEntity.TabEntity [] tabListVO;
	private Map<String, String[]> param;
	Map<String, HashMap<Integer, String>> enumMap = new HashMap<String, HashMap<Integer, String>>();
	
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	public TabListEntity.TabEntity[] getTabListVO() {
		return tabListVO;
	}

	public void setTabListVO(TabListEntity.TabEntity[] tabListVO) {
		this.tabListVO = tabListVO;
	}

	public Map<String, HashMap<Integer, String>> getEnumMap() {
		return enumMap;
	}

	public void setEnumMap(Map<String, HashMap<Integer, String>> enumMap) {
		this.enumMap = enumMap;
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
	@Action(value="/dashboard/panes", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,agcVO,levelDbMap,enumMap",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String allconfig() {
		param = getParameters();
		
		AccordionTabConfigManager atcm = AccordionTabConfigManager.getInstance();
		
		TabListEntity tle = atcm.getConfig();
		
		tabListVO = tle.getTabList();
		//tabListVO = tabList.toArray(new TabListEntity[tabList.size()]);
		
		return SUCCESS;
	}
	
	@Action(value="/dashboard/enums", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,agcVO,levelDbMap,tabListVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String allenums() {
		param = getParameters();
		
		
		HashMap<Integer, String> configMap = new HashMap<Integer, String>();
		for(ActionConstants.CONFIG config: ActionConstants.CONFIG.values()) {
			configMap.put(config.ordinal(), config.name());
		}
		enumMap.put(ACCORDION.CONFIG.name(), configMap);
		
		////
	
		HashMap<Integer, String> configNocMap = new HashMap<Integer, String>();
		for(ActionConstants.CONFIG_NOC config: ActionConstants.CONFIG_NOC.values()) {
			configNocMap.put(config.ordinal(), config.name());
		}
		enumMap.put(ACCORDION.CONFIG_NOC.name(), configNocMap);
		
		////
	
		HashMap<Integer, String> configTopologyMap = new HashMap<Integer, String>();
		for(ActionConstants.CONFIG_TOPOLOGY config: ActionConstants.CONFIG_TOPOLOGY.values()) {
			configTopologyMap.put(config.ordinal(), config.name());
		}
		enumMap.put(ACCORDION.CONFIG_TOPOLOGY.name(), configTopologyMap);
		
		////
		
		HashMap<Integer, String> alertsMap = new HashMap<Integer, String>();
		for(ActionConstants.ALERTS config: ActionConstants.ALERTS.values()) {
			alertsMap.put(config.ordinal(), config.name());
		}
		enumMap.put(ACCORDION.ALERTS.name(), alertsMap);
		
		////
		
		HashMap<Integer, String> customMap = new HashMap<Integer, String>();
		for(ActionConstants.CUSTOM config: ActionConstants.CUSTOM.values()) {
			customMap.put(config.ordinal(), config.name());
		}
		enumMap.put(ACCORDION.CUSTOM.name(), customMap);
		
		////
		
		HashMap<Integer, String> topologyMap = new HashMap<Integer, String>();
		for(ActionConstants.TOPOLOGY config: ActionConstants.TOPOLOGY.values()) {
			topologyMap.put(config.ordinal(), config.name());
		}
		enumMap.put(ACCORDION.TOPOLOGY.name(), topologyMap);
		
		////
		
		HashMap<Integer, String> nocMap = new HashMap<Integer, String>();
		for(ActionConstants.NOC config: ActionConstants.NOC.values()) {
			nocMap.put(config.ordinal(), config.name());
		}
		enumMap.put(ACCORDION.NOC.name(), nocMap);
		
		
		return SUCCESS;
	}
	
}
