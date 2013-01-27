define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants"],

    function (require, declare, i18n, i18nString, Logger, CONSTANTS) {

        // this is a completely static class
        var ViewManager = declare("noc.ViewManager", null, {});

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
                    console.log("data type = " + data.type);
                } else {
                    console.log("input param is undefind");
                }
                if(input.login != undefined && input.login.type != undefined) {
                    data.type = parseInt(input.login.type);
                    console.log("login data type = " + data.type);
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

                    case CONSTANTS.TYPE.ALERT:
                        ViewManager.manageAlertSubView(data, input);
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
                console.log("exception e = " + e);
            }
        };

        ViewManager.manageAvailabilitySubView = function(data, input) {
            switch(data.subtype) {
                case CONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT:
                    console.log("component grid data received");
                    require([CONSTANTS.WIDGETS.AVAILABILITY.MATRIX], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.componentDataVO);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER:
                    console.log("cluster grid data received");
                    require([CONSTANTS.WIDGETS.AVAILABILITY.MATRIX], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.clusterDataVO);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE:
                    console.log("instance grid data received");
                    require([CONSTANTS.WIDGETS.AVAILABILITY.MATRIX], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.compInstanceDataVO);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.META:
                    require([CONSTANTS.WIDGETS.AVAILABILITY.GRID], function (AvailabilityGrid) {
                        new AvailabilityGrid().create(data);
                    });
                    break;

                default:
                    console.log("unknown availability type = " + data.subtype);
            }
        };

        ViewManager.manageComponentSubView = function(data, input) {

        };

        ViewManager.manageAlertSubView = function(data, input) {
            switch(data.subtype) {
                case CONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT:
                    require([CONSTANTS.WIDGETS.ALERT.AVAILABILITY], function (AlertAvailabilityGrid) {
                        new AlertAvailabilityGrid().createComponentString(data, input);
                    });
                break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER:
                    require([CONSTANTS.WIDGETS.ALERT.AVAILABILITY], function (AlertAvailabilityGrid) {
                        new AlertAvailabilityGrid().createClusterString(data, input);
                    });
                    break;

                case CONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE:
                    require([CONSTANTS.WIDGETS.ALERT.AVAILABILITY], function (AlertAvailabilityGrid) {
                        new AlertAvailabilityGrid().createAlertString(data, input);
                    });
                    break;
            }
        };

        return ViewManager;
    });