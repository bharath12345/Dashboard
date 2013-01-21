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
            var data = {};
            if(input.parameters.id != undefined) {
                data.id = input.parameters.id[0]; // Struts sends the response back with parameters as the key
            }
            if(input.parameters.type != undefined) {
                data.type = parseInt(input.parameters.type[0]);
            }
            if(input.parameters.dimensions != undefined) {
                data.dimensions = {};
                data.dimensions.width = parseInt(input.parameters.dimensions[0]);
                data.dimensions.height = parseInt(input.parameters.dimensions[1]);
            }
            if(input.parameters.position != undefined) {
                data.position = {};
                data.position.xpos = parseInt(input.parameters.position[0]);
                data.position.ypos = parseInt(input.parameters.position[1]);
            }
            if(input.parameters.custom != undefined) {
                data.custom = input.parameters.custom;
            }

            ViewManager.addView(data);

            switch(data.type) {
                case CONSTANTS.TYPE.LOGIN:
                    require([CONSTANTS.WIDGETS.LOGIN], function (Login) {
                        Login.successPostProcess();
                    });
                    break;

                case CONSTANTS.TYPE.AVAILABILITY:
                    require([CONSTANTS.WIDGETS.AVAILABILITY.GRID], function (AvailabilityGrid) {
                        new AvailabilityGrid().create(data);
                    });
                    break;

                case CONSTANTS.TYPE.AVAILABILITY_DATA:
                    require([CONSTANTS.WIDGETS.AVAILABILITY.MATRIX], function (AvailMatrix) {
                        new AvailMatrix().create(data);
                    });
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
        };

        ViewManager.manageAvailabilitySubView = function(data, input) {

        };

        ViewManager.manageComponentSubView = function(data, input) {

        };

        return ViewManager;
    });