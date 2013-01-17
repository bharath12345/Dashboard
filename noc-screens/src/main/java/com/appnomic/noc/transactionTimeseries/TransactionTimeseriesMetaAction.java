package com.appnomic.noc.transactionTimeseries;

import java.util.ArrayList;

import com.opensymphony.xwork2.Action;

//import org.apache.struts2.convention.annotation.Action;
//import org.apache.struts2.convention.annotation.Actions;
//import org.apache.struts2.convention.annotation.Result;
//import org.apache.struts2.convention.annotation.Results;
//import org.apache.struts2.dispatcher.ServletDispatcherResult;


/*
 * This action always retrieves the 'Meta' for the Grid to be displayed
 * The retrieved data is sent back to client as JSON - refer to the XML to find json there
 * Note: there is NO Query parameter here. The exact meta to send back is configured by the user in a 
 * separate configuration console. So this Action gets input from that configuration
 */

//@Results({
//	  @Result(name="SUCCESS", location="/availability/AvailabilityMeta.jsp")
//	})

public class TransactionTimeseriesMetaAction {

	public TransactionTimeseriesMetaAction() {
		setDummyData();
	}
	
	public void setDummyData() {
	}

	public String execute() {
		return Action.SUCCESS;
	}
}
