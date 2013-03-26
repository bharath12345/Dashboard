define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm"],

    function (declare, i18n, i18nString, Logger, AbstractForm) {

        dashboard.classnames.AppComponentSummaryForm = "dashboard.forms.application.AppComponentSummaryForm";

        var AppComponentSummaryForm = declare(dashboard.classnames.AppComponentSummaryForm, AbstractForm, {

            title: "Application Component Summary",

            createMenuButtons: function() {
            }

        });

        AppComponentSummaryForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppComponentSummaryForm));

        return AppComponentSummaryForm;
    });