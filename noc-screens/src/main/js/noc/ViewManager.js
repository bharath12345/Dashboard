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
            data.id = input.parameters.id[0]; // Struts sends the response back with parameters as the key
            data.type = parseInt(input.parameters.type[0]);
            data.dimensions = {};
            data.dimensions.width = input.parameters.dimensions[0];
            data.dimensions.height = input.parameters.dimensions[1];
            data.position = {};
            data.position.xpos = input.parameters.position[0];
            data.position.ypos = input.parameters.position[1];
            data.custom = input.parameters.custom;

            delete input;

            ViewManager.addView(data);

            switch(data.type) {
                case CONSTANTS.AVAILABILITY:
                    require(['noc/Widgets/Availability/AvailabilityGrid'], function (AvailabilityGrid) {
                        new AvailabilityGrid().create(data);
                    });
                    break;

                case CONSTANTS.AVAILABILITY_DATA:
                    require(['noc/Widgets/Availability/AvailMatrix'], function (AvailMatrix) {
                        var availGrid = new AvailMatrix();
                        availGrid.fetchData("./data/availability/" + data.id + ".json", data.id,
                            data.width, data.height,
                            data.xpos, data.ypos, data.objectSize, data.gridType);
                    });
                    break;

                default:
                    Logger.log("ViewManager","unknown data type = " + data.type);
            }
        };

        return ViewManager;
    });