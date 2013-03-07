package com.appnomic.noc.config;

import com.appnomic.noc.config.entity.ConfigEntity;

public interface ConfigManager {
	public ConfigEntity getConfig();
	public boolean saveConfig(ConfigEntity configEntity);
}
