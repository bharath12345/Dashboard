define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants", "noc/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, i18nString, Utility, CONSTANTS, Logger) {

        var GridMeta = declare(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA, null, {

            create:function (data, input) {

                console.log("data = " + dojo.toJson(data));
                console.log("input = " + dojo.toJson(input));

                var paneWidth = data.dimensions.width;
                var paneHeight = data.dimensions.height;

                var nbZ = 16; // 14 columns and 28 rows approximately
                var rows = 25;
                var styleString = "width: " + (paneWidth / nbZ) + "; height: " + (paneHeight / rows) + ";"
                console.log("style string = " + styleString);
                var titlepanes = [];
                var z = 0;
                for (var i = 0; i < input.applicationVO.length; i++) {
                    var aVO = input.applicationVO[i];
                    for (var j = 0; j < aVO.transactionGroups.length; j++) {
                        var txGroup = aVO.transactionGroups[j];
                        for (var k = 0; k < txGroup.transactions.length; k++) {
                            var id = input.applicationVO[i].applicationName + "_" +
                                input.applicationVO[i].transactionGroups[j].groupName + "_" +
                                input.applicationVO[i].transactionGroups[j].transactions[k].name;
                            titlepanes[z] = new TitlePane({
                                splitter:false,
                                style:styleString,
                                content:"<table id='" + id + "' style='width: 100%; " +
                                    "height: 100%;'><tr>" +
                                    "<td id='" + id + "_Alert" + "' style='width:11px'></td>" +
                                    "<td id='" + id + "_Status" + "' style='width:11px'></td>" +
                                    "<td id='" + id + "_Response" + "'></td>" +
                                    "<td id='" + id + "_Volume" + "'></td>" +
                                    "</tr></table>",
                                title:"[" + input.applicationVO[i].applicationName + "] [" + input.applicationVO[i].transactionGroups[j].transactions[k].name + "]",
                                toggleable:false
                            });
                            z++;
                        }
                    }
                }

                var gridContainer = new GridContainer({nbZones:nbZ, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                noc.pages.TransactionGrid.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                var j = 0, k = 0;
                for (var i = 0; i < titlepanes.length; i++) {
                    j = (i % nbZ);
                    k = parseInt(i / nbZ);
                    gridContainer.addChild(titlepanes[i], j, k);
                }
                gridContainer.startup();
                gridContainer.resize();

                // remove padding
                var innerPane = dojo.query(".dijitTitlePaneContentInner", gridContainer.domNode);
                //console.log("inner len = " + innerPane.length);
                for (var i = 0; i < innerPane.length; i++) {
                    innerPane[i].style.padding = 0;
                }

                var textNode = dojo.query(".dijitTitlePaneTextNode", gridContainer.domNode);
                for (var i = 0; i < textNode.length; i++) {
                    textNode[i].style.fontSize = "6px";
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

                // there would be some transactions that need App level refresh
                // there would be some transactions that need group level refresh
                // there would be some transactions that need transaction level refresh
                // currently only app level refresh is coded to keep performance managable..
                // rest need to be developed along with configuration

                GridMeta.POSTSET.type = CONSTANTS.TYPE.TRANSACTION;
                GridMeta.POSTSET.subType = CONSTANTS.SUBTYPE.TRANSACTION.APPDATA;
                GridMeta.POSTSET.appdataset = [];

                for (var i = 0; i < input.applicationVO.length; i++) {
                    var aVO = input.applicationVO[i];
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

                // collect the tx data at app level
                // stagger the collection of each application by 10 seconds duration to keep the load on db managable

                var period = 1;
                for (var i = 0; i < GridMeta.POSTSET.appdataset.length; i++) {
                    // first one launches after one second
                    // 2nd one at 11 sec, 3rd one at 21 sec and so on
                    setTimeout(this.periodicApp, period * 1000);
                    period += GridMeta.APP_STAGGER_PERIOD;
                }
            },

            periodicApp:function () {
                // make the first call immediately since setInterval always waits for the first timeperiod for initial execution
                noc.Widgets.Transaction.GridMeta.prototype.periodicAppPost();
                setInterval(noc.Widgets.Transaction.GridMeta.prototype.periodicAppPost, GridMeta.APP_ROLLOVER_PERIOD * 1000);
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
                Utility.xhrPostCentral(CONSTANTS.ACTION.TRANSACTION.APPDATA, viewMeta);

                GridMeta.APP_COUNTER++;
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
                 Utility.xhrPostCentral(CONSTANTS.ACTION.TRANSACTION.DATA, viewMeta);
                 }*/
            },

            periodicGroupPost:function () {

            }
        });

        // static variables of this class
        GridMeta.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA));

        GridMeta.POSTSET = {};
        GridMeta.APP_COUNTER = 0;

        GridMeta.APP_STAGGER_PERIOD = 10;
        GridMeta.APP_ROLLOVER_PERIOD = 120;

        return GridMeta;
    });