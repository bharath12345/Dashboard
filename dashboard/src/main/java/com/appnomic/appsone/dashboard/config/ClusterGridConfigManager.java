package com.appnomic.appsone.dashboard.config;

import com.appnomic.appsone.dashboard.config.entity.ClusterGridEntity;
import com.appnomic.appsone.dashboard.config.entity.ConfigEntity;
import com.google.gson.Gson;

public class ClusterGridConfigManager implements ConfigManager {
	private static final ClusterGridConfigManager agcm = new ClusterGridConfigManager();
	private static final Gson gson = new Gson();
	private static final String classKey = ClusterGridEntity.class.getName();
	
	private ClusterGridConfigManager() {		
	}
	
	public static final ClusterGridConfigManager getInstance() {
		return agcm;
	}

	public ConfigEntity getConfig() {
		ClusterGridEntity age = null;
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			System.out.println("retrieving: key = " + classKey);
			String json = instance.read(classKey);
			if(json==null) {
				DefaultTableCreator.createClusterGridDefaultConfig();
				json = instance.read(classKey);
			}
			age = gson.fromJson(json, ClusterGridEntity.class);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return age;
	}
	
	public boolean saveConfig(ConfigEntity configEntity) {
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			ClusterGridEntity age = (ClusterGridEntity)configEntity;
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
