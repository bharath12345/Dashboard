define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AnalysisPane", "dashboard/tab/application/AppComponentSummaryTab",
    "dashboard/tab/application/AppSummaryTab", "dashboard/tab/application/AppTopologyTab",
    "dashboard/tab/application/AppTransactionSummaryTab"],

    function (declare, i18n, i18nString, Logger, AnalysisPane, AppComponentSummaryTab, AppSummaryTab,
              AppTopologyTab, AppTransactionSummaryTab) {

        dashboard.classnames.ApplicationAnalysisPane = "dashboard.noc.tab.application.ApplicationAnalysisPane";

        var ApplicationAnalysisPane = declare(dashboard.classnames.ApplicationAnalysisPane, AnalysisPane, {

            launch: function(name, id) {
                this.tabList = [];
                this.tabList.push(new AppSummaryTab());
                this.tabList.push(new AppTopologyTab());
                this.tabList.push(new AppTransactionSummaryTab());
                this.tabList.push(new AppComponentSummaryTab());
            }

        });

        ApplicationAnalysisPane.LOG = Logger.addTimer(new Logger(dashboard.classnames.ApplicationAnalysisPane));

        return ApplicationAnalysisPane;
    });