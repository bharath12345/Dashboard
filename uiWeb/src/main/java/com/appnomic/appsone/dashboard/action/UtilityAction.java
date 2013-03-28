package com.appnomic.appsone.dashboard.action;

import java.util.HashMap;
import java.util.Map;

import com.appnomic.appsone.config.entity.UserConfigEntity;
import com.appnomic.appsone.config.persistence.Persistence;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.appsone.config.entity.TabListEntity;
import com.appnomic.appsone.common.ActionConstants;
import com.appnomic.appsone.common.ActionConstants.ACCORDION;

@ParentPackage("json-default")
@Namespace("/utility")
public class UtilityAction extends AbstractAction {

	private TabListEntity.TabEntity [] tabListVO;
	private Map<String, String[]> param;
	Map<String, HashMap<String, Integer>> enumMap = new HashMap<String, HashMap<String, Integer>>();
	
	
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

	public Map<String, HashMap<String, Integer>> getEnumMap() {
		return enumMap;
	}

	public void setEnumMap(Map<String, HashMap<String, Integer>> enumMap) {
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

        Persistence persistence = new Persistence();
        String json = persistence.get(userUuid);
        UserConfigEntity uce = gson.fromJson(json, UserConfigEntity.class);

        String tabListObjectUuid = uce.getUuidMap().get(ActionConstants.ACCORDION.PANES.name());

		json = persistence.get(tabListObjectUuid);//tle.getTabList();
        TabListEntity tle = gson.fromJson(json, TabListEntity.class);
        tabListVO = tle.getTabList();

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
		
		
		HashMap<String, Integer> configMap = new HashMap<String, Integer>();
		for(ActionConstants.CONFIG config: ActionConstants.CONFIG.values()) {
			configMap.put(config.name(), config.ordinal());
		}
		enumMap.put(ACCORDION.CONFIG.name(), configMap);
		
		////
	
		HashMap<String, Integer> alertsMap = new HashMap<String, Integer>();
		for(ActionConstants.ALERTS config: ActionConstants.ALERTS.values()) {
			alertsMap.put(config.name(), config.ordinal());
		}
		enumMap.put(ACCORDION.ALERTS.name(), alertsMap);
		
		////
		
		HashMap<String, Integer> customMap = new HashMap<String, Integer>();
		for(ActionConstants.CUSTOM config: ActionConstants.CUSTOM.values()) {
			customMap.put(config.name(), config.ordinal());
		}
		enumMap.put(ACCORDION.CUSTOM.name(), customMap);
		
		////
		
		HashMap<String, Integer> topologyMap = new HashMap<String, Integer>();
		for(ActionConstants.TOPOLOGY config: ActionConstants.TOPOLOGY.values()) {
			topologyMap.put(config.name(), config.ordinal());
		}
		enumMap.put(ACCORDION.TOPOLOGY.name(), topologyMap);
		
		////
		
		HashMap<String, Integer> nocMap = new HashMap<String, Integer>();
		for(ActionConstants.NOC config: ActionConstants.NOC.values()) {
			nocMap.put(config.name(), config.ordinal());
		}
		enumMap.put(ACCORDION.NOC.name(), nocMap);
		
		
		return SUCCESS;
	}
	
}
