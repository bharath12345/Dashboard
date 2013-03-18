package com.appnomic.appsone.dashboard.config;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.appnomic.appsone.dashboard.action.ActionConstants;
import com.appnomic.appsone.dashboard.config.attribute.BooleanAttribute;
import com.appnomic.appsone.dashboard.config.attribute.IntegerAttribute;
import com.appnomic.appsone.dashboard.config.attribute.StringArrayAttribute;
import com.appnomic.appsone.dashboard.config.attribute.StringAttribute;
import com.appnomic.appsone.dashboard.config.entity.AlertGridEntity;
import com.appnomic.appsone.dashboard.config.entity.AlertsPageListEntity;
import com.appnomic.appsone.dashboard.config.entity.ClusterGridEntity;
import com.appnomic.appsone.dashboard.config.entity.ConfigPageListEntity;
import com.appnomic.appsone.dashboard.config.entity.CustomPageListEntity;
import com.appnomic.appsone.dashboard.config.entity.NocPageListEntity;
import com.appnomic.appsone.dashboard.config.entity.PageListEntity;
import com.appnomic.appsone.dashboard.config.entity.TabListEntity;
import com.appnomic.appsone.dashboard.config.entity.TopologyPageListEntity;
import com.appnomic.appsone.dashboard.config.entity.TransactionGridEntity;
import com.appnomic.appsone.dashboard.config.entity.PageListEntity.PageEntity;

public class DefaultTableCreator {

	public static void createAlertGridDefaultConfig() {
		AlertGridEntity newAge = new AlertGridEntity();
		StringArrayAttribute saa = new StringArrayAttribute(null, null, null);
		newAge.setApplicationNames(saa);
		newAge.setFontName(new StringAttribute("Arial", "Arial", "Arial"));
		newAge.setFontSize(new IntegerAttribute(12, 12, 12));
		newAge.setShowAllGreenApplications(new BooleanAttribute(true, true,
				true));
		newAge.setApplicationRefreshTime(new IntegerAttribute(60, 60, 60));

		AlertGridConfigManager agcm = AlertGridConfigManager.getInstance();
		agcm.saveConfig(newAge);

		System.out
				.println("Saved default Alert Grid configuration to LevelDB.");
	}

	public static void createClusterGridDefaultConfig() {
		ClusterGridEntity cConfig = new ClusterGridEntity();

		StringArrayAttribute saa = new StringArrayAttribute(null, null, null);
		cConfig.setClusterNames(saa);
		cConfig.setClusterRefreshTime(new IntegerAttribute(60, 60, 60));
		cConfig.setAllUserClusters(null);

		ClusterGridConfigManager cgcm = ClusterGridConfigManager.getInstance();
		cgcm.saveConfig(cConfig);

		System.out
				.println("Saved default Cluster Grid configuration to LevelDB.");
	}

	public static void createTransactionGridDefaultConfig() {
		TransactionGridEntity tConfig = new TransactionGridEntity();

		StringArrayAttribute saa = new StringArrayAttribute(null, null, null);
		tConfig.setApplicationNames(saa);
		tConfig.setTransactionNames(saa);
		tConfig.setTransactionRefreshTime(new IntegerAttribute(60, 60, 60));
		tConfig.setAllUserTransactions(null);

		TransactionGridConfigManager tgcm = TransactionGridConfigManager
				.getInstance();
		tgcm.saveConfig(tConfig);

		System.out
				.println("Saved default Transaction Grid configuration to LevelDB.");
	}

	public static void createAccordionTabDefaultConfig() {
		List<TabListEntity.TabEntity> tabList = new ArrayList<TabListEntity.TabEntity>();

		TabListEntity tle = new TabListEntity();

		TabListEntity.TabEntity tabListObj = tle.new TabEntity();
		tabListObj.setName("topology");
		tabListObj.setLabel("Topology Views");
		tabListObj.setUuid(UUID.randomUUID().toString());
		tabListObj.setAction("topology/pages.action");
		tabList.add(tabListObj);

		tabListObj = tle.new TabEntity();
		tabListObj.setName("noc");
		tabListObj.setLabel("Command Center Screens");
		tabListObj.setUuid(UUID.randomUUID().toString());
		tabListObj.setAction("noc/pages.action");
		tabList.add(tabListObj);

		tabListObj = tle.new TabEntity();
		tabListObj.setName("alerts");
		tabListObj.setLabel("Alerts");
		tabListObj.setUuid(UUID.randomUUID().toString());
		tabListObj.setAction("alerts/pages.action");
		tabList.add(tabListObj);

		tabListObj = tle.new TabEntity();
		tabListObj.setName("custom");
		tabListObj.setLabel("Customized Layouts");
		tabListObj.setUuid(UUID.randomUUID().toString());
		tabListObj.setAction("custom/pages.action");
		tabList.add(tabListObj);

		tabListObj = tle.new TabEntity();
		tabListObj.setName("config");
		tabListObj.setLabel("Configuration");
		tabListObj.setUuid(UUID.randomUUID().toString());
		tabListObj.setAction("config/pages.action");
		tabList.add(tabListObj);

		tle.setTabList(tabList.toArray(new TabListEntity.TabEntity[tabList
				.size()]));
		AccordionTabConfigManager atcm = AccordionTabConfigManager
				.getInstance();
		atcm.saveConfig(tle);

	}

	public static void createDefaultAlertsPageEntity() {
		AlertsPageListEntity aple = new AlertsPageListEntity();
		List<AlertsPageListEntity.PageEntity> pageList = new ArrayList<AlertsPageListEntity.PageEntity>();

		AlertsPageListEntity.PageEntity pageEntity = aple.new PageEntity();
		pageEntity.setName("Sample Alerts");
		pageEntity.setId(UUID.randomUUID().toString());
		pageEntity.setType(ActionConstants.ACCTYPE.GRID.name());
		pageList.add(pageEntity);

		aple.setPageEntity(pageList.toArray(new AlertsPageListEntity.PageEntity[pageList.size()]));
		AccordionPageConfigManager apcm = AccordionPageConfigManager.getInstance();
		apcm.saveAlertsPageListEntity(aple);
	}

	public static void createDefaultConfigPageEntity() {
		ConfigPageListEntity cple = new ConfigPageListEntity();

		List<ConfigPageListEntity.PageEntity> pageList = new ArrayList<ConfigPageListEntity.PageEntity>();
		
		List<ConfigPageListEntity.PageEntity> dashboardList = new ArrayList<ConfigPageListEntity.PageEntity>();
		ConfigPageListEntity.PageEntity dashboardPageVO = cple.new PageEntity();
		dashboardPageVO.setName("Command Center Screens Configuration");
		dashboardPageVO.setId(UUID.randomUUID().toString());
		dashboardPageVO.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
		pageList.add(dashboardPageVO);

		ConfigPageListEntity.PageEntity pageListVO = cple.new PageEntity();
		pageListVO.setName("Application Alerts Dashboard");
		pageListVO.setId(UUID.randomUUID().toString());
		pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name()); 
		dashboardList.add(pageListVO);

		pageListVO = cple.new PageEntity();
		pageListVO.setName("Transactions Grid");
		pageListVO.setId(UUID.randomUUID().toString());
		pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
		dashboardList.add(pageListVO);

		ConfigPageListEntity.PageEntity[] pageEntityList = dashboardList.toArray(new ConfigPageListEntity.PageEntity[dashboardList.size()]);
		dashboardPageVO.setPageList(pageEntityList);

		// // Topology List

		List<ConfigPageListEntity.PageEntity> topoList = new ArrayList<ConfigPageListEntity.PageEntity>();
		ConfigPageListEntity.PageEntity topoListVO = cple.new PageEntity();
		topoListVO.setName("Topology Configuration");
		topoListVO.setId(UUID.randomUUID().toString());
		topoListVO.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
		pageList.add(topoListVO);

		pageListVO = cple.new PageEntity();
		pageListVO.setName("Application Layers");
		pageListVO.setId(UUID.randomUUID().toString());
		pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
		topoList.add(pageListVO);

		pageListVO = cple.new PageEntity();
		pageListVO.setName("Application Groups and Topology");
		pageListVO.setId(UUID.randomUUID().toString());
		pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
		topoList.add(pageListVO);

		pageListVO = cple.new PageEntity();
		pageListVO.setName("Application Topology");
		pageListVO.setId(UUID.randomUUID().toString());
		pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
		topoList.add(pageListVO);

		pageListVO = cple.new PageEntity();
		pageListVO.setName("Component Topology");
		pageListVO.setId(UUID.randomUUID().toString());
		pageListVO.setType(ActionConstants.ACCTYPE.CONFIGURATION.name());
		topoList.add(pageListVO);

		pageEntityList = topoList.toArray(new ConfigPageListEntity.PageEntity[topoList.size()]);
		topoListVO.setPageList(pageEntityList);
		
		////////
		
		cple.setPageEntity(pageList.toArray(new ConfigPageListEntity.PageEntity[pageList.size()]));
		AccordionPageConfigManager apcm = AccordionPageConfigManager.getInstance();
		apcm.saveConfigPageListEntity(cple);

	}

	public static void createDefaultTopologyPageEntity() {
		TopologyPageListEntity tple = new TopologyPageListEntity();
		List<TopologyPageListEntity.PageEntity> pageList = new ArrayList<TopologyPageListEntity.PageEntity>();

		TopologyPageListEntity.PageEntity pageEntity = tple.new PageEntity();
		pageEntity.setName("Sample Topology");
		pageEntity.setId(UUID.randomUUID().toString());
		pageEntity.setType(ActionConstants.ACCTYPE.TOPOLOGY.name());
		pageList.add(pageEntity);

		tple.setPageEntity(pageList.toArray(new AlertsPageListEntity.PageEntity[pageList.size()]));
		AccordionPageConfigManager apcm = AccordionPageConfigManager.getInstance();
		apcm.saveTopologyPageListEntity(tple);
	}

	public static void createDefaultCustomPageEntity() {
		CustomPageListEntity tple = new CustomPageListEntity();
		List<CustomPageListEntity.PageEntity> pageList = new ArrayList<CustomPageListEntity.PageEntity>();

		CustomPageListEntity.PageEntity pageEntity = tple.new PageEntity();
		pageEntity.setName("Custom Layouts");
		pageEntity.setId(UUID.randomUUID().toString());
		pageEntity.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
		pageList.add(pageEntity);
		
		pageEntity = tple.new PageEntity();
		pageEntity.setName("Custom Views");
		pageEntity.setId(UUID.randomUUID().toString());
		pageEntity.setType(ActionConstants.ACCTYPE.DIRECTORY.name());
		pageList.add(pageEntity);
		
		tple.setPageEntity(pageList.toArray(new CustomPageListEntity.PageEntity[pageList.size()]));
		AccordionPageConfigManager apcm = AccordionPageConfigManager.getInstance();
		apcm.saveCustomPageListEntity(tple);
		
	}

	public static void createDefaultNocPageEntity() {
		NocPageListEntity tple = new NocPageListEntity();
		List<NocPageListEntity.PageEntity> pageList = new ArrayList<NocPageListEntity.PageEntity>();

		NocPageListEntity.PageEntity pageEntity = tple.new PageEntity();
		pageEntity.setName("Application Alerts Dashboard");
		pageEntity.setId(UUID.randomUUID().toString());
		pageEntity.setType(ActionConstants.ACCTYPE.GRID.name());
		pageList.add(pageEntity);
		
		pageEntity = tple.new PageEntity();
		pageEntity.setName("Transactions Grid");
		pageEntity.setId(UUID.randomUUID().toString());
		pageEntity.setType(ActionConstants.ACCTYPE.GRID.name());
		pageList.add(pageEntity);

		tple.setPageEntity(pageList.toArray(new NocPageListEntity.PageEntity[pageList.size()]));
		AccordionPageConfigManager apcm = AccordionPageConfigManager.getInstance();
		apcm.saveNocPageListEntity(tple);
	}

}
