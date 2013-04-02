define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAnalysisPane", "dashboard/views/analytics/forms/SqlDBOutlierSummaryForm"],

    function (declare, i18n, i18nString, Logger, AbstractAnalysisPane, SqlDBOutlierSummaryForm) {

        dashboard.classnames.SqlDBOutliersAnalysisPane = "dashboard.analysis.SqlDBOutliersAnalysisPane";

        var SqlDBOutliersAnalysisPane = declare(dashboard.classnames.SqlDBOutliersAnalysisPane, AbstractAnalysisPane, {

            launch: function(id) {
                this.tabList = [];
                this.tabList.push(new SqlDBOutlierSummaryForm());

            }
        });

        SqlDBOutliersAnalysisPane.LOG = Logger.addTimer(new Logger(dashboard.classnames.SqlDBOutliersAnalysisPane));

        return SqlDBOutliersAnalysisPane;
    });