package com.appnomic.appsone.config;

import com.appnomic.appsone.config.entity.ConfigEntity;

public interface ConfigManager {
	public ConfigEntity getConfig();
	public boolean saveConfig(ConfigEntity configEntity);
}
