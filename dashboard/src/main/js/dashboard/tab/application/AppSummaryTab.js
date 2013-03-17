define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAnalysisTab"],

    function (declare, i18n, i18nString, Logger, AbstractAnalysisTab) {

        dashboard.classnames.AppSummaryTab = "dashboard.tab.application.AppSummaryTab";

        var AppSummaryTab = declare(dashboard.classnames.AppSummaryTab, AbstractAnalysisTab, {

            title: "Application Summary",

            createMenuButtons: function() {
            }

        });

        AppSummaryTab.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppSummaryTab));

        return AppSummaryTab;
    });