define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility",
            "noc/data/Topology"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility, TOPOLOGY) {

        var RenderNodes = declare(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES, null, {

            createEndpoint: function(endPointName, id) {
                var node = dojo.create("div");
                node.id = endPointName;
                document.getElementById(id).appendChild(node);
                var endpoint = jsPlumb.addEndpoint(endPointName);
                TOPOLOGY.NODEMAP[endPointName] = endpoint;
            },

            create: function(data, input) {
                var pageName = data.name;
                var webServersArray = input.netBankingNodesVO.webServers;
                for(var i=0;i<webServersArray.length;i++) {
                    this.createEndpoint(webServersArray[i], pageName);
                }

                var appServersArray = input.netBankingNodesVO.appServers;
                for(var i=0;i<appServersArray.length;i++) {
                    this.createEndpoint(appServersArray[i], pageName);
                }

                var databasesArray = input.netBankingNodesVO.databases;
                for(var i=0;i<databasesArray.length;i++) {
                    this.createEndpoint(databasesArray[i], pageName);
                }

                var messageQueuesArray = input.netBankingNodesVO.messageQueues;
                for(var i=0;i<messageQueuesArray.length;i++) {
                    this.createEndpoint(messageQueuesArray[i], pageName);
                }

                var tcpEndpointsArray = input.netBankingNodesVO.tcpEndpoints;
                for(var i=0;i<tcpEndpointsArray.length;i++) {
                    this.createEndpoint(tcpEndpointsArray[i], pageName);
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