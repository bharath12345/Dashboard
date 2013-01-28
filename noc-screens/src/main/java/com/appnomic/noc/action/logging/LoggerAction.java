package com.appnomic.noc.action.logging;

import java.util.Map;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;

@ParentPackage("json-default")
@Namespace("/noc")
public class LoggerAction extends AbstractNocAction  {
	
	private Map<String, String[]> param;
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	public LoggerAction() {
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

	@Override
	public void setDummyData() {
		// TODO Auto-generated method stub
	}

}
