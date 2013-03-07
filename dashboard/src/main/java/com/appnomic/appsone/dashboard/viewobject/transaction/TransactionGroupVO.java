package com.appnomic.appsone.dashboard.viewobject.transaction;

public class TransactionGroupVO {
	
	String groupName;
	int id;
	TransactionVO [] transactions;
	
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public TransactionVO[] getTransactions() {
		return transactions;
	}
	public void setTransactions(TransactionVO[] transactions) {
		this.transactions = transactions;
	}
}
