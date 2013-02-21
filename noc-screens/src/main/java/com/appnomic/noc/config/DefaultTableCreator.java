package com.appnomic.noc.config;

import com.appnomic.noc.config.attribute.BooleanAttribute;
import com.appnomic.noc.config.attribute.IntegerAttribute;
import com.appnomic.noc.config.attribute.StringAttribute;
import com.appnomic.noc.config.entity.AlertGridEntity;

public class DefaultTableCreator {
	
	public static void createDefaultConfigTables() {
		createAlertGridDefaultConfig();
	}
	
	public static void createAlertGridDefaultConfig() {
		AlertGridEntity newAge =  new AlertGridEntity();
		newAge.setFontName(new StringAttribute("Arial", "Arial", "Arial"));
		newAge.setFontSize(new IntegerAttribute(12, 12, 12));	
		newAge.setShowAllGreenApplications(new BooleanAttribute(true, true, true));
		newAge.setApplicationRefreshTime(new IntegerAttribute(60,60,60));
		
		AlertGridConfigManager agcm = AlertGridConfigManager.getInstance();
		agcm.saveConfig(newAge);
		
		System.out.println("Saved default Alert Grid configuration to LevelDB.");
	}
	
}
