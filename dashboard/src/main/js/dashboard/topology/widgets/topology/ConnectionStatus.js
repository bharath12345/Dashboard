define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/topology/TopologyConstants", "dashboard/topology/TopologyUtility"],

    function (declare, i18n, i18nString, Logger, TOPOLOGYCONSTANTS, TopologyUtility) {

        var ConnectionStatus = declare(TOPOLOGYCONSTANTS.CLASSNAME.WIDGETS.CONNECTIONSTATUS, null, {

            create: function(data, input) {

            }
        });

        ConnectionStatus.LOG = Logger.addTimer(new Logger(TOPOLOGYCONSTANTS.CLASSNAME.WIDGETS.CONNECTIONSTATUS));

        return ConnectionStatus;
    });