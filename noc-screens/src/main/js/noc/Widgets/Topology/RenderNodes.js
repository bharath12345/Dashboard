define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc",
    "dijit/TitlePane", "dojox/layout/GridContainer",
    "noc/Logger", "noc/Constants", "noc/Utility", "noc/data/Topology"],

    function (declare, i18n, i18nString, TitlePane, GridContainer, Logger, CONSTANTS, Utility, TOPOLOGY) {

        var RenderNodes = declare(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES, null, {

            getSvgIcon:function (src) {
                var svgIcon = dojo.create("img");
                svgIcon.src = src;
                //svgIcon.type = "image/svg+xml";
                svgIcon.height = "50";
                svgIcon.width = "50";
                return svgIcon;
            },

            createEndpoint:function (endPointsArray, divCol, type) {
                for (var i = 0; i < endPointsArray.length; i++) {
                    var node = dojo.create("div");
                    node.id = endPointsArray[i];
                    divCol.appendChild(node);
                    //var endpoint = jsPlumb.addEndpoint(endPointName);
                    //TOPOLOGY.NODEMAP[endPointName] = endpoint;

                    switch (type) {
                        case RenderNodes.TYPE.WEBSERVER:
                            var svgIcon = this.getSvgIcon("./images/topology/osa_server_web.svg");
                            node.appendChild(svgIcon);
                            break;

                        case RenderNodes.TYPE.APPSERVER:
                            var svgIcon = this.getSvgIcon("./images/topology/osa_server_application.svg");
                            node.appendChild(svgIcon);
                            break;

                        case RenderNodes.TYPE.DATABASES:
                            var svgIcon = this.getSvgIcon("./images/topology/Database.svg");
                            node.appendChild(svgIcon);
                            break;

                        case RenderNodes.TYPE.MESSAGEQ:
                            var svgIcon = this.getSvgIcon("./images/topology/Messaging_Queue.svg");
                            node.appendChild(svgIcon);
                            break;

                        case RenderNodes.TYPE.TCPENDPOINTS:
                            var svgIcon = this.getSvgIcon("./images/topology/osa_ics_drive.svg");
                            node.appendChild(svgIcon);
                            break;

                        default:
                            console.log("unknown end point type = " + type);
                            return;
                    }
                }
            },

            createColumnDiv:function (columnCount, nodeToAdd, names) {
                var widthPercent = 100 / columnCount;
                for (var i = 0; i < columnCount; i++) {
                    var node = dojo.create("div");
                    dojo.style(node, {
                        "width":widthPercent + "%",
                        "height":"100%",
                        "float":"left"
                    });
                    node.id = names[i] + RenderNodes.COLUMN_SUFFIX;
                    nodeToAdd.appendChild(node);
                }
                var node = dojo.create("div");
                node.style = "clear:both;";
                nodeToAdd.appendChild(node);
            },

            createColumnPanes:function (pageName, columnCount, names, width, height) {
                console.log("in createColumnPanes = " + columnCount + " w = " + width + " h = " + height);
                try {
                    var styleString = "width: " + (width / columnCount) + "; height: " + height + ";";

                    var titlePanes = [];
                    for (var i = 0; i < columnCount; i++) {
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

                    var gridContainer = new GridContainer({nbZones:columnCount, isAutoOrganized:true,
                        style:"width: 100%; height: 100%;"});
                    noc.pages.TopologyPage.TitlePane.addChild(gridContainer);
                    gridContainer.disableDnd();

                    var j = 0, k = 0;
                    for (var i = 0; i < columnCount; i++) {
                        j = (i % columnCount);
                        k = parseInt(i / columnCount);
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
                            content:"<div id='" + layers[i] + RenderNodes.ROW_SUFFIX + "' style='width: 100%; height: 100%;'></div>",
                            title:layers[i],
                            toggleable:false
                        });
                        innerPanes[i] = innerPane;
                    }

                    var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                        style:"width: 100%; height: 100%;"}, dojo.byId(name + RenderNodes.COLUMN_SUFFIX));
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

                var numColPanes = 3;
                var names = ["Ingress", "Core", "Egress"];
                this.createColumnPanes(pageName, numColPanes, names, data.dimensions.width, data.dimensions.height);

                var layers = ["webServers"];
                this.createInnerPanes(layers, names[0], data.dimensions.width, data.dimensions.height);

                layers = ["appServers"];
                this.createInnerPanes(layers, names[1], data.dimensions.width, data.dimensions.height);

                layers = ["databases", "messageQueues", "tcpEndpoints"];
                this.createInnerPanes(layers, names[2], data.dimensions.width, data.dimensions.height);

                return;

                var i = 0;
                this.createEndpoint(input.netBankingNodesVO.webServers,
                    dojo.byId(names[i++] + RenderNodes.COLUMN_SUFFIX), RenderNodes.TYPE.WEBSERVER);
                this.createEndpoint(input.netBankingNodesVO.appServers,
                    dojo.byId(names[i++] + RenderNodes.COLUMN_SUFFIX), RenderNodes.TYPE.APPSERVER);
                this.createEndpoint(input.netBankingNodesVO.databases,
                    dojo.byId(names[i++] + RenderNodes.COLUMN_SUFFIX), RenderNodes.TYPE.DATABASES);
                this.createEndpoint(input.netBankingNodesVO.messageQueues,
                    dojo.byId(names[i++] + RenderNodes.COLUMN_SUFFIX), RenderNodes.TYPE.MESSAGEQ);
                this.createEndpoint(input.netBankingNodesVO.tcpEndpoints,
                    dojo.byId(names[i++] + RenderNodes.COLUMN_SUFFIX), RenderNodes.TYPE.TCPENDPOINTS);

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