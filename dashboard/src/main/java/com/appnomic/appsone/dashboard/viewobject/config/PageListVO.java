package com.appnomic.appsone.dashboard.viewobject.config;

public class PageListVO {

	String name;
	String type;
	String id;
	PageListVO [] pageList;

	public PageListVO[] getPageList() {
		return pageList;
	}

	public void setPageList(PageListVO[] pageList) {
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
