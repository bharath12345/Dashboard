package com.appnomic.noc.viewobject.transaction;

public class TransactionDataVO {

	String txName;
	int txId;
	String alerts;
	String response;
	String volume;
	
	public String getTxName() {
		return txName;
	}
	public void setTxName(String txName) {
		this.txName = txName;
	}
	public int getTxId() {
		return txId;
	}
	public void setTxId(int txId) {
		this.txId = txId;
	}
	public String getAlerts() {
		return alerts;
	}
	public void setAlerts(String alerts) {
		this.alerts = alerts;
	}
	public String getResponse() {
		return response;
	}
	public void setResponse(String response) {
		this.response = response;
	}
	public String getVolume() {
		return volume;
	}
	public void setVolume(String volume) {
		this.volume = volume;
	}
}
