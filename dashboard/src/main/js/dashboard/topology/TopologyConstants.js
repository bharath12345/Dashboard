define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var TopologyConstants = declare("dashboard.topology.TopologyConstants", null, {});

        TopologyConstants.CLASSNAME.PAGES.TOPOLOGYPAGE = "dashboard.topology.pages.TopologyPage";

        TopologyConstants.CLASSNAME.WIDGETS = {};
        TopologyConstants.CLASSNAME.WIDGETS.RENDERNODES = "dashboard.topology.widgets.RenderNodes";
        TopologyConstants.CLASSNAME.WIDGETS.RENDERCONNECTIVITY = "dashboard.topology.widgets.RenderConnectivity";
        TopologyConstants.CLASSNAME.WIDGETS.NODESTATUS = "dashboard.topology.widgets.NodeStatus";
        TopologyConstants.CLASSNAME.WIDGETS.CONNECTIONSTATUS = "dashboard.topology.widgets.ConnectionStatus";


        TopologyConstants.SUBTYPE.TOPOLOGY = {};
        TopologyConstants.SUBTYPE.TOPOLOGY.NODES = 1;
        TopologyConstants.SUBTYPE.TOPOLOGY.CONNECTIVITY = 2;
        TopologyConstants.SUBTYPE.TOPOLOGY.NODESTATUS = 3;
        TopologyConstants.SUBTYPE.TOPOLOGY.CONNECTIONSTATUS = 4;


        TopologyConstants.ACTION.TOPOLOGY = {};
        TopologyConstants.ACTION.TOPOLOGY.NODES = "topology/Nodes.action";
        TopologyConstants.ACTION.TOPOLOGY.CONNECTIONS = "topology/Connections.action";
        TopologyConstants.ACTION.TOPOLOGY.NODESTATUS = "topology/NodeStatus.action";
        TopologyConstants.ACTION.TOPOLOGY.CONNECTIONSTATUS = "topology/ConnectionStatus.action";

        TopologyConstants.TYPE.TOPOLOGY = 5;

        TopologyConstants.getClassPath = function (name) {
            return name.replace(/\./g, "/");
        }

        return TopologyConstants;
    });
