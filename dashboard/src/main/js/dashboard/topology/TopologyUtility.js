define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dojo/request/xhr", "dojo/keys", "dojo/on", "dijit/Dialog",
    "dashboard/topology/TopologyConstants", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, xhr, keys, on, Dialog, TOPOLOGYCONSTANTS, Logger) {

        var TopologyUtility = declare(TOPOLOGYCONSTANTS.CLASSNAME.UTILITY, null, {});

        TopologyUtility.JSON_HEADER = { 'Content-Type':'application/json' };

        TopologyUtility.xhrPostCentral = function (url, options) {
            xhr(url, {
                handleAs:"json",
                method:"POST",
                query:options,
                headers:TopologyUtility.JSON_HEADER
            }).then(function (data) {
                    // Do something with the handled data
                    TopologyUtility.manageView(data);

                }, function (err) {
                    // Handle the error condition
                    TopologyUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr error = " + err);
                }, function (evt) {
                    // Handle a progress event from the request if the
                    // browser supports XHR2
                    //TopologyUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr event = " + evt);
                });
        };

        TopologyUtility.manageView = function(input) {
            try {
                var data = {};
                if(input.param != undefined) {
                    if(input.param.id != undefined) {
                        data.id = input.param.id[0]; // Struts sends the response back with parameters as the key
                    }
                    if(input.param.type != undefined) {
                        data.type = parseInt(input.param.type[0]);
                    }
                    if(input.param.subtype != undefined) {
                        data.subtype = parseInt(input.param.subtype[0]);
                    }
                    if(input.param.dimensions != undefined) {
                        data.dimensions = {};
                        data.dimensions.width = parseInt(input.param.dimensions[0]);
                        data.dimensions.height = parseInt(input.param.dimensions[1]);
                    }
                    if(input.param.position != undefined) {
                        data.position = {};
                        data.position.xpos = parseInt(input.param.position[0]);
                        data.position.ypos = parseInt(input.param.position[1]);
                    }
                    if(input.param.custom != undefined) {
                        data.custom = input.param.custom;
                    }
                    if(input.param.name != undefined) {
                        data.name = input.param.name;
                    }
                    //TopologyUtility.LOG.log(Logger.SEVERITY.SEVERE, "data type = " + data.type + " sub type = " + data.subtype);
                } else {
                    TopologyUtility.LOG.log(Logger.SEVERITY.SEVERE, "input param is undefind");
                }
                if(input.login != undefined && input.login.type != undefined) {
                    data.type = parseInt(input.login.type);
                    TopologyUtility.LOG.log(Logger.SEVERITY.SEVERE, "login data type = " + data.type);
                }

                //TopologyUtility.addView(data);

                switch(data.type) {
                    case TOPOLOGYCONSTANTS.TYPE.TOPOLOGY:
                        TopologyUtility.manageTopologySubView(data, input);
                        break;
                    
                    default:
                        Logger.log("TopologyUtility","unknown data type = " + data.type);
                        break;
                }
            } catch ( e) {
                TopologyUtility.LOG.log(Logger.SEVERITY.SEVERE, "exception e = " + e);
            }
        };

        TopologyUtility.manageTopologySubView = function(data, input) {
            switch(data.subtype) {
                case TOPOLOGYCONSTANTS.SUBTYPE.TOPOLOGY.NODES:
                    require([TOPOLOGYCONSTANTS.getClassPath(TOPOLOGYCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES)], function (RenderNodes) {
                        new RenderNodes().create(data, input);
                    });
                    break;

                case TOPOLOGYCONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIVITY:
                    require([TOPOLOGYCONSTANTS.getClassPath(TOPOLOGYCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERCONNECTIVITY)], function (RenderConnectivity) {
                        new RenderConnectivity().create(data, input);
                    });
                    break;

                case TOPOLOGYCONSTANTS.SUBTYPE.TOPOLOGY.NODESTATUS:
                    require([TOPOLOGYCONSTANTS.getClassPath(TOPOLOGYCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.NODESTATUS)], function (NodeStatus) {
                        new NodeStatus().create(data, input);
                    });
                    break;

                case TOPOLOGYCONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIONSTATUS:
                    require([TOPOLOGYCONSTANTS.getClassPath(TOPOLOGYCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.CONNECTIONSTATUS)], function (ConnectionStatus) {
                        new ConnectionStatus().create(data, input);
                    });
                    break;

                default:
                    Logger.log("TopologyUtility","unknown topology data sub type = " + data.subtype);
                    break;
            }
        };


        TopologyUtility.LOG = new Logger(TOPOLOGYCONSTANTS.CLASSNAME.UTILITY);

        return TopologyUtility;
    });