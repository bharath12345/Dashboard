define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/noc/abstract/AppForm"],

    function (declare, i18n, i18nString, Logger, AppForm) {

        dashboard.classnames.AppComponentSummaryForm = "dashboard.noc.forms.application.AppComponentSummaryForm";

        var AppComponentSummaryForm = declare(dashboard.classnames.AppComponentSummaryForm, AppForm, {

            title: "Application Component Summary",
            inAnalysisPane: true,
            pageType: dashboard.pageTypes.NOC, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor

            createToolbarButtons: function() {
            },

            launch: function() {

            }

        });

        AppComponentSummaryForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppComponentSummaryForm));

        return AppComponentSummaryForm;
    });