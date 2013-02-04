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
                                    "<td id='" + id + "_Response" + "' style='width:11px''></td>" +
                                    "<td id='" + id + "_Volume" + "'></td>" +
                                    "</tr></table>",
                                title:"[" + input.applicationVO[i].applicationName + "] [" + input.applicationVO[i].applicationName + "]",
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
                    textNode[i].style.fontSize = "7px";
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

                GridMeta.POSTSET.type = CONSTANTS.TYPE.TRANSACTION;
                GridMeta.POSTSET.subType = CONSTANTS.SUBTYPE.TRANSACTION.DATA;
                GridMeta.POSTSET.dataset = [];

                for (var i = 0; i < input.applicationVO.length; i++) {
                    var aVO = input.applicationVO[i];
                    for (var j = 0; j < aVO.transactionGroups.length; j++) {
                        var txGroup = aVO.transactionGroups[j];
                        for (var k = 0; k < txGroup.transactions.length; k++) {
                            var datum = {};
                            datum.txName = input.applicationVO[i].transactionGroups[j].transactions[k].name;
                            datum.txId = input.applicationVO[i].transactionGroups[j].transactions[k].id;
                            datum.width = titlepanes[i].domNode.offsetWidth;
                            datum.height = titlepanes[i].domNode.offsetHeight;
                            datum.appName = input.applicationVO[i].applicationName;
                            datum.groupName = input.applicationVO[i].transactionGroups[j].groupName;
                            GridMeta.POSTSET.dataset.push(datum);
                        }
                    }
                }

                setTimeout(this.periodicPost, 2 * 1000);
                //setTimeout(this.periodicPost, 20 * 1000);
            },

            periodicPost:function () {
                var xpos = 0, ypos = 0;
                console.log("in periodic tx grid post. length = " + GridMeta.POSTSET.dataset.length);

                for(var i=0;i<GridMeta.POSTSET.dataset.length;i++) {
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
                }
            }
        });

        // static variables of this class
        GridMeta.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA));

        GridMeta.POSTSET = {};

        return GridMeta;
    });