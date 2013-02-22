package com.appnomic.noc.config;

import com.appnomic.noc.config.attribute.BooleanAttribute;
import com.appnomic.noc.config.attribute.IntegerAttribute;
import com.appnomic.noc.config.attribute.StringArrayAttribute;
import com.appnomic.noc.config.attribute.StringAttribute;
import com.appnomic.noc.config.entity.AlertGridEntity;
import com.appnomic.noc.config.entity.ClusterGridEntity;
import com.appnomic.noc.config.entity.TransactionGridEntity;

public class DefaultTableCreator {
	
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
	
	public static void createClusterGridDefaultConfig() {
		ClusterGridEntity cConfig = new ClusterGridEntity();
		
		StringArrayAttribute saa = new StringArrayAttribute(null, null, null);
		cConfig.setClusterNames(saa);
		cConfig.setClusterRefreshTime(new IntegerAttribute(60,60,60));
		cConfig.setAllUserClusters(null);
		
		ClusterGridConfigManager cgcm = ClusterGridConfigManager.getInstance();
		cgcm.saveConfig(cConfig);
		
		System.out.println("Saved default Cluster Grid configuration to LevelDB.");
	}
	
	public static void createTransactionGridDefaultConfig() {
		TransactionGridEntity tConfig = new TransactionGridEntity();
		
		StringArrayAttribute saa = new StringArrayAttribute(null, null, null);
		tConfig.setApplicationNames(saa);
		tConfig.setTransactionNames(saa);
		tConfig.setTransactionRefreshTime(new IntegerAttribute(60,60,60));
		tConfig.setAllUserTransactions(null);
		
		TransactionGridConfigManager tgcm = TransactionGridConfigManager.getInstance();
		tgcm.saveConfig(tConfig);
		
		System.out.println("Saved default Transaction Grid configuration to LevelDB.");
	}
	
}
