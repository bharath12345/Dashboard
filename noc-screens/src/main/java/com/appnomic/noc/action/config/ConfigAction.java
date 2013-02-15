package com.appnomic.noc.action.config;

import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.viewobject.config.PageListVO;

@ParentPackage("json-default")
@Namespace("/config")
public class ConfigAction extends AbstractNocAction {

	private PageListVO [] pageListVO;
	private Map<String, String[]> param;
	
	public PageListVO[] getPageListVO() {
		return pageListVO;
	}

	public void setPageListVO(PageListVO[] pageListVO) {
		this.pageListVO = pageListVO;
	}

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	@Action(value="/config/pages", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String getPagesAction() {
		param = getParameters();
		pageListVO = getDummyList();
		return SUCCESS;
	}
	
	private PageListVO[] getDummyList() {
		PageListVO[] pageList = new PageListVO[4];
		
		pageList[0] = new PageListVO();
		pageList[0].setName("Alerts Grid");
		pageList[0].setId(0);
		
		pageList[1] = new PageListVO();
		pageList[1].setName("Clusters Grid");
		pageList[1].setId(1);
		
		pageList[2] = new PageListVO();
		pageList[2].setName("Transactions Grid");
		pageList[2].setId(2);
		
		pageList[3] = new PageListVO();
		pageList[3].setName("Topology View");
		pageList[3].setId(3);
		
		return pageList;
	}
	
}
