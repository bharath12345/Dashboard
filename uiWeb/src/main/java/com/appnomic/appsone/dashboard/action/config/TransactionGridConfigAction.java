package com.appnomic.appsone.dashboard.action.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.appnomic.appsone.dashboard.action.AbstractAction;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.appsone.config.attribute.IntegerAttribute;
import com.appnomic.appsone.config.attribute.StringArrayAttribute;
import com.appnomic.appsone.dashboard.viewobject.config.TransactionGridConfigVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.IntegerAttributeVO;
import com.appnomic.appsone.dashboard.viewobject.config.base.StringArrayAttributeVO;
import com.appnomic.domainobject.ApplicationData;
import com.appnomic.domainobject.Transaction;
import com.appnomic.service.ApplicationDataService;
import com.appnomic.service.TransactionDataService;

@ParentPackage("json-default")
@Namespace("/config")
public class TransactionGridConfigAction extends AbstractAction {

	private ApplicationDataService applicationDataService;
	private TransactionDataService transactionDataService;
	private Map<String, String[]> param;
	private TransactionGridEntity tge;
	private TransactionGridConfigVO tgcVO;
	
	public ApplicationDataService getApplicationDataService() {
		return applicationDataService;
	}

	public void setApplicationDataService(
			ApplicationDataService applicationDataService) {
		this.applicationDataService = applicationDataService;
	}

	public TransactionDataService getTransactionDataService() {
		return transactionDataService;
	}

	public void setTransactionDataService(
			TransactionDataService transactionDataService) {
		this.transactionDataService = transactionDataService;
	}

	public TransactionGridEntity getTge() {
		return tge;
	}

	public void setTge(TransactionGridEntity tge) {
		this.tge = tge;
	}

	public TransactionGridConfigVO getTgcVO() {
		return tgcVO;
	}

	public void setTgcVO(TransactionGridConfigVO tgcVO) {
		this.tgcVO = tgcVO;
	}

	public Map<String, String[]> getParam() {
		return param;
	}

	public void setParam(Map<String, String[]> param) {
		this.param = param;
	}

	
	////////////////////////////////////////////////////////////////////////////////////////////////

	@Action(value="/config/transactionGridDetailsRetrieve", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,applicationDataService,transactionDataService,tgcVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String transactionGridDetailsRetrieveAction() {
		param = getParameters();
		
		TransactionGridConfigManager cgcm = TransactionGridConfigManager.getInstance();
		tge = (TransactionGridEntity)cgcm.getConfig();
		
		List<ApplicationData> applications = applicationDataService.getAll();
		String [] appsInterestedIn = tge.getApplicationNames().getUserSetting();
		
		List<String> allApplications = new ArrayList<String>();
		List<String> userTransactions = new ArrayList<String>();
		
		for(ApplicationData application: applications) {
			allApplications.add(application.getName());
			if(appsInterestedIn == null || appsInterestedIn.length == 0) {
				continue;
			}
			boolean found = false;
			for(String intApp: appsInterestedIn) {
				if(application.getName().equalsIgnoreCase(intApp)) {
					found = true;
					break;
				}
			}
			if(found == false) {
				//user is has not YET saved this application as one he is interested in - so DONT show its Tx
				continue;
			}
			List<Transaction> transactions = transactionDataService.getTransactionPerApplication(application.getId());
			for(Transaction transaction : transactions) {
				userTransactions.add(transaction.getName());
			}
		}
		
		tge.setAllUserApplications(allApplications.toArray(new String[allApplications.size()]));
		tge.setAllUserTransactions(userTransactions.toArray(new String[userTransactions.size()]));
		return SUCCESS;
	}
	
	@Action(value="/config/transactionGridDetailsSave", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,applicationDataService,transactionDataService,tge,tgcVO",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String transactionGridDetailsSaveAction() {
		param = getParameters();
		
		Integer refreshTime = ConfigUtilityAction.getInteger("refreshTime", param);
		String [] applicationArray = parameters.get("applications");
		String [] transactionArray = parameters.get("transactions");
		
		TransactionGridConfigManager tgcm = TransactionGridConfigManager.getInstance();
		tge = (TransactionGridEntity)tgcm.getConfig();
		
		TransactionGridEntity newTGE =  new TransactionGridEntity();
		newTGE.setTransactionRefreshTime(new IntegerAttribute(60, 60, refreshTime));
		newTGE.setTransactionNames(new StringArrayAttribute(null, null, transactionArray));
		newTGE.setApplicationNames(new StringArrayAttribute(null, null, applicationArray));
		newTGE.setAllUserTransactions(null); // this is just for the initial get and never for persistence
		newTGE.setAllUserApplications(null);
		tgcm.saveConfig(newTGE);
		
		return SUCCESS;
	}
	
	@Action(value="/config/applicableTransactionGridDetailsRetrieve", results = {
	        @Result(name="success", type="json", params = {
	        		"excludeProperties",
	                "parameters,session,SUCCESS,ERROR,applicationDataService,transactionDataService,tge",
	        		"enableGZIP", "true",
	        		"encoding", "UTF-8",
	                "noCache","true",
	                "excludeNullProperties","true"
	            })})
	public String applicableTransactionGridDetailsRetriveAction() {
		param = getParameters();
		
		// inspect the param in query to find what level the user is at and form the response accordingly
		// do NOT return the same entity which is persisted but a ViewObject which has values just
		// right for the requesting user and is minimum in size - this object is what will be used by 
		// the dashboard to actually render the UI
		
		TransactionGridConfigManager tgcm = TransactionGridConfigManager.getInstance();
		tge = (TransactionGridEntity)tgcm.getConfig();
		tgcVO = new TransactionGridConfigVO();
		if(tge != null) {
			StringArrayAttributeVO saaVO = new StringArrayAttributeVO();
			saaVO.setValue(tge.getTransactionNames().getUserSetting());
			tgcVO.setTransactions(saaVO);
			
			saaVO = new StringArrayAttributeVO();
			saaVO.setValue(tge.getApplicationNames().getUserSetting());
			tgcVO.setApplications(saaVO);
			
			IntegerAttributeVO iaVO = new IntegerAttributeVO();
			iaVO.setValue(tge.getTransactionRefreshTime().getUserSetting());
			tgcVO.setTransactionRefreshTime(iaVO);
		}
		
		return SUCCESS;
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////
	
}
