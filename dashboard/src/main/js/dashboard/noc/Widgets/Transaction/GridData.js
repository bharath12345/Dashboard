define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/logger/Logger", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility"],

    function (declare, i18n, i18nString, Logger, NOCCONSTANTS, NocUtility) {

        var GridData = declare(NOCCONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA, null, {

            create: function(data, input) {
                var id = input.param.custom[0]+"_"+input.param.custom[1]+"_"+input.param.name;
                //console.log("grid data id = " + id);

                this.fillData(id, input.appDataVO);
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

            fillText: function(id, text, number, bgColor) {
                console.log("id = " + id);
                NocUtility.removeChildren(document.getElementById(id));
                var node = dojo.byId(id);
                node.innerHTML = text;
                node.style.fontSize = "10";
                node.style.fontWeight = "600";
                node.style.backgroundColor = bgColor;
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

                this.fillText(id + "_AlertText",
                    this.convertToReadableString(parseInt(payload.alertCount)),
                    parseInt(payload.alertCount), "orangered");

                this.fillText(id + "_VolumeText",
                    this.convertToReadableString(parseInt(payload.volume)),
                    parseInt(payload.volume), "white");

                this.fillText(id + "_ResponseText",
                    this.convertTime(parseInt(payload.response)),
                    parseInt(payload.response), "white");

                this.fillText(id + "_OkCountText",
                    this.convertToReadableString(parseInt(payload.okayCount)),
                    parseInt(payload.okayCount), "white");

                this.fillText(id + "_SlowCountText",
                    this.convertToReadableString(parseInt(payload.slowCount)),
                    parseInt(payload.slowCount), "orange");

                this.fillText(id + "_FailCountText",
                    this.convertToReadableString(parseInt(payload.failCount)),
                    parseInt(payload.failCount), "orangered");

                dashboard.STANDBY.hide();
            }

        });

        GridData.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA));


        return GridData;
    });