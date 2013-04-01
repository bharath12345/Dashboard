define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger", "dashboard/abstract/AbstractForm"],

    function (declare, i18n, i18nString, Logger, AbstractForm) {

        dashboard.classnames.SqlDBOutliersGridForm = "dashboard.alerts.form.SqlDBOutliersGridForm";

        var SqlDBOutliersGridForm = declare(dashboard.classnames.SqlDBOutliersGridForm, AbstractForm, {

            startup:function () {
                this.inherited(arguments);


            }

        });

        SqlDBOutliersGridForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.SqlDBOutliersGridForm));

        return SqlDBOutliersGridForm;
    });