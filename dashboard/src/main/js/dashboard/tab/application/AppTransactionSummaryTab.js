define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAnalysisTab"],

    function (declare, i18n, i18nString, Logger, AbstractAnalysisTab) {

        dashboard.classnames.AppTransactionSummaryTab = "dashboard.tab.application.AppTransactionSummaryTab";

        var AppTransactionSummaryTab = declare(dashboard.classnames.AppTransactionSummaryTab, AbstractAnalysisTab, {

            title: "Transaction Summary",

            createMenuButtons: function() {
            }

        });

        AppTransactionSummaryTab.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppTransactionSummaryTab));

        return AppTransactionSummaryTab;
    });