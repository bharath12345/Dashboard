package com.appnomic.appsone.dashboard.viewobject.alert;

/**
 * User: bharadwaj
 * Date: 01/04/13
 * Time: 5:12 PM
 */
public class SqlQueryOutlierVO {

    String componentName;
    long sqlId;
    String sqlText;
    int id;

    public String getComponentName() {
        return componentName;
    }

    public void setComponentName(String componentName) {
        this.componentName = componentName;
    }

    public long getSqlId() {
        return sqlId;
    }

    public void setSqlId(long sqlId) {
        this.sqlId = sqlId;
    }

    public String getSqlText() {
        return sqlText;
    }

    public void setSqlText(String sqlText) {
        this.sqlText = sqlText;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
