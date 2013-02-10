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
	
	private void setDummyNodesData(NetBankingNodesVO netBankingNodesVO) {
		String [] webServers = {"FLXRET_IHS1","FLXRET_IHS2","FLXRET_IHS3","FLXRET_IHS4","FLXRET_IHS5","FLXRET_IHS6"};
		netBankingNodesVO.setWebServers(webServers);
		
		String [] appServers = {"FLXRETWAS1","FLXRETWAS2","FLXRETWAS3","FLXRETWAS4","FLXRETWAS5","FLXRETWAS6","FLXRETWAS7","FLXRETWAS8"};
		netBankingNodesVO.setAppServers(appServers);
		
		String [] databases = {"FLXRETDB1", "HBNETPRODDB1", "HBNETPRODDB2", "CoreBankingDB", "ExternalDB1", "ExternalDB2"};
		netBankingNodesVO.setDatabases(databases);
		
		String [] messageQueues = {"RTGS_MSGQ", "NEFT_MSGQ"};
		netBankingNodesVO.setMessageQueues(messageQueues);
		
		String [] tcpEndpoints = {"TCP_ENDPNT1", "TCP_ENDPNT2"};
		netBankingNodesVO.setTcpEndpoints(tcpEndpoints);
	}

	@Action(value="/topology/Nodes", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,netBankingConnectivityVO,netBankingNodeStatusVO,netBankingConnectivityStatusVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyNodes() {
		param = getParameters();
		
		netBankingNodesVO = new NetBankingNodesVO();
		setDummyNodesData(netBankingNodesVO);
		return SUCCESS;
	}
	
	private List<NetBankingConnectivityVO> setDummyConnectivityData(List<NetBankingConnectivityVO> nbcvo) {
		for(int i=0;i<6;i++) {
			for(int j=0;j<8;j++) {
				NetBankingConnectivityVO vo = new NetBankingConnectivityVO();
				String [] nodes = new String[2];
				nodes[0] = "FLXRET_IHS" + i;
				nodes[1] = "FLXRETWAS" + j;
				vo.setNodes(nodes);
				nbcvo.add(vo);
			}
		}
		
		for(int i=0;i<8;i++) {
			NetBankingConnectivityVO vo = new NetBankingConnectivityVO();
			String [] nodes = new String[2];
			nodes[0] = "FLXRETWAS" + i;
			nodes[1] = "FLXRETDB1";
			vo.setNodes(nodes);
			nbcvo.add(vo);
			
			vo = new NetBankingConnectivityVO();
			nodes = new String[2];
			nodes[0] = "FLXRETWAS" + i;
			nodes[1] = "HBNETPRODDB1";
			vo.setNodes(nodes);
			nbcvo.add(vo);
			
			vo = new NetBankingConnectivityVO();
			nodes = new String[2];
			nodes[0] = "FLXRETWAS" + i;
			nodes[1] = "HBNETPRODDB2";
			vo.setNodes(nodes);
			nbcvo.add(vo);
			
			vo = new NetBankingConnectivityVO();
			nodes = new String[2];
			nodes[0] = "FLXRETWAS" + i;
			nodes[1] = "CoreBankingDB";
			vo.setNodes(nodes);
			nbcvo.add(vo);
			
			vo = new NetBankingConnectivityVO();
			nodes = new String[2];
			nodes[0] = "FLXRETWAS" + i;
			nodes[1] = "ExternalDB1";
			vo.setNodes(nodes);
			nbcvo.add(vo);
			
			vo = new NetBankingConnectivityVO();
			nodes = new String[2];
			nodes[0] = "FLXRETWAS" + i;
			nodes[1] = "ExternalDB2";
			vo.setNodes(nodes);
			nbcvo.add(vo);
			
			vo = new NetBankingConnectivityVO();
			nodes = new String[2];
			nodes[0] = "FLXRETWAS" + i;
			nodes[1] = "RTGS_MSGQ";
			vo.setNodes(nodes);
			nbcvo.add(vo);
			
			vo = new NetBankingConnectivityVO();
			nodes = new String[2];
			nodes[0] = "FLXRETWAS" + i;
			nodes[1] = "NEFT_MSGQ";
			vo.setNodes(nodes);
			nbcvo.add(vo);

			vo = new NetBankingConnectivityVO();
			nodes = new String[2];
			nodes[0] = "FLXRETWAS" + i;
			nodes[1] = "TCP_ENDPNT1";
			vo.setNodes(nodes);
			nbcvo.add(vo);
			
			vo = new NetBankingConnectivityVO();
			nodes = new String[2];
			nodes[0] = "FLXRETWAS" + i;
			nodes[1] = "TCP_ENDPNT2";
			vo.setNodes(nodes);
			nbcvo.add(vo);
		}
		
		return nbcvo;
	}

	@Action(value="/topology/Connections", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,netBankingNodesVO,netBankingNodeStatusVO,netBankingConnectivityStatusVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyConnections() {
		param = getParameters();
		
		List<NetBankingConnectivityVO> nbcvo = new ArrayList<NetBankingConnectivityVO>();
		nbcvo = setDummyConnectivityData(nbcvo);
		netBankingConnectivityVO = nbcvo.toArray(new NetBankingConnectivityVO[nbcvo.size()]);
		return SUCCESS;
	}

	@Action(value="/topology/NodeStatus", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,netBankingNodesVO,netBankingConnectivityVO,netBankingConnectivityStatusVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyNodeStatus() {
		//param = getParameters();
		netBankingNodeStatusVO = new NetBankingNodeStatusVO ();

		String name = parameters.get("name")[0];
		netBankingNodeStatusVO.setName(name);
		
		int [] componentStaticAlerts = {0,10,20};
		netBankingNodeStatusVO.setComponentStaticAlerts(componentStaticAlerts);
		
		int [] componentDynamicAlerts = {1,5,8};
		netBankingNodeStatusVO.setComponentDynamicAlerts(componentDynamicAlerts);
		
		int [] componentAvailabilityAlerts = {2, 8, 3};
		netBankingNodeStatusVO.setComponentAvailabilityAlerts(componentAvailabilityAlerts);
		
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
		param = getParameters();
		
		netBankingConnectivityStatusVO = new NetBankingConnectivityStatusVO();
		String source = parameters.get("source")[0];
		netBankingConnectivityStatusVO.setSource(source);
		
		String destination = parameters.get("destination")[0];
		netBankingConnectivityStatusVO.setDestination(destination);
		
		netBankingConnectivityStatusVO.setResponseTime(10);
		netBankingConnectivityStatusVO.setTxCount(20);
		
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
