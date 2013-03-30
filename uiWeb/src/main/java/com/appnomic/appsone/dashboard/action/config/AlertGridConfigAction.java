package com.appnomic.appsone.dashboard.action.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.appnomic.appsone.config.entity.ApplicationAlertsGrid;
import com.appnomic.appsone.config.entity.UserConfigEntity;
import com.appnomic.appsone.config.persistence.Persistence;
import com.appnomic.appsone.dashboard.action.AbstractAction;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.domainobject.ApplicationData;
import com.appnomic.service.ApplicationDataService;

@ParentPackage("json-default")
@Namespace("/config")
public class AlertGridConfigAction extends AbstractAction {

	private Map<String, String[]> param;
	private ApplicationAlertsGrid age;
	private ApplicationDataService applicationDataService;
	
	public ApplicationDataService getApplicationDataService() {
		return applicationDataService;
	}

	public void setApplicationDataService(
			ApplicationDataService applicationDataService) {
		this.applicationDataService = applicationDataService;
	}

	public ApplicationAlertsGrid getAge() {
		return age;
	}

	public void setAge(ApplicationAlertsGrid age) {
		this.age = age;
	}

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////
	
	@Action(value="/config/alertGridDetailsRetrieve", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,agcVO,applicationDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String alertGridDetailsRetrieveAction() {
		param = getParameters();

        /*
            1. first get the object with default values set
         */
		age = ApplicationAlertsGrid.getDefaultConfig();

        /*
            2. check if the given user has an already persisted config object
            if so, then use those fields to create the 'age' object
         */
        Persistence persistence = new Persistence();
        String json = persistence.get(userUuid);
        UserConfigEntity uce = gson.fromJson(json, UserConfigEntity.class);
        //String tabListObjectUuid = uce.getUuidMap().get("");
        //.get(ActionConstants.NOC.APPLICATION_ALERTS.name());
        //json = persistence.get(tabListObjectUuid);

        /*
            3. Set the runtime fields of the 'age' object
         */
        List<ApplicationData> applications = applicationDataService.getAll();
		List<String> allApplications = new ArrayList<String>();
		for(ApplicationData application: applications) {
			allApplications.add(application.getName());
		}
		age.setAllApplications(allApplications.toArray(new String[allApplications.size()]));


		return SUCCESS;
	}
	
	@Action(value="/config/alertGridDetailsSave", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,age,agcVO,applicationDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String alertGridDetailsSaveAction() {
		param = getParameters();
		
		/*Integer refreshTime = ConfigUtilityAction.getInteger("refreshTime", param);
		Integer fontSize = ConfigUtilityAction.getInteger("fontSize", param);
		Boolean showGreenApp = ConfigUtilityAction.getBoolean("showGreenApp", param);
		String fontName = (parameters.get("fontName")[0]);
		String [] applicationArray = parameters.get("applications");
		
		AlertGridConfigManager agcm = AlertGridConfigManager.getInstance();
		age = (AlertGridEntity)agcm.getConfig();
		AlertGridEntity newAge =  new AlertGridEntity();
		
		if(fontName != null) {
			newAge.setFontName(new StringAttribute("Arial", "Arial", fontName));
		} else {
			newAge.setFontName(age.getFontName());
		}
		
		if(fontSize != null) {
			newAge.setFontSize(new IntegerAttribute(12, 12, fontSize));	
		} else {
			newAge.setFontSize(age.getFontSize());
		}
		
		if(showGreenApp != null) {
			newAge.setShowAllGreenApplications(new BooleanAttribute(true, true, showGreenApp));
		} else {
			newAge.setShowAllGreenApplications(age.getShowAllGreenApplications());
		}
		
		if(refreshTime != null) {
			newAge.setApplicationRefreshTime(new IntegerAttribute(60,60,refreshTime));
		} else {
			newAge.setApplicationRefreshTime(age.getApplicationRefreshTime());
		}
		
		newAge.setApplicationNames(new StringArrayAttribute(null, null, applicationArray));
		
		agcm.saveConfig(newAge);  */

		return SUCCESS;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////
	
}
