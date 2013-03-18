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
		CONFIG
	}
	
	public enum CONFIG {
		// First the Groups
		CONFIG_NOC,
		CONFIG_TOPOLOGY,
		
		// Now the group members
		
		//group 1
		APPLICATION_ALERTS,
		TRANSACTION_GRID,
		
		//group 2
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


