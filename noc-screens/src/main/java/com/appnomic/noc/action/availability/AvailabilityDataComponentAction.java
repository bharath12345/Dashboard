package com.appnomic.noc.action.availability;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.interceptor.ParameterAware;

import com.appnomic.domainobject.Cluster;
import com.appnomic.domainobject.Cluster.ComponentData;
import com.appnomic.domainobject.Component;
import com.appnomic.entity.NormalizedAvailabilityKpi;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.request.RequestHelper;
import com.appnomic.noc.request.objects.RequestNameId;
import com.appnomic.noc.viewobject.availability.ClusterDataPointVO;
import com.appnomic.noc.viewobject.availability.ClusterTimesVO;
import com.appnomic.noc.viewobject.availability.ClusterVO;
import com.appnomic.noc.viewobject.availability.ComponentDataVO;
import com.appnomic.noc.viewobject.availability.ComponentVO;
import com.appnomic.service.ClusterDataService;
import com.appnomic.service.ComponentDataService;

@ParentPackage("json-default")
@Namespace("/availability")
public class AvailabilityDataComponentAction extends AbstractNocAction  {
	
	private ComponentDataService componentDataService;
	private ClusterDataService clusterDataService;
	
	private ComponentDataVO componentData;
	
	public ComponentDataVO getComponentData() {
		return componentData;
	}

	public void setComponentData(ComponentDataVO componentData) {
		this.componentData = componentData;
	}

	public AvailabilityDataComponentAction() {
		setDummyData();
	}
	
	public ComponentDataService getComponentDataService() {
		return componentDataService;
	}

	public void setComponentDataService(ComponentDataService componentDataService) {
		this.componentDataService = componentDataService;
	}
	
	public ClusterDataService getClusterDataService() {
		return clusterDataService;
	}

	public void setClusterDataService(ClusterDataService clusterDataService) {
		this.clusterDataService = clusterDataService;
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

	@Action(value="/availability/ComponentData", results = {
	        @Result(name="success", type="json", params = {
	                "excludeProperties",
	                "parameters,session,SUCCESS,ERROR,componentDataService,clusterDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		RequestNameId rn = RequestHelper.getRequestName(getParameters());		
		
		Set<Cluster> clusterList = new HashSet<Cluster>();
		
		List<Cluster> clusters = clusterDataService.getAll();
		for(Cluster cluster : clusters) {
			if(!cluster.getType().equals(rn.getName())) {
				continue;
			}
			clusterList.add(cluster);
		}

		ClusterTimesVO [] clusterTimes = new ClusterTimesVO[clusterList.size()];
		componentData.setTimes(clusterTimes);
		
		if(clusterList.size() > 0) {
			componentData = new ComponentDataVO();
			componentData.setInstanceName(rn.getName());	
		}

		int i = 0;
		int sampleSize = 5;
		for(Cluster cluster : clusterList) {
			List<ComponentData> componentList = cluster.getComponents();
			
			// cache the availability kpi values
			Map<String, HashMap<String, boolean[]>> compKpiAvailMap = new HashMap<String, HashMap<String, boolean[]>>();
			for(ComponentData component : componentList) {
				HashMap<String, boolean[]> kpiAvailMap = new HashMap<String, boolean[]>();
				compKpiAvailMap.put(component.getName(), kpiAvailMap);
				
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
			}
			
			ClusterDataPointVO [] clusterDataPoint = null;
			if(compKpiAvailMap.size() > 0) {
				clusterTimes[i] = new ClusterTimesVO();
				clusterTimes[i].setTime((new Integer(i)).toString());
			
				clusterDataPoint = new ClusterDataPointVO[sampleSize];
				clusterTimes[i].setCluster(clusterDataPoint);
			}
			
			for(int j=0;j<sampleSize;j++) {
				if(componentList.size() > 0) {
					clusterDataPoint[j] = new ClusterDataPointVO();
					clusterDataPoint[j].setName(cluster.getName());
				}
				
				// pluck from the cache and check if cluster has to be set RED or GREEN
				boolean foundOneViolated = false;
				for(ComponentData component : componentList) {
					HashMap<String, boolean[]> kpiAvailMap = compKpiAvailMap.get(component.getName());
					Set<String> kpiNames = kpiAvailMap.keySet();
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
					if(foundOneViolated == true) {
						break;
					}
				}
				clusterDataPoint[j].setValue(foundOneViolated?0:1); // if violated is found then set the value to 0, else 1
			}
			i++;
		}
		return SUCCESS;
	}

}
