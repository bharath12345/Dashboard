package com.appnomic.appsone.dashboard.action;

import java.util.HashMap;
import java.util.Map;

import com.appnomic.appsone.config.entity.LinksListEntity;
import com.appnomic.appsone.config.entity.PaneListEntity;
import com.appnomic.appsone.config.entity.UserConfigEntity;
import com.appnomic.appsone.config.persistence.Persistence;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.appsone.common.ActionConstants;

@ParentPackage("json-default")
@Namespace("/utility")
public class UtilityAction extends AbstractAction {

	private PaneListEntity.PaneEntity[] paneList;
	private Map<String, String[]> param;
	Map<String, HashMap<String, Integer>> enumMap = new HashMap<String, HashMap<String, Integer>>();
	
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	public PaneListEntity.PaneEntity[] getPaneList() {
		return paneList;
	}

	public void setPaneList(PaneListEntity.PaneEntity[] paneList) {
		this.paneList = paneList;
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

        /*Persistence persistence = new Persistence();
        String json = persistence.get(userUuid);
        UserConfigEntity uce = gson.fromJson(json, UserConfigEntity.class);

        String tabListObjectUuid = uce.getUuidMap().get(ActionConstants.ACCORDION.PANES.name());

		json = persistence.get(tabListObjectUuid);
        PaneListEntity tle = gson.fromJson(json, PaneListEntity.class);
        paneList = tle.getPaneList();  */

        // ToDo: The below code is temporary - remove it once the persistence stuff starts working
        paneList = PaneListEntity.getDefaultConfig().getPaneList();

		return SUCCESS;
	}
	
	@Action(value="/dashboard/enums", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,agcVO,levelDbMap,paneList",
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
		enumMap.put(ActionConstants.ACCGROUPS.CONFIG.name(), configMap);
		
		////
	
		HashMap<String, Integer> analyticsMap = new HashMap<String, Integer>();
		for(ActionConstants.ANALYTICS config: ActionConstants.ANALYTICS.values()) {
			analyticsMap.put(config.name(), config.ordinal());
		}
		enumMap.put(ActionConstants.ACCGROUPS.ANALYTICS.name(), analyticsMap);
		
		////
		
		HashMap<String, Integer> customMap = new HashMap<String, Integer>();
		for(ActionConstants.CUSTOM config: ActionConstants.CUSTOM.values()) {
			customMap.put(config.name(), config.ordinal());
		}
		enumMap.put(ActionConstants.ACCGROUPS.CUSTOM.name(), customMap);
		
		////
		
		HashMap<String, Integer> topologyMap = new HashMap<String, Integer>();
		for(ActionConstants.TOPOLOGY config: ActionConstants.TOPOLOGY.values()) {
			topologyMap.put(config.name(), config.ordinal());
		}
		enumMap.put(ActionConstants.ACCGROUPS.TOPOLOGY.name(), topologyMap);
		
		////
		
		HashMap<String, Integer> nocMap = new HashMap<String, Integer>();
		for(ActionConstants.NOC config: ActionConstants.NOC.values()) {
			nocMap.put(config.name(), config.ordinal());
		}
		enumMap.put(ActionConstants.ACCGROUPS.NOC.name(), nocMap);
		
		
		return SUCCESS;
	}

    public static LinksListEntity getPageListEntity(String userUuid) {
        Persistence persistence = new Persistence();
        String json = persistence.get(userUuid);
        UserConfigEntity uce = gson.fromJson(json, UserConfigEntity.class);

        /*String tabListObjectUuid = uce.getUuidMap().get(ActionConstants.ACCORDION.LINKS.name());

        json = persistence.get(tabListObjectUuid);
        LinksListEntity ple = gson.fromJson(json, LinksListEntity.class);
        return ple;*/

        return null;
    }
	
}
