define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants"],

    function (require, declare, i18n, i18nString, Logger, CONSTANTS) {

        // this is a completely static class
        var CellMaker = declare("noc.component.CellMaker", null, {

            create:function (data, id, width, height) {
                // data has all 3 - component name, kpi name and value
                // find the cell with the id and set its background color

                //console.log(data);

                var grid = d3.select("#" + id).append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .attr("class", "chart");

                //column headings
                grid.selectAll(".coltext")
                    .data(data[0])
                    .enter().append("text")
                    .attr("x", function (d) {
                        console.log(d);
                        return d.x;
                    })
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
                    .data(function (d) {
                        var jusCol = new Array(d[0]);
                        return jusCol;
                    })
                    .enter().append("text")
                    .attr("x", 0)
                    .attr("y", function (d) {
                        return d.y;
                    })
                    .text("bharath");

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
                    .attr("id", function (d) {
                        return d.id;
                    })
                    .style("stroke", '#555');
            }

        });

        return CellMaker;
    });