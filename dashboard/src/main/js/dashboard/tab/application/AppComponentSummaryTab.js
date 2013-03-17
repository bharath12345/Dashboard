define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAnalysisTab"],

    function (declare, i18n, i18nString, Logger, AbstractAnalysisTab) {

        dashboard.classnames.AppComponentSummaryTab = "dashboard.tab.application.AppComponentSummaryTab";

        var AppComponentSummaryTab = declare(dashboard.classnames.AppComponentSummaryTab, AbstractAnalysisTab, {

            title: "Application Component Summary",

            createMenuButtons: function() {
            }

        });

        AppComponentSummaryTab.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppComponentSummaryTab));

        return AppComponentSummaryTab;
    });