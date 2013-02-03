package com.appnomic.noc.action.transaction;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;

import com.appnomic.dao.TransactionDaoImpl;
import com.appnomic.domainobject.ApplicationData;
import com.appnomic.domainobject.Cluster;
import com.appnomic.domainobject.Cluster.ComponentData;
import com.appnomic.domainobject.Component;
import com.appnomic.domainobject.Host;
import com.appnomic.domainobject.Transaction;
import com.appnomic.domainobject.TransactionGroup;
import com.appnomic.noc.action.AbstractNocAction;
import com.appnomic.noc.viewobject.availability.ClusterVO;
import com.appnomic.noc.viewobject.availability.ComponentDataVO;
import com.appnomic.noc.viewobject.availability.ComponentVO;
import com.appnomic.noc.viewobject.availability.InstanceVO;
import com.appnomic.noc.viewobject.transaction.ApplicationVO;
import com.appnomic.noc.viewobject.transaction.TransactionDataVO;
import com.appnomic.noc.viewobject.transaction.TransactionGroupVO;
import com.appnomic.noc.viewobject.transaction.TransactionVO;
import com.appnomic.service.ApplicationDataService;
import com.appnomic.service.ClusterDataService;
import com.appnomic.service.ComponentDataService;

/*
 * This action always retrieves the 'Meta' for the Grid to be displayed
 * The retrieved data is sent back to client as JSON - refer to the XML to find json there
 * Note: there is NO Query parameter here. The exact meta to send back is configured by the user in a 
 * separate configuration console. So this Action gets input from that configuration
 */
@SuppressWarnings("serial")
@ParentPackage("json-default")
@Namespace("/transaction")
public class TransactionMetaAction extends AbstractNocAction  {

	//private TransactionDaoImpl transactionDaoImpl;
	private ApplicationDataService applicationDataService;
	
	private ApplicationVO [] applicationVO;
	private TransactionDataVO txDataVO = new TransactionDataVO();
	private Map<String, String[]> param;
	
	public ApplicationDataService getApplicationDataService() {
		return applicationDataService;
	}

	public void setApplicationDataService(
			ApplicationDataService applicationDataService) {
		this.applicationDataService = applicationDataService;
	}

	public TransactionDataVO getTxDataVO() {
		return txDataVO;
	}

	public void setTxDataVO(TransactionDataVO txDataVO) {
		this.txDataVO = txDataVO;
	}

	public ApplicationVO[] getApplicationVO() {
		return applicationVO;
	}

	public void setApplicationVO(ApplicationVO[] applicationVO) {
		this.applicationVO = applicationVO;
	}

	public TransactionMetaAction() {
		setDummyData();
	}
	
	public void setDummyData() {
		int appCount = 10;
		applicationVO = new ApplicationVO[appCount];
		for(int i=0;i<10;i++) {
			applicationVO[i] = new ApplicationVO();
			applicationVO[i].setApplicationName("App_"+i);
			applicationVO[i].setId(i);
		
			int txGroupCount = 5;
			TransactionGroupVO [] transactionGroups = new TransactionGroupVO[txGroupCount];
			applicationVO[i].setTransactionGroups(transactionGroups);
			for(int j=0;j<txGroupCount;j++) {
				transactionGroups[j] = new TransactionGroupVO();
				transactionGroups[j].setGroupName("Group_"+j);
				transactionGroups[j].setId(j);
				
				int txCount = 8; // 10 * 5 * 8 = 400 = approx num of Tx in HDFC
				TransactionVO [] transactions = new TransactionVO[txCount];
				transactionGroups[j].setTransactions(transactions);
				
				for(int k=0;k<txCount;k++) {
					transactions[k] = new TransactionVO();
					transactions[k].setId(k);
					transactions[k].setName("tx_"+k);
				}
			}
		}
		
	}
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}
	
	public String nocAction() {
		return SUCCESS;
	}
	
	private void setDummy(int id, String transactionName){
		txDataVO.setAlerts("HIGH");
		txDataVO.setResponse("SLOW");
		txDataVO.setTxId(id);
		txDataVO.setTxName(transactionName);
		txDataVO.setVolume("2k");
	}
	
	@Action(value="/transaction/Data", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,transactionDaoImpl,applicationDataService,applicationVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String transactionData() {
		param = getParameters();
		
		String keyVal = "Transaction Data: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		
		String transactionName = (parameters.get("name")[0]);
		int id = Integer.parseInt(parameters.get("id")[0]);
		System.out.println("transaction data being assembled = " + transactionName);
		
		setDummy(id, transactionName);
		return SUCCESS;
	}

	@Action(value="/transaction/Meta", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,transactionDaoImpl,applicationDataService,txDataVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String transactionMeta() {
		param = getParameters();
		
		/*List<ApplicationData> applications = applicationDataService.getAll();
		applicationVO = new ApplicationVO[applications.size()];
		int i = 0;
		for(ApplicationData application : applications) {
			applicationVO[i] = new ApplicationVO();
			applicationVO[i].setApplicationName(application.getName());
			applicationVO[i].setId(application.getId());
			
			List<Integer> appTxIds = transactionDaoImpl.getAllTransactionforApp(application.getId());
			Set<String> txGroupNames = new HashSet<String>();
			for(Integer appTxId : appTxIds) {
				Transaction tx = transactionDaoImpl.findTransactionById(appTxId);
				txGroupNames.add(tx.getGroupName());
			}
			
			int j = 0;
			TransactionGroupVO [] transactionGroups = new TransactionGroupVO[txGroupNames.size()];
			applicationVO[i].setTransactionGroups(transactionGroups);
			for(String groupName:txGroupNames){
				transactionGroups[j] = new TransactionGroupVO();
				transactionGroups[j].setGroupName(groupName);
				transactionGroups[j].setId(0);
				
				Set<Integer> txIds = transactionDaoImpl.getTransactionByGroupName(groupName);
				TransactionVO [] transactions = new TransactionVO[txIds.size()];
				transactionGroups[j].setTransactions(transactions);
				int k = 0;
				for(Integer txId: txIds) {
					transactions[k] = new TransactionVO();
					transactions[k].setId(txId);
					transactions[k].setName(transactionDaoImpl.findTransactionById(txId).getName());
					k++;
				}
				j++;
			}
			i++;
		}*/
		
		return SUCCESS;
	}
	
}
