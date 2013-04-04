define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/noc/abstract/AppSummaryForm"],

    function (declare, i18n, i18nString, Logger, AppSummaryForm) {

        dashboard.classnames.AppSummaryForm = "dashboard.noc.forms.application.AppSummaryForm";

        var AppSummaryForm = declare(dashboard.classnames.AppSummaryForm, AppSummaryForm, {

            title: "Application Summary",
            inAnalysisPane: true,

            createToolbarButtons: function() {
            },

            launch: function() {

            }

        });

        AppSummaryForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppSummaryForm));

        return AppSummaryForm;
    });