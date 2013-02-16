package com.appnomic.noc.config;

import com.appnomic.noc.config.entity.AlertGridEntity;
import com.appnomic.noc.config.entity.ConfigEntity;
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
			instance.init();
			System.out.println("retrieving: key = " + classKey);
			String json = instance.read(classKey);
			if(json!=null) {
				age = gson.fromJson(json, AlertGridEntity.class);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(instance!=null) {
				instance.shutdown();
			}
		}
		return age;
	}
	
	public boolean saveConfig(ConfigEntity configEntity) {
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			instance.init();
			AlertGridEntity age = (AlertGridEntity)configEntity;
			String json = gson.toJson(age);
			System.out.println("saving: key = " + classKey + " value = " + json);
			instance.write(classKey, json);
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			if(instance!=null) {
				instance.shutdown();
			}
		}
		return true;
	}
}
