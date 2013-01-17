package com.appnomic.noc.availability;

public class HostTimes {
	
	private String time;
	private HostDataPoint [] host;
	
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public HostDataPoint[] getHost() {
		return host;
	}
	public void setHost(HostDataPoint[] host) {
		this.host = host;
	}
	
}
