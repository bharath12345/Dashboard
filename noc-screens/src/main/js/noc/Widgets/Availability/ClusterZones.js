define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants", "noc/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, i18nString, Utility, CONSTANTS, Logger) {

        var ClusterZones = declare(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES, null, {

            create:function (data) {

                var paneWidth = noc.AllClusterAvailability.CP.w;
                var paneHeight = noc.AllClusterAvailability.CP.h;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                var titlepanes = [];
                for(var i=0;i<data.clusters.length;i++) {
                    titlepanes[i] = new TitlePane({
                        splitter:false,
                        style:styleString,
                        content:"<div id='"+data.clusters[i].name+"' style='width: 100%; height: 100%;'></div>",
                        title:data.clusters[i].name+" Availability Grid",
                        toggleable:false
                    });
                }

                var gridContainer = new GridContainer({nbZones:6, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                noc.AllClusterAvailability.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                for(var i=0;i<data.clusters.length;i++) {
                    gridContainer.addChild(titlePanes[i]);
                }
                gridContainer.startup();
                gridContainer.resize();

                var xpos=0, ypos=0;
                for(var i=0;i<data.clusters.length;i++) {
                    var viewMeta = {
                        id:data.clusters[i].id,
                        name:data.clusters[i].name,
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