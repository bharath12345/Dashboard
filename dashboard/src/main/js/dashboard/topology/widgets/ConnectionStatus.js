define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/topology/TopologyConstants", "dashboard/topology/TopologyUtility"],

    function (declare, i18n, i18nString, Logger, TOPOLOGYCONSTANTS, TopologyUtility) {

        dashboard.classnames.ConnectionStatus = "dashboard.topology.widgets.ConnectionStatus";

        var ConnectionStatus = declare(dashboard.classnames.ConnectionStatus, null, {

            create: function(data, input) {

            }
        });

        ConnectionStatus.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConnectionStatus));

        return ConnectionStatus;
    });