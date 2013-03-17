define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAnalysisTab"],

    function (declare, i18n, i18nString, Logger, AbstractAnalysisTab) {

        dashboard.classnames.AppTopologyTab = "dashboard.tab.application.AppTopologyTab";

        var AppTopologyTab = declare(dashboard.classnames.AppTopologyTab, AbstractAnalysisTab, {

            title: "Application Topology",

            createMenuButtons: function() {
            }

        });

        AppTopologyTab.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppTopologyTab));

        return AppTopologyTab;
    });