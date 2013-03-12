define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/topology/TopologyConstants", "dashboard/topology/TopologyUtility"],

    function (declare, i18n, i18nString, Logger, TOPOLOGYCONSTANTS, TopologyUtility) {

        var NodeStatus = declare(TOPOLOGYCONSTANTS.CLASSNAME.WIDGETS.NODESTATUS, null, {

            create: function(data, input) {

            }
        });

        NodeStatus.LOG = Logger.addTimer(new Logger(TOPOLOGYCONSTANTS.CLASSNAME.WIDGETS.NODESTATUS));

        return NodeStatus;
    });