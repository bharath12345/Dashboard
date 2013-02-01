define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants", "noc/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, i18nString, Utility, CONSTANTS, Logger) {

        var ClusterZones = declare(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES, null, {

            create:function (data, input) {

                console.log("data = " + dojo.toJson(data));
                console.log("input = " + dojo.toJson(input));

                var paneWidth = data.dimensions.width;
                var paneHeight = data.dimensions.height;
                var nbZ = 6;
                var styleString = "width: " + (paneWidth/nbZ) + "; height: " + (paneHeight/5) + ";"
                console.log("style string = " + styleString);
                var titlepanes = [];
                for(var i=0;i<input.clusterVOs.length;i++) {
                    titlepanes[i] = new TitlePane({
                        splitter:false,
                        style:styleString,
                        content:"<div id='"+input.clusterVOs[i].clusterName+"' style='width: 100%; height: 100%;'></div>",
                        title:input.clusterVOs[i].clusterName,
                        toggleable:false
                    });
                }

                var gridContainer = new GridContainer({nbZones:nbZ, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                noc.pages.AllClusterAvailability.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                var j = 0, k = 0;
                for(var i=0;i<input.clusterVOs.length;i++) {
                    j = (i%nbZ);
                    k = parseInt(i/nbZ);
                    gridContainer.addChild(titlepanes[i], j, k);
                }
                gridContainer.startup();
                gridContainer.resize();

                var xpos=0, ypos=0;
                for(var i=0;i<input.clusterVOs.length;i++) {
                    var viewMeta = {
                        id:input.clusterVOs[i].id,
                        name:input.clusterVOs[i].clusterName,
                        type:CONSTANTS.TYPE.AVAILABILITY,
                        subtype:CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER,
                        dimensions:[titlepanes[i].domNode.offsetWidth, titlepanes[i].domNode.offsetHeight],
                        position:[xpos, ypos],
                        custom:[10]
                    };
                    Utility.xhrPostCentral(CONSTANTS.ACTION.AVAILABILITY.CLUSTER, viewMeta);
                }
            }
        });

        // static variables of this class
        ClusterZones.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES));

        return ClusterZones;
    });