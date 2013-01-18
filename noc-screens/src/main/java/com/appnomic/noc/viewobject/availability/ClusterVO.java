package com.appnomic.noc.viewobject.availability;

public class ClusterVO {

	private String clusterName;
	private HostVO [] host;
	
	public String getClusterName() {
		return clusterName;
	}
	public void setClusterName(String clusterName) {
		this.clusterName = clusterName;
	}
	public HostVO[] getHost() {
		return host;
	}
	public void setHost(HostVO[] host) {
		this.host = host;
	}
}
