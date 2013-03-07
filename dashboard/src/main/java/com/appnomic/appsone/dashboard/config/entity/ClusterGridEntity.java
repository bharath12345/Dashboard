package com.appnomic.appsone.dashboard.config.entity;

import com.appnomic.appsone.dashboard.config.attribute.*;

public class ClusterGridEntity extends ConfigEntity {

	StringArrayAttribute clusterNames;
	IntegerAttribute clusterRefreshTime;
	String [] allUserClusters;
	
	public StringArrayAttribute getClusterNames() {
		return clusterNames;
	}
	public String[] getAllUserClusters() {
		return allUserClusters;
	}
	public void setAllUserClusters(String[] allUserClusters) {
		this.allUserClusters = allUserClusters;
	}
	public void setClusterNames(StringArrayAttribute clusterNames) {
		this.clusterNames = clusterNames;
	}
	public IntegerAttribute getClusterRefreshTime() {
		return clusterRefreshTime;
	}
	public void setClusterRefreshTime(IntegerAttribute clusterRefreshTime) {
		this.clusterRefreshTime = clusterRefreshTime;
	}
	
}
