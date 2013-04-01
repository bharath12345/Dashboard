define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, Logger) {

        dashboard.classnames.XXX = "dashboard.XXX";

        var XXX = declare(dashboard.classnames.XXX, null, {

        });

        XXX.LOG = Logger.addTimer(new Logger(dashboard.classnames.XXX));

        return XXX;
    });