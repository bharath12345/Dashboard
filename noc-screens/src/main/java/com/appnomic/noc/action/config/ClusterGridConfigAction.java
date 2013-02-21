package com.appnomic.noc.action.config;

import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.domainobject.Cluster;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.config.ClusterGridConfigManager;
import com.appnomic.noc.config.ConfigType;
import com.appnomic.noc.config.LevelDBManager;
import com.appnomic.noc.config.attribute.*;
import com.appnomic.noc.config.entity.ClusterGridEntity;
import com.appnomic.noc.viewobject.config.BooleanAttributeVO;
import com.appnomic.noc.viewobject.config.ClusterGridConfigVO;
import com.appnomic.noc.viewobject.config.IntegerAttributeVO;
import com.appnomic.noc.viewobject.config.PageListVO;
import com.appnomic.noc.viewobject.config.StringArrayAttributeVO;
import com.appnomic.noc.viewobject.config.StringAttributeVO;
import com.appnomic.service.ClusterDataService;

@ParentPackage("json-default")
@Namespace("/config")
public class ClusterGridConfigAction extends AbstractNocAction {

	private ClusterDataService clusterDataService;
	
	private Map<String, String[]> param;
	private ClusterGridEntity cge;
	private ClusterGridConfigVO cgcVO;
	private String [] clusterList;
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public ClusterDataService getClusterDataService() {
		return clusterDataService;
	}

	public void setClusterDataService(ClusterDataService clusterDataService) {
		this.clusterDataService = clusterDataService;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	public ClusterGridEntity getCge() {
		return cge;
	}

	public void setCge(ClusterGridEntity cge) {
		this.cge = cge;
	}

	public ClusterGridConfigVO getCgcVO() {
		return cgcVO;
	}

	public void setCgcVO(ClusterGridConfigVO cgcVO) {
		this.cgcVO = cgcVO;
	}

	public String [] getClusterList() {
		return clusterList;
	}

	public void setClusterList(String [] clusterList) {
		this.clusterList = clusterList;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////

	@Action(value="/config/clusterGridDetailsRetrieve", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,cgcVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String clusterGridDetailsRetrieveAction() {
		param = getParameters();
		ClusterGridConfigManager cgcm = ClusterGridConfigManager.getInstance();
		cge = (ClusterGridEntity)cgcm.getConfig();
		
		List<Cluster> clusters = clusterDataService.getAll();
		clusterList = new String[clusters.size()];
		int i=0;
		for(Cluster cluster: clusters) {
			clusterList[i++] = cluster.getName();
		}
		
		return SUCCESS;
	}
	
	@Action(value="/config/clusterGridDetailsSave", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,cge,cgcVO,clusterList",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String clusterGridDetailsSaveAction() {
		param = getParameters();
		
		Integer refreshTime = ConfigUtilityAction.getInteger("refreshTime", param);
		String [] clusterArray = parameters.get("clusters");
		
		ClusterGridConfigManager cgcm = ClusterGridConfigManager.getInstance();
		cge = (ClusterGridEntity)cgcm.getConfig();
		
		ClusterGridEntity newC =  new ClusterGridEntity();
		newC.setClusterRefreshTime(new IntegerAttribute(60, 60, refreshTime));
		newC.setClusterNames(new StringArrayAttribute(null, null, clusterArray));
		cgcm.saveConfig(newC);
		
		return SUCCESS;
	}
	
	@Action(value="/config/applicableClusterGridDetailsRetrieve", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,cge,clusterList",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String applicableClusterGridDetailsRetriveAction() {
		param = getParameters();
		
		// inspect the param in query to find what level the user is at and form the response accordingly
		// do NOT return the same entity which is persisted but a ViewObject which has values just
		// right for the requesting user and is minimum in size - this object is what will be used by 
		// the dashboard to actually render the UI
		
		ClusterGridConfigManager cgcm = ClusterGridConfigManager.getInstance();
		cge = (ClusterGridEntity)cgcm.getConfig();
		cgcVO = new ClusterGridConfigVO();
		if(cge != null) {
			StringArrayAttributeVO saaVO = new StringArrayAttributeVO();
			saaVO.setValue(cge.getClusterNames().getUserSetting());
			cgcVO.setClusters(saaVO);
			
			IntegerAttributeVO iaVO = new IntegerAttributeVO();
			iaVO.setValue(cge.getClusterRefreshTime().getUserSetting());
			cgcVO.setClusterRefreshTime(iaVO);
		}
		
		return SUCCESS;
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
}
