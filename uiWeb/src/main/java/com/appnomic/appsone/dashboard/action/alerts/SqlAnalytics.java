package com.appnomic.appsone.dashboard.action.alerts;

import com.appnomic.appsone.dashboard.action.AbstractAction;
import com.appnomic.appsone.dashboard.action.TimeUtility;
import com.appnomic.appsone.dashboard.viewobject.alert.SqlQueryOutlierVO;
import com.appnomic.common.type.QueryOutlier;
import com.appnomic.exception.InvalidTimeIntervalException;
import com.appnomic.service.OutlierDataManagerService;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * User: bharadwaj
 * Date: 01/04/13
 * Time: 5:06 PM
 */

@ParentPackage("json-default")
@Namespace("/alerts")
public class SqlAnalytics extends AbstractAction {

    OutlierDataManagerService outlierDataManagerService;

    private Map<String, String[]> param;

    private List<SqlQueryOutlierVO> sqlQueryOutlierVOList;

    public Map<String, String[]> getParam() {
        return param;
    }

    public void setParam(Map<String, String[]> param) {
        this.param = param;
    }

    public OutlierDataManagerService getOutlierDataManagerService() {
        return outlierDataManagerService;
    }

    public void setOutlierDataManagerService(OutlierDataManagerService outlierDataManagerService) {
        this.outlierDataManagerService = outlierDataManagerService;
    }

    public List<SqlQueryOutlierVO> getSqlQueryOutlierVOList() {
        return sqlQueryOutlierVOList;
    }

    public void setSqlQueryOutlierVOList(List<SqlQueryOutlierVO> sqlQueryOutlierVOList) {
        this.sqlQueryOutlierVOList = sqlQueryOutlierVOList;
    }

    @Action(value="/alerts/sqlAnalytics", results = {
            @Result(name="success", type="json", params = {
                    "excludeProperties",
                    "parameters,session,SUCCESS,ERROR",
                    "enableGZIP", "true",
                    "encoding", "UTF-8",
                    "noCache","true",
                    "excludeNullProperties","true"
            })})
    public String pagesAction() {
        param = getParameters();

        String[] startEndTimes = TimeUtility.get30MinStartEnd();
        System.out.println("Times = ["+startEndTimes[0] + "] [" + startEndTimes[1] + "]");

        try {
            List<QueryOutlier> queryOutliers = outlierDataManagerService.fetchSqlQueryOutlier(null, null, startEndTimes[0], startEndTimes[1]);
            sqlQueryOutlierVOList = new ArrayList<SqlQueryOutlierVO>();
            for(QueryOutlier qo : queryOutliers) {
                SqlQueryOutlierVO sqlQueryOutlierVO = new SqlQueryOutlierVO();
                sqlQueryOutlierVO.setComponentName(qo.getComponentName());
                sqlQueryOutlierVO.setSqlId(qo.getSqlId());
                sqlQueryOutlierVO.setSqlText(qo.getSqlText());
                sqlQueryOutlierVO.setId(qo.getId());
                sqlQueryOutlierVOList.add(sqlQueryOutlierVO);
            }

            if(queryOutliers == null || queryOutliers.size() == 0) {
                setDummySqlValues();
            }

        } catch (InvalidTimeIntervalException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }

        return SUCCESS;
    }

    private void setDummySqlValues() {
        sqlQueryOutlierVOList = new ArrayList<SqlQueryOutlierVO>();
        for(int i=0;i<5;i++) {
            SqlQueryOutlierVO sqlQueryOutlierVO = new SqlQueryOutlierVO();
            sqlQueryOutlierVO.setComponentName(Integer.toString(i));
            sqlQueryOutlierVO.setSqlId(i);
            sqlQueryOutlierVO.setSqlText(Integer.toString(i));
            sqlQueryOutlierVO.setId(i);
            sqlQueryOutlierVOList.add(sqlQueryOutlierVO);
        }
    }

}
