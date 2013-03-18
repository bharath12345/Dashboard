package com.appnomic.appsone.dashboard.config;

import com.appnomic.appsone.dashboard.config.entity.AlertsPageListEntity;
import com.appnomic.appsone.dashboard.config.entity.ConfigEntity;
import com.appnomic.appsone.dashboard.config.entity.ConfigPageListEntity;
import com.appnomic.appsone.dashboard.config.entity.PageListEntity;
import com.appnomic.appsone.dashboard.config.entity.TopologyPageListEntity;
import com.appnomic.appsone.dashboard.config.entity.CustomPageListEntity;
import com.appnomic.appsone.dashboard.config.entity.NocPageListEntity;
import com.google.gson.Gson;

public class AccordionPageConfigManager implements ConfigManager {

	private static final AccordionPageConfigManager agcm = new AccordionPageConfigManager();
	private static final Gson gson = new Gson();

	private static final String alertsClassKey = AlertsPageListEntity.class.getName();
	private static final String configClassKey = ConfigPageListEntity.class.getName();
	private static final String topologyClassKey = TopologyPageListEntity.class.getName();
	private static final String customClassKey = CustomPageListEntity.class.getName();
	private static final String nocClassKey = NocPageListEntity.class.getName();
	
	private AccordionPageConfigManager() {		
	}
	
	public static final AccordionPageConfigManager getInstance() {
		return agcm;
	}
	
	////
	
	public AlertsPageListEntity getAlertsPageListEntity() {
		AlertsPageListEntity aple = (AlertsPageListEntity) getConfig(alertsClassKey, AlertsPageListEntity.class);
		if(aple == null) {
			try {
				LevelDBManager instance = LevelDBManager.getInstance();
				DefaultTableCreator.createDefaultAlertsPageEntity();
				String json = instance.read(alertsClassKey);
				aple = gson.fromJson(json, AlertsPageListEntity.class);
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		return aple;
	}
	
	public boolean saveAlertsPageListEntity(AlertsPageListEntity aple) {
		return saveConfig(aple, alertsClassKey);
	}
	
	////
	
	public ConfigPageListEntity getConfigPageListEntity() {
		ConfigPageListEntity aple = (ConfigPageListEntity) getConfig(configClassKey, ConfigPageListEntity.class);
		if(aple == null) {
			try {
				LevelDBManager instance = LevelDBManager.getInstance();
				DefaultTableCreator.createDefaultConfigPageEntity();
				String json = instance.read(configClassKey);
				aple = gson.fromJson(json, ConfigPageListEntity.class);
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		return aple;
	}
	
	public boolean saveConfigPageListEntity(ConfigPageListEntity aple) {
		return saveConfig(aple, configClassKey);
	}

	////
	
	public TopologyPageListEntity getTopologyPageListEntity() {
		TopologyPageListEntity aple = (TopologyPageListEntity) getConfig(topologyClassKey, TopologyPageListEntity.class);
		if(aple == null) {
			try {
				LevelDBManager instance = LevelDBManager.getInstance();
				DefaultTableCreator.createDefaultTopologyPageEntity();
				String json = instance.read(topologyClassKey);
				aple = gson.fromJson(json, TopologyPageListEntity.class);
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		return aple;
	}
	
	public boolean saveTopologyPageListEntity(TopologyPageListEntity aple) {
		return saveConfig(aple, topologyClassKey);
	}

	////
	
	public CustomPageListEntity getCustomPageListEntity() {
		CustomPageListEntity aple = (CustomPageListEntity) getConfig(customClassKey, CustomPageListEntity.class);
		if(aple == null) {
			try {
				LevelDBManager instance = LevelDBManager.getInstance();
				DefaultTableCreator.createDefaultCustomPageEntity();
				String json = instance.read(customClassKey);
				aple = gson.fromJson(json, CustomPageListEntity.class);
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		return aple;
	}
	
	public boolean saveCustomPageListEntity(CustomPageListEntity aple) {
		return saveConfig(aple, customClassKey);
	}

	////
	
	public NocPageListEntity getNocPageListEntity() {
		NocPageListEntity aple = (NocPageListEntity) getConfig(nocClassKey, NocPageListEntity.class);
		if(aple == null) {
			try {
				LevelDBManager instance = LevelDBManager.getInstance();
				DefaultTableCreator.createDefaultNocPageEntity();
				String json = instance.read(nocClassKey);
				aple = gson.fromJson(json, NocPageListEntity.class);
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		return aple;
	}
	
	public boolean saveNocPageListEntity(NocPageListEntity aple) {
		return saveConfig(aple, nocClassKey);
	}
	
	////
	
	public PageListEntity getConfig(String classKey, Class classname) {
		PageListEntity tle = null;
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			System.out.println("retrieving: key = " + classKey);
			String json = instance.read(classKey);
			if(json==null) {
				return tle;
			}
			tle = (PageListEntity)gson.fromJson(json, classname);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return tle;
	}
	
	public boolean saveConfig(PageListEntity pageList, String classKey) {
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			String json = gson.toJson(pageList);
			System.out.println("saving: key = " + classKey + " value = " + json);
			instance.write(classKey, json);
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		} 
		return true;
	}

	public ConfigEntity getConfig() {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean saveConfig(ConfigEntity configEntity) {
		// TODO Auto-generated method stub
		return false;
	}

}
