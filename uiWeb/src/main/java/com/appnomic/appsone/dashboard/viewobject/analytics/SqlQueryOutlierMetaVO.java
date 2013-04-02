package com.appnomic.appsone.dashboard.viewobject.analytics;

/**
 * User: bharadwaj
 * Date: 01/04/13
 * Time: 5:12 PM
 */
public class SqlQueryOutlierMetaVO {

    String [] columns;
    String dataActionClass;

    public String[] getColumns() {
        return columns;
    }

    public void setColumns(String[] columns) {
        this.columns = columns;
    }

    public String getDataActionClass() {
        return dataActionClass;
    }

    public void setDataActionClass(String dataActionClass) {
        this.dataActionClass = dataActionClass;
    }
}
