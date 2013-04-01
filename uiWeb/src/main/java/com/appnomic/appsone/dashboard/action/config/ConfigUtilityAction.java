package com.appnomic.appsone.dashboard.action.config;

import java.util.Map;

import com.appnomic.appsone.config.entity.LinksListEntity;
import com.appnomic.appsone.dashboard.action.AbstractAction;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

@ParentPackage("json-default")
@Namespace("/config")
public class ConfigUtilityAction extends AbstractAction {

	private LinksListEntity.LinkEntity[] linkEntityList;
	private Map<String, String[]> param;

	public LinksListEntity.LinkEntity[] getLinkEntityList() {
		return linkEntityList;
	}

	public void setLinkEntityList(LinksListEntity.LinkEntity[] linkEntityList) {
		this.linkEntityList = linkEntityList;
	}

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	@Action(value="/config/links", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,agcVO,levelDbMap",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String pagesAction() {
		param = getParameters();

        /*LinksListEntity configPLE = UtilityAction.getPageListEntity(userUuid);
        linkEntityList = configPLE.getLinkEntity();*/

        // ToDo: The below code is temporary - remove it once the persistence stuff starts working
        linkEntityList = LinksListEntity.getDefaultConfigPageEntity().getLinkEntity();

        return SUCCESS;
	}
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////

	public static Integer getInteger(String name, Map<String, String[]> parameters) {
		Integer myint = null;
		try {
			myint = Integer.parseInt(parameters.get(name)[0]);
		} catch(Exception e) {
			//e.printStackTrace();
		}
		return myint;
	}
	
	public static Boolean getBoolean(String name, Map<String, String[]> parameters) {
		Boolean mybool = null;
		try {
			mybool = Boolean.parseBoolean(parameters.get(name)[0]);
		} catch(Exception e) {
			//e.printStackTrace();
		}
		return mybool;
	}
}
