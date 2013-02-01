define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants", "noc/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, i18nString, Utility, CONSTANTS, Logger) {

        var GridMeta = declare(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA, null, {

            create:function (data, input) {

                console.log("data = " + dojo.toJson(data));
                console.log("input = " + dojo.toJson(input));

                var paneWidth = data.dimensions.width;
                var paneHeight = data.dimensions.height;

                var nbZ = 14; // 14 columns and 28 rows approximately
                var rows = 28;
                var styleString = "width: " + (paneWidth/nbZ) + "; height: " + (paneHeight/rows) + ";"
                console.log("style string = " + styleString);
                var titlepanes = [];
                var z = 0;
                for(var i=0;i<input.applicationVO.length;i++) {
                    var aVO = input.applicationVO[i];
                    for(var j=0;j<aVO.transactionGroups.length;j++) {
                        var txGroup = aVO.transactionGroups[j];
                        for(var k=0;k<txGroup.transactions.length;k++) {
                            titlepanes[z] = new TitlePane({
                                splitter:false,
                                style:styleString,
                                content:"<div id='" + input.applicationVO[i].applicationName + "_" +
                                    input.applicationVO[i].transactionGroups[j].groupName + "_" +
                                    input.applicationVO[i].transactionGroups[j].transactions[k].name + "' style='width: 100%; " +
                                    "height: 100%;'></div>",
                                title:input.applicationVO[i].applicationName,
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
                for(var i=0;i<titlepanes.length;i++) {
                    j = (i%nbZ);
                    k = parseInt(i/nbZ);
                    gridContainer.addChild(titlepanes[i], j, k);
                }
                gridContainer.startup();
                gridContainer.resize();

                // remove padding
                var innerPane = dojo.query(".dijitTitlePaneContentInner", gridContainer.domNode);
                //console.log("inner len = " + innerPane.length);
                for(var i=0;i<innerPane.length;i++) {
                    innerPane[i].style.padding=0;
                }

                var xpos=0, ypos=0;
                for(var i=0;i<input.applicationVO.length;i++) {
                    var aVO = input.applicationVO[i];
                    for(var j=0;j<aVO.transactionGroups.length;j++) {
                        var txGroup = aVO.transactionGroups[j];
                        for(var k=0;k<txGroup.transactions.length;k++) {
                            var viewMeta = {
                                id:input.applicationVO[i].transactionGroups[j].transactions[k].id,
                                name:input.applicationVO[i].transactionGroups[j].transactions[k].name,
                                type:CONSTANTS.TYPE.TRANSACTION,
                                subtype:CONSTANTS.SUBTYPE.TRANSACTION.DATA,
                                dimensions:[titlepanes[i].domNode.offsetWidth, titlepanes[i].domNode.offsetHeight],
                                position:[xpos, ypos],
                                custom:[10]
                            };
                            Utility.xhrPostCentral(CONSTANTS.ACTION.TRANSACTION.DATA, viewMeta);
                        }
                    }
                }
            }
        });

        // static variables of this class
        GridMeta.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA));

        return GridMeta;
    });