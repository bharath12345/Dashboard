define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility", "dashboard/noc/Logger"],

    function (declare, i18n, i18nString, NOCCONSTANTS, NocUtility, Logger) {

        var BatchTxTimeSeries = declare(NOCCONSTANTS.CLASSNAME.TIMESERIES.BATCHTX, null, {
        
		createTimeSeries: function(jsonStore, id, gridWidth, gridHeight, topLeftX, topLeftY) {				
				d3.json(jsonStore, dojo.hitch (this, function(m) {
					var data = new Array();
					var gridItemWidth = gridWidth/60; // total width / (num of cols, which is always 60)
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
					
					this.renderBatchTxGrid(data, id, gridWidth, gridHeight);	
				}));
			},
			
			renderBatchTxGrid: function(data, id, width, height) {
				//ComponentPage.LOG.log(Logger.SEVERITY.SEVERE, data);
			
				var grid = d3.select("#"+id).append("svg")
								.attr("width", width)
								.attr("height", height)
								.attr("class", "chart");
			
				//column headings
            	grid.selectAll(".coltext")
					.data(data[0])
					.enter().append("text")
					.attr("x", function(d) { ComponentPage.LOG.log(Logger.SEVERITY.SEVERE, d); return d.x; })
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

        BatchTxTimeSeries.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.TIMESERIES.BATCHTX));

        return BatchTxTimeSeries;

    });