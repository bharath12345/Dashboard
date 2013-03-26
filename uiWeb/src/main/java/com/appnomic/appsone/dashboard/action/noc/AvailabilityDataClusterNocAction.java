package com.appnomic.appsone.dashboard.action.noc;

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
import org.springframework.jdbc.BadSqlGrammarException;

import com.appnomic.appsone.config.entity.ClusterGridEntity;
import com.appnomic.appsone.config.ClusterGridConfigManager;
import com.appnomic.appsone.dashboard.request.RequestHelper;
import com.appnomic.appsone.dashboard.request.objects.RequestNameId;
import com.appnomic.appsone.dashboard.viewobject.availability.ClusterDataVO;
import com.appnomic.appsone.dashboard.viewobject.availability.ClusterVO;
import com.appnomic.appsone.dashboard.viewobject.availability.CompInstanceDataPointVO;
import com.appnomic.appsone.dashboard.viewobject.availability.CompInstanceTimesVO;
import com.appnomic.appsone.dashboard.viewobject.availability.KpiDataPointVO;
import com.appnomic.appsone.dashboard.viewobject.availability.KpiTimesVO;
import com.appnomic.domainobject.Cluster;
import com.appnomic.domainobject.Cluster.ComponentData;
import com.appnomic.domainobject.Host;
import com.appnomic.entity.NormalizedAvailabilityKpi;
import com.appnomic.service.ClusterDataService;
import com.appnomic.service.ComponentDataService;
//import com.opensymphony.xwork2.Action;
import com.google.gson.Gson;

@ParentPackage("json-default")
@Namespace("/availability")
public class AvailabilityDataClusterNocAction extends AbstractNocAction {

	private ClusterDataService clusterDataService;
	private ComponentDataService componentDataService;

	private Map<String, String[]> param;
	private ClusterVO[] clusterVOs;
	private ClusterDataVO clusterDataVO;

	public ComponentDataService getComponentDataService() {
		return componentDataService;
	}

	public void setComponentDataService(
			ComponentDataService componentDataService) {
		this.componentDataService = componentDataService;
	}

	public ClusterDataVO getClusterDataVO() {
		return clusterDataVO;
	}

	public void setClusterDataVO(ClusterDataVO clusterDataVO) {
		this.clusterDataVO = clusterDataVO;
	}

	public AvailabilityDataClusterNocAction() {
		//setDummyData();
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

		int instanceCount = 1;
		CompInstanceTimesVO[] instanceTimes = new CompInstanceTimesVO[instanceCount];
		clusterDataVO.setTimes(instanceTimes);

		for (int i = 0; i < instanceCount; i++) {
			instanceTimes[i] = new CompInstanceTimesVO();
			instanceTimes[i].setTime("10:0" + i);

			int instanceDataPoints = 3;
			CompInstanceDataPointVO[] instanceDataPoint = new CompInstanceDataPointVO[instanceDataPoints];
			instanceTimes[i].setInstances(instanceDataPoint);

			instanceDataPoint[0] = new CompInstanceDataPointVO();
			instanceDataPoint[0].setName("FLEXRETDB1");
			instanceDataPoint[0].setValue(0); // in this dummy sample, j is just
												// 0/1

			instanceDataPoint[1] = new CompInstanceDataPointVO();
			instanceDataPoint[1].setName("HBNETPRODDB1");
			instanceDataPoint[1].setValue(1); // in this dummy sample, j is just
												// 0/1

			instanceDataPoint[2] = new CompInstanceDataPointVO();
			instanceDataPoint[2].setName("HBNETPRODDB2");
			instanceDataPoint[2].setValue(0); // in this dummy sample, j is just
												// 0/1
		}
	}

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	@Action(value = "/availability/ClusterZones", results = { @Result(name = "success", type = "json", params = {
			"excludeProperties",
			"session,SUCCESS,ERROR,clusterDataService,componentDataService,clusterDataVO",
			"enableGZIP", "true", "encoding", "UTF-8", "noCache", "true",
			"excludeNullProperties", "true" }) })
	public String clusterZones() {
		param = getParameters();
		
		ClusterGridConfigManager cgcm = ClusterGridConfigManager.getInstance();
		ClusterGridEntity cge = (ClusterGridEntity)cgcm.getConfig();
		String [] userConfiguredClusterList = cge.getClusterNames().getUserSetting();
		if(userConfiguredClusterList == null || userConfiguredClusterList.length == 0) {
			clusterVOs = null;
			return SUCCESS;
		}
		
		List<Cluster> clusters = clusterDataService.getAll();
		List<ClusterVO> clusterVOList = new ArrayList<ClusterVO>();
		for (Cluster cluster : clusters) {
			boolean found = false;
			for(String userWantedCluster: userConfiguredClusterList) {
				if(userWantedCluster.equalsIgnoreCase(cluster.getName())) {
					found = true;
					break;
				}
			}
			if(found == false) {
				System.out.println("cluster not in view list - ignoring it ==> " + cluster.getName());
				continue;
			}
			System.out.println("Cluster in view list = " + cluster.getName());
			ClusterVO clusterVO = new ClusterVO();
			clusterVO.setClusterName(cluster.getName());
			clusterVO.setId(cluster.getId());
			clusterVOList.add(clusterVO);
		}
		clusterVOs = clusterVOList.toArray(new ClusterVO[clusterVOList.size()]);
		return SUCCESS;
	}

	@Action(value = "/availability/ClusterData", results = { @Result(name = "success", type = "json", params = {
			"excludeProperties",
			"session,SUCCESS,ERROR,clusterDataService,componentDataService,clusterVOs",
			"enableGZIP", "true", "encoding", "UTF-8", "noCache", "true",
			"excludeNullProperties", "true" }) })
	public String nocAction() {
		// working code starts here
		param = getParameters();

		String keyVal = "Cluster Availability: ";
		for (String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for (String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		int id = Integer.parseInt(parameters.get("id")[0]);

		Cluster cluster = clusterDataService.getById(id);
		int sampleSize = 10;

		List<ComponentData> componentList = cluster.getComponents();

		if (componentList.size() > 0) {
			clusterDataVO = new ClusterDataVO();
			clusterDataVO.setInstanceName(cluster.getName());
		}

		//Random random = new Random();
		Map<String, Map<String, boolean[]>> compKpiMap = new HashMap<String, Map<String, boolean[]>>();
		for (ComponentData component : componentList) {
			Map<String, boolean[]> kpiAvailMap = new HashMap<String, boolean[]>();
			compKpiMap.put(component.getName(), kpiAvailMap);

			try {
				// cache the availability kpi values

				Map<String, NormalizedAvailabilityKpi> availSamples = componentDataService.getNormalizedAvailabilityData(component.getId(),
								sampleSize);
				if (availSamples == null) {
					continue;
				}

				Set<String> kpiNames = availSamples.keySet();
				for (String kpiName : kpiNames) {
					boolean[] availArray = kpiAvailMap.get(kpiName);
					if (availArray == null) {
						availArray = new boolean[sampleSize];
					}

					NormalizedAvailabilityKpi samples = availSamples.get(kpiName);
					if (samples == null || samples.size() < 1) {
						/*System.out.println("Samples null for component = "
								+ component.getName()
								+ " so using RANDOM DUMMY USELESS values");
						for (int j = 0; j < samples.size(); j++) {
							availArray[j] = random.nextBoolean();
						}*/
					} else {
						System.out.println("Samples NOT null for component = " + component.getName());
						for (int j = 0; j < samples.size(); j++) {
							availArray[j] = samples.get(j);
						}
					}
					kpiAvailMap.put(kpiName, availArray);
				}
			} catch (Exception e) {
				e.printStackTrace();
				// System.out.println("Exception e = " +
				// e.getLocalizedMessage());
			}
		}

		CompInstanceTimesVO[] instanceTimes = new CompInstanceTimesVO[1];
		instanceTimes[0] = new CompInstanceTimesVO();
		instanceTimes[0].setTime((new Integer(0)).toString());
		clusterDataVO.setTimes(instanceTimes);
		
		CompInstanceDataPointVO[] instanceDataPointList = new CompInstanceDataPointVO[componentList.size()];
		instanceTimes[0].setInstances(instanceDataPointList);

		int i = 0;
		Set<String> compNames = compKpiMap.keySet();
		for (String compName : compNames) {
			Map<String, boolean[]> kpiAvailMap = compKpiMap.get(compName);
			Set<String> kpiNames = kpiAvailMap.keySet();

			// pluck from the cache and check if cluster has to be set RED or
			// GREEN
			boolean foundOneViolated = false;
			int unknownCount = 0;
			for (String kpiName : kpiNames) {
				boolean[] availArray = kpiAvailMap.get(kpiName);
				if(availArray == null || availArray.length == 0) {
					unknownCount++;
					continue;
				}
				
				for (boolean kpiAvail : availArray) {
					// 0 is NOT Available and 1 is Available in A1 DB
					if (kpiAvail == false) {
						System.out.println("kpi " + kpiName + " is NOT-Available per A1");
						foundOneViolated = true;
						break;
					}
				}
				if (foundOneViolated == true) {
					break;
				}
			}

			instanceDataPointList[i] = new CompInstanceDataPointVO();
			instanceDataPointList[i].setName(compName);
			if(unknownCount == kpiNames.size()) {
				instanceDataPointList[i].setValue(2); // 2 for Unknown
			} else if(foundOneViolated == true) {
				instanceDataPointList[i].setValue(1); // 1 for NOT available
			} else {
				instanceDataPointList[i].setValue(0); // 0 for available
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
