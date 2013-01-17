define(['require', "dojo/_base/declare", "dojo/i18n", 'dgrid/Grid',
    "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, Grid, i18nString) {

        var AvailabilityGrid = declare("noc.Components.Availability.AvailabilityGrid", null, {

            create:function () {
                d3.json("availability/AvailabilityMeta.action", dojo.hitch(this, function (m) {
                    this.renderGrid(m);
                }));
            },

            renderGrid:function (gridMeta) {

                // How to build the table - METHODOLOGY
                // 1. The number of Broad columns is fixed at 3
                // 2. Parse the JSON to find the number of items in Column 3 - this should NOT be more than 5
                var maxCol3 = gridMeta.components.length;

                // 3. Parse the JSON to find the MAX number of columns among the '5' of step 2 for column 2 (children). Lets say it is 4
                // 4. Parse the JSON to find the MAX number of columns among the '4' of step 3 for column 1 (children). Lets say it is 3

                var maxCol2 = 0, maxCol1 = 0;
                for (var i = 0; i < maxCol3; i++) {
                    var clusters = gridMeta.components[i].clusters;
                    if (clusters.length > maxCol2) {
                        maxCol2 = clusters.length;
                    }
                    for (var j = 0; j < clusters.length; j++) {
                        if (clusters[j].host.length > maxCol1) {
                            maxCol1 = clusters[j].host.length;
                        }
                    }
                }

                // 5. With the following data points - we need to build a matrix with
                // a) column 3: 5 rows
                // b) column 2: 4 rows
                // c) column 1: 3 rows

                //double the counters for heading and data
                maxCol1 = maxCol1 * maxCol2;
                maxCol1 *= 2;
                var col2break = maxCol1 / maxCol2;
                console.log("1=" + maxCol1 + " 2=" + maxCol2 + " 3=" + maxCol3);

                var subSubRows = [], firstFound = false, secondFound = false;
                for (var i = 0, j = 0, z = 0; i < maxCol1; i++, z++) {
                    var subRows = [];

                    var firstRowColData = new Object();
                    firstRowColData.field = "row" + i + "col1";
                    subRows.push(firstRowColData);

                    if (i == 0 || z == col2break) {
                        z = 0;
                        var secondRowColData = new Object();
                        secondRowColData.field = "row" + j++ + "col2";
                        firstFound = true;
                        subRows.push(secondRowColData);
                    } else {
                        if (firstFound == true) {
                            firstFound = false;
                            var secondRowColData = new Object();
                            secondRowColData.field = "row" + j++ + "col2";
                            secondRowColData.rowSpan = col2break - 1;
                            subRows.push(secondRowColData);
                        }
                    }

                    if (i == 0) {
                        var thirdRowColData = new Object();
                        thirdRowColData.field = "row" + i + "col3";
                        secondFound = true;
                        subRows.push(thirdRowColData);
                    } else {
                        if (secondFound == true) {
                            secondFound = false;
                            var thirdRowColData = new Object();
                            thirdRowColData.field = "row" + i + "col3";
                            thirdRowColData.rowSpan = maxCol1 - 1;
                            subRows.push(thirdRowColData);
                        }
                    }
                    subSubRows.push(subRows);
                }
                console.log("table meta json" + dojo.toJson(subSubRows));

                var gridData = [];
                for (var i = 0; i < maxCol3; i++) {
                    var dataPoint = new Object();
                    dataPoint.row0col3 = gridMeta.components[i];

                    var lastpoint = 0;
                    var clusters = gridMeta.components[i];
                    for (var j = 0; j < clusters.length; j++) {
                        var point2 = "row" + (2 * j) + "col2";
                        dataPoint[point2] = clusters[j].clusterName;

                        for (var z = 0; z < clusters[j].host.length; z++) {
                            var point1 = "row" + (lastpoint + (2 * z)) + "col1";
                            //console.log("point 1 = " + point1);
                            dataPoint[point1] = clusters[j].host[z].name;
                            if (z == (clusters[j].host.length - 1)) {
                                lastpoint = (2 * z) + 2;
                            }
                        }
                    }
                    gridData.push(dataPoint);
                }
                console.log("table data json" + dojo.toJson(gridData));

                var grid = new Grid({subRows:subSubRows, showHeader:false,
                    style:"width:" + AvailabilityGrid.CP.offsetWidth +
                        "height:" + AvailabilityGrid.CP.offsetHeight}, "availGrid");
                grid.renderArray(gridData);
                dojo.byId("dijit_TitlePane_0_pane").style.padding = "0px";

                // 6. There will be many among the '5' of column-3 who dont have as many as 4 children in column-2 - DELETE THEM. There will be many among the '4' of column-2 who dont have as many as 3 children in column-1 - DELETE THEM. But note - DONT resize the grid cell sizes - if the uniformity is gone then human eye will have problem perceiving hierarchy and will attach significane to some abstract big cell
                //remove row3col1 AND row5col1 because this oracle standalone instance has only one child
                // in ROW - availGrid-row-2
                //var toRemove = [[3,1],[4,1],[5,1],[6,1]];
                //this.removeUnwantedRows("availGrid-row-2", toRemove);

                var i = 0;
                dojo.query("td.field-row1col3").forEach(function (node) {
                    node.id = gridMeta.components[i];
                    console.log("i = " + i + " this is the div in cell = " + node);
                    i++;
                });

                for (var i = 0; i < maxCol2; i++) {
                    this.markCol2Ids(i, maxCol3, gridMeta);
                }

                console.log("max col 3 = " + maxCol3);
                for (var i = 0; i < maxCol3; i++) {
                    var cluster = gridMeta.components[i];
                    console.log("working on cluster = " + gridMeta.components[i]);
                    var hostsOfCluster = [];
                    this.cacheClusterHosts(cluster, hostsOfCluster);

                    for (var j = 0; j < maxCol1; j++) {
                        dojo.query("div#availGrid-row-" + i + " td.field-row" + ((j * 2) + 1) + "col1").forEach(function (node) {
                            if (hostsOfCluster[j] != null && hostsOfCluster[j] != undefined) {
                                node.id = hostsOfCluster[j];
                                console.log("j = " + hostsOfCluster[j] + " div in cell = " + node.className);
                            }
                        });
                    }
                }

                // By this point all 'td' are ready with the correct id's
                // Traverse the meta and fire queries for the correct host, cluster, component
                // Render them
                for (var i = 0; i < gridMeta.components.length; i++) {
                    this.renderSVG(gridMeta.components[i], 30, 0);
                    var clusters = gridMeta.components[i].clusters;
                    for (var j = 0; j < clusters.length; j++) {
                        this.renderSVG(clusters[j].clusterName, 20, 1);
                        var host = clusters[j].host;
                        for (var z = 0; z < host.length; z++) {
                            this.renderSVG(host[z].name, 10, 2);
                        }
                    }
                }
            },

            renderSVG:function (objectName, objectSize, gridType) {
                var domNode = dojo.byId(objectName);
                var gridViewMeta = {
                    id:objectName,
                    type: CONSTANTS.AVAILABILITY_DATA,
                    width:domNode.offsetWidth,
                    height:domNode.offsetHeight,
                    xpos:0,
                    ypos:0,
                    objectSize: objectSize,
                    gridType: gridType
                };

                var queryUrl = Utility.serialiseObject(gridViewMeta);
                var baseUrl = "component/AvailabilityMatrix.jsp";
                Utility.xhrPostCentral(baseUrl + queryUrl, gridViewMeta);
            },

            cacheClusterHosts:function (cluster, hostsOfCluster) {
                for (var j = 0; j < cluster.length; j++) {
                    var host = cluster[j].host;
                    for (var z = 0; z < host.length; z++) {
                        hostsOfCluster.push(host[z].name);
                        console.log("pushed host = " + host[z].name);
                    }
                }
            },

            markCol2Ids:function (rowNum, maxCol3, gridMeta) {
                var clusterOfType = [];
                for (var i = 0; i < maxCol3; i++) {
                    var clusters = gridMeta.components[i].clusters;
                    if (clusters[rowNum] != null && clusters[rowNum] != undefined) {
                        clusterOfType.push(clusters[rowNum].clusterName);
                        console.log("pushed cluster = " + clusters[rowNum].clusterName);
                    }
                }
                var i = 0;
                dojo.query("td.field-row" + ((rowNum * 2) + 1) + "col2").forEach(function (node) {
                    if (clusterOfType[i] != null && clusterOfType[i] != undefined) {
                        node.id = clusterOfType[i];
                        console.log("i = " + clusterOfType[i] + " div in cell = " + node.className);
                    }
                    i++;
                });
            },

            removeUnwantedRows:function (rowId, toRemove) {
                for (var i = 0; i < toRemove.length; i++) {
                    var divClass = ".field-row" + toRemove[i][0] + "col" + toRemove[i][1];
                    var divList = d3.select("#" + rowId).selectAll(divClass).remove();
                    console.log("div list = " + divList.length);
                }
            }
        });

        // static variables of this class

        AvailabilityGrid.PageCounter = 0;
        AvailabilityGrid.CP = null;
        AvailabilityGrid.GridID = 0;

        return AvailabilityGrid;
    });