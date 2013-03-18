package com.appnomic.appsone.dashboard.config.entity;

public class TabListEntity extends ConfigEntity{

	TabEntity [] tabList;
	
	public TabEntity[] getTabList() {
		return tabList;
	}

	public void setTabList(TabEntity[] tabList) {
		this.tabList = tabList;
	}

	public class TabEntity {
		String name;
		String label;
		String uuid;
		String action;
		
		public String getUuid() {
			return uuid;
		}
		public void setUuid(String uuid) {
			this.uuid = uuid;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getLabel() {
			return label;
		}
		public void setLabel(String label) {
			this.label = label;
		}
		public String getAction() {
			return action;
		}
		public void setAction(String action) {
			this.action = action;
		}	
	}
}


