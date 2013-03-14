define(["../../../../dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, NOCCONSTANTS, NocUtility, Logger) {

        var OnlineTxTimeSeries = declare(NOCCONSTANTS.CLASSNAME.TIMESERIES.ONLINETX, null, {

            createTimeSeries: function(jsonStore, id, gridWidth, gridHeight, topLeftX, topLeftY) {
                OnlineTxTimeSeries.LOG.log(Logger.SEVERITY.SEVERE, "grid width = " + gridWidth);
                d3.json(jsonStore, dojo.hitch (this, function(m) {
                    var rowHeight = gridHeight/m.matrix.length;
                    for(var i=0;i<m.matrix.length;i++){
                        var rowDiv = dojo.create('div');
                        rowDiv.id = m.matrix[i].rowname+"_TS_row";
                        rowDiv.style.height = rowHeight;
                        if(i%2) {
                            rowDiv.className = "onlineTxRowEven";
                        } else {
                            rowDiv.className = "onlineTxRowOdd";
                        }
                        dojo.byId(id).appendChild(rowDiv);
                        var rowHead = dojo.create('span');
                        rowHead.className = "rowtext";
                        rowDiv.appendChild(rowHead);
                        rowHead.innerHTML = m.matrix[i].rowname;
                        this.makeTxRow(m.matrix[i], gridWidth, rowHeight, topLeftX, topLeftY, rowDiv);
                    }
                }));
            },

            makeTxRow: function(rowData, gridWidth, rowHeight, topLeftX, topLeftY, rowDiv) {
                var rowName = rowData.rowname;
                var gridItemWidth = gridWidth/12; // total width / (num of cols, which is always 12, 12 of 5 mins duration = 1 hour)

                OnlineTxTimeSeries.LOG.log(Logger.SEVERITY.SEVERE, "grid item width " + gridItemWidth);

                var grid = d3.select("#"+rowDiv.id).append("svg")
                    .attr("width", gridWidth)
                    .attr("height", rowHeight)
                    .attr("class", "chart");

                var barWidth = gridItemWidth/5;
                var ok_xpos = topLeftX,
                    fail_xpos = topLeftX+barWidth,
                    slow_xpos = topLeftX+(2*barWidth),
                    timeout_xpos = topLeftX+(3*barWidth);
                var data = new Array();
                var hScale=d3.scale.linear().domain([0,10]).range([0,rowHeight]);

                for(var i=0; i<rowData.columns.length; i++) {
                    var columnSet = rowData.columns[i];
                    var columnTimestamp = columnSet.timestamp;
                    var cellData = new Array();

                    cellData[0] = {
                        columnTimeStamp: columnTimestamp,
                        x: ok_xpos,
                        y: topLeftY + 10,
                        id: "removeThisRect",
                        value: 0
                    };

                    cellData[1] = {
                        id: rowName + "_ok_" + columnTimestamp,
                        width: barWidth, // since there will be 4 bars
                        value: columnSet.txvalues.ok,
                        x: ok_xpos,
                        y: rowHeight - hScale(columnSet.txvalues.ok),
                        color: "green"
                    };
                    ok_xpos += gridItemWidth;

                    cellData[2] = {
                        id: rowName + "_fail_" + columnTimestamp,
                        width: barWidth, // since there will be 4 bars
                        value: columnSet.txvalues.failed,
                        x: fail_xpos,
                        y: rowHeight - hScale(columnSet.txvalues.failed),
                        color: "red"
                    };
                    fail_xpos += gridItemWidth;

                    cellData[3] = {
                        id: rowName + "_slow_" + columnTimestamp,
                        width: barWidth, // since there will be 4 bars
                        value: columnSet.txvalues.slow,
                        x: slow_xpos,
                        y: rowHeight - hScale(columnSet.txvalues.slow),
                        color: "blue"
                    };
                    slow_xpos += gridItemWidth;

                    cellData[4] = {
                        id: rowName + "_timeout_" + columnTimestamp,
                        width: barWidth, // since there will be 4 bars
                        value: columnSet.txvalues.timeout,
                        x: timeout_xpos,
                        y: rowHeight - hScale(columnSet.txvalues.timeout),
                        color: "grey"
                    };
                    timeout_xpos += gridItemWidth;

                    data.push(cellData);
                }
                OnlineTxTimeSeries.LOG.log(Logger.SEVERITY.SEVERE, "data = " + dojo.toJson(data));

                row = grid.selectAll(".timeCol")
                    .data(data)
                    .enter().append("svg:g")
                    .attr("class", "timeCol");
                //OnlineTxTimeSeries.LOG.log(Logger.SEVERITY.SEVERE, "row = "+row);

                // timestamp row headings
                row.selectAll(".rowtext")
                    .data(function (d) { var jusCol = new Array(d[0]); return jusCol; })
                    .enter().append("text")
                    .attr("class", "rowtext")
                    .attr("x", function(d) { return d.x; })
                    .attr("y", function(d) { return d.y; })
                    .text(function(d) { return d.columnTimeStamp; });

                row.selectAll(".bar")
                    .data(function (d) { return d; })
                    .enter().append("svg:rect")
                    .attr("class", "bar")
                    .attr("x", function(d) { /*OnlineTxTimeSeries.LOG.log(Logger.SEVERITY.SEVERE, "d cell = " + dojo.toJson(d));*/ return d.x; })
                    .attr("y", function(d) { return d.y; })
                    .attr("width", function(d) { return d.width; })
                    .attr("height", function(d) { return hScale(d.value); })
                    .attr("id", function(d) { return d.id; })
                    .style("fill", function(d) { return d.color; })
                    .style("stroke", '#555');

                var redundantRect = d3.selectAll("#removeThisRect")[0];
                for(var i=0;i<redundantRect.length;i++) {
                    redundantRect[i].parentNode.removeChild(redundantRect[i]);
                }

                // Note: there is a redundant rectangle in the row being created for row text as a rect. Get rid of it

            }
        });

        OnlineTxTimeSeries.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.TIMESERIES.ONLINETX));

        return OnlineTxTimeSeries;

    });