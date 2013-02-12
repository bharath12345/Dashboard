define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc",
    "dijit/TitlePane", "dojox/layout/GridContainer",
    "noc/Logger", "noc/Constants", "noc/Utility", "noc/data/Topology"],

    function (declare, i18n, i18nString, TitlePane, GridContainer, Logger, CONSTANTS, Utility, TOPOLOGY) {

        var RenderNodes = declare(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES, null, {

            getSvgIcon:function (src, width, height) {
                var svgIcon = dojo.create("img");
                svgIcon.src = src;
                //svgIcon.type = "image/svg+xml";
                svgIcon.height = width;
                svgIcon.width = height;
                return svgIcon;
            },

            createEndpoint:function (endPointsArray, divCol, type, width, height) {
                var styleString = "width: " + width + "; height: " + height + ";";
                for (var i = 0; i < endPointsArray.length; i++) {
                    var node = dojo.create("div");
                    node.id = endPointsArray[i];
                    node.style.cssText = styleString;
                    divCol.appendChild(node);
                    //var endpoint = jsPlumb.addEndpoint(endPointName);
                    //TOPOLOGY.NODEMAP[endPointName] = endpoint;

                    var imgW = 50, imgH = 50;
                    switch (type) {
                        case RenderNodes.TYPE.WEBSERVER:
                            var svgIcon = this.getSvgIcon("./images/topology/osa_server_web.svg", imgW, imgH);
                            node.appendChild(svgIcon);
                            break;

                        case RenderNodes.TYPE.APPSERVER:
                            var svgIcon = this.getSvgIcon("./images/topology/osa_server_application.svg", imgW, imgH);
                            node.appendChild(svgIcon);
                            break;

                        case RenderNodes.TYPE.DATABASES:
                            var svgIcon = this.getSvgIcon("./images/topology/osa_database.svg", imgW, imgH);
                            node.appendChild(svgIcon);
                            break;

                        case RenderNodes.TYPE.MESSAGEQ:
                            var svgIcon = this.getSvgIcon("./images/topology/Messaging_Queue.svg", imgW, imgH);
                            node.appendChild(svgIcon);
                            break;

                        case RenderNodes.TYPE.TCPENDPOINTS:
                            var svgIcon = this.getSvgIcon("./images/topology/osa_ics_drive.svg", imgW, imgH);
                            node.appendChild(svgIcon);
                            break;

                        default:
                            console.log("unknown end point type = " + type);
                            return;
                    }
                }
            },

            createColumnPanes:function (pageName, names, width, height) {
                console.log("in createColumnPanes = " + (names.length) + " w = " + width + " h = " + height);
                try {
                    var styleString = "width: " + (width / (names.length)) + "; height: " + height + ";";

                    var titlePanes = [];
                    for (var i = 0; i < names.length; i++) {
                        console.log("new pane for = " + names[i]);
                        var titlePane = new TitlePane({
                            splitter:false,
                            style:styleString,
                            content:"<div id='" + names[i] + RenderNodes.COLUMN_SUFFIX + "' style='width: 100%; height: 100%;'></div>",
                            title:names[i],
                            toggleable:false
                        });
                        titlePanes[i] = titlePane;
                    }

                    console.log("pageName = " + pageName);

                    var gridContainer = new GridContainer({nbZones:names.length, isAutoOrganized:true,
                        style:"width: 100%; height: 100%;"});
                    noc.pages.TopologyPage.TitlePane.addChild(gridContainer);
                    gridContainer.disableDnd();

                    var j = 0, k = 0;
                    for (var i = 0; i < names.length; i++) {
                        j = (i % (names.length));
                        k = parseInt(i / (names.length));
                        gridContainer.addChild(titlePanes[i], j, k);
                    }
                    gridContainer.startup();
                    gridContainer.resize();

                    this.removeMargins(gridContainer);

                } catch (e) {
                    console.log("exception = " + e);
                }
                //return titlePanes;
            },

            removeMargins:function (gridContainer) {
                var innerPane = dojo.query(".dijitTitlePaneContentInner", gridContainer.domNode);
                //console.log("inner len = " + innerPane.length);
                for (var i = 0; i < innerPane.length; i++) {
                    innerPane[i].style.padding = 0;
                }

                var head = dojo.query(".dijitTitlePaneTitle", gridContainer.domNode)
                for (var i = 0; i < head.length; i++) {
                    head[i].style.padding = 0;
                    head[i].style.minHeight = 0;
                }

                var headFocus = dojo.query(".dijitTitlePaneTitleFocus", gridContainer.domNode)
                for (var i = 0; i < headFocus.length; i++) {
                    headFocus[i].style.margin = 0;
                    headFocus[i].style.padding = 0;
                }
            },

            createInnerPanes:function (layers, name, width, height) {
                try {
                    var hl = height / layers.length;
                    var styleString = "width: " + width + "; height: " + hl + ";";

                    var innerPanes = [];
                    for (var i = 0; i < layers.length; i++) {
                        var innerPane = new TitlePane({
                            splitter:false,
                            style:styleString,
                            content:"<div id='" + layers[i] + RenderNodes.ROW_SUFFIX + "' style='"+styleString+"'></div>",
                            title:layers[i],
                            toggleable:false
                        });
                        innerPanes[i] = innerPane;
                    }

                    var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true}, dojo.byId(name + RenderNodes.COLUMN_SUFFIX));
                    gridContainer.disableDnd();

                    for (var i = 0; i < layers.length; i++) {
                        gridContainer.addChild(innerPanes[i], 1, i);
                    }
                    gridContainer.startup();
                    gridContainer.resize();
                    this.removeMargins(gridContainer);

                } catch (e) {
                    console.log("exception inner page = " + e);
                }
                return innerPanes;
            },

            create:function (data, input) {
                var pageName = data.name;

                var names = ["Ingress", "Core", "Egress"];
                this.createColumnPanes(pageName, names, data.dimensions.width, data.dimensions.height);

                var colWidth = data.dimensions.width/names.length;
                var divW = 60, divH = 60;
                var layers = ["webServers"];
                this.createInnerPanes(layers, names[0], colWidth, data.dimensions.height);
                this.createEndpoint(input.netBankingNodesVO.webServers,
                    dojo.byId("webServers" + RenderNodes.ROW_SUFFIX), RenderNodes.TYPE.WEBSERVER, divW, divH);

                layers = ["appServers"];
                this.createInnerPanes(layers, names[1], colWidth, data.dimensions.height);
                this.createEndpoint(input.netBankingNodesVO.appServers,
                    dojo.byId("appServers" + RenderNodes.ROW_SUFFIX), RenderNodes.TYPE.APPSERVER, divW, divH);

                layers = ["databases", "messageQueues", "tcpEndpoints"];
                this.createInnerPanes(layers, names[2], colWidth, data.dimensions.height);
                this.createEndpoint(input.netBankingNodesVO.databases,
                    dojo.byId("databases" + RenderNodes.ROW_SUFFIX), RenderNodes.TYPE.DATABASES, divW, divH);
                this.createEndpoint(input.netBankingNodesVO.messageQueues,
                    dojo.byId("messageQueues" + RenderNodes.ROW_SUFFIX), RenderNodes.TYPE.MESSAGEQ, divW, divH);
                this.createEndpoint(input.netBankingNodesVO.tcpEndpoints,
                    dojo.byId("tcpEndpoints" + RenderNodes.ROW_SUFFIX), RenderNodes.TYPE.TCPENDPOINTS, divW, divH);

                var innerPane = dojo.query(".dijitTitlePaneContentOuter", noc.pages.TopologyPage.CP.domNode);
                for (var i = 0; i < innerPane.length; i++) {
                    innerPane[i].style.border = 0;
                }

                // by this point all nodes have been created
                // the next job is to draw connections
                // drawing connections has 2 tasks - create endpoints and then create a connection - all using jsPlumb
                // query connections for all nodes and start drawing
                // problem 1 -
                // if you query links for node A and find a link A --> B, then later querying links for B
                // will give us a B --> A which has to be ignored??
                // problem 2 - placement of endpoints on the node

                var xpos = 0, ypos = 0;
                var viewMeta = {
                    id:pageName,
                    name:pageName,
                    type:CONSTANTS.TYPE.TOPOLOGY,
                    subtype:CONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIVITY,
                    dimensions:[0, 0],
                    position:[xpos, ypos],
                    custom:[]
                };

                Utility.xhrPostCentral(CONSTANTS.ACTION.TOPOLOGY.CONNECTIONS, viewMeta);

            }
        });

        RenderNodes.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES));

        RenderNodes.TYPE = {};
        RenderNodes.TYPE.WEBSERVER = 1;
        RenderNodes.TYPE.APPSERVER = 2;
        RenderNodes.TYPE.DATABASES = 3;
        RenderNodes.TYPE.MESSAGEQ = 4;
        RenderNodes.TYPE.TCPENDPOINTS = 5;

        RenderNodes.COLUMN_SUFFIX = "_col";
        RenderNodes.ROW_SUFFIX = "_row";

        return RenderNodes;
    });