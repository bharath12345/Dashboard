package com.appnomic.appsone.dashboard.viewobject.analytics;

import java.util.List;

/**
 * User: bharadwaj
 * Date: 01/04/13
 * Time: 5:12 PM
 */
public class SqlQueryOutlierFormVO {

    String componentName;
    long sqlId;
    String sqlText;
    int id;
    String timestamp;

    private long avgCpu;
    private long rowsProcessed;
    private long appWaitTime;
    private long avgElapsedTime;
    private long executionsCount;
    private long sortCount;
    private long fetchCount;
    private long diskReads;
    private long diskWrites;

    private long lastHourOutliers;
    private long lastDayOutliers;
    private long lastHourOccurrences;
    private long lastDayOccurrences;

    private String inferenceMessage;

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

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

    public long getAvgCpu() {
        return avgCpu;
    }

    public void setAvgCpu(long avgCpu) {
        this.avgCpu = avgCpu;
    }

    public long getRowsProcessed() {
        return rowsProcessed;
    }

    public void setRowsProcessed(long rowsProcessed) {
        this.rowsProcessed = rowsProcessed;
    }

    public long getAppWaitTime() {
        return appWaitTime;
    }

    public void setAppWaitTime(long appWaitTime) {
        this.appWaitTime = appWaitTime;
    }

    public long getAvgElapsedTime() {
        return avgElapsedTime;
    }

    public void setAvgElapsedTime(long avgElapsedTime) {
        this.avgElapsedTime = avgElapsedTime;
    }

    public long getExecutionsCount() {
        return executionsCount;
    }

    public void setExecutionsCount(long executionsCount) {
        this.executionsCount = executionsCount;
    }

    public long getSortCount() {
        return sortCount;
    }

    public void setSortCount(long sortCount) {
        this.sortCount = sortCount;
    }

    public long getFetchCount() {
        return fetchCount;
    }

    public void setFetchCount(long fetchCount) {
        this.fetchCount = fetchCount;
    }

    public long getDiskReads() {
        return diskReads;
    }

    public void setDiskReads(long diskReads) {
        this.diskReads = diskReads;
    }

    public long getDiskWrites() {
        return diskWrites;
    }

    public void setDiskWrites(long diskWrites) {
        this.diskWrites = diskWrites;
    }

    public String getInferenceMessage() {
        return inferenceMessage;
    }

    public void setInferenceMessage(String inferenceMessage) {
        this.inferenceMessage = inferenceMessage;
    }

    public long getLastHourOutliers() {
        return lastHourOutliers;
    }

    public void setLastHourOutliers(long lastHourOutliers) {
        this.lastHourOutliers = lastHourOutliers;
    }

    public long getLastDayOutliers() {
        return lastDayOutliers;
    }

    public void setLastDayOutliers(long lastDayOutliers) {
        this.lastDayOutliers = lastDayOutliers;
    }

    public long getLastHourOccurrences() {
        return lastHourOccurrences;
    }

    public void setLastHourOccurrences(long lastHourOccurrences) {
        this.lastHourOccurrences = lastHourOccurrences;
    }

    public long getLastDayOccurrences() {
        return lastDayOccurrences;
    }

    public void setLastDayOccurrences(long lastDayOccurrences) {
        this.lastDayOccurrences = lastDayOccurrences;
    }

}
