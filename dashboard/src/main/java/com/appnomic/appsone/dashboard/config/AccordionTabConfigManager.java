package com.appnomic.appsone.dashboard.config;

import com.appnomic.appsone.dashboard.config.entity.ConfigEntity;
import com.appnomic.appsone.dashboard.config.entity.TabListEntity;
import com.google.gson.Gson;

public class AccordionTabConfigManager implements ConfigManager {

	private static final AccordionTabConfigManager agcm = new AccordionTabConfigManager();
	private static final Gson gson = new Gson();
	private static final String classKey = TabListEntity.class.getName();
	
	private AccordionTabConfigManager() {		
	}
	
	public static final AccordionTabConfigManager getInstance() {
		return agcm;
	}

	public TabListEntity getConfig() {
		TabListEntity tle = null;
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			System.out.println("retrieving: key = " + classKey);
			String json = instance.read(classKey);
			if(json==null) {
				DefaultTableCreator.createAccordionTabDefaultConfig();
				json = instance.read(classKey);
			}
			tle = gson.fromJson(json, TabListEntity.class);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return tle;
	}
	
	public boolean saveConfig(TabListEntity tabList) {
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			String json = gson.toJson(tabList);
			System.out.println("saving: key = " + classKey + " value = " + json);
			instance.write(classKey, json);
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		} 
		return true;
	}

	public boolean saveConfig(ConfigEntity configEntity) {
		// TODO Auto-generated method stub
		return false;
	}

}
