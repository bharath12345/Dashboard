package com.appnomic.noc.action.alert;

import java.util.Map;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;

import com.appnomic.noc.action.AbstractNocAction;

@ParentPackage("json-default")
@Namespace("/noc")
public class AlertInfoAction extends AbstractNocAction  {
	
	private Map<String, String[]> param;
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	public AlertInfoAction() {
	}
	
	public String nocAction() {		
		return SUCCESS;
	}
	
	@Action(value="/alert/Component", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "session,SUCCESS,ERROR",
	                "enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String componentAlertAction() {
		
		return SUCCESS;
	}

	@Action(value="/alert/Cluster", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "session,SUCCESS,ERROR",
	                "enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String clusterAlertAction() {
		
		return SUCCESS;
	}
	
	@Action(value="/alert/Instance", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "session,SUCCESS,ERROR",
	                "enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String instanceAlertAction() {
		
		return SUCCESS;
	}
	
	@Override
	public void setDummyData() {
		// TODO Auto-generated method stub
	}

}
