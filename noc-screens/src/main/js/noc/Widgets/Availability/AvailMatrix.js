define(['require', "dojo/_base/declare", "dojo/i18n",
    "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, i18nString) {

        var AvailMatrix = declare("noc.Components.Availability.AvailMatrix", null, {

            create: function(data) {
                var gridItemWidth = parseInt(data.custom[0]);
                var gridType = parseInt(data.custom[1]);
                var url;
                switch(gridType) {
                    case 0:
                        url = "availabilityDataComponent/AvailabilityDataComponent.action";
                        break;
                    case 1:
                        url = "availabilityDataCluster/AvailabilityDataCluster.action";
                        break;
                    case 2:
                        url = "availabilityDataHost/AvailabilityDataHost.action";
                        break;
                }

                // ToDo: you SHOULD use data.id in the below fetch URL to get the data for the exact point
                this.fetchData(url, data.id,
                    data.dimensions.width, data.dimensions.height,
                    data.position.xpos, data.position.ypos, gridItemWidth, gridType);
            },

            fetchData: function(jsonStore, id,
                                gridWidth, gridHeight,
                                topLeftX, topLeftY,
                                gridItemWidth, gridType) {

                d3.json(jsonStore, dojo.hitch (this, function(m) {
                    var data = new Array();
                    var ypos = topLeftY;
                    var xpos = topLeftX;
                    var gridItemHeight = gridItemWidth; // for square boxes

                    var length, sub;
                    switch(gridType) {
                        case 0:
                            length = m.componentData.times.length;
                            sub = m.componentData.times;
                            break;

                        case 1:
                            length = m.clusterData.times.length;
                            sub = m.clusterData.times;
                            break;

                        case 2:
                            length = m.hostData.times.length;
                            sub = m.hostData.times;
                            break;
                    }

                    for(var i=0; i<length; i++) {
                        xpos += gridItemWidth;
                        data[i] = new Array();
                        var columnSet;
                        switch(gridType) {
                            case 0:
                                columnSet = sub[i].cluster;
                                break;

                            case 1:
                                columnSet = sub[i].host;
                                break;

                            case 2:
                                columnSet = sub[i].kpi;
                                break;
                        }


                        for(var j=0; j<columnSet.length;j++) {
                            data[i][j] = {
                                name: columnSet[j].name,
                                value: columnSet[j].value,
                                width: gridItemWidth,
                                height: gridItemHeight,
                                x: xpos,
                                y: ypos
                            };
                            xpos += gridItemWidth;
                        }
                    }

                    this.renderGrid(data, id, gridWidth, gridHeight);
                }));
            },

            renderGrid: function(data, id, width, height) {
                //console.log(data);

                var grid = d3.select("#"+id).append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .attr("class", "chart");

                var row = grid.selectAll(".row")
                    .data(data)
                    .enter().append("svg:g")
                    .attr("class", "row");

                var color=d3.scale.category20c();

                var col = row.selectAll(".cell")
                    .data(function (d) { return d; })
                    .enter().append("svg:rect")
                    .attr("class", "cell")
                    .attr("x", function(d) { return d.x; })
                    .attr("y", function(d) { return d.y; })
                    .attr("width", function(d) { return d.width; })
                    .attr("height", function(d) { return d.height; })
                    .style("fill", function(d) { return color(d.value); })
                    .style("stroke", '#555');
            }
        });

        return AvailMatrix;

    });