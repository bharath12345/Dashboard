package com.appnomic.noc.action;

import java.util.Map;

import org.apache.struts2.interceptor.ParameterAware;

import com.opensymphony.xwork2.Action;

public class RequestHandlerAction extends AbstractNocAction  {
	
	
	public RequestHandlerAction() {
	}
	
	public String execute() {
		return Action.SUCCESS;
	}

}
