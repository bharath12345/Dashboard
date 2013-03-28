package com.appnomic.appsone.dashboard.action.config;

import java.util.Map;

import com.appnomic.appsone.dashboard.action.AbstractAction;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;


@ParentPackage("json-default")
@Namespace("/config")public class TopologyConfigAction extends AbstractAction {
	private Map<String, String[]> param;
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	@Action(value="/config/topologyDetailsRetrieve", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyDetailsRetrieveAction() {
		param = getParameters();
		return SUCCESS;
	}
	
	@Action(value="/config/topologyDetailsSave", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyDetailsSaveAction() {
		param = getParameters();
		return SUCCESS;
	}
	
	@Action(value="/config/applicableTopologyDetailsRetrieve", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyDetailsRetriveAction() {
		param = getParameters();
		return SUCCESS;
	}
}
