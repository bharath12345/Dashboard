package com.appnomic.noc.viewobject.transaction;

public class TransactionDataVO {

	String txName;
	int txId;
	boolean alerts;
	String status;
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
	public boolean isAlerts() {
		return alerts;
	}
	public void setAlerts(boolean alerts) {
		this.alerts = alerts;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
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
