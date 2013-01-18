package com.appnomic.noc.action.availability;

import java.util.Map;

import org.apache.struts2.interceptor.ParameterAware;

import com.appnomic.noc.viewobject.availability.ClusterDataPointVO;
import com.appnomic.noc.viewobject.availability.ClusterTimesVO;
import com.appnomic.noc.viewobject.availability.ComponentDataVO;
import com.opensymphony.xwork2.Action;

public class AvailabilityDataComponentAction implements ParameterAware {
	
	private ComponentDataVO componentData;
	private Map<String, String[]> parameters;
	
	public ComponentDataVO getComponentData() {
		return componentData;
	}

	public void setComponentData(ComponentDataVO componentData) {
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
		componentData = new ComponentDataVO();
		componentData.setInstanceName("ComponentX");
		
		int clusterCount = 3;
		ClusterTimesVO [] clusterTimes = new ClusterTimesVO[clusterCount];
		componentData.setTimes(clusterTimes);
		for(int i=0;i<clusterCount;i++) {
			clusterTimes[i] = new ClusterTimesVO();
			clusterTimes[i].setTime("10:10");
			
			int clusterDataPoints = 2;
			ClusterDataPointVO [] clusterDataPoint = new ClusterDataPointVO[clusterDataPoints];
			clusterTimes[i].setCluster(clusterDataPoint);
			
			for(int j=0;j<clusterDataPoints;j++) {
				clusterDataPoint[j] = new ClusterDataPointVO();
				clusterDataPoint[j].setName("ClusterX");
				clusterDataPoint[j].setValue(j);//in this dummy sample, j is only 0/1
			}
		}
		
	}

	public String execute() {
		return Action.SUCCESS;
	}

}
