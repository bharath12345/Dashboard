package com.appnomic.appsone.dashboard.viewobject.topology;

public class NetBankingConnectivityVO {

	String sourceType;
	String name;
	String [] connections;
	String dstType;
	
	public String getSourceType() {
		return sourceType;
	}
	public void setSourceType(String sourceType) {
		this.sourceType = sourceType;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String[] getConnections() {
		return connections;
	}
	public void setConnections(String[] connections) {
		this.connections = connections;
	}
	public String getDstType() {
		return dstType;
	}
	public void setDstType(String dstType) {
		this.dstType = dstType;
	}
}
