define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, Logger) {

        dashboard.classnames.ApplicationAnalysisPane = "dashboard.noc.analysistab.ApplicationAnalysisPane";

        var ApplicationAnalysisPane = declare(dashboard.classnames.ApplicationAnalysisPane, null, {

            launch: function(name, id) {

            }

        });

        ApplicationAnalysisPane.LOG = Logger.addTimer(new Logger(dashboard.classnames.ApplicationAnalysisPane));

        return ApplicationAnalysisPane;
    });