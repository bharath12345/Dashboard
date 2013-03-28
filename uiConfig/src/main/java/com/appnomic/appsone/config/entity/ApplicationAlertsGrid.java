package com.appnomic.appsone.config.entity;

import java.util.ArrayList;
import java.util.List;

public class ApplicationAlertsGrid extends AbstractConfigEntity {

	private int refreshTime = 60;
	private String [] applications;
	
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

    public ApplicationAlertsGrid getDefaultConfig() {
        ApplicationAlertsGrid aag = new ApplicationAlertsGrid();
        String [] applications = {"NetBanking","RTGSPI","UBS","CRMNext","FinnoneLOS","Dealerpad","FinnoneLMS",
                "MobileBanking","FlexRTGS","ICUSTODY","Debos","CMSCollection","CMSDisbursement","ENET","PRMEnterprise",
                "eTreasury","FCCorporate","INSULATION_LAYER","NCB_Test","FCC_Production","HSL_IPO_UAT","SFMS"};

        aag.setApplications(applications);
        return aag;
    }
}
