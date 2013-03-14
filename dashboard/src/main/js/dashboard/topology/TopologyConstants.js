define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology"],

    function (require, declare, i18n, i18nString) {

        dashboard.classnames.TopologyConstants = "dashboard.topology.TopologyAccordion";

        // this is a completely static class
        var TopologyConstants = declare(dashboard.classnames.TopologyConstants, null, {});

        TopologyConstants.TYPE = {};
        TopologyConstants.TYPE.TOPOLOGY = 5;

        TopologyConstants.SUBTYPE = {};
        TopologyConstants.SUBTYPE.TOPOLOGY = {};
        TopologyConstants.SUBTYPE.TOPOLOGY.NODES = 1;
        TopologyConstants.SUBTYPE.TOPOLOGY.CONNECTIVITY = 2;
        TopologyConstants.SUBTYPE.TOPOLOGY.NODESTATUS = 3;
        TopologyConstants.SUBTYPE.TOPOLOGY.CONNECTIONSTATUS = 4;


        TopologyConstants.ACTION = {};
        TopologyConstants.ACTION.TOPOLOGY = {};
        TopologyConstants.ACTION.TOPOLOGY.NODES = "topology/Nodes.action";
        TopologyConstants.ACTION.TOPOLOGY.CONNECTIONS = "topology/Connections.action";
        TopologyConstants.ACTION.TOPOLOGY.NODESTATUS = "topology/TopoWidgetNodeStatus.action";
        TopologyConstants.ACTION.TOPOLOGY.CONNECTIONSTATUS = "topology/TopoWidgetConnectionStatus.action";


        TopologyConstants.getClassPath = function (name) {
            return name.replace(/\./g, "/");
        }

        return TopologyConstants;
    });
