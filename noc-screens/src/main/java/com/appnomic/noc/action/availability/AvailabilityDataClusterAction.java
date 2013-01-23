package com.appnomic.noc.action.availability;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.interceptor.ParameterAware;
import org.apache.struts2.convention.annotation.Action;

import com.appnomic.domainobject.Cluster;
import com.appnomic.domainobject.Host;
import com.appnomic.service.ClusterDataService;
import com.appnomic.service.ComponentDataService;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.action.ActionHelper;
import com.appnomic.noc.action.RequestNameId;
import com.appnomic.noc.viewobject.availability.ClusterDataVO;
import com.appnomic.noc.viewobject.availability.CompInstanceDataPointVO;
import com.appnomic.noc.viewobject.availability.CompInstanceTimesVO;
//import com.opensymphony.xwork2.Action;
import com.google.gson.Gson;

@ParentPackage("json-default")
@Namespace("/availability")
public class AvailabilityDataClusterAction extends AbstractNocAction {
	
	private ClusterDataService clusterDataService;
	
	private ClusterDataVO clusterData;
	
	private String clusterName;

	public ClusterDataVO getClusterData() {
		return clusterData;
	}

	public void setClusterData(ClusterDataVO clusterData) {
		this.clusterData = clusterData;
	}

	public AvailabilityDataClusterAction() {
		setDummyData();
	}
	
	public void setDummyData() {
		clusterData = new ClusterDataVO();
		clusterData.setInstanceName("ClusterX");
		
		int hostCount = 3;
		CompInstanceTimesVO [] hostTimes = new CompInstanceTimesVO[hostCount]; // cluster has 2 hosts
		clusterData.setTimes(hostTimes);
		
		for(int i=0;i<hostCount;i++) {
			hostTimes[i] = new CompInstanceTimesVO();
			hostTimes[i].setTime("10:10");
			
			int hostDataPoints = 2;
			CompInstanceDataPointVO [] hostDataPoint = new CompInstanceDataPointVO[hostDataPoints];
			hostTimes[i].setInstances(hostDataPoint);
			
			for(int j=0;j<hostDataPoints;j++) {
				hostDataPoint[j] = new CompInstanceDataPointVO();
				hostDataPoint[j].setName("HostX");
				hostDataPoint[j].setValue(j); // in this dummy sample, j is just 0/1
			}
		}
	}

	@Action(value="/availability/ClusterData", results = {
	        @Result(name="success", type="json", params = {
	                "excludeProperties",
	                "parameters,session,SUCCESS,ERROR,clusterDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	         })
	})
	public String nocAction() {
		RequestNameId rn = ActionHelper.getRequestName(getParameters());		
		Cluster clusters = clusterDataService.getById(Integer.parseInt(rn.getName()));
		
		
		return SUCCESS;
	}

	public ClusterDataService getClusterDataService() {
		return clusterDataService;
	}

	public void setClusterDataService(ClusterDataService clusterDataService) {
		this.clusterDataService = clusterDataService;
	}

}
