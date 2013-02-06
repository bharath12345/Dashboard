define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility) {

        var GridData = declare(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA, null, {

            create: function(data, input) {
                // fill the 3 cells for Tx-Volume, Tx-Alerts, Tx-response-time

                var id = input.param.custom[0]+"_"+input.param.custom[1]+"_"+input.param.name;
                //console.log("grid data id = " + id);

                this.fillData(id, input.appDataVO);
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

                            case CONSTANTS.TXGRID.STATUS:
                                if(value == "SLOW") {
                                    return "orange";
                                } else if(value == "FAIL") {
                                    return "orangered";
                                } else {
                                    return "yellowgreen";
                                }
                                break;
                        }

                    });
            },

            createUsingApp: function(data, input) {
                var appName = input.appDataVO.appName;
                var txGroupList =  input.appDataVO.txGroupVO;
                for(var i=0;i<txGroupList.length;i++) {
                    var groupName = txGroupList[i].groupName;
                    var txList = txGroupList[i].txDataVO;
                    for(var j=0;j<txList.length;j++) {
                        var txName = txList[j].txName;
                        var id = appName + "_" + groupName + "_" + txName;
                        //console.log("grid data id = " + id);
                        this.fillData(id, txList[j]);
                    }
                }
            },

            fillData: function(id, payload) {
                var alertId = id + "_Alert";
                Utility.removeChildren(document.getElementById(alertId));
                this.appendRectangle(alertId, 10, 10, payload.alerts, CONSTANTS.TXGRID.ALERTS);

                var statusId = id + "_Status";
                Utility.removeChildren(document.getElementById(statusId));
                this.appendRectangle(statusId, 10, 10, payload.status, CONSTANTS.TXGRID.STATUS);

                var volumeId = id + "_Volume";
                Utility.removeChildren(document.getElementById(volumeId));
                dojo.byId(volumeId).innerHTML = payload.volume;

                var responseId = id + "_Response";
                Utility.removeChildren(document.getElementById(responseId));
                dojo.byId(responseId).innerHTML = payload.response;
            }

        });

        GridData.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA));

        return GridData;
    });