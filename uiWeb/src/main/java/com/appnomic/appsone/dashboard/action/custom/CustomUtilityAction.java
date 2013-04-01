package com.appnomic.appsone.dashboard.action.custom;

import java.util.Map;

import com.appnomic.appsone.config.entity.LinksListEntity;
import com.appnomic.appsone.dashboard.action.AbstractAction;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

@ParentPackage("json-default")
@Namespace("/custom")
public class CustomUtilityAction extends AbstractAction {

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

	@Action(value="/custom/links", results = {
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

        /*LinksListEntity customPLE = UtilityAction.getPageListEntity(userUuid);
        linkEntityList = customPLE.getLinkEntity();*/

        // ToDo: The below code is temporary - remove it once the persistence stuff starts working
        linkEntityList = LinksListEntity.getDefaultCustomPageEntity().getLinkEntity();


        return SUCCESS;
	}
	
}
