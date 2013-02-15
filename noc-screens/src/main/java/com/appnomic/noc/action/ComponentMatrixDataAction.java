package com.appnomic.noc.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;

import com.appnomic.domainobject.Component;
import com.appnomic.domainobject.ComponentKPI;
import com.appnomic.domainobject.ComponentMetricGroup;
import com.appnomic.entity.KpiDataSamples;
import com.appnomic.noc.request.RequestHelper;
import com.appnomic.noc.request.objects.RequestComponentKpiName;
import com.appnomic.noc.request.objects.RequestNameId;
import com.appnomic.noc.request.objects.RequestZoneName;
import com.appnomic.noc.viewobject.component.ComponentDataVO;
import com.appnomic.noc.viewobject.component.ComponentMetaVO;
import com.appnomic.service.ComponentDataService;

@ParentPackage("json-default")
@Namespace("/component")
public class ComponentMatrixDataAction extends AbstractNocAction {
	
	ComponentDataVO componentDataVO;
	
	public ComponentMatrixDataAction() {
		setDummyData();
	}
	
	public void setDummyData() {
	}
	
	private ComponentDataService componentDataService;

	public ComponentDataService getComponentDataService() {
		return componentDataService;
	}

	public void setComponentDataService(ComponentDataService componentDataService) {
		this.componentDataService = componentDataService;
	}
	
	@Action(value="/component/KpiMatrixData", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		RequestComponentKpiName rckn = RequestHelper.getRequestComponentKpiName(getParameters());	
		
		componentDataVO = new ComponentDataVO();
		componentDataVO.setComponentName(rckn.getComponentName());
		componentDataVO.setKpiName(rckn.getKpiName());
		
		// ToDo: Ask Sumanth (team) to get kpi values for a single kpi also
		List<String> kpiList = new ArrayList<String>();
		kpiList.add(rckn.getKpiName());
		Map<String, KpiDataSamples> samples = componentDataService.getComponentData(rckn.getComponentId(), kpiList, 1);
		KpiDataSamples sample = samples.get(rckn.getKpiName());
		componentDataVO.setKpiValue(sample.get(0).intValue());
		
		Component component = componentDataService.getComponentInstance(rckn.getComponentId());
		List<ComponentMetricGroup> cmgs = component.getComponentMetricGroups();
		for(ComponentMetricGroup cmg : cmgs) {
			Set<ComponentKPI> ckpis = cmg.getMetricSet();
			for(ComponentKPI ckpi : ckpis) {
				if(ckpi.getName().equals(rckn.getKpiName())) {
					componentDataVO.setThreshold(ckpi.getThreshold());
					break;
				}
			}
		}
		
		if(componentDataVO.getKpiValue() > componentDataVO.getThreshold()) {
			componentDataVO.setViolation(Boolean.TRUE);
		} else {
			componentDataVO.setViolation(Boolean.FALSE);
		}
		
		return SUCCESS;
	}

	public ComponentDataVO getComponentDataVO() {
		return componentDataVO;
	}

	public void setComponentDataVO(ComponentDataVO componentDataVO) {
		this.componentDataVO = componentDataVO;
	}
}
