package com.appnomic.noc.viewobject.topology;

public class NetBankingConnectivityStatusVO {
	private String source;
	private String destination;
	private int txCount;
	private int responseTime;
	
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public int getTxCount() {
		return txCount;
	}
	public void setTxCount(int txCount) {
		this.txCount = txCount;
	}
	public int getResponseTime() {
		return responseTime;
	}
	public void setResponseTime(int responseTime) {
		this.responseTime = responseTime;
	}
}
