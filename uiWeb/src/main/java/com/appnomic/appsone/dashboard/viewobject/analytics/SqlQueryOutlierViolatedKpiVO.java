package com.appnomic.appsone.dashboard.viewobject.analytics;

import java.util.List;

/**
 * User: bharadwaj
 * Date: 01/04/13
 * Time: 5:12 PM
 */
public class SqlQueryOutlierViolatedKpiVO {

    List<String> violatedDbKpis;
    int id;

    public List<String> getViolatedDbKpis() {
        return violatedDbKpis;
    }

    public void setViolatedDbKpis(List<String> violatedDbKpis) {
        this.violatedDbKpis = violatedDbKpis;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}