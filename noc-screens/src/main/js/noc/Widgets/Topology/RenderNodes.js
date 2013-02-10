define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility) {

        var RenderNodes = declare(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES, null, {

            createEndpoint: function(endPointName, id) {
                var node = dojo.create("div");
                node.id = endPointName;
                document.getElementById(id).appendChild(node);
                jsPlumb.addEndpoint(endPointName);
            },

            create: function(data, input) {
                var webServersArray = input.netBankingNodesVO.webServers;
                for(var i=0;i<webServersArray.length;i++) {
                    this.createEndpoint(webServersArray[i], data.custom[0]);
                }

                var appServersArray = input.netBankingNodesVO.appServers;
                for(var i=0;i<appServersArray.length;i++) {
                    this.createEndpoint(appServersArray[i], data.custom[0]);
                }

                var databasesArray = input.netBankingNodesVO.databases;
                for(var i=0;i<databasesArray.length;i++) {
                    this.createEndpoint(databasesArray[i], data.custom[0]);
                }

                var messageQueuesArray = input.netBankingNodesVO.messageQueues;
                for(var i=0;i<messageQueuesArray.length;i++) {
                    this.createEndpoint(messageQueuesArray[i], data.custom[0]);
                }

                var tcpEndpointsArray = input.netBankingNodesVO.tcpEndpoints;
                for(var i=0;i<tcpEndpoints.length;i++) {
                    this.createEndpoint(tcpEndpoints[i], data.custom[0]);
                }

                var xpos=0, ypos=0;
                var viewMeta = {
                    id:pageName,
                    name: pageName,
                    type: CONSTANTS.TYPE.TOPOLOGY,
                    subtype: CONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIVITY,
                    dimensions:[0, 0],
                    position:[xpos,ypos],
                    custom: []
                };

                Utility.xhrPostCentral(CONSTANTS.ACTION.TOPOLOGY.CONNECTIONS, viewMeta);

            }
        });

        RenderNodes.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES));

        return RenderNodes;
    });