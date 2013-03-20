define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, Logger) {

        dashboard.classnames.ConfigAppGroupsForm = "dashboard.config.forms.ConfigAppGroupsForm";

        var ConfigAppGroupsForm = declare(dashboard.classnames.ConfigAppGroupsForm, null, {

        });

        ConfigAppGroupsForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppGroupsForm));

        return ConfigAppGroupsForm;
    });