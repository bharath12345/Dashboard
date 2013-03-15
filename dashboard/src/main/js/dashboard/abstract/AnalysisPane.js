define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, Logger) {

        dashboard.classnames.AnalysisPane = "dashboard.abstract.AnalysisPane";

        var AnalysisPane = declare(dashboard.classnames.AnalysisPane, null, {


        });

        AnalysisPane.LOG = Logger.addTimer(new Logger(dashboard.classnames.AnalysisPane));

        return AnalysisPane;
    });