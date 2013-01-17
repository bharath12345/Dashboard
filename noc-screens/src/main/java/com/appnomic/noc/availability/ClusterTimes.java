package com.appnomic.noc.availability;

public class ClusterTimes {
	
	private String time;
	private ClusterDataPoint [] cluster;
	
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public ClusterDataPoint[] getCluster() {
		return cluster;
	}
	public void setCluster(ClusterDataPoint[] cluster) {
		this.cluster = cluster;
	}

}
