import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import com.appnomic.appsone.dashboard.action.noc.AbstractNocAction;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.interceptor.ParameterAware;

import com.appnomic.appsone.dashboard.request.RequestHelper;
import com.appnomic.appsone.dashboard.request.objects.RequestNameId;
import com.appnomic.appsone.dashboard.viewobject.availability.ClusterDataPointVO;
import com.appnomic.appsone.dashboard.viewobject.availability.ClusterTimesVO;
import com.appnomic.appsone.dashboard.viewobject.availability.ClusterVO;
import com.appnomic.appsone.dashboard.viewobject.availability.ComponentDataVO;
import com.appnomic.appsone.dashboard.viewobject.availability.ComponentVO;
import com.appnomic.domainobject.Cluster;
import com.appnomic.domainobject.Cluster.ComponentData;
import com.appnomic.domainobject.Component;
import com.appnomic.entity.NormalizedAvailabilityKpi;
import com.appnomic.service.ClusterDataService;
import com.appnomic.service.ComponentDataService;
import com.google.gson.Gson;

@ParentPackage("json-default")
@Namespace("/availability")
public class AvailabilityDataComponentNocAction extends AbstractNocAction {
	
	private ComponentDataService componentDataService;
	private ClusterDataService clusterDataService;
	private Map<String, String[]> param;
	
	private ComponentDataVO componentDataVO;
	
	public ComponentDataVO getComponentDataVO() {
		return componentDataVO;
	}

	public void setComponentDataVO(ComponentDataVO componentDataVO) {
		this.componentDataVO = componentDataVO;
	}

	public AvailabilityDataComponentNocAction() {
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
		componentDataVO = new ComponentDataVO();
		componentDataVO.setInstanceName("DB");
		
		int clusterCount = 3;
		ClusterTimesVO [] clusterTimes = new ClusterTimesVO[clusterCount];
		componentDataVO.setTimes(clusterTimes);
		for(int i=0;i<clusterCount;i++) {
			clusterTimes[i] = new ClusterTimesVO();
			clusterTimes[i].setTime("10:0"+i);
			
			int clusterDataPoints = 1;
			ClusterDataPointVO [] clusterDataPoint = new ClusterDataPointVO[clusterDataPoints];
			clusterTimes[i].setCluster(clusterDataPoint);
			
			for(int j=0;j<clusterDataPoints;j++) {
				clusterDataPoint[j] = new ClusterDataPointVO();
				clusterDataPoint[j].setName("FLXRET_DB");
				clusterDataPoint[j].setValue(j);//in this dummy sample, j is only 0/1
			}
		}
	}

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}
	
	@Action(value="/availability/ComponentData", results = {
	        @Result(name="success", type="json", params = {
	                "excludeProperties",
	                "session,SUCCESS,ERROR,componentDataService,clusterDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		/// working code starts here
		param = getParameters();
		
		String keyVal = "Component Availability: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		
		String compType = (parameters.get("name")[0]).split("COMPONENT_CELL_")[1];
		System.out.println("component type being assembled = " + compType);
		/*Set<Cluster> clusterList = new HashSet<Cluster>();
		List<Cluster> clusters = clusterDataService.getAll();
		for(Cluster cluster : clusters) {
			if(!cluster.getType().equals(compType)) {
				continue;
			}
			clusterList.add(cluster);
		}

		if(clusterList.size() > 0) {
			componentDataVO = new ComponentDataVO();
			componentDataVO.setInstanceName(parameters.get("name")[0]);	
		}
		
		Random random = new Random();
		int sampleSize = 5;
		Map<String, HashMap<String, boolean[]>> compKpiAvailMap = new HashMap<String, HashMap<String, boolean[]>>();
		for(Cluster cluster : clusterList) {
			List<ComponentData> componentList = cluster.getComponents();
			
			// cache the availability kpi values
			for(ComponentData component : componentList) {
				HashMap<String, boolean[]> kpiAvailMap = new HashMap<String, boolean[]>();
				compKpiAvailMap.put(component.getName(), kpiAvailMap);
				
				Map<String, NormalizedAvailabilityKpi> availSamples = componentDataService.getNormalizedAvailabilityData(component.getId(), sampleSize);
				Set<String> kpiNames = availSamples.keySet();
				for(String kpiName: kpiNames) {
					boolean [] availArray = kpiAvailMap.get(kpiName);
					if(availArray == null) {
						availArray = new boolean[sampleSize];
						kpiAvailMap.put(kpiName, availArray);
					}
					
					NormalizedAvailabilityKpi samples = availSamples.get(kpiName);					
					for(int j=0;j<sampleSize;j++) {
						//availArray[j] = samples.get(j);
						availArray[j] = random.nextBoolean();
					}
				}
			}
		}
		
		List<ClusterDataPointVO[]> clusterDataPointVOList = new ArrayList<ClusterDataPointVO[]>();
		for(int j=0;j<sampleSize;j++) {
			ClusterDataPointVO [] clusterDataPoint = new ClusterDataPointVO[clusterList.size()];
			clusterDataPointVOList.add(clusterDataPoint);
		}
		
		int i = 0;
		for(Cluster cluster : clusterList) {
			List<ComponentData> componentList = cluster.getComponents();
			ClusterTimesVO [] clusterTimes = new ClusterTimesVO[sampleSize];
			componentDataVO.setTimes(clusterTimes);
			
			for(int j=0;j<sampleSize;j++) {
				clusterTimes[j] = new ClusterTimesVO();
				clusterTimes[j].setTime((new Integer(j)).toString());
				
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
				
				ClusterDataPointVO [] clusterDataPoints = clusterDataPointVOList.get(j);
				clusterDataPoints[i] = new ClusterDataPointVO();
				clusterDataPoints[i].setName(cluster.getName());
				clusterDataPoints[i].setValue(foundOneViolated?0:1); // if violated is found then set the value to 0, else 1
				clusterTimes[j].setCluster(clusterDataPoints);
			}
			i++;
		}*/
		return SUCCESS;
	}

}
