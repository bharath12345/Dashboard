package com.appnomic.noc.availability;

public class KpiTimes {
	private String time;
	private KpiDataPoint [] kpi;
	
	public KpiDataPoint[] getKpi() {
		return kpi;
	}
	public void setKpi(KpiDataPoint[] kpi) {
		this.kpi = kpi;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
}
