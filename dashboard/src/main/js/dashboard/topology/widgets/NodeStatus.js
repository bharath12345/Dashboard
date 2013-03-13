define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/topology/TopologyConstants", "dashboard/topology/TopologyUtility"],

    function (declare, i18n, i18nString, Logger, TOPOLOGYCONSTANTS, TopologyUtility) {

        dashboard.classnames.NodeStatus = "dashboard.topology.widgets.NodeStatus";

        var NodeStatus = declare(dashboard.classnames.NodeStatus, null, {

            create: function(data, input) {

            }
        });

        NodeStatus.LOG = Logger.addTimer(new Logger(dashboard.classnames.NodeStatus));

        return NodeStatus;
    });