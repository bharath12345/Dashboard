package com.appnomic.noc.availability;

import java.util.Map;

import org.apache.struts2.interceptor.ParameterAware;

import com.opensymphony.xwork2.Action;

public class AvailabilityRequestHandlerAction implements ParameterAware {
	
	private Map<String, String[]> parameters;
	
	public AvailabilityRequestHandlerAction() {
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
