define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm"],

    function (declare, i18n, i18nString, Logger, AbstractForm) {

        dashboard.classnames.AppSummaryForm = "dashboard.forms.application.AppSummaryForm";

        var AppSummaryForm = declare(dashboard.classnames.AppSummaryForm, AbstractForm, {

            title: "Application Summary",

            createMenuButtons: function() {
            }

        });

        AppSummaryForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppSummaryForm));

        return AppSummaryForm;
    });