package com.appnomic.noc.action.alert;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;

import com.appnomic.dao.AlertsDaoImpl;
import com.appnomic.domainobject.ApplicationData;
import com.appnomic.domainobject.Component;
import com.appnomic.domainobject.ComponentAlertSummary;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.service.ApplicationDataService;
import com.appnomic.service.ComponentDataService;

@ParentPackage("json-default")
@Namespace("/alert")
public class AlertInfoAction extends AbstractNocAction  {
	
	private Map<String, String[]> param;
	
	private AlertsDaoImpl alertsImpl;
	private ComponentDataService componentDataService;
	private ApplicationDataService applicationDataService;
	
	private ApplicationMetaVO applicationMetaVO;
	private ApplicationDataVO applicationDataVO;
	
	private static final String [] metrics = {
			"Static Batch Alerts",
            "Dynamic Batch Alerts",
            "Static Online Alerts",
            "Dynamic Online Alerts",
            "Component Availability Alerts",
            "Component Static Alerts",
            "Component Dynamic Alerts"
            };

	
	public ComponentDataService getComponentDataService() {
		return componentDataService;
	}

	public void setComponentDataService(ComponentDataService componentDataService) {
		this.componentDataService = componentDataService;
	}

	
	public ApplicationDataService getApplicationDataService() {
		return applicationDataService;
	}

	public void setApplicationDataService(
			ApplicationDataService applicationDataService) {
		this.applicationDataService = applicationDataService;
	}

	public AlertsDaoImpl getAlertsImpl() {
		return alertsImpl;
	}

	public void setAlertsImpl(AlertsDaoImpl alertsImpl) {
		this.alertsImpl = alertsImpl;
	}

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	public ApplicationMetaVO getApplicationVO() {
		return applicationMetaVO;
	}

	public void setApplicationVO(ApplicationMetaVO applicationVO) {
		this.applicationMetaVO = applicationVO;
	}

	public AlertInfoAction() {
	}
	
	public String nocAction() {		
		return SUCCESS;
	}
	
	@Action(value="/alert/ApplicationMeta", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "session,SUCCESS,ERROR,alertsImpl,componentDataService,applicationDataService",
	                "enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String applicationAlertMetaAction() {
		param = getParameters();
		
		applicationMetaVO = new ApplicationMetaVO();
		applicationMetaVO.setMetrics(metrics);
		
		List<ApplicationData> allApplications = applicationDataService.getAll();
		String [] applications = new String[allApplications.size()];
		int i = 0;
		for(ApplicationData application : allApplications) {
			applications[i++] = application.getName();
		}
		return SUCCESS;
	}
	
	@Action(value="/alert/ApplicationData", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "session,SUCCESS,ERROR,alertsImpl,componentDataService,applicationDataService",
	                "enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String applicationAlertAction() {
		param = getParameters();
		
		String keyVal = "Application Alert: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		
		String compType = (parameters.get("name")[0]);
		int id = Integer.parseInt(parameters.get("id")[0]);
		System.out.println("component type being assembled = " + compType);
		
		Date currentTime = Calendar.getInstance().getTime();
		Calendar hourBefore = Calendar.getInstance();
		hourBefore.set(Calendar.HOUR_OF_DAY, hourBefore.get(Calendar.HOUR_OF_DAY));
		Date oneHourBeforeTime = hourBefore.getTime();
		
		SimpleDateFormat timeFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		String startTime = timeFormat.format(currentTime);
		String endTime = timeFormat.format(oneHourBeforeTime);
		
		ApplicationData application = applicationDataService.getById(id);
		List<ApplicationData.Component> components = application.getComponents();
		//application.getTransactions();
		
		List<Integer> allids = new ArrayList<Integer>();
		for(ApplicationData.Component component : components) {
			allids.add(component.getId());
		}
		Map<Integer,ComponentAlertSummary> alertSummary = alertsImpl.getAlertsOnComponents(allids, startTime, endTime);
		
		ApplicationDataVO applicationDataVO = new ApplicationDataVO();
		applicationDataVO.setApplicationName(application.getName());
		
		MetricData [] metricDataset = new MetricData[7];
		applicationDataVO.setMetrics(metricDataset);
		
		metricDataset[0] = new MetricData();
		metricDataset[0].setCount(1);
		metricDataset[0].setName(metrics[0]);
		metricDataset[0].setViolated(true);
		
		metricDataset[1] = new MetricData();
		metricDataset[1].setCount(2);
		metricDataset[1].setName(metrics[1]);
		metricDataset[1].setViolated(false);
		
		metricDataset[2] = new MetricData();
		metricDataset[2].setCount(3);
		metricDataset[2].setName(metrics[2]);
		metricDataset[2].setViolated(true);
		
		metricDataset[3] = new MetricData();
		metricDataset[3].setCount(4);
		metricDataset[3].setName(metrics[3]);
		metricDataset[3].setViolated(false);
		
		metricDataset[4] = new MetricData();
		metricDataset[4].setCount(5);
		metricDataset[4].setName(metrics[4]);
		metricDataset[4].setViolated(true);
		
		metricDataset[6] = new MetricData();
		metricDataset[6].setCount(6);
		metricDataset[6].setName(metrics[5]);
		metricDataset[6].setViolated(false);

		metricDataset[7] = new MetricData();
		metricDataset[7].setCount(7);
		metricDataset[7].setName(metrics[6]);
		metricDataset[7].setViolated(true);

		return SUCCESS;
	}

	@Action(value="/alert/Cluster", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "session,SUCCESS,ERROR,alertsImpl,componentDataService,applicationDataService",
	                "enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String clusterAlertAction() {
		param = getParameters();
		
		String keyVal = "Cluster Alert: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		
		String clusterName = (parameters.get("name")[0]);
		System.out.println("cluster name being assembled = " + clusterName);
		
		
		return SUCCESS;
	}
	
	@Action(value="/alert/Instance", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "session,SUCCESS,ERROR,alertsImpl,componentDataService,applicationDataService",
	                "enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String instanceAlertAction() {
		param = getParameters();
		
		String keyVal = "Instance Alert: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		
		String instanceName = (parameters.get("name")[0]);
		System.out.println("instance name being assembled = " + instanceName);
		return SUCCESS;
	}
	
	@Override
	public void setDummyData() {
		// TODO Auto-generated method stub
	}

}
