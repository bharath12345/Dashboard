package com.appnomic.appsone.dashboard.action.analytics;

import java.util.Map;

import com.appnomic.appsone.config.entity.LinksListEntity;
import com.appnomic.appsone.dashboard.action.AbstractAction;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

@ParentPackage("json-default")
@Namespace("/analytics")
public class AnalyticsUtilityAction extends AbstractAction {

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

	@Action(value="/analytics/links", results = {
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

        /*LinksListEntity alertPLE = UtilityAction.getPageListEntity(userUuid);
        linkEntityList = alertPLE.getLinkEntity();*/

        // ToDo: The below code is temporary - remove it once the persistence stuff starts working
        linkEntityList = LinksListEntity.getDefaultAnalyticsPageEntity().getLinkEntity();

        return SUCCESS;
	}
	
}
