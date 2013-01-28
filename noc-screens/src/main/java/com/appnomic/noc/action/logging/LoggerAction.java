package com.appnomic.noc.action.logging;

import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;

import com.appnomic.noc.action.AbstractNocAction;

@ParentPackage("json-default")
@Namespace("/logger")
public class LoggerAction extends AbstractNocAction  {
	
	private final static Logger LOGGER = Logger.getLogger(LoggerAction.class.getName()); 
	
	public LoggerAction() {
	}
	
	@Action(value="/logger/Logger", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "session,SUCCESS,ERROR",
	                "enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		String keyVal = "Component Meta Availability: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		
		String severity = (parameters.get("severity")[0]);
		String classname = (parameters.get("classname")[0]);
		String message = (parameters.get("message")[0]);
		
		if(severity.equalsIgnoreCase(Level.SEVERE.toString())) {
			LOGGER.log(Level.SEVERE, classname + " " + message);
		} else if(severity.equalsIgnoreCase(Level.INFO.toString())) {
			LOGGER.log(Level.INFO, classname + " " + message);
		} else {
			LOGGER.log(Level.FINE, classname + " " + message);
		}
		
		return SUCCESS;
	}

	@Override
	public void setDummyData() {
		// TODO Auto-generated method stub
	}

}
