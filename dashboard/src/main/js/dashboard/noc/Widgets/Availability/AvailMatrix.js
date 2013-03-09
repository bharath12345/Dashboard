define(['require', "dojo/_base/declare", "dojo/i18n",
    "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility", "dashboard/logger/Logger"],

    function (require, declare, i18n, i18nString, NOCCONSTANTS, NocUtility, Logger) {

        var AvailMatrix = declare(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX, null, {

            create:function (input, payload) {
                AvailMatrix.LOG.log(Logger.SEVERITY.SEVERE, "in create avail matrix gridtype = " + input.subtype);
                try {
                    var data = new Array(); var timedata = new Array();
                    var gridItemWidth = parseInt(input.custom[0]);
                    var gridItemHeight = gridItemWidth; // for square boxes

                    var length = payload.times.length;
                    AvailMatrix.LOG.log(Logger.SEVERITY.SEVERE, "payload len = " + length + " gridtype = " + input.subtype);
                    var sub = payload.times;

                    var xpos = 0;
                    for (var i = 0; i < length; i++) {
                        xpos += gridItemWidth;
                        data[i] = new Array();
                        var columnSet;
                        switch (input.subtype) {
                            case NOCCONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT:
                                columnSet = sub[i].cluster;
                                break;

                            case NOCCONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER:
                                columnSet = sub[i].instances;
                                break;

                            case NOCCONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE:
                                columnSet = sub[i].kpi;
                                break;
                        }

                        timedata[i] = {
                            time: sub[i].time,
                            x: xpos,
                            y: input.position.ypos
                        };

                        AvailMatrix.LOG.log(Logger.SEVERITY.SEVERE, "column set len = " + columnSet.length + " gridtype = " + input.subtype);

                        for (var j = 0; j < columnSet.length; j++) {
                            data[i][j] = {
                                name:columnSet[j].name,
                                value:columnSet[j].value,
                                width:gridItemWidth,
                                height:gridItemHeight,
                                x:xpos,
                                y:input.position.ypos
                            };
                            xpos += gridItemWidth;
                        }
                    }
                    AvailMatrix.LOG.log(Logger.SEVERITY.SEVERE, "going to render grid for = " + input.name + "dimensions w = " + input.dimensions.width + " h = " + input.dimensions.height);
                    AvailMatrix.LOG.log(Logger.SEVERITY.SEVERE, "timedata = " + dojo.toJson(timedata));

                    this.renderGrid(data, timedata, input.name, input.dimensions.width, input.dimensions.height);
                } catch (e) {
                    AvailMatrix.LOG.log(Logger.SEVERITY.SEVERE, "exception " + e);
                }
            },

            renderGrid:function (data, timedata, id, width, height) {

                try {
                    AvailMatrix.LOG.log(Logger.SEVERITY.SEVERE, "render id = " + id + " grid data = "+dojo.toJson(data));

                    var rowhead = d3.select("#" + id).append("svg")
                        .attr("class", "timegroup");

                    rowhead.selectAll(".timehead")
                        .data(timedata).enter()
                        .append("text")
                        .text(function(d) {
                            AvailMatrix.LOG.log(Logger.SEVERITY.SEVERE, "time fragment = " + d.time);
                            return d.time;
                        })
                        .attr("x", function (d) {
                            return d.x;
                        })
                        .attr("y", function (d) {
                            return d.y;
                        });

                    var grid = d3.select("#" + id).append("svg")
                        .attr("width", width)
                        //.attr("height", height)
                        .attr("class", "chart")
                        .attr("top", "10")
                        .attr("left", "10");

                    var row = grid.selectAll(".row")
                        .data(data)
                        .enter().append("svg:g")
                        .attr("class", "row");

                    var color = d3.scale.category20c();

                    var col = row.selectAll(".cell")
                        .data(function (d) {
                            return d;
                        })
                        .enter().append("svg:rect")
                        .attr("class", "cell")
                        .attr("x", function (d) {
                            return d.x;
                        })
                        .attr("y", function (d) {
                            return d.y;
                        })
                        .attr("width", function (d) {
                            return d.width;
                        })
                        .attr("height", function (d) {
                            return d.height;
                        })
                        .style("fill", function (d) {
                            //return color(d.value);
                            if(d.value == 0) {
                                return "orangered";
                            } else {
                                return "yellowgreen";
                            }
                        })
                        .style("stroke", '#555');

                    row.selectAll(".rowtext")
                        .data(function (d) {
                            return d;
                        })
                        .enter().append("text")
                        .attr("x", function (d) {
                            return d.x;
                        })
                        .attr("y", function (d) {
                            return d.y;
                        })
                        .attr("width", function (d) {
                            return d.width;
                        })
                        .attr("height", function (d) {
                            return d.height;
                        })
                        .text(function(d) {
                            return d.name;
                        })
                        .attr("transform",function (d) {
                            return "rotate(90," + (d.x-d.width) + "," + d.height + ")";
                        });

                } catch(e) {
                    AvailMatrix.LOG.log(Logger.SEVERITY.SEVERE, "render exception = " + e);
                }
            }
        });
        AvailMatrix.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX));

        return AvailMatrix;

    });