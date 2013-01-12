define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/_base/lang", "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, TitlePane, GridContainer, lang, i18nString) {

        var ComponentPage = declare("noc.pages.ComponentPage", null, {

            loadPage:function () {

                console.log("in component load page");

                ComponentPage.CP = noc.PageLoader.CpCenter[2];

                var paneWidth = ComponentPage.CP.w/2;
                var paneHeight = ComponentPage.CP.h/2;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                var cpane1 = new TitlePane({ title:"Windows Host Vs. KPI Matrix",
                    content: "<div id='grid1' style='width:100%;height:100%;'></div>",
                    style: styleString, "class": "soria", toggleable: false});
                var cpane2 = new TitlePane({ title:"Linux Host Vs. KPI Matrix",
                    content: "<div id='grid2' style='width:100%;height:100%;'></div>",
                    style: styleString, "class": "soria", toggleable: false});
                var cpane3 = new TitlePane({ title:"WAS Instances Vs. KPI Matrix",
                    content: "<div id='grid3' style='width:100%;height:100%;'></div>",
                    style: styleString, "class": "soria", toggleable: false});
                var cpane4 = new TitlePane({ title:"Oracle Instances Vs. KPI Matrix",
                    content: "<div id='grid4' style='width:100%;height:100%;'></div>",
                    style:  styleString, "class": "soria", toggleable: false});

                var gridContainer = new GridContainer({nbZones: 2, isAutoOrganized: true,
                    style: "width: 100%; height: 100%;", "class": "soria"});
                ComponentPage.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                gridContainer.addChild(cpane1, 0, 0);
                gridContainer.addChild(cpane2, 0, 1);
                gridContainer.addChild(cpane3, 1, 0);
                gridContainer.addChild(cpane4, 1, 1);

                gridContainer.startup();
                gridContainer.resize();

                this.createGrid('grid1', "./data/compMatrix/matrix1.json", paneWidth - 100, paneHeight - 60, cpane1);
                this.createGrid('grid2', "./data/compMatrix/matrix2.json", paneWidth - 100, paneHeight - 60, cpane2);
                this.createGrid('grid3', "./data/compMatrix/matrix3.json", paneWidth - 100, paneHeight - 60, cpane3);
                this.createGrid('grid4', "./data/compMatrix/matrix4.json", paneWidth - 100, paneHeight - 60, cpane4);
            },

            createGrid: function(id, jsonStore, width, height, cpane) {
                var xpos = cpane.domNode.offsetLeft + 40;
                var ypos = 40;
                console.log("xpos = " + xpos + " ypos = " + ypos);

                this.fetchData(jsonStore, id, width, height, xpos, ypos);
            },

            fetchData: function(jsonStore, id, gridWidth, gridHeight, topLeftX, topLeftY) {
                d3.json(jsonStore, dojo.hitch (this, function(m) {
                    var data = new Array();
                    var gridItemWidth = gridWidth/m.matrix.length; // total width / num of cols
                    var gridItemHeight = gridHeight/m.matrix[0].columns.length; // total height / num of rows

                    var ypos = topLeftY;

                    for(var i=0; i<m.matrix.length; i++) {
                        var xpos = topLeftX;
                        data[i] = new Array();
                        var columnSet = m.matrix[i].columns;
                        var rowName = m.matrix[i].rowname;
                        for(var j=0; j<columnSet.length;j++) {
                            data[i][j] = {
                                name: columnSet[j].kpiname,
                                value: columnSet[j].kpivalue,
                                width: gridItemWidth,
                                height: gridItemHeight,
                                x: xpos,
                                y: ypos
                            };
                            xpos += gridItemWidth;
                        }
                        ypos += gridItemHeight;
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
                    .style("fill", function(d) { return color(d.value); })
                    .style("stroke", '#555');


            }

        });

        // static variables of this class

        ComponentPage.CP = null;

        return ComponentPage;
    });