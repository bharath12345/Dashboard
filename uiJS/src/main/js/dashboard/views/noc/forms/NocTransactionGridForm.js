define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/noc/nls/noc", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dijit/TitlePane", "dojox/layout/GridContainer", "dojo/request/xhr", "dojo/_base/lang",
    "dashboard/helper/Scheduler", "dashboard/helper/Helper", "dashboard/abstract/AbstractForm",
    "dashboard/widgets/AoneGridContainer"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, TitlePane, GridContainer, xhr, lang, Scheduler, Helper, AbstractForm, AoneGridContainer) {

        dashboard.classnames.TxGridData = "dashboard.noc.forms.NocTransactionGridForm.TxGridData";

        var TxGridData = declare(dashboard.classnames.TxGridData, null, {

            create:function (data, input) {
                var id = input.param.custom[0] + "_" + input.param.custom[1] + "_" + input.param.name;
                //console.log("grid data id = " + id);

                this.fillData(id, input.appDataVO);
            },

            createUsingApp:function (data, input) {
                var appName = input.appDataVO.appName;
                var txGroupList = input.appDataVO.txGroupVO;
                for (var i = 0; i < txGroupList.length; i++) {
                    var groupName = txGroupList[i].groupName;
                    var txList = txGroupList[i].txDataVO;
                    for (var j = 0; j < txList.length; j++) {
                        var txName = txList[j].txName;
                        var id = appName + "_" + groupName + "_" + txName;
                        //console.log("grid data id = " + id);
                        this.fillData(id, txList[j]);
                    }
                }
            },

            fillText:function (id, text, number, bgColor) {
                console.log("id = " + id);
                Helper.removeChildren(document.getElementById(id));
                var node = dojo.byId(id);
                node.innerHTML = text;
                node.style.fontSize = "11px";
                node.style.fontWeight = "600";
                node.style.backgroundColor = bgColor;
            },

            roundNumber:function (rnum, rlength) {
                // Arguments: number to round, number of decimal places
                var newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
                return newnumber;
            },

            convertToReadableString:function (count) {
                if (count > 1000000) {
                    count = count / 1000000;
                    count = this.roundNumber(count, 2);
                    count = count + "M";
                } else if (count > 1000) {
                    count = count / 1000;
                    count = this.roundNumber(count, 2);
                    count = count + "K";
                } else {
                    count = this.roundNumber(count, 2);
                }
                return count;
            },

            convertTime:function (count) {
                if (count > 1000) {
                    count = count / 1000;
                    count = this.roundNumber(count, 2);
                    count = count + "Sec";
                } else {
                    count = this.roundNumber(count, 2);
                    count = count + "ms";
                }
                return count;
            },

            fillData:function (id, payload) {

                this.fillText(id + "_AlertRect",
                    this.convertToReadableString(parseInt(payload.alertCount)),
                    parseInt(payload.alertCount), "orangered");

                this.fillText(id + "_VolumeRect",
                    this.convertToReadableString(parseInt(payload.volume)),
                    parseInt(payload.volume), "white");

                this.fillText(id + "_ResponseRect",
                    this.convertTime(parseInt(payload.response)),
                    parseInt(payload.response), "white");

                this.fillText(id + "_OkCountRect",
                    this.convertToReadableString(parseInt(payload.okayCount)),
                    parseInt(payload.okayCount), "white");

                this.fillText(id + "_SlowCountRect",
                    this.convertToReadableString(parseInt(payload.slowCount)),
                    parseInt(payload.slowCount), "orange");

                this.fillText(id + "_FailCountRect",
                    this.convertToReadableString(parseInt(payload.failCount)),
                    parseInt(payload.failCount), "orangered");

                dashboard.dom.STANDBY.hide();
            }

        });

        TxGridData.LOG = Logger.addTimer(new Logger(dashboard.classnames.TxGridData));

        /*
         *
         *
         */

        dashboard.classnames.TxGridMeta = "dashboard.noc.forms.NocTransactionGridForm.TxGridMeta";

        var TxGridMeta = declare(dashboard.classnames.TxGridMeta, null, {


            getTxCount:function (input) {
                var txCount = 0;
                for (var i = 0; i < input.applicationVO.length; i++) {
                    var aVO = input.applicationVO[i];
                    if (aVO == null || aVO == "null") {
                        continue;
                    }
                    for (var j = 0; j < aVO.transactionGroups.length; j++) {
                        var txGroup = aVO.transactionGroups[j];
                        if (txGroup == null || txGroup == "null") {
                            continue;
                        }
                        txCount += txGroup.transactions.length;
                    }
                }
                return txCount;
            },

            getSpan2:function (id) {
                return "<div class='span2' style='font-size: 11px;' id='" + id + "'></div>"
            },

            getInnerHtml:function (id) {
                var divString = "<div class='row-fluid'>" +
                    "<div class='span12' style='height:15px;min-height:15px;'>" +
                    "<div class='row-fluid' id='" + id + "' style='padding:2px'>" +
                    this.getSpan2(id + "_AlertRect") +
                    this.getSpan2(id + "_VolumeRect") +
                    this.getSpan2(id + "_ResponseRect") +
                    this.getSpan2(id + "_OkCountRect") +
                    this.getSpan2(id + "_SlowCountRect") +
                    this.getSpan2(id + "_FailCountRect") +
                    "</div>" +
                    "</div>" +
                    "</div>";
                return divString;
            },

            create:function (data, input) {
                console.log("data = " + dojo.toJson(data));
                console.log("input = " + dojo.toJson(input));

                TxGridMeta.DATACLASS = "transaction/AppData.action";//input.applicationVO.dataActionClass;

                try {
                    var aoneGridContainer = new AoneGridContainer();
                    aoneGridContainer.setCount(this.getTxCount(input));
                    aoneGridContainer.setStyle(dashboard.dom.CpCenterInnerTop);
                    dashboard.dom.CpCenterInnerTop.addChild(aoneGridContainer);

                    var titlepanes = [];
                    var z = 0;
                    for (var i = 0; i < input.applicationVO.length; i++) {
                        var aVO = input.applicationVO[i];
                        if (aVO == null || aVO == "null") {
                            continue;
                        }
                        for (var j = 0; j < aVO.transactionGroups.length; j++) {
                            var txGroup = aVO.transactionGroups[j];
                            if (txGroup == null || txGroup == "null") {
                                continue;
                            }
                            for (var k = 0; k < txGroup.transactions.length; k++) {
                                var id = input.applicationVO[i].applicationName + "_" +
                                    input.applicationVO[i].transactionGroups[j].groupName + "_" +
                                    input.applicationVO[i].transactionGroups[j].transactions[k].name;
                                titlepanes[z] = new TitlePane({
                                    splitter:false,
                                    style:aoneGridContainer.styleString,
                                    content:this.getInnerHtml(id),
                                    title:input.applicationVO[i].applicationName + "/" + input.applicationVO[i].transactionGroups[j].transactions[k].name,
                                    toggleable:false
                                });
                                z++;
                            }
                        }
                    }

                    aoneGridContainer.setTitlePanes(titlepanes);
                    aoneGridContainer.startup();
                } catch (e) {
                    console.log("exception in grid container startup = " + e);
                }

                // there would be some transactions that need App level refresh
                // there would be some transactions that need group level refresh
                // there would be some transactions that need transaction level refresh
                // currently only app level refresh is coded to keep performance managable..
                // rest need to be developed along with configuration

                TxGridMeta.POSTSET.appdataset = [];

                for (var i = 0; i < input.applicationVO.length; i++) {
                    var aVO = input.applicationVO[i];
                    if (aVO == null || aVO == "null") {
                        continue;
                    }
                    var dataset = {};
                    dataset.appName = aVO.applicationName;
                    dataset.appId = aVO.id;
                    dataset.counter = 0;
                    for (var j = 0; j < aVO.transactionGroups.length; j++) {
                        var txGroup = aVO.transactionGroups[j];
                        for (var k = 0; k < txGroup.transactions.length; k++) {
                            dataset.counter++;
                        }
                    }
                    TxGridMeta.POSTSET.appdataset.push(dataset);
                }

                // do the first time population immediately
                for (var i = 0; i < TxGridMeta.POSTSET.appdataset.length; i++) {
                    this.periodicAppPost();
                }

                Scheduler.POLLER = this;
                this.startStaggeredDatabasePolling();
            },

            startStaggeredDatabasePolling:function () {
                // collect the tx data at app level
                // stagger the collection of each application by 10 seconds duration to keep the load on db managable

                var period = 1;
                for (var i = 0; i < TxGridMeta.POSTSET.appdataset.length; i++) {
                    // first one launches after one second
                    // 2nd one at 11 sec, 3rd one at 21 sec and so on
                    var timer = setTimeout(dojo.hitch(this, this.periodicApp), period * 1000);
                    period += TxGridMeta.APP_STAGGER_PERIOD;
                    Scheduler.TIMERS.push(timer);
                }
            },

            periodicApp:function () {
                var timer = setInterval(dojo.hitch(this, this.periodicAppPost),
                    TxGridMeta.POSTSET.appdataset.length * TxGridMeta.APP_STAGGER_PERIOD * 1000);
                Scheduler.TIMERS.push(timer);
            },

            periodicAppPost:function () {
                var appDataSet = TxGridMeta.POSTSET.appdataset[TxGridMeta.APP_COUNTER];
                console.log("in periodic tx grid post. app name = " + appDataSet.appName + " tx count = " + appDataSet.counter);

                var viewMeta = {
                    id:appDataSet.appId,
                    name:appDataSet.appName
                };

                xhr(TxGridMeta.DATACLASS, {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.renderTxData));

                TxGridMeta.APP_COUNTER++;
                if (TxGridMeta.APP_COUNTER > (TxGridMeta.POSTSET.appdataset.length - 1)) {
                    TxGridMeta.APP_COUNTER = 0;
                }
            },

            periodicTxPost:function () {
                /*for(var i=0;i<TxGridMeta.POSTSET.dataset.length;i++) {
                 var viewMeta = {
                 id:TxGridMeta.POSTSET.dataset[i].txId,
                 name:TxGridMeta.POSTSET.dataset[i].txName,
                 type:TxGridMeta.POSTSET.type,
                 subtype:TxGridMeta.POSTSET.subType,
                 dimensions:[TxGridMeta.POSTSET.dataset[i].width, TxGridMeta.POSTSET.dataset[i].height],
                 position:[xpos, ypos],
                 custom:[TxGridMeta.POSTSET.dataset[i].appName, TxGridMeta.POSTSET.dataset[i].groupName]
                 };
                 Helper.xhrPostCentral(NOCCONSTANTS.ACTION.TRANSACTION.DATA, viewMeta);
                 }*/
            },

            periodicGroupPost:function () {

            },

            renderTxData:function (input) {
                var data = Helper.parseInput(input);
                var txGridData = new TxGridData();
                //txGridData.create(data, input);
                txGridData.createUsingApp(data, input);
            }
        });

        // static variables of this class
        TxGridMeta.LOG = Logger.addTimer(new Logger(dashboard.classnames.TxGridMeta));

        TxGridMeta.POSTSET = {};
        TxGridMeta.APP_COUNTER = 0;
        TxGridMeta.APP_STAGGER_PERIOD = 10;
        TxGridMeta.DATACLASS = null;

        /*
         *
         *
         */

        dashboard.classnames.NocTransactionGridForm = "dashboard.noc.forms.NocTransactionGridForm";

        var NocTransactionGridForm = declare(dashboard.classnames.NocTransactionGridForm, AbstractForm, {

            title: dashboardI18nString.TRANSACTION_GRID,
            inAnalysisPane: false,
            pageType: dashboard.pageTypes.NOC, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor

            createToolbarButtons: function() {
            },

            startup:function () {
                this.inherited(arguments);
            },

            launch: function() {
                var viewMeta = {
                    id:0,
                    name:""
                };

                xhr("transaction/Meta.action", {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.createTxGrid));
            },

            createTxGrid:function (input) {
                if (input.applicationVO == null || input.applicationVO == undefined || input.applicationVO.length == 0) {
                    this.attr('content', "No Applications and Transactions configured for display on the dashboard");
                    dashboard.dom.STANDBY.hide();
                    return;
                }
                var data = Helper.parseInput(input);
                var txGridMeta = new TxGridMeta();
                txGridMeta.create(data, input);
            }
        });

        // static variables of this class
        NocTransactionGridForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.NocTransactionGridForm));

        return NocTransactionGridForm;
    });