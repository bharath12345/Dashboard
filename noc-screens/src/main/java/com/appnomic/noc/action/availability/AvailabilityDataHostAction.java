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
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.action.ActionHelper;
import com.appnomic.noc.action.RequestNameId;
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
	                "parameters,session,SUCCESS,ERROR,hostDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		RequestNameId rn = ActionHelper.getRequestName(getParameters());	
		int sampleSize = 5;
		Map<String, AvailabilityKpiSamples> availSamples = componentDataService.getAvailabilityData(rn.getId(), sampleSize);
		String instanceName = componentDataService.getComponentInstance(rn.getId()).getName();
		
		Map<String,String> kpiDataTypes = componentDataService.getComponentInstance(rn.getId()).getAvailKpiDataTypes();
		
		compInstanceDataVO = new CompInstanceDataVO();
		compInstanceDataVO.setInstanceName(instanceName);
		
		KpiTimesVO [] kpiTimes = new KpiTimesVO[sampleSize];
		compInstanceDataVO.setTimes(kpiTimes);
		for(int i=0;i<sampleSize;i++) {
			kpiTimes[i] = new KpiTimesVO();
			kpiTimes[i].setTime((new Integer(i)).toString());
			
			Set<String> kpiNames = availSamples.keySet();
			KpiDataPointVO [] kpiDataPoint = new KpiDataPointVO[kpiNames.size()];
			kpiTimes[i].setKpi(kpiDataPoint);
			int j = 0;
			for(String kpiName: kpiNames) {
				AvailabilityKpiSamples samples = availSamples.get(kpiName);
				String kpiDataType = kpiDataTypes.get(kpiName);
				
				kpiDataPoint[j] = new KpiDataPointVO();
				kpiDataPoint[j].setName(kpiName);
				
				int value = 0;
				// Ask Sumanth (team) to make the return type of kpi-data-type to be a Enum and NOT string
				if(kpiDataType.equalsIgnoreCase("INT") || kpiDataType.equalsIgnoreCase("LONG") || kpiDataType.equalsIgnoreCase("BIGINT")) {
						
					Gson gson = new Gson();
					String samplesJson = gson.toJson(samples);
						
				} else if(kpiDataType.equalsIgnoreCase("FLOAT") || kpiDataType.equalsIgnoreCase("DOUBLE")) {
					
				} else if(kpiDataType.equalsIgnoreCase("STRING")) {
					
				} else if(kpiDataType.equalsIgnoreCase("UNKNOWN")) {
					
				} else {
					System.out.println("unknown data type = " + kpiDataType);
				}
					
				kpiDataPoint[j].setValue(value); 
				j++;
			}
		}
		
		
		
		
		return SUCCESS;
	}

}
