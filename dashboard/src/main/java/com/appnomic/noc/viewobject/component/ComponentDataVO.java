package com.appnomic.noc.viewobject.component;

public class ComponentDataVO {

	String componentName;
	String kpiName;
	int kpiValue;
	boolean violation;
	int threshold;
	
	public int getThreshold() {
		return threshold;
	}
	public void setThreshold(int threshold) {
		this.threshold = threshold;
	}
	public String getComponentName() {
		return componentName;
	}
	public void setComponentName(String componentName) {
		this.componentName = componentName;
	}
	public String getKpiName() {
		return kpiName;
	}
	public void setKpiName(String kpiName) {
		this.kpiName = kpiName;
	}
	public int getKpiValue() {
		return kpiValue;
	}
	public void setKpiValue(int kpiValue) {
		this.kpiValue = kpiValue;
	}
	public boolean isViolation() {
		return violation;
	}
	public void setViolation(boolean violation) {
		this.violation = violation;
	}
}
