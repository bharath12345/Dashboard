package com.appnomic.noc.config.entity;

import com.appnomic.noc.config.attribute.*;

public class TransactionGridEntity extends ConfigEntity {

	StringArrayAttribute applicationNames;
	StringArrayAttribute transactionNames;
	IntegerAttribute transactionRefreshTime;
	String [] allUserTransactions;
	String [] allUserApplications;
	
	public String[] getAllUserApplications() {
		return allUserApplications;
	}
	public void setAllUserApplications(String[] allUserApplications) {
		this.allUserApplications = allUserApplications;
	}
	public StringArrayAttribute getApplicationNames() {
		return applicationNames;
	}
	public void setApplicationNames(StringArrayAttribute applicationNames) {
		this.applicationNames = applicationNames;
	}
	public StringArrayAttribute getTransactionNames() {
		return transactionNames;
	}
	public void setTransactionNames(StringArrayAttribute transactionNames) {
		this.transactionNames = transactionNames;
	}
	public IntegerAttribute getTransactionRefreshTime() {
		return transactionRefreshTime;
	}
	public void setTransactionRefreshTime(IntegerAttribute transactionRefreshTime) {
		this.transactionRefreshTime = transactionRefreshTime;
	}
	public String[] getAllUserTransactions() {
		return allUserTransactions;
	}
	public void setAllUserTransactions(String[] allUserTransactions) {
		this.allUserTransactions = allUserTransactions;
	}
}
