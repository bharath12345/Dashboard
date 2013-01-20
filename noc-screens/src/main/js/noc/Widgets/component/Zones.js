define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants"],

    function (require, declare, i18n, i18nString, Logger, CONSTANTS) {

        // this is a completely static class
        var Zones = declare("noc.component.Zones", null, {

            create:function (data) {
                var paneWidth, paneHeight, nbZones;
                var width = parseInt(data.componentMatrixZonesVO.width);
                var height = parseInt(data.componentMatrixZonesVO.height);

                // matrix will be 2x2, 2x3 and 3x3
                var zoneNames = componentMatrixZonesVO.zoneNames;
                switch(zoneNames.length) {
                    case 4:
                        paneWidth = width/2;
                        paneHeight = height/2;
                        nbZones = 2;
                        break;
                    case 6:
                        paneWidth = width/3;
                        paneHeight = height/2;
                        nbZones = 3;
                        break;
                    case 9:
                        paneWidth = width/3;
                        paneHeight = height/3;
                        nbZones = 3;
                        break;
                    default:
                        console.log("unusual number of zones = "+zoneNames.length);
                        return;
                }

                var gridContainer = new GridContainer({"nbZones": nbZones, isAutoOrganized: true,
                    style: "width: 100%; height: 100%;", "class": "soria"});
                noc.pages.ComponentPage.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                var j = 0, k = 0;
                for(var i = 0; i<zoneNames.length;i++) {
                    var zoneName = zoneNames[i] + "Zone";
                    gridContainer.addChild(
                        new TitlePane({ title:zoneNames[i],
                            content: "<div id=" + zoneName + " style='width:100%;height:100%;'></div>",
                            style: styleString, "class": "soria", toggleable: false}), j, k);

                    k = (i%nbZones);
                    j = parseInt(i/nbZones);
                }

                gridContainer.startup();
                gridContainer.resize();

                for(var i = 0; i<zoneNames.length;i++) {
                    var zoneName = zoneNames[i] + "Zone";
                    this.fetchMeta(zoneName,
                        "./data/compMatrix/matrixMeta.json", //CONSTANTS.ACTION.COMPONENT.META
                        paneWidth, paneHeight, 40, 40);
                }
            },

            fetchMeta: function(id, jsonStore, gridWidth, gridHeight, topLeftX, topLeftY) {
                d3.json(jsonStore, dojo.hitch (this, function(m) {
                    var data = new Array();
                    var gridItemWidth = gridWidth/m.matrix.length; // total width / num of cols
                    var gridItemHeight = gridHeight/m.matrix[0].columns.length; // total height / num of rows

                    var ypos = topLeftY;

                    for(var i=0; i<m.matrix.length; i++) {
                        var xpos = topLeftX;
                        data[i] = new Array();
                        var columnSet = m.matrix[i].columns;
                        var componentName = m.matrix[i].componentName;
                        for(var j=0; j<columnSet.length;j++) {
                            var id = componentName + "_" + columnSet[j].kpiname;
                            data[i][j] = {
                                name: columnSet[j].kpiname,
                                width: gridItemWidth,
                                height: gridItemHeight,
                                x: xpos,
                                y: ypos,
                                id: id
                            };
                            xpos += gridItemWidth;
                        }
                        ypos += gridItemHeight;
                    }

                    this.renderGrid(data, id, gridWidth, gridHeight);

                    for(var i=0; i<m.matrix.length; i++) {
                        var componentName = m.matrix[i].componentName;
                        var columnSet = m.matrix[i].columns;
                        for(var j=0; j<columnSet.length;j++) {
                            var kpiName = columnSet[j].kpiname;

                            // now fetch data for this component-name and kpi-name
                            var viewMeta = {
                                componentName: componentName,
                                kpiName: kpiName,
                                type: CONSTANTS.TYPE.COMPONENT.META
                            };
                            Utility.xhrPostCentral(
                                "./data/compMatrix/matrixData.json", //CONSTANTS.ACTION.COMPONENT.DATA
                                dojo.toJson(viewMeta));
                        }
                    }
                }));
            },

            renderGrid: function(data, id, width, height) {
                //console.log(data);

                var grid = d3.select("#"+id).append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .attr("class", "chart");

                //column headings
                grid.selectAll(".coltext")
                    .data(data[0])
                    .enter().append("text")
                    .attr("x", function(d) { console.log(d); return d.x; })
                    .attr("y", 20)
                    //.attr("dy", "-.5em") // .32em before rotating
                    //.attr("dx", ".5em")
                    //.attr("text-anchor", "start")
                    //.attr("transform","rotate(45)")
                    .text("india");

                var row = grid.selectAll(".row")
                    .data(data)
                    .enter().append("svg:g")
                    .attr("class", "row");

                // row headings
                row.selectAll(".rowtext")
                    .data(function (d) { var jusCol = new Array(d[0]); return jusCol; })
                    .enter().append("text")
                    .attr("x", 0)
                    .attr("y", function(d) { return d.y; })
                    .text("bharath");

                var color=d3.scale.category20c();

                var col = row.selectAll(".cell")
                    .data(function (d) { return d; })
                    .enter().append("svg:rect")
                    .attr("class", "cell")
                    .attr("x", function(d) { return d.x; })
                    .attr("y", function(d) { return d.y; })
                    .attr("width", function(d) { return d.width; })
                    .attr("height", function(d) { return d.height; })
                    .attr("id", function(d) { return d.id; })
                    .style("stroke", '#555');
            }

        });

        return Zones;
    });