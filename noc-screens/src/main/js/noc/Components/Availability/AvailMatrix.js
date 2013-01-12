define(['require', "dojo/_base/declare", "dojo/i18n",
    "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, i18nString) {

        var AvailMatrix = declare("noc.Components.Availability.AvailMatrix", null, {

            fetchData: function(jsonStore, id,
                                gridWidth, gridHeight,
                                topLeftX, topLeftY,
                                gridItemWidth, gridType) {

                d3.json(jsonStore, dojo.hitch (this, function(m) {
                    var data = new Array();
                    var ypos = topLeftY;
                    var xpos = topLeftX;
                    var gridItemHeight = gridItemWidth; // for square boxes

                    for(var i=0; i<m.times.length; i++) {
                        xpos += gridItemWidth;
                        data[i] = new Array();
                        var columnSet;
                        switch(gridType) {
                            case 0:
                                columnSet = m.times[i].cluster;
                                break;

                            case 1:
                                columnSet = m.times[i].host;
                                break;

                            case 2:
                                columnSet = m.times[i].kpi;
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