define(['require', "dojo/_base/declare", "dojo/i18n", "dojox/layout/GridContainer", "dijit/TitlePane",
    "dojo/i18n!noc/nls/noc", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility", "dashboard/noc/Logger"],

    function (require, declare, i18n, GridContainer, TitlePane, i18nString, NOCCONSTANTS, NocUtility, Logger) {

        var TxTreemapPage = declare(NOCCONSTANTS.CLASSNAME.PAGES.TXTREEMAPPAGE, null, {

            loadPage:function () {
                TxTreemapPage.CP = noc.PageLoader.CpCenter[1];

                var paneWidth = TxTreemapPage.CP.w/2;
                var halfHeight = TxTreemapPage.CP.h/2;
                var thirdHeight = TxTreemapPage.CP.h/3;

                var halfStyleString = "width: " + paneWidth + "; height: " + halfHeight + ";"
                var thirdStyleString = "width: " + paneWidth + "; height: " + thirdHeight + ";"

                var cpane1 = new TitlePane({ title:"Tx Volume and Alerts TreeMap",
                    content:"<div id='volChart' style='width:100%;height:100%;'></div>",
                    style:halfStyleString, "class":"soria", toggleable:false});
                var cpane2 = new TitlePane({ title:"Important Transactions by Volume",
                    content:"<div id='impVolChart' style='width:100%;height:100%;'></div>",
                    style:thirdStyleString, "class":"soria", toggleable:false});
                var cpane3 = new TitlePane({ title:"Tx Response Times and Alerts TreeMap",
                    content:"<div id='txTimeChart' style='width:100%;height:100%;'></div>",
                    style:halfStyleString, "class":"soria", toggleable:false});
                var cpane4 = new TitlePane({ title:"Important Transactions by Response Time",
                    content:"<div id='impTimeChart' style='width:100%;height:100%;'></div>",
                    style:thirdStyleString, "class":"soria", toggleable:false});
                var cpane5 = new TitlePane({ title:"Important Transactions by Alerts",
                    content:"<div id='impAlerts' style='width:100%;height:100%;'></div>",
                    style:thirdStyleString, "class":"soria", toggleable:false});

                var gridContainer = new GridContainer({nbZones: 2, isAutoOrganized: true,
                    style: "width: 100%; height: 100%;", "class": "soria"});
                TxTreemapPage.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                gridContainer.addChild(cpane1, 0, 0);
                gridContainer.addChild(cpane2, 1, 0);
                gridContainer.addChild(cpane3, 0, 1);
                gridContainer.addChild(cpane4, 1, 1);
                gridContainer.addChild(cpane5, 1, 2);

                gridContainer.startup();
                gridContainer.resize();

                this.createTxVolumeTreemap(paneWidth-20, halfHeight-20, "./data/txTreemap/txVolume.json", "volChart") ;
                this.createTxRespTimeTreemap(paneWidth-20, halfHeight-20, "./data/txTreemap/txTimes.json", "txTimeChart");
            },

            createTxVolumeTreemap: function(width, height, jsonStore, idName) {
                var color = d3.scale.category20c();

                var treemap = d3.layout.treemap()
                    .size([width, height])
                    .sticky(true)
                    .value(function(d) { return d.size; });

                var div = d3.select("#"+idName).append("div")
                    .style("position", "relative")
                    .style("width", width + "px")
                    .style("height", height + "px");

                d3.json(jsonStore, function(json) {
                    div.data([json]).selectAll("div")
                        .data(treemap.nodes)
                        .enter().append("div")
                        .attr("class", "treemap_cell")
                        .style("background", function(d) { return d.children ? color(d.name) : null; })
                        .call(cell)
                        .text(function(d) { return d.children ? null : d.name; });

                    d3.select("#size").on("click", function() {
                        div.selectAll("div")
                            .data(treemap.value(function(d) { return d.size; }))
                            .transition()
                            .duration(1500)
                            .call(cell);

                        d3.select("#size").classed("active", true);
                        d3.select("#count").classed("active", false);
                    });

                    d3.select("#count").on("click", function() {
                        div.selectAll("div")
                            .data(treemap.value(function(d) { return 1; }))
                            .transition()
                            .duration(1500)
                            .call(cell);

                        d3.select("#size").classed("active", false);
                        d3.select("#count").classed("active", true);
                    });
                });

                function cell() {
                    this
                        .style("left", function(d) { return d.x + "px"; })
                        .style("top", function(d) { return d.y + "px"; })
                        .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
                        .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
                }
            },

            createTxRespTimeTreemap: function(width, height, jsonStore, idName){
                this.createTxVolumeTreemap(width, height, jsonStore, idName);
            }

        });

        // static variables of this class
        TxTreemapPage.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.PAGES.TXTREEMAPPAGE));

        TxTreemapPage.PageCounter = 0;

        return TxTreemapPage;
    });