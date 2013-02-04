package com.appnomic.noc.viewobject.transaction;

public class TransactionGroupDataVO {
	String groupName;
	int id;
	TransactionDataVO [] txDataVO;
	
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
	public TransactionDataVO[] getTxDataVO() {
		return txDataVO;
	}
	public void setTxDataVO(TransactionDataVO[] txDataVO) {
		this.txDataVO = txDataVO;
	}
}
