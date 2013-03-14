define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/topology/TopologyConstants", "dashboard/topology/TopologyUtility"],

    function (declare, i18n, i18nString, Logger, TOPOLOGYCONSTANTS, TopologyUtility) {

        dashboard.classnames.TopoWidgetConnectionStatus = "dashboard.topology.widgets.TopoWidgetConnectionStatus";

        var TopoWidgetConnectionStatus = declare(dashboard.classnames.TopoWidgetConnectionStatus, null, {

            create: function(data, input) {

            }
        });

        TopoWidgetConnectionStatus.LOG = Logger.addTimer(new Logger(dashboard.classnames.TopoWidgetConnectionStatus));

        return TopoWidgetConnectionStatus;
    });