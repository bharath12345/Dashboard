package com.appnomic.noc.viewobject.config;

public class ClusterGridConfigVO {
	StringArrayAttributeVO clusters;
	IntegerAttributeVO clusterRefreshTime;
	
	public StringArrayAttributeVO getClusters() {
		return clusters;
	}
	public void setClusters(StringArrayAttributeVO clusters) {
		this.clusters = clusters;
	}
	public IntegerAttributeVO getClusterRefreshTime() {
		return clusterRefreshTime;
	}
	public void setClusterRefreshTime(IntegerAttributeVO clusterRefreshTime) {
		this.clusterRefreshTime = clusterRefreshTime;
	}
	
}
