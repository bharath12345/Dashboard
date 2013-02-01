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
                        require([CONSTANTS.WIDGETS.LOGIN], function (Login) {
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
                        require([CONSTANTS.WIDGETS.COMPONENT.ZONES], function (Zones) {
                            new Zones().create(input);
                        });
                        break;

                    case CONSTANTS.TYPE.COMPONENT_DATA:
                        require([CONSTANTS.WIDGETS.COMPONENT.CELLMAKER], function (CellMaker) {
                            new CellMaker().create(input);
                        });
                        break;

                    default:
                        Logger.log("ViewManager","unknown data type = " + data.type);
                }
            } catch ( e) {
                ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "exception e = " + e);
            }
        };

        ViewManager.manageAvailabilitySubView = function(data, input) {
            switch(data.subtype) {
                case CONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT:
                    ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "component grid data received");
                    require([CONSTANTS.WIDGETS.AVAILABILITY.MATRIX], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.componentDataVO);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER:
                    ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "cluster grid data received");
                    require([CONSTANTS.WIDGETS.AVAILABILITY.MATRIX], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.clusterDataVO);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE:
                    ViewManager.LOG.log(Logger.SEVERITY.SEVERE, "instance grid data received");
                    require([CONSTANTS.WIDGETS.AVAILABILITY.MATRIX], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.compInstanceDataVO);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.META:
                    require([CONSTANTS.WIDGETS.AVAILABILITY.GRID], function (AvailabilityGrid) {
                        new AvailabilityGrid().create(data);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.ALLCLUSTER:
                    require([CONSTANTS.WIDGETS.AVAILABILITY.CLUSTERZONES], function (ClusterZones) {
                        new ClusterZones().create(data, input);
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
                    require([CONSTANTS.WIDGETS.INCIDENT.AVAILABILITY], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createComponentString(data, input);
                    });
                    break;

                case CONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.CLUSTER:
                    require([CONSTANTS.WIDGETS.INCIDENT.AVAILABILITY], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createClusterString(data, input);
                    });
                    break;

                case CONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.INSTANCE:
                    require([CONSTANTS.WIDGETS.INCIDENT.AVAILABILITY], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createIncidentString(data, input);
                    });
                    break;

                case CONSTANTS.SUBTYPE.INCIDENT.META:
                    require([CONSTANTS.WIDGETS.INCIDENT.APPLICATIONGRID], function (ApplicationGrid) {
                        new ApplicationGrid().create(data, input);
                    });
                    break;

                case CONSTANTS.SUBTYPE.INCIDENT.DATA:
                    require([CONSTANTS.WIDGETS.INCIDENT.APPLICATIONDATA], function (ApplicationData) {
                        new ApplicationData().create(data, input);
                    });
                    break;
            }
        };

        return ViewManager;
    });