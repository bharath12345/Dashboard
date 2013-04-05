define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAnalysisPane", "dashboard/views/analytics/forms/SqlDBOutlierSummaryForm",
    "dashboard/views/analytics/forms/SqlDBOutliersKPIGridForm", "dashboard/views/analytics/forms/SqlDBOutliersKpiTimeseries"],

    function (declare, i18n, i18nString, Logger, AbstractAnalysisPane, SqlDBOutlierSummaryForm, SqlDBOutliersKPIGridForm,
              SqlDBOutliersKpiTimeseries) {

        dashboard.classnames.SqlDBOutliersAnalysisPane = "dashboard.analysis.SqlDBOutliersAnalysisPane";

        var SqlDBOutliersAnalysisPane = declare(dashboard.classnames.SqlDBOutliersAnalysisPane, AbstractAnalysisPane, {

            pageType: dashboard.pageTypes.ANALYTICS, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor

            launch: function(id) {
                this.tabList = [];
                this.tabList.push(new SqlDBOutlierSummaryForm(this.pageType));
                this.tabList.push(new SqlDBOutliersKPIGridForm(this.pageType));
                this.tabList.push(new SqlDBOutliersKpiTimeseries(this.pageType));
            }
        });

        SqlDBOutliersAnalysisPane.LOG = Logger.addTimer(new Logger(dashboard.classnames.SqlDBOutliersAnalysisPane));

        return SqlDBOutliersAnalysisPane;
    });