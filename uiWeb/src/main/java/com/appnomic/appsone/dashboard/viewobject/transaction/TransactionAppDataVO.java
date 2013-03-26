package com.appnomic.appsone.dashboard.viewobject.transaction;

public class TransactionAppDataVO {

	String appName;
	int id;
	TransactionGroupDataVO [] txGroupVO;
	
	public String getAppName() {
		return appName;
	}
	public void setAppName(String appName) {
		this.appName = appName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public TransactionGroupDataVO[] getTxGroupVO() {
		return txGroupVO;
	}
	public void setTxGroupVO(TransactionGroupDataVO[] txGroupVO) {
		this.txGroupVO = txGroupVO;
	}
}
