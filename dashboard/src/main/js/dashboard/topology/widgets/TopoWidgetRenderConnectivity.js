define(["dojo/_base/declare", "dojo/i18n",
    "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/topology/TopologyConstants", "dashboard/topology/TopologyUtility"],

    function (declare, i18n, i18nString, Logger, TOPOLOGYCONSTANTS, TopologyUtility) {

        dashboard.classnames.TopoWidgetRenderConnectivity = "dashboard.topology.widgets.TopoWidgetRenderConnectivity";

        var TopoWidgetRenderConnectivity = declare(dashboard.classnames.TopoWidgetRenderConnectivity, null, {

            constructor: function() {
                jsPlumb.importDefaults({
                    // default drag options
                    DragOptions:{ cursor:'pointer', zIndex:2000 },

                    // default to blue at one end and green at the other
                    EndpointStyles:[
                        { fillStyle:'#225588' },
                        { fillStyle:'#558822' }
                    ],

                    // blue endpoints 7 px; green endpoints 11.
                    Endpoints:[
                        [ "Dot", {radius:3} ],
                        [ "Dot", { radius:3 } ]
                    ],

                    // the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
                    // case it returns the 'labelText' member that we set on each connection in the 'init' method below.
                    ConnectionOverlays:[
                        [ "Arrow", { location:0.9, foldback:0.5, width:6 } ],
                        [ "Label", {
                            location:0.1,
                            id:"label",
                            cssClass:"aLabel"
                        }]
                    ]
                });
            },

            create:function (data, input) {
                var nodeName = input.netBankingConnectivityVO.name;
                var sourceType = input.netBankingConnectivityVO.sourceType;
                var dstType = input.netBankingConnectivityVO.dstType;
                var connections = input.netBankingConnectivityVO.connections;

                var lhsDivName = data.id + "_" + data.name + dashboard.topology.widgets.TopoWidgetRenderNodes.ENDPOINT_SUFFIX;
                for (var i = 0; i < connections.length; i++) {
                    var rhsDivName = dstType + "_" + connections[i] + dashboard.topology.widgets.TopoWidgetRenderNodes.ENDPOINT_SUFFIX;
                    console.log("lhs div name = " + lhsDivName + " rhs div name = " + rhsDivName);

                    // create Endpoint on LHS and RHS node
                    var srcUuid = TopoWidgetRenderConnectivity.FROM + data.name + TopoWidgetRenderConnectivity.TO + connections[i];
                    var dstUuid = TopoWidgetRenderConnectivity.FROM + connections[i] + TopoWidgetRenderConnectivity.TO + data.name;
                    console.log("src uuid = " + srcUuid + " dst uuid = " + dstUuid);

                    var sourceEP = jsPlumb.addEndpoint(lhsDivName,
                        TopoWidgetRenderConnectivity.sourceEndpoint,
                        {
                            uuid:srcUuid,
                            container:dashboard.topology.views.TopologyView.TitlePane.domNode,
                            anchor:"RightMiddle"
                        });


                    var dstEP = jsPlumb.addEndpoint(rhsDivName,
                        TopoWidgetRenderConnectivity.targetEndpoint,
                        {
                            uuid:dstUuid,
                            container:dashboard.topology.views.TopologyView.TitlePane.domNode,
                            anchor:"LeftMiddle"
                        });

                    // create connection link
                    jsPlumb.connect({ source:sourceEP, target:dstEP, container:dashboard.topology.views.TopologyView.TitlePane.domNode });

                    // get and set the status of the connection link
                    var xpos=0, ypos=0;
                    var viewMeta = {
                        id:"", // uuid of the link?
                        name: "", // uuid of the link?
                        type: TOPOLOGYCONSTANTS.TYPE.TOPOLOGY,
                        subtype: TOPOLOGYCONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIONSTATUS,
                        dimensions:[0, 0],
                        position:[xpos,ypos],
                        custom: []
                    };
                    TopologyUtility.xhrPostCentral(TOPOLOGYCONSTANTS.ACTION.TOPOLOGY.CONNECTIONSTATUS, viewMeta);
                }


            }
        });

        TopoWidgetRenderConnectivity.LOG = Logger.addTimer(new Logger(dashboard.classnames.TopoWidgetRenderConnectivity));
        TopoWidgetRenderConnectivity.FROM = "FROM_";
        TopoWidgetRenderConnectivity.TO = "_TO_";


        // this is the paint style for the connecting lines..
        TopoWidgetRenderConnectivity.connectorPaintStyle = {
            lineWidth:1,
            strokeStyle:"#deea18",
            joinstyle:"round",
            outlineColor:"#EAEDEF",
            outlineWidth:1
        };

        // .. and this is the hover style.
        TopoWidgetRenderConnectivity.connectorHoverStyle = {
            lineWidth:2,
            strokeStyle:"#2e2aF8"
        };

        // the definition of source endpoints (the small blue ones)
        TopoWidgetRenderConnectivity.sourceEndpoint = {
            endpoint:"Dot",
            paintStyle:{ fillStyle:"#225588", radius:3 },
            isSource:true,
            connector:[ "Straight", { stub:[40, 60], gap:10 } ],
            connectorStyle:TopoWidgetRenderConnectivity.connectorPaintStyle,
            hoverPaintStyle:TopoWidgetRenderConnectivity.connectorHoverStyle,
            connectorHoverStyle:TopoWidgetRenderConnectivity.connectorHoverStyle,
            dragOptions:{},
            overlays:[
                [ "Label", {
                    location:[0.5, 1.5],
                    label:"",
                    cssClass:"endpointSourceLabel"
                } ]
            ]
        };

        TopoWidgetRenderConnectivity.targetEndpoint = {
            endpoint:"Dot",
            paintStyle:{ fillStyle:"#558822", radius:3 },
            hoverPaintStyle:TopoWidgetRenderConnectivity.connectorHoverStyle,
            maxConnections:-1,
            dropOptions:{ hoverClass:"hover", activeClass:"active" },
            isTarget:true,
            overlays:[
                [ "Label", { location:[0.5, -0.5], label:"", cssClass:"endpointTargetLabel" } ]
            ]
        };

        return TopoWidgetRenderConnectivity;
    });