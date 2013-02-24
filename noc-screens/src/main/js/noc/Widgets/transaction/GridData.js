define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility) {

        var GridData = declare(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA, null, {

            create: function(data, input) {
                // fill the 3 cells for Tx-Volume, Tx-Alerts, Tx-response-time

                var id = input.param.custom[0]+"_"+input.param.custom[1]+"_"+input.param.name;
                //console.log("grid data id = " + id);

                this.fillData(id, input.appDataVO);
            },

            appendRectangle: function(cellId, width, height, color) {
                d3.select("#" + cellId)
                    .append("svg")
                    .append("svg:rect")
                    .attr("class", "cell")
                    .attr("width", width)
                    .attr("height", height)
                    .style("fill", color);
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

            fillText: function(id, text) {
                console.log("id = " + id);
                Utility.removeChildren(document.getElementById(id));
                dojo.byId(id).innerHTML = text;
            },

            fillSVG: function(id, color) {
                console.log("id = " + id);
                Utility.removeChildren(document.getElementById(id));
                this.appendRectangle(id, 15, 15, color);
            },

            maxOneRed: function(id, count) {
                if(count>0) {
                    this.fillSVG(id,"orangered");
                } else {
                    this.fillSVG(id,"yellowgreen");
                }
            },

            fillData: function(id, payload) {

                this.fillText(id + "_AlertText", payload.alertCount);
                this.fillText(id + "_VolumeText", payload.volume);
                this.fillText(id + "_ResponseText", payload.response);
                this.fillText(id + "_OkCountText", payload.okayCount);
                this.fillText(id + "_SlowCountText", payload.slowCount);
                this.fillText(id + "_FailCountText", payload.failCount);

                ////

                this.maxOneRed(id + "_AlertRect", parseInt(payload.alertCount));
                this.maxOneRed(id + "_FailCountRect", parseInt(payload.failCount));
                this.maxOneRed(id + "_SlowCountRect", parseInt(payload.slowCount));
            }

        });

        GridData.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA));

        return GridData;
    });