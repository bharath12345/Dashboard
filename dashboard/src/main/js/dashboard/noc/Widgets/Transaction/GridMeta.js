define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/logger/Logger", "dashboard/helper/Scheduler"],

    function (require, declare, i18n, TitlePane, GridContainer, i18nString, NocUtility, NOCCONSTANTS, Logger, Scheduler) {

        var GridMeta = declare(NOCCONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA, null, {

            computeZones:function (count) {
                // screen width is higher than length. Following are the configs -
                // 4 Tx columns, 0-8 Row = 0-32
                // 5 Tx columns, 6-10 Row = 33-50
                // 6 Tx columns, 8-12 Row = 51-72
                // 7 Tx columns, 10-14 Row = 72-98
                // So the maximum cluster supported on a single page is 98

                var gridConfig = [];
                if (count < 33) {
                    gridConfig[0] = 4; // 0th entry in the array is for nbZ or column
                    gridConfig[1] = 8; // this is for the row
                    gridConfig[2] = 32; // number of grids being accomodated
                } else if (count > 32 && count < 51) {
                    gridConfig[0] = 5;
                    gridConfig[1] = 10;
                    gridConfig[2] = 50;
                } else if (count > 50 && count < 73) {
                    gridConfig[0] = 6;
                    gridConfig[1] = 12;
                    gridConfig[2] = 72;
                } else if (count > 72 && count < 99) {
                    gridConfig[0] = 7;
                    gridConfig[1] = 14;
                    gridConfig[2] = 98;
                } else {
                    console.log("Invalid count for tx zones = " + count);
                    return null;
                }
                return gridConfig;
            },

            getTxCount: function(input) {
                var txCount = 0;
                for (var i = 0; i < input.applicationVO.length; i++) {
                    var aVO = input.applicationVO[i];
                    if(aVO == null || aVO == "null") {
                        continue;
                    }
                    for (var j = 0; j < aVO.transactionGroups.length; j++) {
                        var txGroup = aVO.transactionGroups[j];
                        if(txGroup == null || txGroup == "null") {
                            continue;
                        }
                        txCount += txGroup.transactions.length;
                    }
                }
                return txCount;
            },

            getSpan2: function(id) {
                return "<div class='span2' style='font-size: 12px;' id='" + id + "'></div>"
            },

            getInnerHtml: function(id) {
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

            cleanupRendering: function(gridContainer) {
                // remove padding
                var innerPane = dojo.query(".dijitTitlePaneContentInner", gridContainer.domNode);
                //console.log("inner len = " + innerPane.length);
                for (var i = 0; i < innerPane.length; i++) {
                    innerPane[i].style.padding = 0;
                }

                var textNode = dojo.query(".dijitTitlePaneTextNode", gridContainer.domNode);
                 for (var i = 0; i < textNode.length; i++) {
                 textNode[i].style.fontSize = "10px";
                 }

                var head = dojo.query(".dijitTitlePaneTitle", gridContainer.domNode)
                for (var i = 0; i < head.length; i++) {
                    head[i].style.padding = 0;
                    head[i].style.minHeight = 0;
                }

                var headFocus = dojo.query(".dijitTitlePaneTitleFocus", gridContainer.domNode)
                for (var i = 0; i < headFocus.length; i++) {
                    headFocus[i].style.margin = 0;
                    headFocus[i].style.padding = 0;
                }
            },

            create:function (data, input) {
                console.log("data = " + dojo.toJson(data));
                console.log("input = " + dojo.toJson(input));

                if(input.applicationVO == null || input.applicationVO.length == 0) {
                    dashboard.CpCenterInner.domNode.innerHTML="No Applications and Transactions configured for display on the dashboard";
                    return;
                }

                var txCount = this.getTxCount(input);

                var gridConfig = this.computeZones(txCount);
                var nbZ = gridConfig[0];
                var rows = gridConfig[1];
                var roundoff = gridConfig[2];

                var paneWidth = data.dimensions.width;
                var paneHeight = data.dimensions.height;
                var styleString = "width: " + (paneWidth / nbZ) + "; height: " + (paneHeight / rows) + ";"
                console.log("style string = " + styleString);

                var titlepanes = [];
                var z = 0;
                for (var i = 0; i < input.applicationVO.length; i++) {
                    var aVO = input.applicationVO[i];
                    if(aVO == null || aVO == "null") {
                        continue;
                    }
                    for (var j = 0; j < aVO.transactionGroups.length; j++) {
                        var txGroup = aVO.transactionGroups[j];
                        if(txGroup == null || txGroup == "null") {
                            continue;
                        }
                        for (var k = 0; k < txGroup.transactions.length; k++) {
                            var id = input.applicationVO[i].applicationName + "_" +
                                input.applicationVO[i].transactionGroups[j].groupName + "_" +
                                input.applicationVO[i].transactionGroups[j].transactions[k].name;
                            titlepanes[z] = new TitlePane({
                                splitter:false,
                                style:styleString,
                                content:this.getInnerHtml(id),
                                title:input.applicationVO[i].applicationName + "/" + input.applicationVO[i].transactionGroups[j].transactions[k].name,
                                toggleable:false
                            });
                            z++;
                        }
                    }
                }

                for(var i=txCount; i<roundoff; i++) {
                    titlepanes[i] = new TitlePane({
                        splitter:false,
                        style:styleString,
                        content:"<div style='width: 100%; height: 100%;'></div>",
                        title:"",
                        toggleable:false
                    });
                }

                var gridContainer = new GridContainer({nbZones:nbZ, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                dashboard.CpCenterInner.addChild(gridContainer);
                gridContainer.disableDnd();

                var j = 0, k = 0;
                for (var i = 0; i < titlepanes.length; i++) {
                    j = (i % nbZ);
                    k = parseInt(i / nbZ);
                    gridContainer.addChild(titlepanes[i], j, k);
                }
                gridContainer.startup();
                gridContainer.resize();

                this.cleanupRendering(gridContainer);

                // there would be some transactions that need App level refresh
                // there would be some transactions that need group level refresh
                // there would be some transactions that need transaction level refresh
                // currently only app level refresh is coded to keep performance managable..
                // rest need to be developed along with configuration

                GridMeta.POSTSET.type = NOCCONSTANTS.TYPE.TRANSACTION;
                GridMeta.POSTSET.subType = NOCCONSTANTS.SUBTYPE.TRANSACTION.APPDATA;
                GridMeta.POSTSET.appdataset = [];

                for (var i = 0; i < input.applicationVO.length; i++) {
                    var aVO = input.applicationVO[i];
                    if(aVO == null || aVO == "null") {
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
                    GridMeta.POSTSET.appdataset.push(dataset);
                }

                Scheduler.POLLER = this;
                this.startStaggeredDatabasePolling();
            },

            startStaggeredDatabasePolling: function() {
                // collect the tx data at app level
                // stagger the collection of each application by 10 seconds duration to keep the load on db managable

                var period = 1;
                for (var i = 0; i < GridMeta.POSTSET.appdataset.length; i++) {
                    // first one launches after one second
                    // 2nd one at 11 sec, 3rd one at 21 sec and so on
                    var timer = setTimeout(this.periodicApp, period * 1000);
                    period += GridMeta.APP_STAGGER_PERIOD;
                    Scheduler.TIMERS.push(timer);
                }

                for (var i = 0; i < GridMeta.POSTSET.appdataset.length; i++) {
                    this.periodicAppPost();
                }
            },

            periodicApp:function () {
                var timer = setInterval(dashboard.noc.widgets.transaction.GridMeta.prototype.periodicAppPost,
                    GridMeta.POSTSET.appdataset.length * GridMeta.APP_STAGGER_PERIOD * 1000);
                Scheduler.TIMERS.push(timer);
            },

            periodicAppPost:function () {
                var xpos = 0, ypos = 0;
                var width = 0, height = 0;
                var appDataSet = GridMeta.POSTSET.appdataset[GridMeta.APP_COUNTER];
                console.log("in periodic tx grid post. app name = " + appDataSet.appName + " tx count = " + appDataSet.counter);

                var viewMeta = {
                    id:appDataSet.appId,
                    name:appDataSet.appName,
                    type:GridMeta.POSTSET.type,
                    subtype:GridMeta.POSTSET.subType,
                    dimensions:[width, height],
                    position:[xpos, ypos],
                    custom:[]
                };
                NocUtility.xhrPostCentral(NOCCONSTANTS.ACTION.TRANSACTION.APPDATA, viewMeta);

                GridMeta.APP_COUNTER++;
                if(GridMeta.APP_COUNTER > (GridMeta.POSTSET.appdataset.length-1)){
                    GridMeta.APP_COUNTER = 0;
                }
            },

            periodicTxPost:function () {
                /*for(var i=0;i<GridMeta.POSTSET.dataset.length;i++) {
                 var viewMeta = {
                 id:GridMeta.POSTSET.dataset[i].txId,
                 name:GridMeta.POSTSET.dataset[i].txName,
                 type:GridMeta.POSTSET.type,
                 subtype:GridMeta.POSTSET.subType,
                 dimensions:[GridMeta.POSTSET.dataset[i].width, GridMeta.POSTSET.dataset[i].height],
                 position:[xpos, ypos],
                 custom:[GridMeta.POSTSET.dataset[i].appName, GridMeta.POSTSET.dataset[i].groupName]
                 };
                 NocUtility.xhrPostCentral(NOCCONSTANTS.ACTION.TRANSACTION.DATA, viewMeta);
                 }*/
            },

            periodicGroupPost:function () {

            }
        });

        // static variables of this class
        GridMeta.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA));

        GridMeta.POSTSET = {};
        GridMeta.APP_COUNTER = 0;

        GridMeta.APP_STAGGER_PERIOD = 10;

        return GridMeta;
    });