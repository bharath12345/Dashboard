package com.appnomic.noc.action.availability;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.interceptor.ParameterAware;

import com.appnomic.domainobject.Host;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.viewobject.availability.HostDataVO;
import com.appnomic.noc.viewobject.availability.KpiDataPointVO;
import com.appnomic.noc.viewobject.availability.KpiTimesVO;
import com.appnomic.service.HostDataService;

@ParentPackage("json-default")
@Namespace("/availability")
public class AvailabilityDataHostAction extends AbstractNocAction  {
	
	private HostDataService hostDataService;
	
	private HostDataVO hostData;

	public HostDataService getHostDataService() {
		return hostDataService;
	}

	public void setHostDataService(HostDataService hostDataService) {
		this.hostDataService = hostDataService;
	}

	public HostDataVO getHostData() {
		return hostData;
	}

	public void setHostData(HostDataVO hostData) {
		this.hostData = hostData;
	}

	public AvailabilityDataHostAction() {
		setDummyData();
	}
		
	public void setDummyData() {
		hostData = new HostDataVO();
		hostData.setInstanceName("HostX");
		
		int kpiCount = 3;
		KpiTimesVO [] kpiTimes = new KpiTimesVO[kpiCount];
		hostData.setTimes(kpiTimes);
		for(int i=0;i<kpiCount;i++) {
			kpiTimes[i] = new KpiTimesVO();
			kpiTimes[i].setTime("10:10");
			
			int kpiDataPoints = 2;
			KpiDataPointVO [] kpiDataPoint = new KpiDataPointVO[kpiDataPoints];
			kpiTimes[i].setKpi(kpiDataPoint);
			for(int j=0;j<kpiDataPoints;j++) {
				kpiDataPoint[j] = new KpiDataPointVO();
				kpiDataPoint[j].setName("KpiX");
				kpiDataPoint[j].setValue(j); // in this dummy example, j is just 0/1
			}
		}
	}

	@Action(value="/availability/HostData", results = {
	        @Result(name="success", type="json", params = {
	                "excludeProperties",
	                "parameters,session,SUCCESS,ERROR,hostDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		List<Host> hosts = hostDataService.getAllHosts();
		for(Host host : hosts) {
			host.getComponents();
			host.getInCluster();
		}
		return SUCCESS;
	}

}
