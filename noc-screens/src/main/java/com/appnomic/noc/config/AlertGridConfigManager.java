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
		try {
			LevelDBManager.getInstance().init();
			String json = LevelDBManager.getInstance().read(classKey);
			age = gson.fromJson(json, AlertGridEntity.class);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			LevelDBManager.getInstance().shutdown();
		}
		return age;
	}
	
	public boolean saveConfig(ConfigEntity configEntity) {
		try {
			LevelDBManager.getInstance().init();
			AlertGridEntity age = (AlertGridEntity)configEntity;
			LevelDBManager.getInstance().write(classKey, gson.toJson(age));
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			LevelDBManager.getInstance().shutdown();
		}
		return true;
	}
}
