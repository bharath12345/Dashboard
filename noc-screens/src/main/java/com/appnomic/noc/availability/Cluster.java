package com.appnomic.noc.availability;

public class Cluster {

	private String clusterName;
	private Host [] host;
	
	public String getClusterName() {
		return clusterName;
	}
	public void setClusterName(String clusterName) {
		this.clusterName = clusterName;
	}
	public Host[] getHost() {
		return host;
	}
	public void setHost(Host[] host) {
		this.host = host;
	}
}
