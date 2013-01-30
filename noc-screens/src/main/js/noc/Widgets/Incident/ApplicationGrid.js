define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", 'dgrid/Grid', "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Grid, Logger, CONSTANTS, Utility) {

        var ApplicationGrid = declare(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONGRID, null, {

            create: function(data, input) {

                var columnMeta = [{
                    field: "appName",
                    label: "Application Name"
                }];

                var metrics = input.applicationVO.metrics;
                for(var i=0;i<metrics.length;i++) {
                    var col = {};
                    col.field = metrics[i];
                    columnMeta.push(col);
                }

                var gridata = [];
                var blankrow = {appName: "-"};
                gridata.push(blankrow);

                var grid = new Grid({columns: columnMeta}, data.name);
                grid.renderArray(gridata);
            }

        });

        ApplicationGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONGRID));

        return ApplicationGrid;
    });