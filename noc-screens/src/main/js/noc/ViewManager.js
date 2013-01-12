define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger"],

    function (require, declare, i18n, i18nString, Logger) {

        // this is a completely static class
        var ViewManager = declare("noc.ViewManager", null, {});

        ViewManager.views = [];

        ViewManager.addView = function (data) {
            var viewData = {};
            viewData.viewId = data.viewId;
            viewData.data = data;
            ViewManager.views.push(viewData);
        };

        ViewManager.manageView = function(data) {
            ViewManager.addView(data);

            switch(data.type) {
                case CONSTANTS.AVAILABILITY:
                    require(['noc/Components/Availability/AvailabilityGrid'], function (AvailabilityGrid) {
                        new AvailabilityGrid().create();
                    });
                    break;

                case CONSTANTS.AVAILABILITY_DATA:
                    require(['noc/Components/Availability/AvailMatrix'], function (AvailMatrix) {
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