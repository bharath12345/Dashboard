package com.appnomic.appsone.config.entity;

public class ApplicationAlertsGridEntity extends AbstractConfigEntity {

	private int refreshTime = 60;

	private String [] applications; // user setting

    // applications to choose from - this field should always be set at runtime from the
    // ApplicatonService Bean and is never persisted
    private String [] allApplications;
	
	public int getRefreshTime() {
		return refreshTime;
	}
	public void setRefreshTime(int refreshTime) {
		this.refreshTime = refreshTime;
	}
	public String [] getApplications() {
		return applications;
	}
	public void setApplications(String [] applications) {
		this.applications = applications;
	}
    public String[] getAllApplications() {
        return allApplications;
    }
    public void setAllApplications(String[] allApplications) {
        this.allApplications = allApplications;
    }

    /*
       "refreshTime" is a field which has a default value set in the POJO itself and shown
           on the UI as part of the default config

       "applications" is a field whose value is set by reading all the available applications from
           A1 db at run-time. So the default config will not have its value set

    */
    public static ApplicationAlertsGridEntity getDefaultConfig() {
        ApplicationAlertsGridEntity aag = new ApplicationAlertsGridEntity();
        String [] apps = {"NetBanking","RTGSPI","UBS","CRMNext","FinnoneLOS","Dealerpad","FinnoneLMS",
                "MobileBanking","FlexRTGS","ICUSTODY","Debos","CMSCollection","CMSDisbursement","ENET","PRMEnterprise",
                "eTreasury","FCCorporate","INSULATION_LAYER","NCB_Test","FCC_Production","HSL_IPO_UAT","SFMS"};
        aag.setApplications(apps);
        return aag;
    }

}
