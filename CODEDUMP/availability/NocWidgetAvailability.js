define(['require', "../../../../dojo/_base/declare", "../../dashboard/src/main/js/dojo/i18n", 'dgrid/Grid', "dojo/request/xhr", "dojo/_base/lang",
    "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/logger/Logger"],

    function (require, declare, i18n, Grid, xhr, lang, i18nString, NocUtility, NOCCONSTANTS, Logger) {

        var NocWidgetAvailability = declare(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITY, null, {

            renderGrid:function (gridMeta) {
                // How to build the table - METHODOLOGY
                // 1. The number of Broad columns is fixed at 3
                // 2. Parse the JSON to find the number of items in Column 3 - this should NOT be more than 5
                var col3Length = gridMeta.componentVO.length;

                // 3. Parse the JSON to find the MAX number of columns among the '5' of step 2 for column 2 (children). Lets say it is 4
                // 4. Parse the JSON to find the MAX number of columns among the '4' of step 3 for column 1 (children). Lets say it is 3

                var maxCol3 = 0;
                for (var i = 0; i < col3Length; i++) {
                    if (gridMeta.componentVO[i] == null) {
                        continue;
                    }
                    var clusters = gridMeta.componentVO[i].clusters;
                    if (clusters == null) {
                        continue;
                    }
                    maxCol3++;
                }

                console.log("max col = " + maxCol3);

                for (var i = 0; i < maxCol3; i++) {
                    var compDiv = dojo.create("div");
                    if(gridMeta.clusterName != "ALL") {
                        compDiv.id = NOCCONSTANTS.PREFIX.COMPONENT_GRID + gridMeta.componentName + "_" + gridMeta.clusterName;
                    } else {
                        compDiv.id = NOCCONSTANTS.PREFIX.COMPONENT_GRID + gridMeta.componentName;
                    }
                    dojo.byId(gridMeta.pageName).appendChild(compDiv);
                    var compGridMeta = {};
                    compGridMeta.componentVO = [];
                    compGridMeta.componentVO.push(gridMeta.componentVO[i]);

                    if(gridMeta.clusterName != "ALL") {
                        // remove all clusters except the one in the request

                        var clusters = gridMeta.componentVO[0].clusters;
                        for (var j = 0; j < clusters.length; j++) {
                            if (clusters[j].clusterName != gridMeta.clusterName) {
                                delete clusters[j];
                            }
                        }
                    }

                    NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "component grid meta = " + dojo.toJson(compGridMeta));

                    NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "creating availability grid for component = " + gridMeta.componentName + " cluster = " + gridMeta.clusterName + " in page = " + gridMeta.pageName);
                    this.createSingleComponentGrid(compDiv.id, compGridMeta, gridMeta.clusterName);
                }
            },

            createSingleComponentGrid:function (compName, gridMeta, clusterName) {
                // How to build the table - METHODOLOGY
                // 1. The number of Broad columns is fixed at 3
                // 2. We create one grid per component
                // 3. Parse the JSON to find the MAX number of cluster rows for this component. Lets say it is 4
                // 4. Parse the JSON to find the MAX number of instance rows among the '4' of step 3 for column 1 (children).
                // ...Lets say it is 3

                var maxCol3 = 1, maxCol2 = 0, maxCol1 = 0;

                var clusters = gridMeta.componentVO[0].clusters;
                maxCol2 = clusters.length;
                var realClusterLen = 0;
                NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "component = " + compName + " number of clusters = " + maxCol2);
                for (var j = 0; j < clusters.length; j++) {
                    if(clusters[j] == undefined) {
                        continue;
                    }
                    realClusterLen++;
                    if (clusters[j].instances.length > maxCol1) {
                        maxCol1 = clusters[j].instances.length;
                    }
                }
                maxCol2 = realClusterLen;

                // 5. With the following data points - we need to build a matrix with
                // a) column 3: 5 rows
                // b) column 2: 4 rows
                // c) column 1: 3 rows

                //double the counters for heading and data
                maxCol1 = maxCol1 * maxCol2;
                maxCol1 *= 2;
                var col2break = maxCol1 / maxCol2;
                NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "1=" + maxCol1 + " 2=" + maxCol2 + " 3=" + maxCol3);

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
                NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "table meta json" + dojo.toJson(subSubRows));

                var gridData = [];
                var dataPoint = new Object();
                dataPoint.row0col3 = gridMeta.componentVO[0].componentName;
                this.enrichWithIncidents(gridMeta.componentVO[0].componentName,
                    gridMeta.componentVO[0].componentName, "row0col3", NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.COMPONENT);
                var lastpoint = 0;
                var clusters = gridMeta.componentVO[0].clusters;
                for (var j = 0; j < clusters.length; j++) {
                    if(clusters[j] == undefined) {
                        continue;
                    }
                    var point2 = "row" + (2 * j) + "col2";
                    dataPoint[point2] = clusters[j].clusterName;
                    this.enrichWithIncidents(gridMeta.componentVO[0].componentName,
                        clusters[j].clusterName, point2, NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.CLUSTER);

                    for (var z = 0; z < clusters[j].instances.length; z++) {
                        var point1 = "row" + (lastpoint + (2 * z)) + "col1";
                        //NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "point 1 = " + point1);
                        dataPoint[point1] = clusters[j].instances[z].instanceName;
                        this.enrichWithIncidents(gridMeta.componentVO[0].componentName,
                            clusters[j].instances[z].instanceName, point1, NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.INSTANCE);
                        if (z == (clusters[j].instances.length - 1)) {
                            lastpoint = (2 * z) + 2;
                        }
                    }
                }
                gridData.push(dataPoint);
                NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "table data json" + dojo.toJson(gridData));
                var grid = new Grid({subRows:subSubRows, showHeader:false}, compName);
                grid.renderArray(gridData);
                dojo.byId("dijit_TitlePane_0_pane").style.padding = "0px";


                // 6. There will be many among the '5' of column-3 who dont have as many as 4 children in column-2 - DELETE THEM. There will be many among the '4' of column-2 who dont have as many as 3 children in column-1 - DELETE THEM. But note - DONT resize the grid cell sizes - if the uniformity is gone then human eye will have problem perceiving hierarchy and will attach significane to some abstract big cell
                //remove row3col1 AND row5col1 because this oracle standalone instance has only one child
                // in ROW - availGrid-row-2
                //var toRemove = [[3,1],[4,1],[5,1],[6,1]];
                //this.removeUnwantedRows("availGrid-row-2", toRemove);

                var i = 0;
                dojo.query("#" + compName + " td.field-row1col3").forEach(function (node) {
                    node.id = NOCCONSTANTS.PREFIX.COMPONENT_CELL + gridMeta.componentVO[0].componentName;
                    node.setAttribute(NOCCONSTANTS.ATTRIBUTE.AVAILABILITY.COMPONENT, gridMeta.componentVO[0].id);
                    //NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "i = " + i + " comp id = " + gridMeta.componentVO[0].id + " this is the div in cell = " + node);
                    i++;

                });

                for (var i = 0; i < maxCol2; i++) {
                    this.markCol2Ids(i, maxCol3, gridMeta, compName);
                }

                NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "max col 3 = " + maxCol3);

                var cluster = gridMeta.componentVO[0].clusters;

                //NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "working on clusters in = " + gridMeta.componentVO[0].componentName);
                var instanceNamesOfCluster = [];
                var instanceIdsOfCluster = [];
                this.cacheClusterInstances(cluster, instanceNamesOfCluster, instanceIdsOfCluster);

                for (var j = 0; j < maxCol1; j++) {
                    dojo.query("#" + compName + " td.field-row" + ((j * 2) + 1) + "col1").forEach(function (node) {
                        if (instanceNamesOfCluster[j] != null && instanceNamesOfCluster[j] != undefined) {
                            node.id = NOCCONSTANTS.PREFIX.INSTANCE_CELL + instanceNamesOfCluster[j];
                            node.setAttribute(NOCCONSTANTS.ATTRIBUTE.AVAILABILITY.INSTANCE, instanceIdsOfCluster[j]);
                            //NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "j = " + instanceNamesOfCluster[j] + " div in cell = " + node.className);
                        }
                    });
                }


                // By this point all 'td' are ready with the correct id's
                // Traverse the meta and fire queries for the correct instance, cluster, component
                // Render them

                this.renderSVG(NOCCONSTANTS.PREFIX.COMPONENT_CELL + gridMeta.componentVO[0].componentName, gridMeta.componentVO[0].id, 30, NOCCONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT);
                var clusters = gridMeta.componentVO[0].clusters;
                for (var j = 0; j < clusters.length; j++) {
                    if(clusters[j] == undefined) {
                        continue;
                    }
                    this.renderSVG(NOCCONSTANTS.PREFIX.CLUSTER_CELL + clusters[j].clusterName, clusters[j].id, 20, NOCCONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER);
                    var instance = clusters[j].instances;
                    for (var z = 0; z < instance.length; z++) {
                        this.renderSVG(NOCCONSTANTS.PREFIX.INSTANCE_CELL + instance[z].instanceName, instance[z].id, 10, NOCCONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE);
                    }
                }

            },

            renderSVG:function (objectName, id, objectSize, gridType) {
                NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "render svg grid type " + gridType);
                var domNode = dojo.byId(objectName);
                if(domNode == null) {
                    NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "domnode null for = " + objectName);
                    return;
                }
                var xpos = 0, ypos = 10;
                var viewMeta = {
                    id:id,
                    name:objectName,
                    type:NOCCONSTANTS.TYPE.AVAILABILITY,
                    subtype:gridType,
                    dimensions:[domNode.offsetWidth, domNode.offsetHeight],
                    position:[xpos, ypos],
                    custom:[objectSize]
                };
                var url;
                switch (gridType) {
                    case NOCCONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT:
                        url = NOCCONSTANTS.ACTION.AVAILABILITY.COMPONENT;
                        break;
                    case NOCCONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER:
                        url = NOCCONSTANTS.ACTION.AVAILABILITY.CLUSTER;
                        break;
                    case NOCCONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE:
                        url = NOCCONSTANTS.ACTION.AVAILABILITY.INSTANCE;
                        break;
                    default:
                        NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "unknown grid type = " + gridType);
                        return;
                }
                NocUtility.xhrPostCentral(url, viewMeta);
            },

            cacheClusterInstances:function (cluster, instanceNamesOfCluster, instanceIdsOfCluster) {
                for (var j = 0; j < cluster.length; j++) {
                    if(cluster[j] == undefined) {
                        continue;
                    }
                    var instance = cluster[j].instances;
                    for (var z = 0; z < instance.length; z++) {
                        instanceNamesOfCluster.push(instance[z].instanceName);
                        instanceIdsOfCluster.push(instance[z].id);
                        //NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "pushed instance = " + instance[z].instanceName);
                    }
                }
            },

            markCol2Ids:function (rowNum, maxCol3, gridMeta, compName) {
                var clusterNameOfType = [];
                var clusterIdOfType = [];
                for (var i = 0; i < maxCol3; i++) {
                    if (gridMeta.componentVO[i] == null) {
                        continue;
                    }
                    var clusters = gridMeta.componentVO[i].clusters;
                    if (clusters == null) {
                        continue;
                    }
                    if (clusters[rowNum] != null && clusters[rowNum] != undefined) {
                        clusterNameOfType.push(clusters[rowNum].clusterName);
                        //NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "pushed cluster = " + clusters[rowNum].clusterName);
                        clusterIdOfType.push(clusters[rowNum].id);
                    }
                }
                var i = 0;
                dojo.query("#" + compName + " td.field-row" + ((rowNum * 2) + 1) + "col2").forEach(function (node) {
                    if (clusterNameOfType[i] != null && clusterNameOfType[i] != undefined) {
                        node.id = NOCCONSTANTS.PREFIX.CLUSTER_CELL + clusterNameOfType[i];
                        node.setAttribute(NOCCONSTANTS.ATTRIBUTE.AVAILABILITY.CLUSTER, clusterIdOfType[i]);
                        //NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "i = " + clusterNameOfType[i] + " div in cell = " + node.className);
                    }
                    i++;
                });
            },

            removeUnwantedRows:function (rowId, toRemove) {
                for (var i = 0; i < toRemove.length; i++) {
                    var divClass = ".field-row" + toRemove[i][0] + "col" + toRemove[i][1];
                    var divList = d3.select("#" + rowId).selectAll(divClass).remove();
                    NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "div list = " + divList.length);
                }
            },

            enrichWithIncidents:function (tableName, queryName, pointName, queryType) {
                var viewMeta = {
                    id:1,
                    name:queryName,
                    type:NOCCONSTANTS.TYPE.INCIDENT,
                    subtype:queryType,
                    dimensions:[0, 0],
                    position:[0, 0],
                    custom:[tableName, pointName]
                };
                var url;
                switch (queryType) {
                    case NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.COMPONENT:
                        NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "component alert enrichment for " + tableName + " query name = " + queryName + " point name = " + pointName);
                        url = NOCCONSTANTS.ACTION.INCIDENT.COMPONENT;
                        break;

                    case NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.CLUSTER:
                        NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "cluster alert enrichment for " + tableName + " query name = " + queryName + " point name = " + pointName);
                        url = NOCCONSTANTS.ACTION.INCIDENT.CLUSTER;
                        break;

                    case NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.INSTANCE:
                        NocWidgetAvailability.LOG.log(Logger.SEVERITY.SEVERE, "instance alert enrichment for " + tableName + " query name = " + queryName + " point name = " + pointName);
                        url = NOCCONSTANTS.ACTION.INCIDENT.INSTANCE;
                        break;
                }
                NocUtility.xhrPostCentral(url, viewMeta);
            }
        });

        // static variables of this class
        NocWidgetAvailability.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITY));

        return NocWidgetAvailability;
    });