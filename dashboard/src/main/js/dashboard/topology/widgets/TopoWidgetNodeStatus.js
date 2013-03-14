define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/topology/TopologyConstants", "dashboard/topology/TopologyUtility"],

    function (declare, i18n, i18nString, Logger, TOPOLOGYCONSTANTS, TopologyUtility) {

        dashboard.classnames.TopoWidgetNodeStatus = "dashboard.topology.widgets.TopoWidgetNodeStatus";

        var TopoWidgetNodeStatus = declare(dashboard.classnames.TopoWidgetNodeStatus, null, {

            create: function(data, input) {

            }
        });

        TopoWidgetNodeStatus.LOG = Logger.addTimer(new Logger(dashboard.classnames.TopoWidgetNodeStatus));

        return TopoWidgetNodeStatus;
    });