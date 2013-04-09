package com.appnomic.appsone.dashboard.action.analytics;

import com.appnomic.appsone.dashboard.action.AbstractAction;
import com.appnomic.appsone.common.TimeUtility;
import com.appnomic.appsone.dashboard.viewobject.analytics.*;
import com.appnomic.common.type.QueryOutlier;
import com.appnomic.common.type.TimeInterval;
import com.appnomic.domainobject.DataPoint;
import com.appnomic.exception.InvalidTimeIntervalException;
import com.appnomic.service.OutlierDataManagerService;
import com.appnomic.service.DataPointExtractorService;
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
@Namespace("/analytics")
public class SqlAnalytics extends AbstractAction {

    private OutlierDataManagerService outlierDataManagerService;
    private DataPointExtractorService dataPointExtractorService;

    private Map<String, String[]> param;

    private List<SqlQueryOutlierDataVO> sqlQueryOutlierDataVOList;
    private SqlQueryOutlierMetaVO sqlQueryOutlierMetaVO;
    private SqlQueryOutlierFormVO sqlQueryOutlierFormVO;
    private SqlQueryOutlierViolatedKpiVO sqlQueryOutlierViolatedKpiVO;
    private List<SqlQueryOutlierViolatedKpiTimeseriesVO> sqlQueryOutlierViolatedKpiTimeseriesVOList;

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

    public SqlQueryOutlierFormVO getSqlQueryOutlierFormVO() {
        return sqlQueryOutlierFormVO;
    }

    public void setSqlQueryOutlierFormVO(SqlQueryOutlierFormVO sqlQueryOutlierFormVO) {
        this.sqlQueryOutlierFormVO = sqlQueryOutlierFormVO;
    }

    public SqlQueryOutlierViolatedKpiVO getSqlQueryOutlierViolatedKpiVO() {
        return sqlQueryOutlierViolatedKpiVO;
    }

    public void setSqlQueryOutlierViolatedKpiVO(SqlQueryOutlierViolatedKpiVO sqlQueryOutlierViolatedKpiVO) {
        this.sqlQueryOutlierViolatedKpiVO = sqlQueryOutlierViolatedKpiVO;
    }

    public DataPointExtractorService getDataPointExtractorService() {
        return dataPointExtractorService;
    }

    public void setDataPointExtractorService(DataPointExtractorService dataPointExtractorService) {
        this.dataPointExtractorService = dataPointExtractorService;
    }

    public List<SqlQueryOutlierViolatedKpiTimeseriesVO> getSqlQueryOutlierViolatedKpiTimeseriesVOList() {
        return sqlQueryOutlierViolatedKpiTimeseriesVOList;
    }

    public void setSqlQueryOutlierViolatedKpiTimeseriesVOList(List<SqlQueryOutlierViolatedKpiTimeseriesVO> sqlQueryOutlierViolatedKpiTimeseriesVOList) {
        this.sqlQueryOutlierViolatedKpiTimeseriesVOList = sqlQueryOutlierViolatedKpiTimeseriesVOList;
    }

    @Action(value = "/analytics/sqlAnalyticsViolatedKpiTimeseries", results = {
            @Result(name = "success", type = "json", params = {
                    "excludeProperties",
                    "parameters,session,SUCCESS,ERROR,sqlQueryOutlierDataVOList,outlierDataManagerService," +
                            "sqlQueryOutlierMetaVO, sqlQueryOutlierFormVO,dataPointExtractorService",
                    "enableGZIP", "true",
                    "encoding", "UTF-8",
                    "noCache", "true",
                    "excludeNullProperties", "true"
            })})
    public String sqlAnalyticsViolatedKpiTimeseries() {
        param = getParameters();

        String keyVal = "sqlAnalyticsForm: ";
        for (String key : parameters.keySet()) {
            keyVal += "[ " + key + " = ";
            for (String value : parameters.get(key)) {
                keyVal += value + ", ";
            }
            keyVal += "] ";
        }
        System.out.println("key value map = " + keyVal);

        int componentId = Integer.parseInt(parameters.get("id")[0]);
        String kpiName = parameters.get("name")[0];

        String[] startEndTimes = TimeUtility.get1YearStartEnd();
        System.out.println("Times = [" + startEndTimes[0] + "] [" + startEndTimes[1] + "]");
        List<DataPoint> dataPointList = dataPointExtractorService.fetchDataPointForKpi(componentId, kpiName, startEndTimes[0], startEndTimes[1]);

        sqlQueryOutlierViolatedKpiTimeseriesVOList = new ArrayList<SqlQueryOutlierViolatedKpiTimeseriesVO>();
        for(DataPoint dp: dataPointList) {
            long time = dp.getEpochTime();
            Number number = dp.getSample();
            float value = number.floatValue();

            SqlQueryOutlierViolatedKpiTimeseriesVO sqlQueryOutlierViolatedKpiTimeseriesVO = new SqlQueryOutlierViolatedKpiTimeseriesVO();
            sqlQueryOutlierViolatedKpiTimeseriesVO.setTime(time);
            sqlQueryOutlierViolatedKpiTimeseriesVO.setValue(value);
            sqlQueryOutlierViolatedKpiTimeseriesVOList.add(sqlQueryOutlierViolatedKpiTimeseriesVO);
        }

        return SUCCESS;
    }

    @Action(value = "/analytics/sqlAnalyticsViolatedKPI", results = {
            @Result(name = "success", type = "json", params = {
                    "excludeProperties",
                    "parameters,session,SUCCESS,ERROR,sqlQueryOutlierDataVOList,outlierDataManagerService," +
                            "sqlQueryOutlierMetaVO, sqlQueryOutlierFormVO,dataPointExtractorService",
                    "enableGZIP", "true",
                    "encoding", "UTF-8",
                    "noCache", "true",
                    "excludeNullProperties", "true"
            })})
    public String sqlAnalyticsViolatedKPI() {
        param = getParameters();

        String keyVal = "sqlAnalyticsForm: ";
        for (String key : parameters.keySet()) {
            keyVal += "[ " + key + " = ";
            for (String value : parameters.get(key)) {
                keyVal += value + ", ";
            }
            keyVal += "] ";
        }
        System.out.println("key value map = " + keyVal);

        int id = Integer.parseInt(parameters.get("id")[0]);

        sqlQueryOutlierViolatedKpiVO = new SqlQueryOutlierViolatedKpiVO();
        QueryOutlier qo = outlierDataManagerService.fetchSqlQueryOutlier(id);

        // what was the load/status of db during the violation/deviation
        sqlQueryOutlierViolatedKpiVO.setViolatedDbKpis(qo.getViolaitedDbKpis()); // list of values
        sqlQueryOutlierViolatedKpiVO.setId(qo.getComponentId());

        return SUCCESS;
    }

    @Action(value = "/analytics/sqlAnalyticsForm", results = {
            @Result(name = "success", type = "json", params = {
                    "excludeProperties",
                    "parameters,session,SUCCESS,ERROR,sqlQueryOutlierDataVOList,outlierDataManagerService," +
                            "sqlQueryOutlierMetaVO,sqlQueryOutlierViolatedKpiVO,dataPointExtractorService",
                    "enableGZIP", "true",
                    "encoding", "UTF-8",
                    "noCache", "true",
                    "excludeNullProperties", "true"
            })})
    public String sqlAnalyticsForm() {
        param = getParameters();

        String keyVal = "sqlAnalyticsForm: ";
        for (String key : parameters.keySet()) {
            keyVal += "[ " + key + " = ";
            for (String value : parameters.get(key)) {
                keyVal += value + ", ";
            }
            keyVal += "] ";
        }
        System.out.println("key value map = " + keyVal);

        int id = Integer.parseInt(parameters.get("id")[0]);

        sqlQueryOutlierFormVO = new SqlQueryOutlierFormVO();
        QueryOutlier qo = outlierDataManagerService.fetchSqlQueryOutlier(id);
        sqlQueryOutlierFormVO.setComponentName(qo.getComponentName());
        sqlQueryOutlierFormVO.setSqlId(qo.getSqlId());
        sqlQueryOutlierFormVO.setSqlText(qo.getSqlText());
        sqlQueryOutlierFormVO.setId(qo.getId());
        sqlQueryOutlierFormVO.setTimestamp(qo.getTimeStamp());
        sqlQueryOutlierFormVO.setInferenceMessage(qo.getInferenceMessage());
        sqlQueryOutlierFormVO.setComponentId(qo.getComponentId());

        sqlQueryOutlierFormVO.setAvgCpu(qo.getSqlQueryKpi().getAvgCpu());
        sqlQueryOutlierFormVO.setAppWaitTime(qo.getSqlQueryKpi().getAppWaitTime());
        sqlQueryOutlierFormVO.setAvgElapsedTime(qo.getSqlQueryKpi().getAvgElapsedTime());
        sqlQueryOutlierFormVO.setDiskReads(qo.getSqlQueryKpi().getDiskReads());
        sqlQueryOutlierFormVO.setDiskWrites(qo.getSqlQueryKpi().getDiskWrites());
        sqlQueryOutlierFormVO.setExecutionsCount(qo.getSqlQueryKpi().getExecutionsCount());
        sqlQueryOutlierFormVO.setFetchCount(qo.getSqlQueryKpi().getFetchCount());
        sqlQueryOutlierFormVO.setRowsProcessed(qo.getSqlQueryKpi().getRowsProcessed());
        sqlQueryOutlierFormVO.setSortCount(qo.getSqlQueryKpi().getSortCount());


        // frequency of such violations in last X time period
        TimeInterval ti = new TimeInterval();
        ti.resetTimeBackTo(qo.getTimeStamp(), TimeInterval.TimePeriod.HOURS, 1); // for last 1 hour
        int count = outlierDataManagerService.getSqlOutlierOnComponentFrequency(qo.getComponentId(), ti);
        sqlQueryOutlierFormVO.setLastHourOutliers(count);// this count is number of slow queries in last 1 hour
        int occurrences = outlierDataManagerService.getSqlOutlierFrequency(qo.getComponentId(), qo.getSqlId(), ti); // ## occurrences for this sql in last 1 hour
        sqlQueryOutlierFormVO.setLastHourOccurrences(occurrences);

        ti.resetTimeBackTo(qo.getTimeStamp(), TimeInterval.TimePeriod.HOURS, 24); // for last 1 hour
        count = outlierDataManagerService.getSqlOutlierOnComponentFrequency(qo.getComponentId(), ti);
        sqlQueryOutlierFormVO.setLastDayOutliers(count);// this count is number of slow queries in last 1 day
        occurrences = outlierDataManagerService.getSqlOutlierFrequency(qo.getComponentId(), qo.getSqlId(), ti); // ## occurrences for this sql in last 1 day
        sqlQueryOutlierFormVO.setLastDayOccurrences(occurrences);


        return SUCCESS;
    }

    @Action(value = "/analytics/sqlAnalyticsData", results = {
            @Result(name = "success", type = "json", params = {
                    "excludeProperties",
                    "parameters,session,SUCCESS,ERROR,outlierDataManagerService,sqlQueryOutlierMetaVO," +
                            "sqlQueryOutlierFormVO,sqlQueryOutlierViolatedKpiVO,dataPointExtractorService",
                    "enableGZIP", "true",
                    "encoding", "UTF-8",
                    "noCache", "true",
                    "excludeNullProperties", "true"
            })})
    public String sqlAnalyticsData() {
        param = getParameters();

        String[] startEndTimes = TimeUtility.get1YearStartEnd();
        System.out.println("Times = [" + startEndTimes[0] + "] [" + startEndTimes[1] + "]");

        try {
            List<QueryOutlier> queryOutliers = outlierDataManagerService.fetchSqlQueryOutlier(null, null, startEndTimes[0], startEndTimes[1]);
            sqlQueryOutlierDataVOList = new ArrayList<SqlQueryOutlierDataVO>();
            for (QueryOutlier qo : queryOutliers) {
                SqlQueryOutlierDataVO sqlQueryOutlierDataVO = new SqlQueryOutlierDataVO();

                sqlQueryOutlierDataVO.setComponentName(qo.getComponentName());
                sqlQueryOutlierDataVO.setSqlId(qo.getSqlId());
                sqlQueryOutlierDataVO.setSqlText(qo.getSqlText());
                sqlQueryOutlierDataVO.setId(qo.getId());
                sqlQueryOutlierDataVO.setTimestamp(qo.getTimeStamp());

                sqlQueryOutlierDataVOList.add(sqlQueryOutlierDataVO);
            }

            if (queryOutliers == null || queryOutliers.size() == 0) {
                setDummySqlValues();
            }

        } catch (InvalidTimeIntervalException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }

        return SUCCESS;
    }

    private void setDummySqlValues() {
        sqlQueryOutlierDataVOList = new ArrayList<SqlQueryOutlierDataVO>();
        for (int i = 0; i < 5; i++) {
            SqlQueryOutlierDataVO sqlQueryOutlierDataVO = new SqlQueryOutlierDataVO();
            sqlQueryOutlierDataVO.setComponentName(Integer.toString(i));
            sqlQueryOutlierDataVO.setSqlId(i);
            sqlQueryOutlierDataVO.setSqlText(Integer.toString(i));
            sqlQueryOutlierDataVO.setId(i);
            sqlQueryOutlierDataVOList.add(sqlQueryOutlierDataVO);
        }
    }

    @Action(value = "/analytics/sqlAnalyticsMeta", results = {
            @Result(name = "success", type = "json", params = {
                    "excludeProperties",
                    "parameters,session,SUCCESS,ERROR,sqlQueryOutlierDataVOList,outlierDataManagerService," +
                            "sqlQueryOutlierFormVO,sqlQueryOutlierViolatedKpiVO,dataPointExtractorService",
                    "enableGZIP", "true",
                    "encoding", "UTF-8",
                    "noCache", "true",
                    "excludeNullProperties", "true"
            })})
    public String sqlAnalyticsMeta() {
        param = getParameters();

        sqlQueryOutlierMetaVO = new SqlQueryOutlierMetaVO();
        sqlQueryOutlierMetaVO.setDataActionClass("analytics/sqlAnalyticsData.action");

        List<String> columns = new ArrayList<String>();
        Field[] fields = SqlQueryOutlierDataVO.class.getDeclaredFields();
        for (Field field : fields) {
            columns.add(field.getName());
        }
        sqlQueryOutlierMetaVO.setColumns(columns.toArray(new String[columns.size()]));

        return SUCCESS;
    }

}
