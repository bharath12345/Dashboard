define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm", "dijit/form/Form"],

    function (declare, i18n, i18nString, Logger, AbstractForm, Form) {

        dashboard.classnames.ConfigForm = "dashboard.config.ConfigForm";

        var ConfigForm = declare(dashboard.classnames.ConfigForm, [AbstractForm, Form], {

            pageType: dashboard.pageTypes.CONFIG


        });

        ConfigForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigForm));

        return ConfigForm;
    });