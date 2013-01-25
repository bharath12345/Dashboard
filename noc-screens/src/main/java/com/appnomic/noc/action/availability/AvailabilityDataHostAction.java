package com.appnomic.noc.action.availability;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
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
public class AvailabilityDataHostAction extends AbstractNocAction  {
	
	private CompInstanceDataVO compInstanceDataVO;
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

	public AvailabilityDataHostAction() {
		setDummyData();
	}
		
	public void setDummyData() {
		compInstanceDataVO = new CompInstanceDataVO();
		compInstanceDataVO.setInstanceName("HostX");
		
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

	@Action(value="/availability/HostData", results = {
	        @Result(name="success", type="json", params = {
	                "excludeProperties",
	                "parameters,session,SUCCESS,ERROR,componentDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		RequestNameId rn = RequestHelper.getRequestName(getParameters());	
		int sampleSize = 5;
		Map<String, NormalizedAvailabilityKpi> availSamples = componentDataService.getNormalizedAvailabilityData(rn.getId(), sampleSize);
		String instanceName = componentDataService.getComponentInstance(rn.getId()).getName();
		KpiTimesVO [] kpiTimes = null;
		
		if(availSamples.size() > 0) {
			compInstanceDataVO = new CompInstanceDataVO();
			compInstanceDataVO.setInstanceName(instanceName);
			kpiTimes = new KpiTimesVO[sampleSize];
			compInstanceDataVO.setTimes(kpiTimes);
		}
		
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
				
				int value = samples.get(i) ? 1 : 0;
				// 0 is NOT Available and 1 is Available
				kpiDataPoint[j].setValue(value);
				j++;
			}
		}
		
		return SUCCESS;
	}

}
