package com.appnomic.noc.viewobject.availability;

public class HostTimesVO {
	
	private String time;
	private HostDataPointVO [] host;
	
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public HostDataPointVO[] getHost() {
		return host;
	}
	public void setHost(HostDataPointVO[] host) {
		this.host = host;
	}
	
}
