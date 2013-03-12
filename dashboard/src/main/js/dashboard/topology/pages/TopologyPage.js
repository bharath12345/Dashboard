define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dijit/layout/ContentPane",
    "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/topology/TopologyConstants", "dashboard/topology/TopologyUtility"],

    function (require, declare, i18n, TitlePane, GridContainer, ContentPane, i18nString, Logger, TOPOLOGYCONSTANTS, TopologyUtility) {

        var TopologyPage = declare(TOPOLOGYCONSTANTS.CLASSNAME.PAGES.TOPOLOGYPAGE, null, {

            loadPage:function (pageNumber, pageName) {
                TopologyPage.CP = noc.PageLoader.CpCenter[pageNumber];
                TopologyPage.CP.domNode.style.border=0;

                var paneWidth = TopologyPage.CP.w;
                var paneHeight = TopologyPage.CP.h;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                TopologyPage.TitlePane = new ContentPane({
                    region:"center",
                    splitter:false,
                    style:styleString
                });

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                TopologyPage.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                gridContainer.addChild(TopologyPage.TitlePane, 0);
                gridContainer.startup();
                gridContainer.resize();

                var innerPane = dojo.query(".dijitContentPane", gridContainer.domNode);
                //console.log("inner len = " + innerPane.length);
                for (var i = 0; i < innerPane.length; i++) {
                    innerPane[i].style.padding = 0;
                }

                var xpos = 0, ypos = 0;
                var viewMeta = {
                    id:pageName,
                    name:pageName,
                    type:TOPOLOGYCONSTANTS.TYPE.TOPOLOGY,
                    subtype:TOPOLOGYCONSTANTS.SUBTYPE.TOPOLOGY.NODES,
                    dimensions:[paneWidth, paneHeight],
                    position:[xpos, ypos],
                    custom:[]
                };

                TopologyUtility.xhrPostCentral(TOPOLOGYCONSTANTS.ACTION.TOPOLOGY.NODES, viewMeta);

            }
        });

        // static variables of this class
        TopologyPage.LOG = Logger.addTimer(new Logger(TOPOLOGYCONSTANTS.CLASSNAME.PAGES.TOPOLOGYPAGE));

        TopologyPage.CP = null;
        TopologyPage.TitlePane = null;

        return TopologyPage;
    });