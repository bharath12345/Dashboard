define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dijit/layout/ContentPane",
    "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/topology/TopologyConstants", "dashboard/topology/TopologyUtility"],

    function (require, declare, i18n, TitlePane, GridContainer, ContentPane, i18nString, Logger, TOPOLOGYCONSTANTS, TopologyUtility) {

        dashboard.classnames.TopologyView = "dashboard.topology.page.TopologyView";

        var TopologyView = declare(dashboard.classnames.TopologyView, null, {

            loadPage:function (pageNumber, pageName) {
                TopologyView.CP = noc.PageLoader.CpCenter[pageNumber];
                TopologyView.CP.domNode.style.border=0;

                var paneWidth = TopologyView.CP.w;
                var paneHeight = TopologyView.CP.h;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                TopologyView.TitlePane = new ContentPane({
                    region:"center",
                    splitter:false,
                    style:styleString
                });

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                TopologyView.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                gridContainer.addChild(TopologyView.TitlePane, 0);
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
        TopologyView.LOG = Logger.addTimer(new Logger(dashboard.classnames.TopologyView));

        TopologyView.CP = null;
        TopologyView.TitlePane = null;

        return TopologyView;
    });