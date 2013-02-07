package com.appnomic.noc.action.topology;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;

import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.viewobject.topology.NetBankingConnectivityStatusVO;
import com.appnomic.noc.viewobject.topology.NetBankingConnectivityVO;
import com.appnomic.noc.viewobject.topology.NetBankingNodeStatusVO;
import com.appnomic.noc.viewobject.topology.NetBankingNodesVO;

@SuppressWarnings("serial")
@ParentPackage("json-default")
@Namespace("/topology")
public class TopologyAction extends AbstractNocAction  {

	private Map<String, String[]> param;
	
	NetBankingNodesVO netBankingNodesVO;
	NetBankingConnectivityVO [] netBankingConnectivityVO;
	NetBankingNodeStatusVO netBankingNodeStatusVO;
	NetBankingConnectivityStatusVO netBankingConnectivityStatusVO;
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}
	
	public TopologyAction() {
	}
	
	public NetBankingNodesVO getNetBankingNodesVO() {
		return netBankingNodesVO;
	}

	public void setNetBankingNodesVO(NetBankingNodesVO netBankingNodesVO) {
		this.netBankingNodesVO = netBankingNodesVO;
	}

	public NetBankingConnectivityVO[] getNetBankingConnectivityVO() {
		return netBankingConnectivityVO;
	}

	public void setNetBankingConnectivityVO(
			NetBankingConnectivityVO[] netBankingConnectivityVO) {
		this.netBankingConnectivityVO = netBankingConnectivityVO;
	}

	public NetBankingNodeStatusVO getNetBankingNodeStatusVO() {
		return netBankingNodeStatusVO;
	}

	public void setNetBankingNodeStatusVO(
			NetBankingNodeStatusVO netBankingNodeStatusVO) {
		this.netBankingNodeStatusVO = netBankingNodeStatusVO;
	}

	public NetBankingConnectivityStatusVO getNetBankingConnectivityStatusVO() {
		return netBankingConnectivityStatusVO;
	}

	public void setNetBankingConnectivityStatusVO(
			NetBankingConnectivityStatusVO netBankingConnectivityStatusVO) {
		this.netBankingConnectivityStatusVO = netBankingConnectivityStatusVO;
	}

	@Action(value="/topology/Nodes", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,netBankingConnectivityVO,netBankingNodeStatusVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyNodes() {
		//param = getParameters();
		
		netBankingNodesVO = new NetBankingNodesVO();
		
		
		return SUCCESS;
	}

	@Action(value="/topology/Connections", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,netBankingNodesVO,netBankingNodeStatusVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyConnections() {
		//param = getParameters();
		
		netBankingConnectivityVO = new NetBankingConnectivityVO [10]; 
		return SUCCESS;
	}

	@Action(value="/topology/NodeStatus", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,netBankingNodesVO,netBankingConnectivityVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyNodeStatus() {
		//param = getParameters();
		netBankingNodeStatusVO = new NetBankingNodeStatusVO ();
		
		return SUCCESS;
	}

	@Action(value="/topology/ConnectionStatus", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,netBankingNodesVO,netBankingConnectivityVO,netBankingNodeStatusVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyConnectionStatus() {
		//param = getParameters();
		netBankingConnectivityStatusVO = new NetBankingConnectivityStatusVO();
		
		return SUCCESS;
	}

	public void setDummyData() {
		// TODO Auto-generated method stub		
	}

	@Override
	public String nocAction() {
		// TODO Auto-generated method stub
		return null;
	}
	
}
