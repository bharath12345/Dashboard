package com.appnomic.appsone.dashboard.action.alerts;

import com.appnomic.appsone.dashboard.action.AbstractAction;
import com.appnomic.appsone.dashboard.action.TimeUtility;
import com.appnomic.appsone.dashboard.viewobject.alert.SqlQueryOutlierDataVO;
import com.appnomic.appsone.dashboard.viewobject.alert.SqlQueryOutlierMetaVO;
import com.appnomic.common.type.QueryOutlier;
import com.appnomic.common.type.TimeInterval;
import com.appnomic.exception.InvalidTimeIntervalException;
import com.appnomic.service.OutlierDataManagerService;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import java.lang.reflect.Field;
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

    private List<SqlQueryOutlierDataVO> sqlQueryOutlierDataVOList;
    private SqlQueryOutlierMetaVO sqlQueryOutlierMetaVO;

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

    public List<SqlQueryOutlierDataVO> getSqlQueryOutlierDataVOList() {
        return sqlQueryOutlierDataVOList;
    }

    public void setSqlQueryOutlierDataVOList(List<SqlQueryOutlierDataVO> sqlQueryOutlierDataVOList) {
        this.sqlQueryOutlierDataVOList = sqlQueryOutlierDataVOList;
    }

    public SqlQueryOutlierMetaVO getSqlQueryOutlierMetaVO() {
        return sqlQueryOutlierMetaVO;
    }

    public void setSqlQueryOutlierMetaVO(SqlQueryOutlierMetaVO sqlQueryOutlierMetaVO) {
        this.sqlQueryOutlierMetaVO = sqlQueryOutlierMetaVO;
    }

    @Action(value="/alerts/sqlAnalyticsData", results = {
            @Result(name="success", type="json", params = {
                    "excludeProperties",
                    "parameters,session,SUCCESS,ERROR",
                    "enableGZIP", "true",
                    "encoding", "UTF-8",
                    "noCache","true",
                    "excludeNullProperties","true"
            })})
    public String sqlAnalyticsDataAction() {
        param = getParameters();

        String[] startEndTimes = TimeUtility.get30MinStartEnd();
        System.out.println("Times = ["+startEndTimes[0] + "] [" + startEndTimes[1] + "]");

        try {
            List<QueryOutlier> queryOutliers = outlierDataManagerService.fetchSqlQueryOutlier(null, null, startEndTimes[0], startEndTimes[1]);
            sqlQueryOutlierDataVOList = new ArrayList<SqlQueryOutlierDataVO>();
            for(QueryOutlier qo : queryOutliers) {
                SqlQueryOutlierDataVO sqlQueryOutlierDataVO = new SqlQueryOutlierDataVO();

                sqlQueryOutlierDataVO.setComponentName(qo.getComponentName());
                sqlQueryOutlierDataVO.setSqlId(qo.getSqlId());
                sqlQueryOutlierDataVO.setSqlText(qo.getSqlText());
                sqlQueryOutlierDataVO.setId(qo.getId());
                qo.getTimeStamp();

                qo.getSqlQueryKpi().getAvgCpu();// in the form
                // and similar attributes from getSqlQueryKpi

                qo.getViolaitedDbKpis(); // right hand side grid
                // what was the load/status of db during the violation/deviation

                qo.getInferenceMessage(); // in the form

                // frequency of such violations in last X time period
                TimeInterval ti = new TimeInterval();
                ti.resetTimeBackTo(qo.getTimeStamp(), TimeInterval.TimePeriod.HOURS, 1); // for last 1 hour
                int count = outlierDataManagerService.getSqlOutlierOnComponentFrequency(qo.getComponentId(), ti);
                // this count is number of slow queries in last 1 hour

                outlierDataManagerService.getSqlOutlierFrequency(qo.getComponentId(), qo.getSqlId(), ti);
                // the number of occurances for this sql in last 1 hour


                sqlQueryOutlierDataVOList.add(sqlQueryOutlierDataVO);
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
        sqlQueryOutlierDataVOList = new ArrayList<SqlQueryOutlierDataVO>();
        for(int i=0;i<5;i++) {
            SqlQueryOutlierDataVO sqlQueryOutlierDataVO = new SqlQueryOutlierDataVO();
            sqlQueryOutlierDataVO.setComponentName(Integer.toString(i));
            sqlQueryOutlierDataVO.setSqlId(i);
            sqlQueryOutlierDataVO.setSqlText(Integer.toString(i));
            sqlQueryOutlierDataVO.setId(i);
            sqlQueryOutlierDataVOList.add(sqlQueryOutlierDataVO);
        }
    }

    @Action(value="/alerts/sqlAnalyticsMeta", results = {
            @Result(name="success", type="json", params = {
                    "excludeProperties",
                    "parameters,session,SUCCESS,ERROR",
                    "enableGZIP", "true",
                    "encoding", "UTF-8",
                    "noCache","true",
                    "excludeNullProperties","true"
            })})
    public String sqlAnalyticsMeta() {
        param = getParameters();

        SqlQueryOutlierMetaVO sqlQueryOutlierMetaVO = new SqlQueryOutlierMetaVO();
        sqlQueryOutlierMetaVO.setDataActionClass("alerts/sqlAnalyticsData.action");

        List<String> columns = new ArrayList<String>();
        Field[] fields = SqlQueryOutlierDataVO.class.getDeclaredFields();
        for(Field field: fields) {
            columns.add(field.getName());
        }
        sqlQueryOutlierMetaVO.setColumns(columns.toArray(new String[columns.size()]));

        return SUCCESS;
    }

}
