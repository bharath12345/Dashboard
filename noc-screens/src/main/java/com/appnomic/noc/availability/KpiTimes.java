package com.appnomic.noc.availability;

public class KpiTimes {
	private String time;
	private KpiDataPoint [] host;
	
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public KpiDataPoint[] getHost() {
		return host;
	}
	public void setHost(KpiDataPoint[] host) {
		this.host = host;
	}
}
