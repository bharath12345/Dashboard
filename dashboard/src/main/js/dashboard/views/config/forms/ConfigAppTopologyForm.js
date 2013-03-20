define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, Logger) {

        dashboard.classnames.ConfigAppTopologyForm = "dashboard.config.forms.ConfigAppTopologyForm";

        var ConfigAppTopologyForm = declare(dashboard.classnames.ConfigAppTopologyForm, null, {

        });

        ConfigAppTopologyForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppTopologyForm));

        return ConfigAppTopologyForm;
    });