package com.appnomic.noc.action.availability;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.interceptor.ParameterAware;

import com.appnomic.domainobject.Component;
import com.appnomic.domainobject.Host;
import com.appnomic.entity.AvailabilityKpiSamples;
import com.appnomic.entity.NormalizedAvailabilityKpi;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.action.DefaultResponse;
import com.appnomic.noc.request.RequestHelper;
import com.appnomic.noc.request.objects.RequestNameId;
import com.appnomic.noc.viewobject.availability.CompInstanceDataVO;
import com.appnomic.noc.viewobject.availability.KpiDataPointVO;
import com.appnomic.noc.viewobject.availability.KpiTimesVO;
import com.appnomic.service.ClusterDataService;
import com.appnomic.service.ComponentDataService;
import com.appnomic.service.HostDataService;
import com.google.gson.Gson;

@ParentPackage("json-default")
@Namespace("/availability")
public class AvailabilityDataInstanceAction extends AbstractNocAction  {
	
	private CompInstanceDataVO compInstanceDataVO;
	private Map<String, String[]> param;
	private ComponentDataService componentDataService;
	
	public ComponentDataService getComponentDataService() {
		return componentDataService;
	}

	public void setComponentDataService(ComponentDataService componentDataService) {
		this.componentDataService = componentDataService;
	}

	public CompInstanceDataVO getCompInstanceDataVO() {
		return compInstanceDataVO;
	}

	public void setCompInstanceDataVO(CompInstanceDataVO compInstanceDataVO) {
		this.compInstanceDataVO = compInstanceDataVO;
	}

	public AvailabilityDataInstanceAction() {
		//setDummyData();
	}
		
	public void setDummyData() {
		compInstanceDataVO = new CompInstanceDataVO();
		compInstanceDataVO.setInstanceName("InstanceX");
		
		int kpiCount = 3;
		KpiTimesVO [] kpiTimes = new KpiTimesVO[kpiCount];
		compInstanceDataVO.setTimes(kpiTimes);
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
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	@Action(value="/availability/InstanceData", results = {
	        @Result(name="success", type="json", params = {
	                "excludeProperties",
	                "session,SUCCESS,ERROR,componentDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		param = getParameters();
		
		String keyVal = "Instance Availability: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		int id = Integer.parseInt(parameters.get("id")[0]);
		
		int sampleSize = 5;
		Map<String, NormalizedAvailabilityKpi> availSamples = componentDataService.getNormalizedAvailabilityData(id, sampleSize);
		String instanceName = componentDataService.getComponentInstance(id).getName();
		KpiTimesVO [] kpiTimes = null;
		
		if(availSamples.size() > 0) {
			compInstanceDataVO = new CompInstanceDataVO();
			compInstanceDataVO.setInstanceName(instanceName);
			kpiTimes = new KpiTimesVO[sampleSize];
			compInstanceDataVO.setTimes(kpiTimes);
		}
		
		Random random = new Random();
		
		for(int i=0;i<sampleSize;i++) {
			Set<String> kpiNames = availSamples.keySet();
			KpiDataPointVO [] kpiDataPoint = null;
			if(kpiNames.size() > 0) {
				kpiTimes[i] = new KpiTimesVO();
				kpiTimes[i].setTime((new Integer(i)).toString());				
				kpiDataPoint = new KpiDataPointVO[kpiNames.size()];
				kpiTimes[i].setKpi(kpiDataPoint);
			}
			
			int j = 0;
			for(String kpiName: kpiNames) {
				NormalizedAvailabilityKpi samples = availSamples.get(kpiName);
				
				kpiDataPoint[j] = new KpiDataPointVO();
				kpiDataPoint[j].setName(kpiName);
				
				System.out.println("samples size = " + samples.size());
				//int value = samples.get(0) ? 1 : 0;
				
				int value = random.nextBoolean() ? 1:0;
				// 0 is NOT Available and 1 is Available
				kpiDataPoint[j].setValue(value);
				j++;
			}
		}
		
		return SUCCESS;
	}

}
