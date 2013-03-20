define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, Logger) {

        dashboard.classnames.ConfigAppLayersForm = "dashboard.config.forms.ConfigAppLayersForm";

        var ConfigAppLayersForm = declare(dashboard.classnames.ConfigAppLayersForm, null, {

        });

        ConfigAppLayersForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppLayersForm));

        return ConfigAppLayersForm;
    });