define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants", "noc/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, i18nString, Utility, CONSTANTS, Logger) {

        var TopologyPage = declare(CONSTANTS.CLASSNAME.PAGES.TOPOLOGYPAGE, null, {

            loadPage:function (pageNumber, pageName) {
                TopologyPage.CP[pageNumber] = noc.PageLoader.CpCenter[pageNumber];

                var paneWidth = TopologyPage.CP[pageNumber].w;
                var paneHeight = TopologyPage.CP[pageNumber].h;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                var titlePane = new TitlePane({
                    splitter:false,
                    style:styleString,
                    content:"<div id='"+pageName+"' style='width: 100%; height: 100%;'></div>",
                    title:"NetBanking Topology",
                    toggleable:false
                });

                var xpos=0, ypos=0;

                var viewMeta = {
                    id:pageName,
                    name: pageName,
                    type: CONSTANTS.TYPE.TOPOLOGY,
                    subtype: CONSTANTS.SUBTYPE.TOPOLOGY.NODES,
                    dimensions:[TopologyPage.CP[pageNumber].w, TopologyPage.CP[pageNumber].h],
                    position:[xpos,ypos],
                    custom: []
                };

                Utility.xhrPostCentral(CONSTANTS.ACTION.TOPOLOGY.NODES, viewMeta);

            }
        });

        // static variables of this class
        TopologyPage.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.PAGES.TOPOLOGYPAGE));

        TopologyPage.CP = [];

        return TopologyPage;
    });