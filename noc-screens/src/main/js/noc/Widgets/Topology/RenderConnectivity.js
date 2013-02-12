define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility",
    "noc/data/Topology"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility, TOPOLOGY) {

        var RenderConnectivity = declare(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERCONNECTIVITY, null, {

            create:function (data, input) {
                var nodeName = input.netBankingConnectivityVO.node;
                var connections = input.netBankingConnectivityVO.connections;

                var lhsDivName = data.id + "_" + data.name + noc.Widgets.Topology.RenderNodes.ENDPOINT_SUFFIX;
                for (var i = 0; i < connections.length; i++) {
                    var rhsDivName = data.id + "_" + connections[j] + noc.Widgets.Topology.RenderNodes.ENDPOINT_SUFFIX;

                    // create Endpoint on LHS and RHS node

                    // create connection link
                }

                var pageName = data.name;
                var xpos = 0, ypos = 0;
                var viewMeta = {
                    id:pageName,
                    name:pageName,
                    type:CONSTANTS.TYPE.TOPOLOGY,
                    subtype:CONSTANTS.SUBTYPE.TOPOLOGY.NODESTATUS,
                    dimensions:[0, 0],
                    position:[xpos, ypos],
                    custom:[]
                };

                Utility.xhrPostCentral(CONSTANTS.ACTION.TOPOLOGY.NODESTATUS, viewMeta);

            }
        });

        RenderConnectivity.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERCONNECTIVITY));

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
                [ "Dot", {radius:7} ],
                [ "Dot", { radius:11 } ]
            ],

            // the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
            // case it returns the 'labelText' member that we set on each connection in the 'init' method below.
            ConnectionOverlays:[
                [ "Arrow", { location:0.9 } ],
                [ "Label", {
                    location:0.1,
                    id:"label",
                    cssClass:"aLabel"
                }]
            ]
        });

        // this is the paint style for the connecting lines..
        var connectorPaintStyle = {
            lineWidth:5,
            strokeStyle:"#deea18",
            joinstyle:"round",
            outlineColor:"#EAEDEF",
            outlineWidth:7
        };

        // .. and this is the hover style.
        var connectorHoverStyle = {
            lineWidth:7,
            strokeStyle:"#2e2aF8"
        };

        // the definition of source endpoints (the small blue ones)
        var sourceEndpoint = {
            endpoint:"Dot",
            paintStyle:{ fillStyle:"#225588", radius:7 },
            isSource:true,
            connector:[ "Flowchart", { stub:[40, 60], gap:10 } ],
            connectorStyle:connectorPaintStyle,
            hoverPaintStyle:connectorHoverStyle,
            connectorHoverStyle:connectorHoverStyle,
            dragOptions:{},
            overlays:[
                [ "Label", {
                    location:[0.5, 1.5],
                    label:"Drag",
                    cssClass:"endpointSourceLabel"
                } ]
            ]
        };

        // a source endpoint that sits at BottomCenter
        //	bottomSource = jsPlumb.extend( { anchor:"BottomCenter" }, sourceEndpoint),
        // the definition of target endpoints (will appear when the user drags a connection)
        var targetEndpoint = {
            endpoint:"Dot",
            paintStyle:{ fillStyle:"#558822", radius:11 },
            hoverPaintStyle:connectorHoverStyle,
            maxConnections:-1,
            dropOptions:{ hoverClass:"hover", activeClass:"active" },
            isTarget:true,
            overlays:[
                [ "Label", { location:[0.5, -0.5], label:"Drop", cssClass:"endpointTargetLabel" } ]
            ]
        };

        return RenderConnectivity;
    });