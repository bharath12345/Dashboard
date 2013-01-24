package com.appnomic.noc.action.availability;

import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.interceptor.ParameterAware;

import com.appnomic.domainobject.Cluster;
import com.appnomic.domainobject.Component;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.request.RequestHelper;
import com.appnomic.noc.request.objects.RequestNameId;
import com.appnomic.noc.viewobject.availability.ClusterDataPointVO;
import com.appnomic.noc.viewobject.availability.ClusterTimesVO;
import com.appnomic.noc.viewobject.availability.ComponentDataVO;
import com.appnomic.service.ComponentDataService;

@ParentPackage("json-default")
@Namespace("/availability")
public class AvailabilityDataComponentAction extends AbstractNocAction  {
	
	private ComponentDataService componentDataService;	
	
	private ComponentDataVO componentData;
	
	public ComponentDataVO getComponentData() {
		return componentData;
	}

	public void setComponentData(ComponentDataVO componentData) {
		this.componentData = componentData;
	}

	public AvailabilityDataComponentAction() {
		setDummyData();
	}
	
	public ComponentDataService getComponentDataService() {
		return componentDataService;
	}

	public void setComponentDataService(ComponentDataService componentDataService) {
		this.componentDataService = componentDataService;
	}
	
	public void setDummyData() {
		componentData = new ComponentDataVO();
		componentData.setInstanceName("ComponentX");
		
		int clusterCount = 3;
		ClusterTimesVO [] clusterTimes = new ClusterTimesVO[clusterCount];
		componentData.setTimes(clusterTimes);
		for(int i=0;i<clusterCount;i++) {
			clusterTimes[i] = new ClusterTimesVO();
			clusterTimes[i].setTime("10:10");
			
			int clusterDataPoints = 2;
			ClusterDataPointVO [] clusterDataPoint = new ClusterDataPointVO[clusterDataPoints];
			clusterTimes[i].setCluster(clusterDataPoint);
			
			for(int j=0;j<clusterDataPoints;j++) {
				clusterDataPoint[j] = new ClusterDataPointVO();
				clusterDataPoint[j].setName("ClusterX");
				clusterDataPoint[j].setValue(j);//in this dummy sample, j is only 0/1
			}
		}
		
	}

	@Action(value="/availability/ComponentData", results = {
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
		Component component = componentDataService.getComponentInstance(Integer.parseInt(rn.getName()));
		
		
		return SUCCESS;
	}

}
