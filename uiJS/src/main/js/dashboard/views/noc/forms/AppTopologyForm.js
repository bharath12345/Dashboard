define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm"],

    function (declare, i18n, i18nString, Logger, AbstractForm) {

        dashboard.classnames.AppTopologyForm = "dashboard.noc.forms.application.AppTopologyForm";

        var AppTopologyForm = declare(dashboard.classnames.AppTopologyForm, AbstractForm, {

            title: "Application Topology",
            inAnalysisPane: true,

            createToolbarButtons: function() {
            },

            launch: function() {

            }

        });

        AppTopologyForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppTopologyForm));

        return AppTopologyForm;
    });