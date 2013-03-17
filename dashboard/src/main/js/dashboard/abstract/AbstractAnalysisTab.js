define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dijit/layout/ContentPane"],

    function (declare, i18n, i18nString, Logger, ContentPane) {

        dashboard.classnames.AbstractAnalysisTab = "dashboard.abstract.AbstractAnalysisTab";

        var AbstractAnalysisTab = declare(dashboard.classnames.AbstractAnalysisTab, ContentPane, {

        });

        AbstractAnalysisTab.LOG = Logger.addTimer(new Logger(dashboard.classnames.AbstractAnalysisTab));

        return AbstractAnalysisTab;
    });