package com.appnomic.noc.action.component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;

import com.appnomic.domainobject.Component;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.request.RequestHelper;
import com.appnomic.noc.request.objects.RequestNameId;
import com.appnomic.noc.request.objects.RequestZoneName;
import com.appnomic.noc.viewobject.component.ComponentMetaVO;
import com.appnomic.service.ComponentDataService;

@ParentPackage("json-default")
@Namespace("/component")
public class ComponentMatrixMetaAction extends AbstractNocAction {
	
	public ComponentMatrixMetaAction() {
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
	
	@Action(value="/component/KpiMatrixMeta", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		RequestZoneName rzn = RequestHelper.getRequestZoneName(getParameters());
				
		// Instead of getALLComponents use the get-component-type which needs to be provided by Sumanth (team)
		List<Component> components = componentDataService.getAllComponents();
		ComponentMetaVO [] componentVO = new ComponentMetaVO[components.size()];
		int i = 0;
		for(Component component: components) {
			if(!component.getType().equals(rzn.getZoneName())){
				continue;
			}
			
			componentVO[i] = new ComponentMetaVO();
			componentVO[i].setComponentName(component.getName());
			
			// pick only those kpi which are numbers (int, float etc)
			Map<String, String> dataTypes = component.getKpiDataTypes();
			Set<String> kpiNames = dataTypes.keySet();
			Set<String> numericKpiNames = new HashSet<String>();
			
			for(String kpiName : kpiNames) {
				String kpiDataType = dataTypes.get(kpiName);
				
				// ToDo: ask Sumanth (team) to give us a Enum for data type and NOT string
				if(kpiDataType.equalsIgnoreCase("INT") || kpiDataType.equalsIgnoreCase("LONG") || kpiDataType.equalsIgnoreCase("BIGINT") ||
						kpiDataType.equalsIgnoreCase("FLOAT") || kpiDataType.equalsIgnoreCase("DOUBLE")) {
					numericKpiNames.add(kpiName);
				} 
			}
			componentVO[i].setKpiNames(numericKpiNames.toArray(new String[numericKpiNames.size()]));
			i++;
		}
		return SUCCESS;
	}
}
