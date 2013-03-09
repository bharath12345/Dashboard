define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/logger/Logger", "dashboard/noc/NocConstants"],

    function (require, declare, i18n, i18nString, Logger, NOCCONSTANTS) {

        // this is a completely static class
        var ViewManager = declare(NOCCONSTANTS.CLASSNAME.VIEWMANAGER, null, {});

        ViewManager.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.VIEWMANAGER));

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
                    case NOCCONSTANTS.TYPE.LOGIN:
                        require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.LOGIN)], function (Login) {
                            Login.successPostProcess(data);
                        });
                        break;

                    case NOCCONSTANTS.TYPE.AVAILABILITY:
                        ViewManager.manageAvailabilitySubView(data, input);
                        break;

                    case NOCCONSTANTS.TYPE.INCIDENT:
                        ViewManager.manageIncidentSubView(data, input);
                        break;

                    case NOCCONSTANTS.TYPE.COMPONENT_ZONES:
                        require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.COMPONENT.ZONES)], function (Zones) {
                            new Zones().create(input);
                        });
                        break;

                    case NOCCONSTANTS.TYPE.COMPONENT_DATA:
                        require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.COMPONENT.CELLMAKER)], function (CellMaker) {
                            new CellMaker().create(input);
                        });
                        break;

                    case NOCCONSTANTS.TYPE.TRANSACTION:
                        ViewManager.manageTransactionSubView(data, input);
                        break;

                    case NOCCONSTANTS.TYPE.TOPOLOGY:
                        ViewManager.manageTopologySubView(data, input);
                        break;

                    case NOCCONSTANTS.TYPE.CONFIG:
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
                case NOCCONSTANTS.SUBTYPE.APPINCIDENTGRID:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.CONFIG.APPINCIDENTGRID)], function (AppIncidentGrid) {
                        AppIncidentGrid.setConfig(input);
                    });
                    break;

                default:
                    Logger.log("ViewManager","unknown config data sub type = " + data.subtype);
                    break;
            }
        };

        ViewManager.manageTopologySubView = function(data, input) {
            switch(data.subtype) {
                case NOCCONSTANTS.SUBTYPE.TOPOLOGY.NODES:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES)], function (RenderNodes) {
                        new RenderNodes().create(data, input);
                    });
                break;

                case NOCCONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIVITY:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERCONNECTIVITY)], function (RenderConnectivity) {
                        new RenderConnectivity().create(data, input);
                    });
                break;

                case NOCCONSTANTS.SUBTYPE.TOPOLOGY.NODESTATUS:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.NODESTATUS)], function (NodeStatus) {
                        new NodeStatus().create(data, input);
                    });
                break;

                case NOCCONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIONSTATUS:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.CONNECTIONSTATUS)], function (ConnectionStatus) {
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
                case NOCCONSTANTS.SUBTYPE.TRANSACTION.META:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA)], function (GridMeta) {
                        new GridMeta().create(data, input);
                    });
                break;

                case NOCCONSTANTS.SUBTYPE.TRANSACTION.DATA:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA)], function (GridData) {
                        new GridData().create(data, input);
                    });
                break;

                case NOCCONSTANTS.SUBTYPE.TRANSACTION.APPDATA:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA)], function (GridData) {
                        new GridData().createUsingApp(data, input);
                    });
                break;
            }
        };

        ViewManager.manageAvailabilitySubView = function(data, input) {
            switch(data.subtype) {
                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT:
                    //ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "component grid data received");
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX)], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.componentDataVO);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER:
                    //ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "cluster grid data received");
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX)], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.clusterDataVO);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE:
                    //ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "instance grid data received");
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX)], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.compInstanceDataVO);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.META:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITYGRID)], function (AvailabilityGrid) {
                        new AvailabilityGrid().create(data);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.ALLCLUSTER:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES)], function (ClusterZones) {
                        new ClusterZones().create(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER2:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX2)], function (AvailMatrix2) {
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
                case NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.COMPONENT:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID)], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createComponentString(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.CLUSTER:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID)], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createClusterString(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.INSTANCE:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID)], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createIncidentString(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.INCIDENT.META:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONGRID)], function (ApplicationGrid) {
                        new ApplicationGrid().create(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.INCIDENT.DATA:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONDATA)], function (ApplicationData) {
                        new ApplicationData().create(data, input);
                    });
                    break;
            }
        };

        return ViewManager;
    });