package com.appnomic.appsone.dashboard.action.custom;

import java.util.Map;

import com.appnomic.appsone.config.entity.LinksListEntity;
import com.appnomic.appsone.dashboard.action.AbstractAction;
import com.appnomic.appsone.dashboard.action.UtilityAction;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

@ParentPackage("json-default")
@Namespace("/custom")
public class CustomUtilityAction extends AbstractAction {

	private LinksListEntity.LinkEntity[] linkListVO;
	private Map<String, String[]> param;
	
	public LinksListEntity.LinkEntity[] getLinkListVO() {
		return linkListVO;
	}

	public void setLinkListVO(LinksListEntity.LinkEntity[] linkListVO) {
		this.linkListVO = linkListVO;
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

        LinksListEntity customPLE = UtilityAction.getPageListEntity(userUuid);
        linkListVO = customPLE.getLinkEntity();

        return SUCCESS;
	}
	
}
