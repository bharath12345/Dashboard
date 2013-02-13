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
import com.appnomic.noc.viewobject.topology.LayerVO;
import com.appnomic.noc.viewobject.topology.LayerValueVO;
import com.appnomic.noc.viewobject.topology.NetBankingConnectivityStatusVO;
import com.appnomic.noc.viewobject.topology.NetBankingConnectivityVO;
import com.appnomic.noc.viewobject.topology.NetBankingNodeStatusVO;
import com.appnomic.noc.viewobject.topology.NetBankingLayersVO;

@SuppressWarnings("serial")
@ParentPackage("json-default")
@Namespace("/topology")
public class TopologyAction extends AbstractNocAction  {

	private Map<String, String[]> param;
	
	NetBankingLayersVO netBankingLayersVO;
	NetBankingConnectivityVO netBankingConnectivityVO;
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
	
	public NetBankingLayersVO getNetBankingLayersVO() {
		return netBankingLayersVO;
	}

	public void setNetBankingLayersVO(NetBankingLayersVO netBankingLayersVO) {
		this.netBankingLayersVO = netBankingLayersVO;
	}

	public NetBankingConnectivityVO getNetBankingConnectivityVO() {
		return netBankingConnectivityVO;
	}

	public void setNetBankingConnectivityVO(
			NetBankingConnectivityVO netBankingConnectivityVO) {
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
	
	private void setDummyNodesData(NetBankingLayersVO netBankingLayersVO) {
		List<LayerVO> layers = new ArrayList<LayerVO>();
		
		LayerValueVO [] lvos = new LayerValueVO[1];
		lvos[0] = new LayerValueVO();
		lvos[0].setName("WebServers");
		String [] webServers = {"FLXRET_IHS1","FLXRET_IHS2","FLXRET_IHS3","FLXRET_IHS4","FLXRET_IHS5","FLXRET_IHS6"};
		lvos[0].setValue(webServers);
		LayerVO lv = new LayerVO();
		lv.setLayer(lvos);
		lv.setLayertype("Ingress");
		layers.add(lv);
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////
		
		lvos = new LayerValueVO[1];
		lvos[0] = new LayerValueVO();
		lvos[0].setName("AppServers");
		String [] appServers = {"FLXRETWAS1","FLXRETWAS2","FLXRETWAS3","FLXRETWAS4","FLXRETWAS5","FLXRETWAS6","FLXRETWAS7","FLXRETWAS8"};
		lvos[0].setValue(appServers);
		lv = new LayerVO();
		lv.setLayer(lvos);
		lv.setLayertype("Core");
		layers.add(lv);
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////
		
		lvos = new LayerValueVO[3];
		lvos[0] = new LayerValueVO();
		lvos[0].setName("Databases");
		String [] databases = {"FLXRETDB1", "HBNETPRODDB1", "HBNETPRODDB2", "CoreBankingDB", "ExternalDB1", "ExternalDB2"};
		lvos[0].setValue(databases);
		
		lvos[1] = new LayerValueVO();
		lvos[1].setName("MessageQueues");
		String [] messageQueues = {"RTGS_MSGQ", "NEFT_MSGQ"};
		lvos[1].setValue(messageQueues);
		
		lvos[2] = new LayerValueVO();
		lvos[2].setName("TcpEndpoints");
		String [] tcpEndpoints = {"TCP_ENDPNT1", "TCP_ENDPNT2"};
		lvos[2].setValue(tcpEndpoints);
		
		lv = new LayerVO();
		lv.setLayer(lvos);
		lv.setLayertype("Egress");
		layers.add(lv);
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////
		
		LayerVO [] layersVO = layers.toArray(new LayerVO[layers.size()]);
		netBankingLayersVO.setLayers(layersVO);
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
		
		netBankingLayersVO = new NetBankingLayersVO();
		setDummyNodesData(netBankingLayersVO);
		return SUCCESS;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	
	private NetBankingConnectivityVO setDummyWebServerConnectivityData(NetBankingConnectivityVO nbcvo, String name) {
		int numAppServers = 8;
		String [] connections = new String[numAppServers];
		for(int j=0;j<numAppServers;j++) {
			connections[j] = "FLXRETWAS" + (j+1);
		}
		nbcvo.setConnections(connections);
		return nbcvo;
	}
	
	private NetBankingConnectivityVO setDummyAppServerConnectivityData(NetBankingConnectivityVO nbcvo, String name) {
		String [] conn = new String[3];
		conn[0] = "FLXRETDB1";
		conn[1] = "HBNETPRODDB1";
		conn[2] = "HBNETPRODDB2";
		/*conn[3] = "CoreBankingDB";
		conn[4] = "ExternalDB1";
		conn[5] = "ExternalDB2";
		conn[6] = "RTGS_MSGQ";
		conn[7] = "NEFT_MSGQ";
		conn[8] = "TCP_ENDPNT1";
		conn[9] = "TCP_ENDPNT2";*/
		nbcvo.setConnections(conn);
		return nbcvo;
	}
	
	private NetBankingConnectivityVO setDummyDatabaseConnectivityData(NetBankingConnectivityVO nbcvo, String name) {
		String [] conn = new String[0];
		nbcvo.setConnections(conn);
		return nbcvo;
	}
	
	private NetBankingConnectivityVO setDummyMQConnectivityData(NetBankingConnectivityVO nbcvo, String name) {
		String [] conn = new String[0];
		nbcvo.setConnections(conn);
		return nbcvo;
	}
	
	private NetBankingConnectivityVO setDummyTCPConnectivityData(NetBankingConnectivityVO nbcvo, String name) {
		String [] conn = new String[0];
		nbcvo.setConnections(conn);
		return nbcvo;
	}

	@Action(value="/topology/Connections", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,netBankingLayersVO,netBankingNodeStatusVO,netBankingConnectivityStatusVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyConnections() {
		param = getParameters();
		
		String node = (parameters.get("name")[0]);
		String sourceType = (parameters.get("id")[0]);
		
		netBankingConnectivityVO = new NetBankingConnectivityVO();
		netBankingConnectivityVO.setName(node);
		netBankingConnectivityVO.setSourceType(sourceType);
		
		if(sourceType.equalsIgnoreCase("WebServers")) {
			netBankingConnectivityVO.setDstType("AppServers");
			netBankingConnectivityVO = setDummyWebServerConnectivityData(netBankingConnectivityVO, node);	
		} else if(sourceType.equalsIgnoreCase("AppServers")) {
			netBankingConnectivityVO.setDstType("Databases");
			netBankingConnectivityVO = setDummyAppServerConnectivityData(netBankingConnectivityVO, node);
		} else if(sourceType.equalsIgnoreCase("Databases")) {
			netBankingConnectivityVO = setDummyDatabaseConnectivityData(netBankingConnectivityVO, node);
		} else if(sourceType.equalsIgnoreCase("MessageQueues")) {
			netBankingConnectivityVO = setDummyMQConnectivityData(netBankingConnectivityVO, node);
		} else if(sourceType.equalsIgnoreCase("TcpEndpoints")) {
			netBankingConnectivityVO = setDummyTCPConnectivityData(netBankingConnectivityVO, node);
		} else {
			return null;
		}
		return SUCCESS;
	}
	
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


	@Action(value="/topology/NodeStatus", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,netBankingLayersVO,netBankingConnectivityVO,netBankingConnectivityStatusVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String topologyNodeStatus() {
		param = getParameters();
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
	                "parameters,session,SUCCESS,ERROR,netBankingLayersVO,netBankingConnectivityVO,netBankingNodeStatusVO",
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
