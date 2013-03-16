define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAnalysisTab"],

    function (declare, i18n, i18nString, Logger, AbstractAnalysisTab) {

        dashboard.classnames.TabB = "dashboard.tab.application.TabB";

        var TabB = declare(dashboard.classnames.TabB, AbstractAnalysisTab, {

        });

        TabB.LOG = Logger.addTimer(new Logger(dashboard.classnames.TabB));

        return TabB;
    });