package com.appnomic.appsone.config;

import com.appnomic.appsone.config.entity.AlertGridEntity;
import com.appnomic.appsone.config.entity.ConfigEntity;
import com.google.gson.Gson;

public class AlertGridConfigManager implements ConfigManager {
	private static final AlertGridConfigManager agcm = new AlertGridConfigManager();
	private static final Gson gson = new Gson();
	private static final String classKey = AlertGridEntity.class.getName();
	
	private AlertGridConfigManager() {		
	}
	
	public static final AlertGridConfigManager getInstance() {
		return agcm;
	}

	public ConfigEntity getConfig() {
		AlertGridEntity age = null;
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			System.out.println("retrieving: key = " + classKey);
			String json = instance.read(classKey);
			if(json==null) {
				DefaultTableCreator.createAlertGridDefaultConfig();
				json = instance.read(classKey);
			}
			age = gson.fromJson(json, AlertGridEntity.class);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return age;
	}
	
	public boolean saveConfig(ConfigEntity configEntity) {
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			AlertGridEntity age = (AlertGridEntity)configEntity;
			String json = gson.toJson(age);
			System.out.println("saving: key = " + classKey + " value = " + json);
			instance.write(classKey, json);
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		} 
		return true;
	}
}
