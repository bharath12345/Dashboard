package com.appnomic.noc.action;

import java.util.Map;

import org.apache.struts2.interceptor.ParameterAware;

import com.opensymphony.xwork2.Action;

public class RequestHandlerAction implements ParameterAware {
	
	private Map<String, String[]> parameters;
	
	public RequestHandlerAction() {
	}
	
	public String execute() {
		return Action.SUCCESS;
	}

	public void setParameters(Map<String, String[]> parameters) {
		this.parameters = parameters;
	}

	public Map<String, String[]> getParameters() {
		return this.parameters;
	}
}
