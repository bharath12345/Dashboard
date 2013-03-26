package com.appnomic.appsone.dashboard.viewobject.transaction;

public class TransactionDataVO {

	String txName;
	int txId;
	long response;
	long volume;
	
	long alertCount;
	long failCount;
	long slowCount;
	long okayCount;
	
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
	public long getResponse() {
		return response;
	}
	public void setResponse(long response) {
		this.response = response;
	}
	public long getVolume() {
		return volume;
	}
	public void setVolume(long volume) {
		this.volume = volume;
	}
	public long getAlertCount() {
		return alertCount;
	}
	public void setAlertCount(long alertCount) {
		this.alertCount = alertCount;
	}
	public long getFailCount() {
		return failCount;
	}
	public void setFailCount(long failCount) {
		this.failCount = failCount;
	}
	public long getSlowCount() {
		return slowCount;
	}
	public void setSlowCount(long slowCount) {
		this.slowCount = slowCount;
	}
	public long getOkayCount() {
		return okayCount;
	}
	public void setOkayCount(long okayCount) {
		this.okayCount = okayCount;
	}
	
	
}
