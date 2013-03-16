define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAnalysisTab"],

    function (declare, i18n, i18nString, Logger, AbstractAnalysisTab) {

        dashboard.classnames.TabC = "dashboard.tab.application.TabC";

        var TabC = declare(dashboard.classnames.TabC, AbstractAnalysisTab, {

        });

        TabC.LOG = Logger.addTimer(new Logger(dashboard.classnames.TabC));

        return TabC;
    });