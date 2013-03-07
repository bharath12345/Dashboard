package com.appnomic.appsone.dashboard.action;

import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;


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
		
		Set<String> keys = parameters.keySet();
		//String severity = (parameters.get("severity")[0]);
		
		String message = keys.toArray(new String[keys.size()])[0];
		System.out.println(message);
		LOGGER.log(Level.INFO, message);
		
		/*if(severity.equalsIgnoreCase(Level.SEVERE.toString())) {
			LOGGER.log(Level.SEVERE, classname + " " + message);
		} else if(severity.equalsIgnoreCase(Level.INFO.toString())) {
			LOGGER.log(Level.INFO, classname + " " + message);
		} else {
			LOGGER.log(Level.FINE, classname + " " + message);
		}*/
		
		return SUCCESS;
	}

}
