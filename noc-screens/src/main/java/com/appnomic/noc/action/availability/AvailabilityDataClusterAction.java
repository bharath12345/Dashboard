package com.appnomic.noc.action.availability;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
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
import com.appnomic.noc.action.DefaultResponse;
import com.appnomic.noc.request.RequestHelper;
import com.appnomic.noc.request.objects.RequestNameId;
import com.appnomic.noc.viewobject.availability.ClusterDataVO;
import com.appnomic.noc.viewobject.availability.ClusterVO;
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
	private ClusterDataVO clusterDataVO;
	private ComponentDataService componentDataService;
	private Map<String, String[]> param;
	private ClusterVO [] clusterVOs;
	
	public ComponentDataService getComponentDataService() {
		return componentDataService;
	}

	public void setComponentDataService(ComponentDataService componentDataService) {
		this.componentDataService = componentDataService;
	}

	public ClusterDataVO getClusterDataVO() {
		return clusterDataVO;
	}

	public void setClusterDataVO(ClusterDataVO clusterDataVO) {
		this.clusterDataVO = clusterDataVO;
	}

	public AvailabilityDataClusterAction() {
		setDummyData();
	}
	
	public ClusterVO[] getClusterVOs() {
		return clusterVOs;
	}

	public void setClusterVOs(ClusterVO[] clusterVOs) {
		this.clusterVOs = clusterVOs;
	}

	public void setDummyData() {
		clusterDataVO = new ClusterDataVO();
		clusterDataVO.setInstanceName("FLXRET_DB");
		
		int instanceCount = 3;
		CompInstanceTimesVO [] instanceTimes = new CompInstanceTimesVO[instanceCount]; // cluster has 2 hosts
		clusterDataVO.setTimes(instanceTimes);
		
		for(int i=0;i<instanceCount;i++) {
			instanceTimes[i] = new CompInstanceTimesVO();
			instanceTimes[i].setTime("10:0"+i);
			
			int instanceDataPoints = 3;
			CompInstanceDataPointVO [] instanceDataPoint = new CompInstanceDataPointVO[instanceDataPoints];
			instanceTimes[i].setInstances(instanceDataPoint);
			
			instanceDataPoint[0] = new CompInstanceDataPointVO();
			instanceDataPoint[0].setName("FLEXRETDB1");
			instanceDataPoint[0].setValue(0); // in this dummy sample, j is just 0/1
			
			instanceDataPoint[1] = new CompInstanceDataPointVO();
			instanceDataPoint[1].setName("HBNETPRODDB1");
			instanceDataPoint[1].setValue(1); // in this dummy sample, j is just 0/1
			
			instanceDataPoint[2] = new CompInstanceDataPointVO();
			instanceDataPoint[2].setName("HBNETPRODDB2");
			instanceDataPoint[2].setValue(0); // in this dummy sample, j is just 0/1
		}
	}

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}
	
	@Action(value="/availability/ClusterZones", results = {
	        @Result(name="success", type="json", params = {
	                "excludeProperties",
	                "session,SUCCESS,ERROR,clusterDataService,componentDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	         })
	})
	public String clusterZones() {
		param = getParameters();
		List<Cluster> clusters = clusterDataService.getAll();
		clusterVOs = new ClusterVO[clusters.size()];
		int i = 0;
		for(Cluster cluster: clusters) {
			clusterVOs[i].setClusterName(cluster.getName());
			clusterVOs[i].setId(cluster.getId());
			i++;
		}
		return SUCCESS;
	}
	
	@Action(value="/availability/ClusterData", results = {
	        @Result(name="success", type="json", params = {
	                "excludeProperties",
	                "session,SUCCESS,ERROR,clusterDataService,componentDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	         })
	})
	public String nocAction() {
		// working code starts here
		param = getParameters();
		
		String keyVal = "Cluster Availability: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		int id = Integer.parseInt(parameters.get("id")[0]);
		
		/*Cluster cluster = clusterDataService.getById(id);
		int sampleSize = 5;
		
		List<ComponentData> componentList = cluster.getComponents();
		
		if(componentList.size() > 0) {
			clusterDataVO = new ClusterDataVO();
			clusterDataVO.setInstanceName(cluster.getName());	
		}
		
		Random random = new Random();
		Map<String, Map<String, boolean[]>> compKpiMap = new HashMap<String, Map<String, boolean[]>>();
		for(ComponentData component : componentList) {
			Map<String, boolean[]> kpiAvailMap = new HashMap<String, boolean[]>();
			compKpiMap.put(component.getName(), kpiAvailMap);
			
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
					//availArray[j] = samples.get(j);
					availArray[j] = random.nextBoolean();
				}
				kpiAvailMap.put(kpiName, availArray);
			}
		}
		
		List<CompInstanceDataPointVO[]> instanceDataPointList = new ArrayList<CompInstanceDataPointVO[]>();
		for(int i = 0; i<sampleSize;i++) {
			CompInstanceDataPointVO [] instanceDataPoint = new CompInstanceDataPointVO[componentList.size()];
			instanceDataPointList.add(instanceDataPoint);
		}
		
		int i = 0;
		Set<String> compNames = compKpiMap.keySet();
		for(String compName : compNames) {
			Map<String, boolean[]> kpiAvailMap = compKpiMap.get(compName);
			Set<String> kpiNames = kpiAvailMap.keySet();
			
			CompInstanceTimesVO [] instanceTimes = new CompInstanceTimesVO[sampleSize];
			// pluck from the cache and check if cluster has to be set RED or GREEN
			for(int j=0;j<sampleSize;j++) {
				instanceTimes[j] = new CompInstanceTimesVO();
				instanceTimes[j].setTime((new Integer(j)).toString());
				clusterDataVO.setTimes(instanceTimes);
				
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
				
				CompInstanceDataPointVO [] instanceDataPoints = instanceDataPointList.get(j);
				instanceDataPoints[i] = new CompInstanceDataPointVO();
				instanceDataPoints[i].setName(compName);
				instanceDataPoints[i].setValue(foundOneViolated?0:1);// if violated is found then set the value to 0, else 1
				instanceTimes[j].setInstances(instanceDataPoints);
			}
			i++;
		}*/
		return SUCCESS;
	}

	public ClusterDataService getClusterDataService() {
		return clusterDataService;
	}

	public void setClusterDataService(ClusterDataService clusterDataService) {
		this.clusterDataService = clusterDataService;
	}

}
