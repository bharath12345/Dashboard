package com.appnomic.appsone.dashboard.action;

import java.util.Map;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;

@ParentPackage("json-default")
@Namespace("/noc")
public class RequestHandlerAction extends AbstractNocAction  {
	
	private Map<String, String[]> param;
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	public RequestHandlerAction() {
	}
	
	@Action(value="/noc/RequestHandler", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "session,SUCCESS,ERROR",
	                "enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		param = getParameters();
		System.out.println("param = " + param);
		return SUCCESS;
	}

}
