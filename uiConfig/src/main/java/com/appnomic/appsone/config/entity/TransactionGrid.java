package com.appnomic.appsone.config.entity;

import java.util.Map;

/**
 * User: bharadwaj
 * Date: 30/03/13
 * Time: 9:09 AM
 */
public class TransactionGrid extends AbstractConfigEntity {

    private int refreshTime = 60;
    private String [] applications;
    private String [] transactions;

    /*
        applications and transactions to choose from - these fields should always be set at runtime
        from the ApplicatonService Bean and is never persisted
    */
    private String [] allApplications;
    private Map<String, String[]> allTransactions;

    public int getRefreshTime() {
        return refreshTime;
    }

    public void setRefreshTime(int refreshTime) {
        this.refreshTime = refreshTime;
    }

    public String[] getApplications() {
        return applications;
    }

    public void setApplications(String[] applications) {
        this.applications = applications;
    }

    public String[] getTransactions() {
        return transactions;
    }

    public void setTransactions(String[] transactions) {
        this.transactions = transactions;
    }

    public String[] getAllApplications() {
        return allApplications;
    }

    public void setAllApplications(String[] allApplications) {
        this.allApplications = allApplications;
    }

    public Map<String, String[]> getAllTransactions() {
        return allTransactions;
    }

    public void setAllTransactions(Map<String, String[]> allTransactions) {
        this.allTransactions = allTransactions;
    }

    /*
       'refreshTime' is a field which has a default value set in the POJO itself and shown
           on the UI as part of the default config

       'applications' and 'transactiosn' are fields whose value is set by reading all the available ones from
           A1 db at run-time. So the default config will not have its value set

    */
    public static TransactionGrid getDefaultConfig() {
        TransactionGrid transactionGrid = new TransactionGrid();
        return transactionGrid;
    }
}
