package com.appnomic.noc.viewobject.transaction;

public class ApplicationVO {
	
	String applicationName;
	int id;
	TransactionGroupVO [] transactionGroups;
	
	public String getApplicationName() {
		return applicationName;
	}
	public void setApplicationName(String applicationName) {
		this.applicationName = applicationName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public TransactionGroupVO[] getTransactionGroups() {
		return transactionGroups;
	}
	public void setTransactionGroups(TransactionGroupVO[] transactionGroups) {
		this.transactionGroups = transactionGroups;
	}
}
