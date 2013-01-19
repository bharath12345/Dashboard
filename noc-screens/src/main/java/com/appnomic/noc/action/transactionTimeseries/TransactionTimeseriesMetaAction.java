package com.appnomic.noc.action.transactionTimeseries;

import java.util.ArrayList;

import com.appnomic.noc.action.AbstractNocAction;
import com.opensymphony.xwork2.Action;

public class TransactionTimeseriesMetaAction extends AbstractNocAction {

	public TransactionTimeseriesMetaAction() {
		setDummyData();
	}
	
	public void setDummyData() {
	}

	public String execute() {
		return Action.SUCCESS;
	}
}
