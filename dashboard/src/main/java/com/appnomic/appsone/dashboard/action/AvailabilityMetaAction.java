package com.appnomic.appsone.dashboard.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;

import com.appnomic.appsone.dashboard.viewobject.availability.ClusterVO;
import com.appnomic.appsone.dashboard.viewobject.availability.ComponentDataVO;
import com.appnomic.appsone.dashboard.viewobject.availability.ComponentVO;
import com.appnomic.appsone.dashboard.viewobject.availability.InstanceVO;
import com.appnomic.domainobject.Cluster;
import com.appnomic.domainobject.Cluster.ComponentData;
import com.appnomic.domainobject.Component;
import com.appnomic.domainobject.Host;
import com.appnomic.service.ClusterDataService;
import com.appnomic.service.ComponentDataService;

/*
 * This action always retrieves the 'Meta' for the Grid to be displayed
 * The retrieved data is sent back to client as JSON - refer to the XML to find json there
 * Note: there is NO Query parameter here. The exact meta to send back is configured by the user in a 
 * separate configuration console. So this Action gets input from that configuration
 */
@ParentPackage("json-default")
@Namespace("/availability")
public class AvailabilityMetaAction extends AbstractNocAction  {

	private ComponentDataService componentDataService;
	private ClusterDataService clusterDataService;
	private String pageName;
	private String componentName;
	private String clusterName;
	
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
	
	public String getPageName() {
		return pageName;
	}

	public void setPageName(String pageName) {
		this.pageName = pageName;
	}

	public String getComponentName() {
		return componentName;
	}

	public void setComponentName(String componentName) {
		this.componentName = componentName;
	}

	public String getClusterName() {
		return clusterName;
	}

	public void setClusterName(String clusterName) {
		this.clusterName = clusterName;
	}

	// this is the variable returned as JSON by the struts plugin
	// Note: there is strong binding between this variable name and code in JS
	// So if you rename this variable make sure that the right JS file is also fixed
	// Best - Dont modify this variable name unless it is necessary
	private ComponentVO [] componentVO = null;
	
	public AvailabilityMetaAction() {
		//setDummyData();
	}
	
	public void setDummyData() {
		int compCount = 6;
		componentVO = new ComponentVO[compCount];
		for(int i=0; i<compCount; i++) {
			int clusterCount = 4;
			ClusterVO [] cluster = new ClusterVO[clusterCount];
			componentVO[i] = new ComponentVO();
			componentVO[i].setComponentName("component-"+i);
			componentVO[i].setClusters(cluster);
			for(int j=0;j<clusterCount;j++) {
				int clusterMembers = 2;
				InstanceVO[] host = new InstanceVO[clusterMembers];
				cluster[j] = new ClusterVO();
				cluster[j].setClusterName("cluster"+j);
				cluster[j].setIntances(host);
				for(int z=0;z<clusterMembers;z++) {
					host[z] = new InstanceVO();
					host[z].setKpiCount(3);
					host[z].setInstanceName("host"+z);
				}
			}
			
		}
	}

	@Action(value="/availability/Meta", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,clusterDataService,componentDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {		
		List<String> componentTypes = componentDataService.getComponentTypes();
		
		// ToDo: ask Sumanth (team) to implement get-cluster-by-type and use that
		List<Cluster> clusters = clusterDataService.getAll();
		componentVO = new ComponentVO[componentTypes.size()];
		int i = 0;	
		for(String componentType : componentTypes){
			i = assembleType(componentType, clusters, i);
		}
		
		return SUCCESS;
	}
	
	@Action(value="/availability/ComponentMeta", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,clusterDataService,componentDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String componentMetaAction() {
		
		String keyVal = "Component Meta Availability: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		
		componentName = (parameters.get("componentName")[0]);
		pageName = (parameters.get("pageName")[0]);
		clusterName = (parameters.get("clusterName")[0]);
		
		System.out.println("component type being assembled = " + componentName);
		
		componentVO = new ComponentVO[1];
		List<Cluster> clusters = clusterDataService.getAll();
		assembleType(componentName, clusters, 0);
		
		return SUCCESS;
	}
	
	public int assembleType(String componentType, List<Cluster> clusters, int i) {
		List<ClusterVO> clustersOfType = new ArrayList<ClusterVO>();
		
		for(Cluster cluster : clusters) {
			if(!cluster.getType().equals(componentType)) {
				continue;
			}
			
			ClusterVO clusterVO = new ClusterVO();
			clusterVO.setClusterName(cluster.getName());
			clusterVO.setId(cluster.getId());
			clustersOfType.add(clusterVO);
			
			List<ComponentData> instances = cluster.getComponents();
			InstanceVO [] instanceVO = new InstanceVO[instances.size()];
			int j = 0;
			for(ComponentData instance : instances) {
				instanceVO[j] = new InstanceVO();
				instanceVO[j].setInstanceName(instance.getName());
				instanceVO[j].setId(instance.getId());
				instanceVO[j].setKpiCount(componentDataService.getComponentInstance(instance.getId()).getAvailKpiDataTypes().size());
				j++;
			}
			clusterVO.setIntances(instanceVO);
		}
		ClusterVO [] clusterArray = clustersOfType.toArray(new ClusterVO[clustersOfType.size()]);
		if(clusterArray.length > 0) {
			componentVO[i] = new ComponentVO();
			componentVO[i].setComponentName(componentType);
			componentVO[i].setClusters(clusterArray);
			i++;
		}
		return i;
	}

	public ComponentVO[] getComponentVO() {
		return componentVO;
	}

	public void setComponentVO(ComponentVO[] componentVO) {
		this.componentVO = componentVO;
	}
}
