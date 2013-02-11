package com.appnomic.noc.viewobject.topology;

public class NetBankingNodesVO {
	int nodeTypes;
	private String [] webServers;
	private String [] appServers;
	private String [] databases;
	private String [] messageQueues;
	private String [] tcpEndpoints;
	
	public String[] getWebServers() {
		return webServers;
	}
	public int getNodeTypes() {
		return nodeTypes;
	}
	public void setNodeTypes(int nodeTypes) {
		this.nodeTypes = nodeTypes;
	}
	public void setWebServers(String[] webServers) {
		this.webServers = webServers;
	}
	public String[] getAppServers() {
		return appServers;
	}
	public void setAppServers(String[] appServers) {
		this.appServers = appServers;
	}
	public String[] getDatabases() {
		return databases;
	}
	public void setDatabases(String[] databases) {
		this.databases = databases;
	}
	public String[] getMessageQueues() {
		return messageQueues;
	}
	public void setMessageQueues(String[] messageQueues) {
		this.messageQueues = messageQueues;
	}
	public String[] getTcpEndpoints() {
		return tcpEndpoints;
	}
	public void setTcpEndpoints(String[] tcpEndpoints) {
		this.tcpEndpoints = tcpEndpoints;
	}
}
