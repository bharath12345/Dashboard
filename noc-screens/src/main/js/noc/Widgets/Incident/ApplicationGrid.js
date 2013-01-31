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

                // create blank grid
                var gridata = [];
                for(var i=0;i<input.applicationVO.applications.length;i++) {
                    var row = {};
                    var apps = input.applicationVO.applications;
                    row.appName = apps[i].name;
                    for(var j=0;j<metrics.length;j++) {
                        row[metrics[j]] = "";
                    }
                    gridata.push(row);
                }
                var grid = new Grid({columns: columnMeta}, data.name);
                grid.renderArray(gridata);

                // assign ids to nodes
                for(var i=0;i<input.applicationVO.applications.length;i++) {
                    var apps = input.applicationVO.applications;
                    for(var j=0;j<metrics.length;j++) {
                        dojo.query("#IncidentGrid-row-" + i + " td.field-"+metrics[j]).forEach(function (node) {
                            node.id = apps[i].name + "_" + apps[i].id + "_" + metrics[j];
                        });
                    }
                }

                var metricsJson = dojo.toJson(metrics);
                for(var i=0;i<input.applicationVO.applications.length;i++) {
                    var apps = input.applicationVO.applications;
                    var viewMeta = {
                        id:apps[i].id,
                        name:apps[i].name,
                        type:CONSTANTS.TYPE.INCIDENT,
                        subtype:CONSTANTS.SUBTYPE.INCIDENT.DATA,
                        dimensions:[0, 0],
                        position:[0, 0],
                        custom:[metricsJson]
                    };
                    Utility.xhrPostCentral(CONSTANTS.ACTION.INCIDENT.APPLICATIONDATA, viewMeta);
                }
            }

        });

        ApplicationGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONGRID));

        return ApplicationGrid;
    });