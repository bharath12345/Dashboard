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

	private TransactionDaoImpl transactionDaoImpl;
	private ApplicationDataService applicationDataService;
	
	ApplicationVO [] applicationVO;
	private Map<String, String[]> param;
	
	public ApplicationDataService getApplicationDataService() {
		return applicationDataService;
	}

	public void setApplicationDataService(
			ApplicationDataService applicationDataService) {
		this.applicationDataService = applicationDataService;
	}

	public ApplicationVO[] getApplicationVO() {
		return applicationVO;
	}

	public void setApplicationVO(ApplicationVO[] applicationVO) {
		this.applicationVO = applicationVO;
	}

	public TransactionDaoImpl getTransactionDaoImpl() {
		return transactionDaoImpl;
	}

	public void setTransactionDaoImpl(TransactionDaoImpl transactionDaoImpl) {
		this.transactionDaoImpl = transactionDaoImpl;
	}

	public TransactionMetaAction() {
		//setDummyData();
	}
	
	public void setDummyData() {
	}
	
	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	@Action(value="/transaction/Meta", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,transactionDaoImpl",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String nocAction() {
		param = getParameters();
		
		List<ApplicationData> applications = applicationDataService.getAll();
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
		}
		
		return SUCCESS;
	}
	
}
