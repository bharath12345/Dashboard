define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAnalysisTab"],

    function (declare, i18n, i18nString, Logger, AbstractAnalysisTab) {

        dashboard.classnames.TabA = "dashboard.tab.application.TabA";

        var TabA = declare(dashboard.classnames.TabA, AbstractAnalysisTab, {

        });

        TabA.LOG = Logger.addTimer(new Logger(dashboard.classnames.TabA));

        return TabA;
    });