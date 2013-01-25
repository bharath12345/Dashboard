package com.appnomic.noc.action.availability;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.interceptor.ParameterAware;
import org.apache.struts2.convention.annotation.Action;

import com.appnomic.domainobject.Cluster;
import com.appnomic.domainobject.Cluster.ComponentData;
import com.appnomic.domainobject.Host;
import com.appnomic.entity.NormalizedAvailabilityKpi;
import com.appnomic.service.ClusterDataService;
import com.appnomic.service.ComponentDataService;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.request.RequestHelper;
import com.appnomic.noc.request.objects.RequestNameId;
import com.appnomic.noc.viewobject.availability.ClusterDataVO;
import com.appnomic.noc.viewobject.availability.CompInstanceDataPointVO;
import com.appnomic.noc.viewobject.availability.CompInstanceTimesVO;
import com.appnomic.noc.viewobject.availability.KpiDataPointVO;
import com.appnomic.noc.viewobject.availability.KpiTimesVO;
//import com.opensymphony.xwork2.Action;
import com.google.gson.Gson;

@ParentPackage("json-default")
@Namespace("/availability")
public class AvailabilityDataClusterAction extends AbstractNocAction {
	
	private ClusterDataService clusterDataService;
	
	private ClusterDataVO clusterData;
	
	private String clusterName;
	
	private ComponentDataService componentDataService;
	
	public ComponentDataService getComponentDataService() {
		return componentDataService;
	}

	public void setComponentDataService(ComponentDataService componentDataService) {
		this.componentDataService = componentDataService;
	}

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
		
		int instanceCount = 3;
		CompInstanceTimesVO [] instanceTimes = new CompInstanceTimesVO[instanceCount]; // cluster has 2 hosts
		clusterData.setTimes(instanceTimes);
		
		for(int i=0;i<instanceCount;i++) {
			instanceTimes[i] = new CompInstanceTimesVO();
			instanceTimes[i].setTime("10:10");
			
			int instanceDataPoints = 2;
			CompInstanceDataPointVO [] instanceDataPoint = new CompInstanceDataPointVO[instanceDataPoints];
			instanceTimes[i].setInstances(instanceDataPoint);
			
			for(int j=0;j<instanceDataPoints;j++) {
				instanceDataPoint[j] = new CompInstanceDataPointVO();
				instanceDataPoint[j].setName("IntanceX");
				instanceDataPoint[j].setValue(j); // in this dummy sample, j is just 0/1
			}
		}
	}

	@Action(value="/availability/ClusterData", results = {
	        @Result(name="success", type="json", params = {
	                "excludeProperties",
	                "parameters,session,SUCCESS,ERROR,clusterDataService,componentDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	         })
	})
	public String nocAction() {
		RequestNameId rn = RequestHelper.getRequestName(getParameters());		
		Cluster cluster = clusterDataService.getById(rn.getId());
		int sampleSize = 5;
		
		List<ComponentData> componentList = cluster.getComponents();
		CompInstanceTimesVO [] instanceTimes = new CompInstanceTimesVO[componentList.size()];
		
		if(componentList.size() > 0) {
			clusterData = new ClusterDataVO();
			clusterData.setInstanceName(cluster.getName());	
		}
		
		int i = 0;
		for(ComponentData component : componentList) {
			Map<String, boolean[]> kpiAvailMap = new HashMap<String, boolean[]>();
			
			// cache the availability kpi values
			Map<String, NormalizedAvailabilityKpi> availSamples = componentDataService.getNormalizedAvailabilityData(component.getId(), sampleSize);
			Set<String> kpiNames = availSamples.keySet();
			for(String kpiName: kpiNames) {
				boolean [] availArray = kpiAvailMap.get(kpiName);
				if(availArray == null) {
					availArray = new boolean[sampleSize];
				}
				
				NormalizedAvailabilityKpi samples = availSamples.get(kpiName);					
				for(int j=0;j<sampleSize;j++) {
					availArray[j] = samples.get(j);
				}
			}
			
			CompInstanceDataPointVO [] instanceDataPoint = null;
			if(availSamples.size() > 0) {
				instanceTimes[i] = new CompInstanceTimesVO();
				instanceTimes[i].setTime((new Integer(i)).toString());
			
				instanceDataPoint = new CompInstanceDataPointVO[sampleSize];
				instanceTimes[i].setInstances(instanceDataPoint);
			}
			
			// pluck from the cache and check if cluster has to be set RED or GREEN
			for(int j=0;j<sampleSize;j++) {
				
				if(kpiNames.size() > 0) {
					instanceDataPoint[j] = new CompInstanceDataPointVO();
					instanceDataPoint[j].setName(component.getName());
				}
				
				boolean foundOneViolated = false;
				for(String kpiName: kpiNames) {
					boolean [] availArray = kpiAvailMap.get(kpiName);
					for(boolean kpiAvail : availArray) {
						// 0 is NOT Available and 1 is Available
						if(kpiAvail == false) {
							foundOneViolated = true;
							break;
						}
					}
					if(foundOneViolated == true) {
						break;
					}
				}
				instanceDataPoint[j].setValue(foundOneViolated?0:1); // if violated is found then set the value to 0, else 1
			}
			i++;
		}
		return SUCCESS;
	}

	public ClusterDataService getClusterDataService() {
		return clusterDataService;
	}

	public void setClusterDataService(ClusterDataService clusterDataService) {
		this.clusterDataService = clusterDataService;
	}

}
