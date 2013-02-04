define(['require', "dojo/_base/declare", "dojo/i18n",
    "dojo/i18n!noc/nls/noc", "noc/Constants", "noc/Utility", "noc/Logger"],

    function (require, declare, i18n, i18nString, CONSTANTS, Utility, Logger) {

        var AvailMatrix2 = declare(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX2, null, {

            create:function (input, payload) {
                AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "in create avail matrix gridtype = " + input.subtype);
                try {
                    var data = new Array(); var timedata = new Array();
                    var gridItemWidth = parseInt(input.custom[0]);
                    var gridItemHeight = gridItemWidth; // for square boxes

                    var length = payload.times.length;
                    AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "payload len = " + length + " gridtype = " + input.subtype);
                    var sub = payload.times;

                    //var ypos = document.getElementById(input.name).offsetTop+gridItemHeight;
                    //var xpos = document.getElementById(input.name).offsetParent.offsetLeft+gridItemWidth;

                    var ypos = 0;
                    var xpos = gridItemWidth;

                    console.log("name = " + input.name + "xpos = " + xpos + "ypos = " + ypos);

                    for (var i = 0; i < length; i++) {
                        ypos += gridItemHeight;
                        data[i] = new Array();
                        var columnSet;
                        switch (input.subtype) {
                            case CONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT:
                                columnSet = sub[i].cluster;
                                break;

                            case CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER:
                            case CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER2:
                                columnSet = sub[i].instances;
                                break;

                            case CONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE:
                                columnSet = sub[i].kpi;
                                break;
                        }

                        timedata[i] = {
                            time: sub[i].time,
                            x: xpos,
                            y: ypos
                        };

                        AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "column set len = " + columnSet.length + " gridtype = " + input.subtype);

                        for (var j = 0; j < columnSet.length; j++) {
                            data[i][j] = {
                                name:columnSet[j].name,
                                value:columnSet[j].value,
                                width:gridItemWidth,
                                height:gridItemHeight,
                                x:xpos,
                                y:ypos
                            };
                            ypos += gridItemHeight;
                        }
                    }
                    AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "going to render grid for = " + input.name + "dimensions w = " + input.dimensions.width + " h = " + input.dimensions.height);
                    AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "timedata = " + dojo.toJson(timedata));

                    Utility.removeChildren(document.getElementById(input.name));
                    this.renderGrid(data, timedata, input.name, input.dimensions.width, input.dimensions.height);
                } catch (e) {
                    AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "exception " + e);
                }
            },

            renderGrid:function (data, timedata, id, width, height) {

                try {
                    AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "render id = " + id + " grid data = "+dojo.toJson(data));

                    var grid = d3.select("#" + id).append("svg")
                        .attr("class", "chart")
                        .attr("left",document.getElementById(id).offsetParent.offsetLeft)
                        .attr("top",document.getElementById(id).offsetTop);


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
                            return 3*d.x;
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
                        .style("font-weight", 100)
                        .style("font-size", "10px")
                    //.attr("transform",function (d) {
                    //    return "rotate(90," + (d.x-d.width) + "," + d.height + ")";
                    //});

                } catch(e) {
                    AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "render exception = " + e);
                }
            }
        });
        AvailMatrix2.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX2));

        return AvailMatrix2;

    });