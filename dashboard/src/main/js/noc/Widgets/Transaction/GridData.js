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
                var node = dojo.byId(id);
                node.innerHTML = text;
                node.style.fontSize = "10";
                node.style.fontWeight = "600";
            },

            fillSVG: function(id, color) {
                console.log("id = " + id);
                Utility.removeChildren(document.getElementById(id));
                this.appendRectangle(id, 15, 15, color);
            },

            maxOneRed: function(id, count, type) {
                if(count>0) {
                    if(type == true) {
                        this.fillSVG(id,"orange");
                    } else {
                        this.fillSVG(id,"orangered");
                    }
                } else {
                    this.fillSVG(id,"yellowgreen");
                }
            },

            roundNumber: function (rnum, rlength) {
                // Arguments: number to round, number of decimal places
                var newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
                return newnumber;
            },

            convertToReadableString: function(count) {
                if(count > 1000000) {
                    count = count / 1000000;
                    count = this.roundNumber(count, 2);
                    count = count + "M";
                } else if(count > 1000) {
                    count = count / 1000;
                    count = this.roundNumber(count, 2);
                    count = count + "K";
                } else {
                    count = this.roundNumber(count, 2);
                }
                return count;
            },

            convertTime: function(count) {
                if(count > 1000) {
                    count = count / 1000;
                    count = this.roundNumber(count, 2);
                    count = count + "Sec";
                } else {
                    count = this.roundNumber(count, 2);
                    count = count + "ms";
                }
                return count;
            },

            fillData: function(id, payload) {

                this.fillText(id + "_AlertText", this.convertToReadableString(parseInt(payload.alertCount)));
                this.fillText(id + "_VolumeText", this.convertToReadableString(parseInt(payload.volume)));
                this.fillText(id + "_ResponseText", this.convertTime(payload.response));
                this.fillText(id + "_OkCountText", this.convertToReadableString(parseInt(payload.okayCount)));
                this.fillText(id + "_SlowCountText", this.convertToReadableString(parseInt(payload.slowCount)));
                this.fillText(id + "_FailCountText", this.convertToReadableString(parseInt(payload.failCount)));

                ////

                this.maxOneRed(id + "_AlertRect", parseInt(payload.alertCount), false);
                this.maxOneRed(id + "_FailCountRect", parseInt(payload.failCount), false);
                this.maxOneRed(id + "_SlowCountRect", parseInt(payload.slowCount), true);
            }

        });

        GridData.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA));


        return GridData;
    });