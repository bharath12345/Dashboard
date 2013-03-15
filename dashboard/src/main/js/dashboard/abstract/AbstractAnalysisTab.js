define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "noc/Logger"],

    function (declare, i18n, i18nString, Logger) {

        dashboard.classnames.AbstractAnalysisTab = "dashboard.abstract.AbstractAnalysisTab";

        var AbstractAnalysisTab = declare(dashboard.classnames.AbstractAnalysisTab, null, {

        });

        AbstractAnalysisTab.LOG = Logger.addTimer(new Logger(dashboard.classnames.AbstractAnalysisTab));

        return AbstractAnalysisTab;
    });