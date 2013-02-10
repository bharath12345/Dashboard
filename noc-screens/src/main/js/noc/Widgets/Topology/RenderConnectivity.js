define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility",
    "noc/data/Topology"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility, TOPOLOGY) {

        var RenderConnectivity = declare(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERCONNECTIVITY, null, {

            create: function(data, input) {
                var connections = input.netBankingConnectivityVO;
                for(var i=0;i<connections.length;i++) {
                    var nodes = connections[i].nodes;
                    var endpointOne = TOPOLOGY.NODEMAP[nodes[0]];
                    var endpointTwo = TOPOLOGY.NODEMAP[nodes[1]];
                    jsPlumb.connect({ source:endpointOne, target:endpointTwo });
                }

                var pageName = data.name;
                var xpos=0, ypos=0;
                var viewMeta = {
                    id:pageName,
                    name: pageName,
                    type: CONSTANTS.TYPE.TOPOLOGY,
                    subtype: CONSTANTS.SUBTYPE.TOPOLOGY.NODESTATUS,
                    dimensions:[0, 0],
                    position:[xpos,ypos],
                    custom: []
                };

                Utility.xhrPostCentral(CONSTANTS.ACTION.TOPOLOGY.NODESTATUS, viewMeta);

            }
        });

        RenderConnectivity.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERCONNECTIVITY));

        return RenderConnectivity;
    });