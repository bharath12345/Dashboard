package com.appnomic.appsone.dashboard.config.entity;

public class PageListEntity extends ConfigEntity {

	PageEntity[] pageEntity;

	public PageEntity[] getPageEntity() {
		return pageEntity;
	}

	public void setPageEntity(PageEntity[] pageEntity) {
		this.pageEntity = pageEntity;
	}

	public class PageEntity {

		String name;
		String type;
		String id;
		PageEntity[] pageList;

		public PageEntity[] getPageList() {
			return pageList;
		}

		public void setPageList(PageEntity[] pageList) {
			this.pageList = pageList;
		}

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}

		public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}
	}
}
