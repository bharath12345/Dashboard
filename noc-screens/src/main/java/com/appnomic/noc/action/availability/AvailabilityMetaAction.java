package com.appnomic.noc.action.availability;

import java.util.ArrayList;

import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;

import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.viewobject.availability.ClusterVO;
import com.appnomic.noc.viewobject.availability.ComponentVO;
import com.appnomic.noc.viewobject.availability.HostVO;

/*
 * This action always retrieves the 'Meta' for the Grid to be displayed
 * The retrieved data is sent back to client as JSON - refer to the XML to find json there
 * Note: there is NO Query parameter here. The exact meta to send back is configured by the user in a 
 * separate configuration console. So this Action gets input from that configuration
 */
@ParentPackage("json-default")
@Namespace("/availability")
public class AvailabilityMetaAction extends AbstractNocAction  {

	private ComponentVO [] components = null;
	
	public AvailabilityMetaAction() {
		setDummyData();
	}
	
	public void setDummyData() {
		int compCount = 6;
		components = new ComponentVO[compCount];
		for(int i=0; i<compCount; i++) {
			int clusterCount = 4;
			ClusterVO [] cluster = new ClusterVO[clusterCount];
			components[i] = new ComponentVO();
			components[i].setComponentName("component-"+i);
			components[i].setClusters(cluster);
			for(int j=0;j<clusterCount;j++) {
				int clusterMembers = 2;
				HostVO[] host = new HostVO[clusterMembers];
				cluster[j] = new ClusterVO();
				cluster[j].setClusterName("cluster"+j);
				cluster[j].setHost(host);
				for(int z=0;z<clusterMembers;z++) {
					host[z] = new HostVO();
					host[z].setKpiCount(3);
					host[z].setHostname("host"+z);
				}
			}
			
		}
	}

	@Action(value="/availability/Meta", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		return "success";
	}

	public ComponentVO[] getComponents() {
		return components;
	}

	public void setComponents(ComponentVO[] components) {
		this.components = components;
	}

}
