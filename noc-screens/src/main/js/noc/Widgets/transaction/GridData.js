define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility) {

        var GridData = declare(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA, null, {

            create: function(data, input) {
                // fill the 3 cells for Tx-Volume, Tx-Alerts, Tx-response-time

                var id = input.param.custom[0]+"_"+input.param.custom[1]+"_"+input.param.name;
                //console.log("grid data id = " + id);
                var alertId = id + "_Alert";
                Utility.removeChildren(document.getElementById(alertId));
                this.appendRectangle(alertId, 10, 10, input.txDataVO.alerts, CONSTANTS.TXGRID.ALERTS);

                var responseId = id + "_Response";
                Utility.removeChildren(document.getElementById(responseId));
                this.appendRectangle(responseId, 10, 10, input.txDataVO.response, CONSTANTS.TXGRID.RESPONSE);

                var volumeId = id + "_Volume";

            },

            appendRectangle: function(cellId, width, height, value, type) {
                d3.select("#" + cellId)
                    .append("svg")
                    .append("svg:rect")
                    .attr("class", "cell")
                    .attr("width", width)
                    .attr("height", height)
                    .style("fill", function () {
                        //return color(d.value);

                        switch(type) {
                            case CONSTANTS.TXGRID.ALERTS:
                                if(value == "HIGH") {
                                    return "orangered";
                                } else {
                                    return "yellowgreen";
                                }
                                break;

                            case CONSTANTS.TXGRID.RESPONSE:
                                if(value == "SLOW") {
                                    return "orangered";
                                } else {
                                    return "yellowgreen";
                                }
                                break;

                        }

                    });
            }

        });

        GridData.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA));

        return GridData;
    });