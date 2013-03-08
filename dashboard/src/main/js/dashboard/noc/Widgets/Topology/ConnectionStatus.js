define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/Logger", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility"],

    function (declare, i18n, i18nString, Logger, NOCCONSTANTS, NocUtility) {

        var ConnectionStatus = declare(NOCCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.CONNECTIONSTATUS, null, {

            create: function(data, input) {

            }
        });

        ConnectionStatus.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.CONNECTIONSTATUS));

        return ConnectionStatus;
    });