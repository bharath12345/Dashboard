package com.appnomic.noc.action.alert;

import java.util.Map;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;

import com.appnomic.noc.action.AbstractNocAction;

@ParentPackage("json-default")
@Namespace("/alert")
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
		param = getParameters();
		
		String keyVal = "Component Alert: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		
		String compType = (parameters.get("name")[0]);
		System.out.println("component type being assembled = " + compType);
		
		
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
		param = getParameters();
		
		String keyVal = "Cluster Alert: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		
		String clusterName = (parameters.get("name")[0]);
		System.out.println("cluster name being assembled = " + clusterName);
		
		
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
		param = getParameters();
		
		String keyVal = "Instance Alert: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		
		String instanceName = (parameters.get("name")[0]);
		System.out.println("instance name being assembled = " + instanceName);
		return SUCCESS;
	}
	
	@Override
	public void setDummyData() {
		// TODO Auto-generated method stub
	}

}
