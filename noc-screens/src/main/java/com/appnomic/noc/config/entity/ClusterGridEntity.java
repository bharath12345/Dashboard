package com.appnomic.noc.config.entity;

import com.appnomic.noc.config.attribute.*;

public class ClusterGridEntity extends ConfigEntity {

	StringArrayAttribute clusterNames;
	IntegerAttribute clusterRefreshTime;
	
	public StringArrayAttribute getClusterNames() {
		return clusterNames;
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
