package com.appnomic.appsone.config.console;

import com.appnomic.appsone.config.persistence.PanesPersistence;

public class PanesConsole {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
	
		
		/*
		 * steps for execution
		 * 		1) check if the username/password is valid
		 * 		2) take action per command line options
		 */

		
		
		/*
		 *  arguments to the main are -
		 *  	1) get or set
		 *  	2) if get() - username/password to get for
		 *  	3) if set() - (a) username/password to set for (b) list of panes {alerts, topology, configuration, noc, custom}
		 *		
		 *		Example:
		 *				>java -cp:/~/tomcat/appnomic/lib/* com.~.PanesPersistence --username=debasis --password=password get
		 *				>{json of PaneListEntity}
		 *
		 *				>java -cp:/~/tomcat/appnomic/lib/* com.~.PanesPersistence --username=debasis --password=password --set=alerts,configuration
		 *				>{json of PaneListEntity}
		 *				
		 */

		PanesPersistence panesPersistence = new PanesPersistence();
		
		panesPersistence.get(null);
		panesPersistence.set(null, null);
		panesPersistence.persist();
		
	}

}
