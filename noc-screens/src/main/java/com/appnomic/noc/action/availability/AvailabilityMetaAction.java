package com.appnomic.noc.action.availability;

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

import com.appnomic.domainobject.Cluster;
import com.appnomic.domainobject.Cluster.ComponentData;
import com.appnomic.domainobject.Component;
import com.appnomic.domainobject.Host;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.viewobject.availability.ClusterVO;
import com.appnomic.noc.viewobject.availability.ComponentDataVO;
import com.appnomic.noc.viewobject.availability.ComponentVO;
import com.appnomic.noc.viewobject.availability.InstanceVO;
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
		
		// ToDo: remove the below call to get for ALL components and get for PARTICULAR components ONLY
		Set<String> componentTypes = new HashSet<String>();
		List<Component> components = componentDataService.getAllComponents();
		for(Component component: components) {
			componentTypes.add(component.getType());
		}
		
		// ToDo: ask Sumanth (team) to implement get-cluster-by-type and use that
		List<Cluster> clusters = clusterDataService.getAll();
		componentVO = new ComponentVO[componentTypes.size()];
		int i = 0;	
		for(String componentType : componentTypes){
			componentVO[i].setComponentName(componentType);
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
					instanceVO[j].setInstanceName(instance.getName());
					instanceVO[j].setId(instance.getId());
					
					// ToDo: Ask Sumanth (team) to give a get-availability-kpi names only - ALL KPI should NOT be used here
					instanceVO[j].setKpiCount(componentDataService.getComponentInstance(instance.getId()).getKPINames().size());
				}
				clusterVO.setIntances(instanceVO);
			}
			componentVO[i].setClusters((ClusterVO[]) clustersOfType.toArray());			
			i++;
		}
		
		return "success";
	}

	public ComponentVO[] getComponentVO() {
		return componentVO;
	}

	public void setComponentVO(ComponentVO[] componentVO) {
		this.componentVO = componentVO;
	}

	

}
