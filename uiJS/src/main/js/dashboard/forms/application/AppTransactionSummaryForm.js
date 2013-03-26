define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm"],

    function (declare, i18n, i18nString, Logger, AbstractForm) {

        dashboard.classnames.AppTransactionSummaryForm = "dashboard.forms.application.AppTransactionSummaryForm";

        var AppTransactionSummaryForm = declare(dashboard.classnames.AppTransactionSummaryForm, AbstractForm, {

            title: "Transaction Summary",

            createMenuButtons: function() {
            }

        });

        AppTransactionSummaryForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppTransactionSummaryForm));

        return AppTransactionSummaryForm;
    });