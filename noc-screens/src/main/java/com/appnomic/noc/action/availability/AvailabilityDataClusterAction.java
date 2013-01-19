package com.appnomic.noc.action.availability;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.ParameterAware;

import com.appnomic.domainobject.Cluster;
import com.appnomic.domainobject.Host;
import com.appnomic.service.ClusterDataService;
import com.appnomic.service.ComponentDataService;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.viewobject.availability.ClusterDataVO;
import com.appnomic.noc.viewobject.availability.HostDataPointVO;
import com.appnomic.noc.viewobject.availability.HostTimesVO;
import com.opensymphony.xwork2.Action;

public class AvailabilityDataClusterAction extends AbstractNocAction {
	
	private ClusterDataService clusterDataService;
	
	private ClusterDataVO clusterData;

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
		HostTimesVO [] hostTimes = new HostTimesVO[hostCount]; // cluster has 2 hosts
		clusterData.setTimes(hostTimes);
		
		for(int i=0;i<hostCount;i++) {
			hostTimes[i] = new HostTimesVO();
			hostTimes[i].setTime("10:10");
			
			int hostDataPoints = 2;
			HostDataPointVO [] hostDataPoint = new HostDataPointVO[hostDataPoints];
			hostTimes[i].setHost(hostDataPoint);
			
			for(int j=0;j<hostDataPoints;j++) {
				hostDataPoint[j] = new HostDataPointVO();
				hostDataPoint[j].setName("HostX");
				hostDataPoint[j].setValue(j); // in this dummy sample, j is just 0/1
			}
		}
	}

	public String execute() {
		//List<Component> components= componentDataService.getAllComponents();
		
		List<Cluster> clusters = clusterDataService.getAll();
		for(Cluster cluster : clusters) {
			List<Host> hosts = cluster.getHosts();
			for(Host host : hosts) {
				List<Host.Component> components = host.getComponents();
				for(Host.Component component : components) {
					
				}
			}
		}
		
		return Action.SUCCESS;
	}

	public ClusterDataService getClusterDataService() {
		return clusterDataService;
	}

	public void setClusterDataService(ClusterDataService clusterDataService) {
		this.clusterDataService = clusterDataService;
	}

}
