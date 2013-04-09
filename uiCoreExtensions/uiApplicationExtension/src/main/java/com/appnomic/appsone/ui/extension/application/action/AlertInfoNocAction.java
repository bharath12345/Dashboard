package com.appnomic.appsone.ui.extension.application.action;

import com.appnomic.appsone.ui.extension.application.viewobject.ApplicationDataVO;
import com.appnomic.appsone.ui.extension.application.viewobject.MetricData;
import com.appnomic.domainobject.AlertCountSummary;
import com.appnomic.domainobject.AlertCountSummary.SUMMARY_CATEGORY;
import com.appnomic.domainobject.AlertSeverity;
import com.appnomic.exception.InvalidTimeIntervalException;
import com.appnomic.service.AlertDataService;
import com.appnomic.service.ApplicationDataService;
import com.appnomic.service.ComponentDataService;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import com.appnomic.appsone.common.TimeUtility;

import java.util.Map;
import java.util.Random;

@ParentPackage("json-default")
public class AlertInfoNocAction extends AbstractAction {
	
	private Map<String, String[]> param;
	
	private AlertDataService alertDataService;
	private ComponentDataService componentDataService;
	private ApplicationDataService applicationDataService;
	
	private ApplicationDataVO applicationDataVO;
	
	private Random rand;
	private static final int min = 0, max = 100;
	
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

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	public ApplicationDataVO getApplicationDataVO() {
		return applicationDataVO;
	}

	public void setApplicationDataVO(ApplicationDataVO applicationDataVO) {
		this.applicationDataVO = applicationDataVO;
	}

	public AlertInfoNocAction() {
	}
	
	public String nocAction() {		
		return SUCCESS;
	}

	public AlertDataService getAlertDataService() {
		return alertDataService;
	}

	public void setAlertDataService(AlertDataService alertDataService) {
		this.alertDataService = alertDataService;
	}

	private void setDummyApplicationData(String applicationName, ApplicationDataVO applicationDataVO) {
		MetricData [] metricDataset = new MetricData[5];
		applicationDataVO.setMetrics(metricDataset);
		applicationDataVO.setApplicationName(applicationName);
	
		metricDataset[0] = getDummyMetricData(SUMMARY_CATEGORY.COMPONENT_ANALYTIC);
		metricDataset[1] = getDummyMetricData(SUMMARY_CATEGORY.COMPONENT_AVAILABILITY);
		metricDataset[2] = getDummyMetricData(SUMMARY_CATEGORY.COMPONENT_STATIC);
		metricDataset[3] = getDummyMetricData(SUMMARY_CATEGORY.TRANSACTION_BATCH_ANALYTIC);
		metricDataset[4] = getDummyMetricData(SUMMARY_CATEGORY.TRANSACTION_ONLINE_ANALYTIC);
	}
	
	private MetricData getDummyMetricData(SUMMARY_CATEGORY category) {
		MetricData metricDataset = new MetricData();
		int [] counts = new int[3];
		rand = new Random();
		counts[0] = rand.nextInt(max - min + 1) + min;
		counts[1] = rand.nextInt(max - min + 1) + min;
		counts[2] = rand.nextInt(max - min + 1) + min;
		metricDataset.setCount(counts);
		metricDataset.setName(category.name());
		return metricDataset;
	}
	
	@Action(value="/ApplicationAlertsForm.action", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "session,SUCCESS,ERROR,alertDataService,componentDataService,applicationDataService,applicationMetaVO",
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
		
		String applicationName = (parameters.get("name")[0]);
		int id = Integer.parseInt(parameters.get("id")[0]);
		System.out.println("application being assembled = " + applicationName + "id = " + id);
		
		applicationDataVO = new ApplicationDataVO();
		
		//String[] startEndTimes = TimeUtility.get5MinStartEnd();
		String[] startEndTimes = TimeUtility.get30MinStartEnd();
		System.out.println("Times = ["+startEndTimes[0] + "] [" + startEndTimes[1] + "]");
		
		MetricData [] metricDataset = new MetricData[5];
		applicationDataVO.setMetrics(metricDataset);
		applicationDataVO.setApplicationName(applicationName);
		applicationDataVO.setApplicaitonId(id);
		
		AlertCountSummary acs = null;
		try {
			acs = alertDataService.getCountSummary(id, startEndTimes[0], startEndTimes[1]);
		} catch (InvalidTimeIntervalException e) {
			e.printStackTrace();
		}
		metricDataset[0] = getMetricData(acs, SUMMARY_CATEGORY.COMPONENT_ANALYTIC);
		metricDataset[1] = getMetricData(acs, SUMMARY_CATEGORY.COMPONENT_AVAILABILITY);
		metricDataset[2] = getMetricData(acs, SUMMARY_CATEGORY.COMPONENT_STATIC);
		metricDataset[3] = getMetricData(acs, SUMMARY_CATEGORY.TRANSACTION_BATCH_ANALYTIC);
		metricDataset[4] = getMetricData(acs, SUMMARY_CATEGORY.TRANSACTION_ONLINE_ANALYTIC);
		
		if(acs == null) {
			System.out.println("Actual alerts were NOT found. Displaying dummy data");
			//setDummyApplicationData(applicationName, applicationDataVO);
			return SUCCESS;
		}
		
		return SUCCESS;
	}
	
	private MetricData getMetricData(AlertCountSummary acs, SUMMARY_CATEGORY category) {
		MetricData metricDataset = new MetricData();
		int [] counts = new int[3];
		if(acs != null) {
			counts[0] = acs.getCount(category, AlertSeverity.HIGH);
			counts[1] = acs.getCount(category, AlertSeverity.MEDIUM);
			counts[2] = acs.getCount(category, AlertSeverity.LOW);
		} else {
			counts[0] = -1;
			counts[1] = -1;
			counts[2] = -1;
		}
		metricDataset.setCount(counts);
		metricDataset.setName(category.name());
		return metricDataset;
	}
}
