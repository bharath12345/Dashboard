define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/topology/TopologyForm"],

    function (declare, i18n, i18nString, Logger, TopologyForm) {

        dashboard.classnames.LayerOne = "dashboard.topology.forms.LayerOne";

        var LayerOne = declare(dashboard.classnames.LayerOne, TopologyForm, {

            // ConfigAppTopologyForm.TOPOLOGY has the topology connectivity
            // ConfigAppLayersForm.LAYERMAP has the layer definition by keys APPS and TAGS

            createFormSpecificMenu:function () {
            },

            startup:function (pageName) {
                this.inherited(arguments);

                this.nodes = this.getNodes();
                this.links = this.getLinks();

                var graphDiv = dojo.create('div', {'id':LayerOne.FORMNAME, style:'width: 100%; height: 100%;'});
                this.attr('content', graphDiv);

                var width = this.domNode.parentNode.offsetWidth - 20;
                var height = this.domNode.offsetHeight;
                console.log("view port width = " + width + " height = " + height);

                var color = d3.scale.category20();

                var force = d3.layout.force()
                    .charge(-120)
                    .linkDistance(30)
                    .size([width, height]);

                var svg = d3.select("#"+LayerOne.FORMNAME).append("svg")
                    .attr("width", width)
                    .attr("height", height);

                force.nodes(this.nodes)
                    .links(this.links)
                    .start();

                var link = svg.selectAll(".link")
                    .data(this.links)
                    .enter().append("line")
                    .attr("class", "link")
                    .style("stroke-width", function (d) {
                        return Math.sqrt(d.value);
                    });

                var node = svg.selectAll(".node")
                    .data(this.nodes)
                    .enter().append("circle")
                    .attr("class", "node")
                    .attr("r", 5)
                    .style("fill", function (d) {
                        return color(d.group);
                    })
                    .call(force.drag);

                node.append("title")
                    .text(function (d) {
                        return d.name;
                    });

                force.on("tick", function () {
                    link.attr("x1", function (d) {
                        return d.source.x;
                    })
                        .attr("y1", function (d) {
                            return d.source.y;
                        })
                        .attr("x2", function (d) {
                            return d.target.x;
                        })
                        .attr("y2", function (d) {
                            return d.target.y;
                        });

                    node.attr("cx", function (d) {
                        return d.x;
                    })
                        .attr("cy", function (d) {
                            return d.y;
                        });
                });

                dashboard.dom.STANDBY.hide();
            },

            getNodes:function () {
                return LayerOne.nodes;
            },

            getLinks:function () {
                return LayerOne.links;
            }

        });

        LayerOne.LOG = Logger.addTimer(new Logger(dashboard.classnames.LayerOne));

        LayerOne.FORMNAME = "LayerOne";

        LayerOne.nodes = [
            {"name":"CustomerFacingApp","group":1},
            {"name":"CriticalInterfaceApp","group":1},
            {"name":"CoreBankingSol","group":1},
            {"name":"InternalOperationsApp","group":1},
            {"name":"InternalBusinessApp","group":1},
            {"name":"CMSCollection","group":2},
            {"name":"CMSDisbursement","group":2},
            {"name":"PRMEnterprise","group":2}];

        LayerOne.links =[
            {"source":0,"target":1,"value":1},

            {"source":1,"target":2,"value":2},
            {"source":1,"target":3,"value":2},
            {"source":1,"target":4,"value":2},

            {"source":3,"target":2,"value":3},
            {"source":4,"target":2,"value":3},

            {"source":4,"target":3,"value":4},
            {"source":3,"target":4,"value":4},

            {"source":5,"target":1,"value":5},
            {"source":6,"target":3,"value":5},
            {"source":7,"target":4,"value":5}];

        return LayerOne;
    });