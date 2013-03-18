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
		int enumId;
		String uuid;
		
		PageEntity[] pageList;

		public PageEntity[] getPageList() {
			return pageList;
		}

		public void setPageList(PageEntity[] pageList) {
			this.pageList = pageList;
		}

		public int getEnumId() {
			return enumId;
		}

		public void setEnumId(int enumId) {
			this.enumId = enumId;
		}

		public String getUuid() {
			return uuid;
		}

		public void setUuid(String uuid) {
			this.uuid = uuid;
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
