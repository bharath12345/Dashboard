package com.appnomic.noc.viewobject.topology;

public class NetBankingNodeStatusVO {
	
	private String name;
	private int [] componentStaticAlerts;
	private int [] componentDynamicAlerts;
	private int [] componentAvailabilityAlerts;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int[] getComponentStaticAlerts() {
		return componentStaticAlerts;
	}
	public void setComponentStaticAlerts(int[] componentStaticAlerts) {
		this.componentStaticAlerts = componentStaticAlerts;
	}
	public int[] getComponentDynamicAlerts() {
		return componentDynamicAlerts;
	}
	public void setComponentDynamicAlerts(int[] componentDynamicAlerts) {
		this.componentDynamicAlerts = componentDynamicAlerts;
	}
	public int[] getComponentAvailabilityAlerts() {
		return componentAvailabilityAlerts;
	}
	public void setComponentAvailabilityAlerts(int[] componentAvailabilityAlerts) {
		this.componentAvailabilityAlerts = componentAvailabilityAlerts;
	}
}
