package com.appnomic.noc.availability;

public class Cluster {

	private String clusterName;
	private ClusterMember [] clusterMember;
	
	public String getClusterName() {
		return clusterName;
	}
	public void setClusterName(String clusterName) {
		this.clusterName = clusterName;
	}
	public ClusterMember[] getClusterMember() {
		return clusterMember;
	}
	public void setClusterMember(ClusterMember[] clusterMember) {
		this.clusterMember = clusterMember;
	}
}
