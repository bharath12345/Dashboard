package com.appnomic.appsone.dashboard.action;

public interface ActionConstants {

	public enum ACCTYPE {
		DIRECTORY,
		CONFIGURATION,
		GRID,
		TOPOLOGY,
		GRAPH
	}
	
	public enum ACCORDION {
		TOPOLOGY,
		NOC,
		ALERTS,
		CUSTOM,
		CONFIG,
		CONFIG_NOC,
		CONFIG_TOPOLOGY
	}
	
	public enum CONFIG {
		NOC,
		TOPOLOGY
	}
	
	public enum CONFIG_NOC {
		APPLICATION_ALERTS,
		TRANSACTION_GRID
	}
	
	public enum CONFIG_TOPOLOGY {
		APPLICATION_LAYERS,
		APPLICATION_GROUPS,
		APPLICATION_TOPOLOGY,
		COMPONENT_TOPOLOGY
	}
	
	public enum ALERTS {
		SAMPLE_ALERTS
	}
	
	public enum CUSTOM {
		CUSTOM_LAYOUTS,
		CUSTOM_VIEWS
	}
	
	public enum TOPOLOGY {
		SAMPLE_TOPOLOGY
	}
	
	public enum NOC {
		APPLICATION_ALERTS,
		TRANSACTION_GRID
	}
}


