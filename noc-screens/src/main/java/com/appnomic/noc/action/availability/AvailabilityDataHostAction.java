package com.appnomic.noc.action.availability;

import java.util.ArrayList;
import java.util.Map;

import org.apache.struts2.interceptor.ParameterAware;

import com.appnomic.noc.viewobject.availability.HostDataVO;
import com.appnomic.noc.viewobject.availability.KpiDataPointVO;
import com.appnomic.noc.viewobject.availability.KpiTimesVO;
import com.opensymphony.xwork2.Action;

public class AvailabilityDataHostAction implements ParameterAware {
	
	private HostDataVO hostData;
	private Map<String, String[]> parameters;

	public HostDataVO getHostData() {
		return hostData;
	}

	public void setHostData(HostDataVO hostData) {
		this.hostData = hostData;
	}

	public AvailabilityDataHostAction() {
		setDummyData();
	}
	
	public void setParameters(Map<String, String[]> parameters) {
		this.parameters = parameters;
	}

	public Map<String, String[]> getParameters() {
		return this.parameters;
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

	public String execute() {
		return Action.SUCCESS;
	}

}
