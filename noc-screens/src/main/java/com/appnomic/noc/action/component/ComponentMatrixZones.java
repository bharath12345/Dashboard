package com.appnomic.noc.action.component;

import java.util.Set;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;

import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.viewobject.component.ComponentMatrixZonesVO;
import com.appnomic.service.ComponentDataService;
import com.google.gson.Gson;

@ParentPackage("json-default")
@Namespace("/component")
public class ComponentMatrixZones extends AbstractNocAction {

	private ComponentMatrixZonesVO componentMatrixZonesVO = null;
	
	private ComponentDataService componentDataService;	
	
	public ComponentDataService getComponentDataService() {
		return componentDataService;
	}

	public void setComponentDataService(ComponentDataService componentDataService) {
		this.componentDataService = componentDataService;
	}

	public ComponentMatrixZones() {
		setDummyData();
	}
	
	public void setDummyData() {
		componentMatrixZonesVO = new ComponentMatrixZonesVO();
		
		// make sure that the number of component groups is 4, 6 or 9.
		// this is so as to accomodate in 2x2, 2x3 and 3x3 matrix
		String [] zoneNames = new String[4];
		zoneNames[0] = "Windows";
		zoneNames[1] = "Linux";
		zoneNames[2] = "WAS";
		zoneNames[3] = "Oracle";
		componentMatrixZonesVO.setZoneNames(zoneNames);
		componentMatrixZonesVO.setHeight(100);
		componentMatrixZonesVO.setWidth(100);
	}
	
	@Action(value="/component/MatrixZones", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,componentDataService",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {		
		Gson gson = new Gson();

		Set<String> keys = getParameters().keySet();
		for(String key : keys) {
			System.out.println("key = " + key + " value[0] = " + getParameters().get(key)[0]);
			componentMatrixZonesVO = gson.fromJson(key, ComponentMatrixZonesVO.class);
		}

		// Find the number of different component groups
		//componentDataService.getAllComponents();
		String [] zoneNames = new String[4];
		zoneNames[0] = "Windows";
		zoneNames[1] = "Linux";
		zoneNames[2] = "WAS";
		zoneNames[3] = "Oracle";
		componentMatrixZonesVO.setZoneNames(zoneNames);
		
		return SUCCESS;
	}

	public ComponentMatrixZonesVO getComponentMatrixZonesVO() {
		return componentMatrixZonesVO;
	}

	public void setComponentMatrixZonesVO(
			ComponentMatrixZonesVO componentMatrixZonesVO) {
		this.componentMatrixZonesVO = componentMatrixZonesVO;
	}

}