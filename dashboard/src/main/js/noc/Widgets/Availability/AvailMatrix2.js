define(['require', "dojo/_base/declare", "dojo/i18n",
    "dojo/i18n!noc/nls/noc", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility", "dashboard/noc/Logger"],

    function (require, declare, i18n, i18nString, NOCCONSTANTS, NocUtility, Logger) {

        var AvailMatrix2 = declare(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX2, null, {

            create:function (input, payload) {
                AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "in create avail matrix gridtype = " + input.subtype);
                try {
                    var data = new Array(); var timedata = new Array();
                    var gridItemWidth = 15;//parseInt(input.custom[0]);
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
                            case NOCCONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT:
                                columnSet = sub[i].cluster;
                                break;

                            case NOCCONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER:
                            case NOCCONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER2:
                                columnSet = sub[i].instances;
                                break;

                            case NOCCONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE:
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

                    NocUtility.removeChildren(document.getElementById(input.name));
                    this.renderGrid(data, timedata, input.name, input.dimensions.width, input.dimensions.height);
                } catch (e) {
                    AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "exception " + e);
                }
            },

            renderGrid:function (data, timedata, id, width, height) {

                try {
                    AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "render id = " + id + " grid data = "+dojo.toJson(data));

                    var obj = document.getElementById(id);
                    var w = obj.offsetWidth;
                    var h = obj.offsetHeight;

                    var grid = d3.select("#" + id).append("svg")
                        //.attr("left",document.getElementById(id).offsetParent.offsetLeft)
                        //.attr("top",document.getElementById(id).offsetTop)
                        .attr("viewBox", "0 0 " + w + " " + h);

                    var svgrow = grid.selectAll(".svgrow")
                        .data(data)
                        .enter().append("svg:g")
                        .attr("class", "svgrow");

                    var color = d3.scale.category20c();

                    var col = svgrow.selectAll(".svgcell")
                        .data(function (d) {
                            return d;
                        })
                        .enter().append("svg:rect")
                        //.attr("class", "cell")
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
                            if(d.value == 2) {
                                return "grey"; // 2 is unknown
                            } else if(d.value == 1) {
                                return "orangered"; // 1 is not available
                            } else {
                                return "yellowgreen"; //0 is available
                            }
                        })
                        .style("stroke", '#555');

                    svgrow.selectAll(".svgrowtext")
                        .data(function (d) {
                            return d;
                        })
                        .enter().append("text")
                        .attr("x", function (d) {
                            return 3*d.x;
                        })
                        .attr("y", function (d) {
                            return d.y+14;
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
                        //.style("font-weight", 100)
                        .style("font-size", "13")
                        //.attr("transform",function (d) {
                        //    return "rotate(90," + (d.x-d.width) + "," + d.height + ")";
                        //});

                } catch(e) {
                    AvailMatrix2.LOG.log(Logger.SEVERITY.SEVERE, "render exception = " + e);
                }
            }
        });
        AvailMatrix2.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX2));

        return AvailMatrix2;

    });