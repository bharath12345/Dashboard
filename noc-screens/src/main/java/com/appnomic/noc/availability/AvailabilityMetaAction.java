package com.appnomic.noc.availability;

import java.util.ArrayList;

import com.opensymphony.xwork2.Action;

//import org.apache.struts2.convention.annotation.Action;
//import org.apache.struts2.convention.annotation.Actions;
//import org.apache.struts2.convention.annotation.Result;
//import org.apache.struts2.convention.annotation.Results;
//import org.apache.struts2.dispatcher.ServletDispatcherResult;


/*
 * This action always retrieves the 'Meta' for the Grid to be displayed
 * The retrieved data is sent back to client as JSON - refer to the XML to find json there
 * Note: there is NO Query parameter here. The exact meta to send back is configured by the user in a 
 * separate configuration console. So this Action gets input from that configuration
 */

//@Results({
//	  @Result(name="SUCCESS", location="/availability/AvailabilityMeta.jsp")
//	})

public class AvailabilityMetaAction /*implements Action*/ {

	private Component [] components = null;
	
	public AvailabilityMetaAction() {
		setDummyData();
	}
	
	public void setDummyData() {
		int compCount = 6;
		components = new Component[compCount];
		for(int i=0; i<compCount; i++) {
			int clusterCount = 4;
			Cluster [] cluster = new Cluster[clusterCount];
			components[i] = new Component();
			components[i].setComponentName("component-"+i);
			components[i].setClusters(cluster);
			for(int j=0;j<clusterCount;j++) {
				int clusterMembers = 2;
				Host[] host = new Host[clusterMembers];
				cluster[j] = new Cluster();
				cluster[j].setClusterName("cluster"+j);
				cluster[j].setHost(host);
				for(int z=0;z<clusterMembers;z++) {
					host[z] = new Host();
					host[z].setKpiCount(3);
					host[z].setHostname("kpi"+z);
				}
			}
			
		}
	}

	public String execute() {
		return Action.SUCCESS;
	}

	public Component[] getComponents() {
		return components;
	}

	public void setComponents(Component[] components) {
		this.components = components;
	}

}
