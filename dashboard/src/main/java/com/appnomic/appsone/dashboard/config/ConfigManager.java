package com.appnomic.appsone.dashboard.config;

import com.appnomic.appsone.dashboard.config.entity.ConfigEntity;

public interface ConfigManager {
	public ConfigEntity getConfig();
	public boolean saveConfig(ConfigEntity configEntity);
}
