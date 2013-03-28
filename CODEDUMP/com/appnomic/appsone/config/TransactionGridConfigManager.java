package com.appnomic.appsone.config;

import com.appnomic.appsone.config.entity.ConfigEntity;
import com.appnomic.appsone.config.entity.TransactionGridEntity;
import com.google.gson.Gson;

public class TransactionGridConfigManager implements ConfigManager {
	private static final TransactionGridConfigManager tgcm = new TransactionGridConfigManager();
	private static final Gson gson = new Gson();
	private static final String classKey = TransactionGridEntity.class.getName();
	
	private TransactionGridConfigManager() {		
	}
	
	public static final TransactionGridConfigManager getInstance() {
		return tgcm;
	}

	public ConfigEntity getConfig() {
		TransactionGridEntity tge = null;
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			System.out.println("retrieving: key = " + classKey);
			String json = instance.read(classKey);
			if(json==null) {
				DefaultTableCreator.createTransactionGridDefaultConfig();
				json = instance.read(classKey);
			}
			tge = gson.fromJson(json, TransactionGridEntity.class);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		return tge;
	}
	
	public boolean saveConfig(ConfigEntity configEntity) {
		LevelDBManager instance = null;
		try {
			instance = LevelDBManager.getInstance();
			TransactionGridEntity age = (TransactionGridEntity)configEntity;
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
