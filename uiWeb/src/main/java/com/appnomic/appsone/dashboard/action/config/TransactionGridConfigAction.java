package com.appnomic.appsone.dashboard.action.config;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.appnomic.appsone.dashboard.action.AbstractAction;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import com.appnomic.appsone.config.entity.TransactionGrid;
import com.appnomic.appsone.config.entity.UserConfigEntity;
import com.appnomic.appsone.config.persistence.Persistence;

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
	private TransactionGrid tge;

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

	public TransactionGrid getTge() {
		return tge;
	}

	public void setTge(TransactionGrid tge) {
		this.tge = tge;
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

        /*
           1. first get the object with default values set
        */
        tge = TransactionGrid.getDefaultConfig();

        /*
           2. check if the given user has an already persisted config object
           if so, then use those fields to create the 'age' object
        */
        Persistence persistence = new Persistence();
        String json = persistence.get(userUuid);
        UserConfigEntity uce = gson.fromJson(json, UserConfigEntity.class);


        /*
            3. Set the runtime fields of the 'tge' object
        */
        List<String> allApplications = new ArrayList<String>();
        Map<String, String[]> allTransactions = new HashMap<String, String[]>();
        List<ApplicationData> applications = applicationDataService.getAll();
        for(ApplicationData application: applications) {
			allApplications.add(application.getName());

            List<String> appTransactions = new ArrayList<String>();
			List<Transaction> transactions = transactionDataService.getTransactionPerApplication(application.getId());
			for(Transaction transaction : transactions) {
				appTransactions.add(transaction.getName());
			}
            allTransactions.put(application.getName(), appTransactions.toArray(new String[appTransactions.size()]));
		}
		
		tge.setApplications(allApplications.toArray(new String[allApplications.size()]));
		tge.setAllTransactions(allTransactions);
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
		
		/*Integer refreshTime = ConfigUtilityAction.getInteger("refreshTime", param);
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
		tgcm.saveConfig(newTGE);  */
		
		return SUCCESS;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////
	
}
