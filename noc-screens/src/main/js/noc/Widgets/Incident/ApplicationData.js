define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", 'dgrid/Grid', "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Grid, Logger, CONSTANTS, Utility) {

        var ApplicationData = declare(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONDATA, null, {

            create: function(data, input) {

            }

        });

        ApplicationData.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONDATA));

        return ApplicationData;
    });