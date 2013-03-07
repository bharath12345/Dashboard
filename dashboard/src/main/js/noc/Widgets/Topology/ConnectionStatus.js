define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility) {

        var ConnectionStatus = declare(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.CONNECTIONSTATUS, null, {

            create: function(data, input) {

            }
        });

        ConnectionStatus.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.CONNECTIONSTATUS));

        return ConnectionStatus;
    });