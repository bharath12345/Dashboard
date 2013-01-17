package com.appnomic.noc.availability;

import java.util.ArrayList;
import java.util.Map;

import org.apache.struts2.interceptor.ParameterAware;

import com.opensymphony.xwork2.Action;

//import org.apache.struts2.convention.annotation.Action;
//import org.apache.struts2.convention.annotation.Actions;
//import org.apache.struts2.convention.annotation.Result;
//import org.apache.struts2.convention.annotation.Results;
//import org.apache.struts2.dispatcher.ServletDispatcherResult;


/*
 * This action always retrieves the 'Meta' for the Grid to be displayed
 * The retrieved data is sent back to client as JSON - refer to the XML to find json there
 * Note: there is NO Query parameter here. The exact meta to send back is configured by the user in a 
 * separate configuration console. So this Action gets input from that configuration
 */

//@Results({
//	  @Result(name="SUCCESS", location="/availability/AvailabilityMeta.jsp")
//	})

public class AvailabilityDataComponentAction implements ParameterAware {
	
	private ComponentData componentData;
	private Map<String, String[]> parameters;
	
	public ComponentData getComponentData() {
		return componentData;
	}

	public void setComponentData(ComponentData componentData) {
		this.componentData = componentData;
	}

	public AvailabilityDataComponentAction() {
		setDummyData();
	}
	
	public void setParameters(Map<String, String[]> parameters) {
		this.parameters = parameters;
	}

	public Map<String, String[]> getParameters() {
		return this.parameters;
	}
	
	public void setDummyData() {
		componentData = new ComponentData();
		componentData.setInstanceName("ComponentX");
		
		int clusterCount = 3;
		ClusterTimes [] clusterTimes = new ClusterTimes[clusterCount];
		componentData.setTimes(clusterTimes);
		for(int i=0;i<clusterCount;i++) {
			clusterTimes[i] = new ClusterTimes();
			clusterTimes[i].setTime("10:10");
			
			int clusterDataPoints = 2;
			ClusterDataPoint [] clusterDataPoint = new ClusterDataPoint[clusterDataPoints];
			clusterTimes[i].setCluster(clusterDataPoint);
			
			for(int j=0;j<clusterDataPoints;j++) {
				clusterDataPoint[j] = new ClusterDataPoint();
				clusterDataPoint[j].setName("ClusterX");
				clusterDataPoint[j].setValue(j);//in this dummy sample, j is only 0/1
			}
		}
		
	}

	public String execute() {
		return Action.SUCCESS;
	}

}
