package com.appnomic.appsone.ui.extension.transaction.action;

import com.google.gson.Gson;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ParameterAware;
import org.apache.struts2.interceptor.SessionAware;

import java.util.Map;

public abstract class AbstractAction
							extends ActionSupport
							implements ParameterAware, SessionAware, Action {
	
	protected Map<String, String[]> parameters;
	protected Map session;
    protected String userUuid = "";
	
	protected static final String SUCCESS = Action.SUCCESS;
	protected static final String ERROR = Action.ERROR;

    protected static final Gson gson = new Gson();

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

    /*
    ToDo: This should be gotten by the incoming parameters object and NOT like this
     */
    public String getUserUuid() {
        return userUuid;
    }

}
