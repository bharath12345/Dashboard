package com.appnomic.appsone.dashboard.action.noc;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.appnomic.appsone.dashboard.action.*;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;

import com.appnomic.appsone.dashboard.viewobject.transaction.ApplicationVO;
import com.appnomic.appsone.dashboard.viewobject.transaction.TransactionAppDataVO;
import com.appnomic.appsone.dashboard.viewobject.transaction.TransactionDataVO;
import com.appnomic.appsone.dashboard.viewobject.transaction.TransactionGroupDataVO;
import com.appnomic.appsone.dashboard.viewobject.transaction.TransactionGroupVO;
import com.appnomic.appsone.dashboard.viewobject.transaction.TransactionVO;
import com.appnomic.domainobject.ApplicationData;
import com.appnomic.domainobject.Transaction;
import com.appnomic.domainobject.TransactionSummary;
import com.appnomic.service.ApplicationDataService;
import com.appnomic.service.TransactionDataService;

/*
 * This action always retrieves the 'Meta' for the Grid to be displayed
 * The retrieved data is sent back to client as JSON - refer to the XML to find json there
 * Note: there is NO Query parameter here. The exact meta to send back is configured by the user in a 
 * separate configuration console. So this Action gets input from that configuration
 */
@SuppressWarnings("serial")
@ParentPackage("json-default")
@Namespace("/transaction")
public class TransactionNocAction extends AbstractAction {

	private ApplicationDataService applicationDataService;
	private TransactionDataService transactionDataService;
	
	private ApplicationVO [] applicationVO;
	private TransactionDataVO txDataVO;
	private TransactionAppDataVO appDataVO;
	private Map<String, String[]> param;
	
	enum TxResponseStatus {
		OKAY, SLOW, FAIL
	};
	
	public TransactionDataService getTransactionDataService() {
		return transactionDataService;
	}

	public void setTransactionDataService(
			TransactionDataService transactionDataService) {
		this.transactionDataService = transactionDataService;
	}

	public TransactionAppDataVO getAppDataVO() {
		return appDataVO;
	}

	public void setAppDataVO(TransactionAppDataVO appDataVO) {
		this.appDataVO = appDataVO;
	}

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

	public TransactionNocAction() {
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
		txDataVO = new TransactionDataVO();
		txDataVO.setAlertCount(100);
		txDataVO.setFailCount(10);
		txDataVO.setOkayCount(70);
		txDataVO.setSlowCount(20);
		txDataVO.setTxId(id);
		txDataVO.setTxName(transactionName);
		txDataVO.setVolume(2000);
		txDataVO.setResponse(1000);
	}
	
	@Action(value="/transaction/Data", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,transactionDataService,applicationDataService,applicationVO,appDataVO",
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
	
	private void setDummyAppData(int appId, String appName) {
		appDataVO = new TransactionAppDataVO();
		appDataVO.setAppName(appName);
		appDataVO.setId(appId);
		
		int groups = 2;
		TransactionGroupDataVO [] txGroupVO = new TransactionGroupDataVO [groups];
		appDataVO.setTxGroupVO(txGroupVO);
		
		for(int i=0;i<groups;i++) {
			txGroupVO[i] = new TransactionGroupDataVO();
			txGroupVO[i].setGroupName("txGroup_"+i);
			txGroupVO[i].setId(i);
			
			int txCount = 3;
			TransactionDataVO [] txVO = new TransactionDataVO[txCount];
			txGroupVO[i].setTxDataVO(txVO);
			
			for(int j=0;j<txCount;j++) {
				txVO[j] = new TransactionDataVO();
				txVO[j].setTxId(j);
				txVO[j].setTxName("txName_"+j);
				txVO[j].setVolume(2000);
				txVO[j].setResponse(1000);
				
				txVO[j].setAlertCount(100);
				txVO[j].setFailCount(10);
				txVO[j].setOkayCount(70);
				txVO[j].setSlowCount(20);
			}
		}
	}
	
	@Action(value="/transaction/AppData", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,transactionDataService,applicationDataService,applicationVO,txDataVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String transactionAppData() {
		param = getParameters();
		
		String keyVal = "Transaction App Data: ";
		for(String key : parameters.keySet()) {
			keyVal += "[ " + key + " = ";
			for(String value : parameters.get(key)) {
				keyVal += value + ", ";
			}
			keyVal += "] ";
		}
		System.out.println("key value map = " + keyVal);
		
		String appName = (parameters.get("name")[0]);
		int id = Integer.parseInt(parameters.get("id")[0]);
		System.out.println("transaction app data being assembled for app = " + appName);
		
		boolean makeDummy = true;
		if(makeDummy == true) {
			System.out.println("Dummy flag ON");
		}
		
		appDataVO = new TransactionAppDataVO();
		appDataVO.setAppName(appName);
		appDataVO.setId(id);
		
		TransactionGridConfigManager cgcm = TransactionGridConfigManager.getInstance();
		TransactionGridEntity tge = (TransactionGridEntity)cgcm.getConfig();
		String [] txInterestedIn = tge.getTransactionNames().getUserSetting();
		
		if(txInterestedIn == null || txInterestedIn.length == 0) {
			System.out.println("No transaction configured as interested for data");
			appDataVO = null;
			if(makeDummy == true) {
				setDummyAppData(id, appName);
			}
			return SUCCESS;
		}
		
		//String[] startEndTimes = TimeUtility.get5MinStartEnd();
		String[] startEndTimes = TimeUtility.get30MinStartEnd();
		Map<Integer, TransactionSummary> txSummary = transactionDataService.getTransactionSummaryForApp(id, startEndTimes[0], startEndTimes[1]);
		if(txSummary == null && makeDummy == false) {
			System.out.println("complete txSummary is null");
			appDataVO = null;
			return SUCCESS;
		}

		List<Transaction> appTransactions = transactionDataService.getTransactionPerApplication(id);
		Map<String, ArrayList<Transaction>> txGroupMap = new HashMap<String, ArrayList<Transaction>>();
		for(Transaction appTx : appTransactions) {
			boolean txFound = false;
			for(String intTx : txInterestedIn) {
				if(appTx.getName().equalsIgnoreCase(intTx)) {
					txFound = true;
					break;
				}
			}
			if(txFound == false) {
				// user is has not saved this transactions as one he is interested in - IGNORE IT
				continue;
			}
			ArrayList<Transaction> txList = txGroupMap.get(appTx.getGroupName());
			if(txList == null || txList.size() == 0) {
				txList = new ArrayList<Transaction>();
				txGroupMap.put(appTx.getGroupName(), txList);
			}
			txList.add(appTx);
		}
		
		System.out.println("transaction group map size = " + txGroupMap.size());
		int j = 0;
		TransactionGroupDataVO [] transactionGroups = new TransactionGroupDataVO[txGroupMap.size()];
		appDataVO.setTxGroupVO(transactionGroups);
		
		Set<String> groupNames = txGroupMap.keySet();
		for(String groupName:groupNames){
			System.out.println("setting data for tx group = " + groupName);
			transactionGroups[j] = new TransactionGroupDataVO();
			transactionGroups[j].setGroupName(groupName);
			transactionGroups[j].setId(0);
			
			List<Transaction> txList = txGroupMap.get(groupName);
			TransactionDataVO [] transactions = new TransactionDataVO[txList.size()];
			transactionGroups[j].setTxDataVO(transactions);
			
			int k = 0;
			for(Transaction tx: txList) {
				System.out.println("setting tx summary for = " + tx.getName());

				transactions[k] = new TransactionDataVO();
				transactions[k].setTxId(tx.getId());
				transactions[k].setTxName(tx.getName());

				Long alertCount = (long) 0, failCount = (long) 0, timedoutCount = (long) 0, 
						unknownCount = (long) 0, okayCount = (long) 0, slowCount = (long) 0, volume=(long) 0;
				Long responseTime = (long) 0;
				
				if(txSummary == null && makeDummy == true) {
					System.out.println("summary is null for all including " + tx.getName());
					setDummyData(transactions[k]);
					k++;
					continue;
				}
				
				TransactionSummary summary = txSummary.get(tx.getId());
				
				if(summary == null && makeDummy == true) {
					System.out.println("summary is null for " + tx.getName());
					setDummyData(transactions[k]);
					k++;
					continue;
				} else {
					alertCount = summary.getAlertsCount();
					System.out.println("Values for tx = " + tx.getName() + " alert count = " + alertCount);
					failCount = summary.getFailedCount();
					System.out.println("Values for tx = " + tx.getName() + " fail count = " + failCount);
					okayCount = summary.getSuccessCount();
					System.out.println("Values for tx = " + tx.getName() + " okay count = " + okayCount);
					timedoutCount = summary.getTimedOutCount();
					System.out.println("Values for tx = " + tx.getName() + " timedout count = " + timedoutCount);
					unknownCount = summary.getUnknownCount();
					System.out.println("Values for tx = " + tx.getName() + " unknown count = " + unknownCount);
					slowCount = summary.getSlowCount();
					System.out.println("Values for tx = " + tx.getName() + " slow count = " + slowCount);
					responseTime = summary.getAvgResponseTime().longValue();
					System.out.println("Values for tx = " + tx.getName() + " response time count = " + responseTime);
					volume = summary.getVolume();
					System.out.println("Values for tx = " + tx.getName() + " volume count = " + volume);	
				}
				
				if(alertCount == null) { alertCount = (long) 0;}
				if(failCount == null) { failCount = (long) 0;}
				if (timedoutCount == null) {timedoutCount = (long) 0;}
				if(unknownCount == null) {unknownCount = (long) 0;}
				if(okayCount == null) {okayCount = (long) 0;}
				if(slowCount == null) {slowCount = (long) 0;}
				if(responseTime == null) {responseTime = (long) 0;}
				if(volume == null) {volume = (long) 0;}
				
				transactions[k].setAlertCount(alertCount);
				transactions[k].setFailCount(failCount + timedoutCount + unknownCount);
				transactions[k].setOkayCount(okayCount);
				transactions[k].setSlowCount(slowCount);
				transactions[k].setResponse(responseTime);
				transactions[k].setVolume(volume);
				
				k++;
			}
			j++;
		}
		return SUCCESS;
	}
	
	private void setDummyData(TransactionDataVO transaction) {
		transaction.setVolume(2000);
		transaction.setResponse(1000);
		transaction.setAlertCount(100);
		transaction.setFailCount(10);
		transaction.setOkayCount(70);
		transaction.setSlowCount(20);
	}
	
	public void setDummyMeta() {
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

	@Action(value="/transaction/Meta", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,transactionDataService,applicationDataService,txDataVO,appDataVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String transactionMeta() {
		param = getParameters();
		
		TransactionGridConfigManager cgcm = TransactionGridConfigManager.getInstance();
		TransactionGridEntity tge = (TransactionGridEntity)cgcm.getConfig();
		
		String [] appsInterestedIn = tge.getApplicationNames().getUserSetting();
		String [] txInterestedIn = tge.getTransactionNames().getUserSetting();
		if(appsInterestedIn == null || txInterestedIn == null ||
				appsInterestedIn.length == 0 || txInterestedIn.length == 0) {
			applicationVO = null;
			return SUCCESS;
		}
		
		List<ApplicationData> applications = applicationDataService.getAll();
		List<ApplicationVO> appVOList = new ArrayList<ApplicationVO>();
		
		for(ApplicationData application : applications) {
			boolean appfound = false;
			for(String intApp: appsInterestedIn) {
				if(application.getName().equalsIgnoreCase(intApp)) {
					appfound = true;
					break;
				}
			}
			if(appfound == false) {
				// user is has not saved this application as one he is interested in
				// so none of Tx in this app considered
				continue;
			}
			
			ApplicationVO applicationVO = new ApplicationVO();
			appVOList.add(applicationVO);
			applicationVO.setApplicationName(application.getName());
			applicationVO.setId(application.getId());
			
			List<Transaction> appTransactions = transactionDataService.getTransactionPerApplication(application.getId());
			Map<String, ArrayList<Transaction>> txGroupMap = new HashMap<String, ArrayList<Transaction>>();
			for(Transaction appTx : appTransactions) {
				boolean txFound = false;
				for(String intTx : txInterestedIn) {
					if(appTx.getName().equalsIgnoreCase(intTx)) {
						txFound = true;
						break;
					}
				}
				if(txFound == false) {
					// user is has not saved this transactions as one he is interested in - IGNORE IT
					continue;
				}
				ArrayList<Transaction> txList = txGroupMap.get(appTx.getGroupName());
				if(txList == null || txList.size() == 0) {
					txList = new ArrayList<Transaction>();
					txGroupMap.put(appTx.getGroupName(), txList);
				}
					
				txList.add(appTx);
				System.out.println("added tx = " + appTx.getName() + " of group = " + appTx.getGroupName() + " of app = " + appTx.getAppName());
			}
			
			int j = 0;
			TransactionGroupVO [] transactionGroups = new TransactionGroupVO[txGroupMap.size()];
			applicationVO.setTransactionGroups(transactionGroups);
			
			Set<String> groupNames = txGroupMap.keySet();
			for(String groupName:groupNames){
				transactionGroups[j] = new TransactionGroupVO();
				transactionGroups[j].setGroupName(groupName);
				transactionGroups[j].setId(0);
				
				List<Transaction> txList = txGroupMap.get(groupName);
				TransactionVO [] transactions = new TransactionVO[txList.size()];
				transactionGroups[j].setTransactions(transactions);
				
				int k = 0;
				for(Transaction tx: txList) {
					transactions[k] = new TransactionVO();
					transactions[k].setId(tx.getId());
					transactions[k].setName(tx.getName());
					k++;
				}
				j++;
			}
		}
		applicationVO = appVOList.toArray(new ApplicationVO[appVOList.size()]);
		return SUCCESS;
	}

}
