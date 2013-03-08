define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility", "dashboard/noc/Logger"],

    function (declare, i18n, i18nString, NOCCONSTANTS, NocUtility, Logger) {

        var CompStaticTimeSeries = declare(NOCCONSTANTS.CLASSNAME.TIMESERIES.COMPSTATIC, null, {

            createTimeSeries: function(jsonStore, id, gridWidth, gridHeight, topLeftX, topLeftY) {
                d3.json(jsonStore, dojo.hitch (this, function(m) {
                    var gridItemWidth = gridWidth/10; // total width / (num of time data points, which is always (say) 15)

                    var x = d3.scale.ordinal().rangeRoundBands([0, gridItemWidth], .1);
                    var y = d3.scale.linear().rangeRound([gridHeight, 0]);

                    var color = d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

                    var xAxis = d3.svg.axis().scale(x).orient("bottom");
                    var yAxis = d3.svg.axis().scale(y).orient("left").tickFormat(d3.format(".2s"));

                    var svg = d3.select("#"+id).append("svg")
                        .attr("width", gridWidth)
                        .attr("height", gridHeight)
                        .append("g")
                        .attr("transform", "translate(" + topLeftX + "," + topLeftY + ")");

                    var data = m.matrix;
                    var colorDomain = [];
                    for(var i=0;i<data[0].data[0].kpi.length;i++) {
                        colorDomain[i] = data[0].data[0].kpi[i].name;
                    }
                    color.domain(colorDomain);

                    var xpos = 0;
                    svg.append("g").attr("class", "y axis")
                        .attr("transform", "translate(0,0)")
                        .call(yAxis);

                    var timeArray = [];
                    for(var i=0;i<data.length;i++) { //all timestamps
                        var kpiArray = [];
                        var timeDataPoint = data[i];
                        CompStaticTimeSeries.LOG.log(Logger.SEVERITY.SEVERE, "time data point = " + dojo.toJson(timeDataPoint));

                        for(var j=0;j<timeDataPoint.data.length;j++) { // one type in the timestamp
                            var kpiPoint = timeDataPoint.data[j];
                            CompStaticTimeSeries.LOG.log(Logger.SEVERITY.SEVERE, "kpi point = " + dojo.toJson(kpiPoint));
                            var y0 = 0; var z = 0;
                            var d = {}; d.kpi = [];
                            d.kpi = color.domain().map(function(name) { //across kpi's in a type and timestamp
                                CompStaticTimeSeries.LOG.log(Logger.SEVERITY.SEVERE, "name in color call " + name + " z = " + z);
                                var val = {
                                    type: name,
                                    y0: y0 = y0 * 1,
                                    y1: y0 += (kpiPoint.kpi[z].value*1)
                                };
                                z++;
                                return val;
                            });
                            d.total = d.kpi[d.kpi.length - 1].y1;
                            d.name = kpiPoint.type;
                            kpiArray[j] = d;
                            CompStaticTimeSeries.LOG.log(Logger.SEVERITY.SEVERE, "kpi data = " + dojo.toJson(d));
                        } // end of j loop

                        var timeContent = {};
                        timeContent.kpi = kpiArray;
                        timeContent.timepoint = timeDataPoint.timestamp;
                        timeArray[i] = timeContent;

                        x.domain(kpiArray.map(function(d) { return d.name; }));
                        y.domain([0, d3.max(kpiArray, function(d) { return d.total; })]);

                        svg.append("g").attr("class", "x axis")
                            .attr("transform", "translate("+xpos+"," + gridHeight + ")")
                            .call(xAxis);

                        var state = svg.selectAll(".state").data(kpiArray)
                            .enter().append("g")
                            .attr("class", "g")
                            .attr("transform", function(d) { return "translate(" + (xpos + (x(d.name))) + ",0)"; });

                        state.selectAll("rect").data(function(d) { return d.kpi; })
                            .enter().append("rect")
                            .attr("width", x.rangeBand())
                            .attr("y", function(d) { return y(d.y1); })
                            .attr("height", function(d) { return y(d.y0) - y(d.y1); })
                            .style("fill", function(d) { return color(d.type); });

                        xpos += gridItemWidth;

                    }// end of i loop
                }));
            }

        });

        CompStaticTimeSeries.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.TIMESERIES.COMPSTATIC));

        return CompStaticTimeSeries;

    });
