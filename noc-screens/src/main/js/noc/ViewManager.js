define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants",
    "noc/Widgets/Incident/IncidentAvailabilityGrid", "noc/Utility"],

    function (require, declare, i18n, i18nString, Logger, CONSTANTS, IncidentAvailabilityGrid, Utility) {

        // this is a completely static class
        var ViewManager = declare(CONSTANTS.CLASSNAME.VIEWMANAGER, null, {});

        ViewManager.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.VIEWMANAGER));

        ViewManager.views = [];

        ViewManager.addView = function (data) {
            var viewData = {};
            viewData.viewId = data.viewId;
            viewData.data = data;
            ViewManager.views.push(viewData);
        };

        ViewManager.manageView = function(input) {
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
                    //ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "data type = " + data.type + " sub type = " + data.subtype);
                } else {
                    ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "input param is undefind");
                }
                if(input.login != undefined && input.login.type != undefined) {
                    data.type = parseInt(input.login.type);
                    ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "login data type = " + data.type);
                }

                //ViewManager.addView(data);

                switch(data.type) {
                    case CONSTANTS.TYPE.LOGIN:
                        require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.LOGIN)], function (Login) {
                            Login.successPostProcess(data);
                        });
                        break;

                    case CONSTANTS.TYPE.AVAILABILITY:
                        ViewManager.manageAvailabilitySubView(data, input);
                        break;

                    case CONSTANTS.TYPE.INCIDENT:
                        ViewManager.manageIncidentSubView(data, input);
                        break;

                    case CONSTANTS.TYPE.COMPONENT_ZONES:
                        require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.COMPONENT.ZONES)], function (Zones) {
                            new Zones().create(input);
                        });
                        break;

                    case CONSTANTS.TYPE.COMPONENT_DATA:
                        require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.COMPONENT.CELLMAKER)], function (CellMaker) {
                            new CellMaker().create(input);
                        });
                        break;

                    case CONSTANTS.TYPE.TRANSACTION:
                        ViewManager.manageTransactionSubView(data, input);
                        break;

                    case CONSTANTS.TYPE.TOPOLOGY:
                        ViewManager.manageTopologySubView(data, input);
                        break;

                    case CONSTANTS.TYPE.CONFIG:
                        ViewManager.manageConfig(data, input);
                        break;

                    default:
                        Logger.log("ViewManager","unknown data type = " + data.type);
                    break;
                }
            } catch ( e) {
                ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "exception e = " + e);
            }
        };

        ViewManager.manageConfig = function(data, input) {
            switch(data.subtype) {
                case CONSTANTS.SUBTYPE.APPALERTGRID:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.CONFIG.APPALERTGRID)], function (AppAlertGrid) {
                        new AppAlertGrid().applyConfig(data, input);
                    });
                    break;

                default:
                    Logger.log("ViewManager","unknown config data sub type = " + data.subtype);
                    break;
            }
        };

        ViewManager.manageTopologySubView = function(data, input) {
            switch(data.subtype) {
                case CONSTANTS.SUBTYPE.TOPOLOGY.NODES:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES)], function (RenderNodes) {
                        new RenderNodes().create(data, input);
                    });
                break;

                case CONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIVITY:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERCONNECTIVITY)], function (RenderConnectivity) {
                        new RenderConnectivity().create(data, input);
                    });
                break;

                case CONSTANTS.SUBTYPE.TOPOLOGY.NODESTATUS:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.NODESTATUS)], function (NodeStatus) {
                        new NodeStatus().create(data, input);
                    });
                break;

                case CONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIONSTATUS:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.CONNECTIONSTATUS)], function (ConnectionStatus) {
                        new ConnectionStatus().create(data, input);
                    });
                break;

                default:
                    Logger.log("ViewManager","unknown topology data sub type = " + data.subtype);
                break;
            }
        };

        ViewManager.manageTransactionSubView = function(data, input){
            switch(data.subtype) {
                case CONSTANTS.SUBTYPE.TRANSACTION.META:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA)], function (GridMeta) {
                        new GridMeta().create(data, input);
                    });
                break;

                case CONSTANTS.SUBTYPE.TRANSACTION.DATA:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA)], function (GridData) {
                        new GridData().create(data, input);
                    });
                break;

                case CONSTANTS.SUBTYPE.TRANSACTION.APPDATA:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA)], function (GridData) {
                        new GridData().createUsingApp(data, input);
                    });
                break;
            }
        };

        ViewManager.manageAvailabilitySubView = function(data, input) {
            switch(data.subtype) {
                case CONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT:
                    //ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "component grid data received");
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX)], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.componentDataVO);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER:
                    //ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "cluster grid data received");
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX)], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.clusterDataVO);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE:
                    //ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "instance grid data received");
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX)], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.compInstanceDataVO);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.META:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITYGRID)], function (AvailabilityGrid) {
                        new AvailabilityGrid().create(data);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.ALLCLUSTER:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES)], function (ClusterZones) {
                        new ClusterZones().create(data, input);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER2:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX2)], function (AvailMatrix2) {
                        new AvailMatrix2().create(data, input.clusterDataVO);
                    });
                    break;

                default:
                    ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "unknown availability type = " + data.subtype);
            }
        };

        ViewManager.manageComponentSubView = function(data, input) {

        };

        ViewManager.manageIncidentSubView = function(data, input) {
            switch(data.subtype) {
                case CONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.COMPONENT:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID)], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createComponentString(data, input);
                    });
                    break;

                case CONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.CLUSTER:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID)], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createClusterString(data, input);
                    });
                    break;

                case CONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.INSTANCE:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID)], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createIncidentString(data, input);
                    });
                    break;

                case CONSTANTS.SUBTYPE.INCIDENT.META:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONGRID)], function (ApplicationGrid) {
                        new ApplicationGrid().create(data, input);
                    });
                    break;

                case CONSTANTS.SUBTYPE.INCIDENT.DATA:
                    require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONDATA)], function (ApplicationData) {
                        new ApplicationData().create(data, input);
                    });
                    break;
            }
        };

        return ViewManager;
    });