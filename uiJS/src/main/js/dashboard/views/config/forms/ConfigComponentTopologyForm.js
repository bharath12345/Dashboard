define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, Logger) {

        dashboard.classnames.ConfigComponentTopologyForm = "dashboard.config.forms.ConfigComponentTopologyForm";

        var ConfigComponentTopologyForm = declare(dashboard.classnames.ConfigComponentTopologyForm, null, {

            title: "Component Topology Configuration",
            inAnalysisPane: false,

            createToolbarButtons: function() {
            },

            launch: function() {

            }
        });

        ConfigComponentTopologyForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigComponentTopologyForm));

        return ConfigComponentTopologyForm;
    });