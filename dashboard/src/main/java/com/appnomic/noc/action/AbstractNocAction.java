package com.appnomic.noc.action;

import java.util.Map;

import org.apache.struts2.interceptor.ParameterAware;
import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;

public abstract class AbstractNocAction 
							extends ActionSupport 
							implements ParameterAware, SessionAware, Action {
	
	protected Map<String, String[]> parameters;
	protected Map session;
	
	protected static final String SUCCESS = Action.SUCCESS;
	protected static final String ERROR = Action.ERROR;
	
	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

	public void setParameters(Map<String, String[]> parameters) {
		this.parameters = parameters;
	}

	public Map<String, String[]> getParameters() {
		return this.parameters;
	}
}
