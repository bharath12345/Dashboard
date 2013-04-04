define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/noc/abstract/AppForm"],

    function (declare, i18n, i18nString, Logger, AppForm) {

        dashboard.classnames.AppTopologyForm = "dashboard.noc.forms.application.AppTopologyForm";

        var AppTopologyForm = declare(dashboard.classnames.AppTopologyForm, AppForm, {

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