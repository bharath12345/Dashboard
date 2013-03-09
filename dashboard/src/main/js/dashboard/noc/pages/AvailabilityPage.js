define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/logger/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, i18nString, NocUtility, NOCCONSTANTS, Logger) {

        var AvailabilityPage = declare(NOCCONSTANTS.CLASSNAME.PAGES.AVAILABILITYPAGE, null, {

            loadPage:function (pageNumber, pageName, componentName, clusterName) {

                AvailabilityPage.CP[pageNumber] = noc.PageLoader.CpCenter[pageNumber];

                var paneWidth = AvailabilityPage.CP[pageNumber].w;
                var paneHeight = AvailabilityPage.CP[pageNumber].h;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                var titlePane = new TitlePane({
                    splitter:false,
                    style:styleString,
                    content:"<div id='"+pageName+"' style='width: 100%; height: 100%;'></div>",
                    title:"Availability Grid",
                    toggleable:false
                });

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                AvailabilityPage.CP[pageNumber].addChild(gridContainer);
                gridContainer.disableDnd();

                gridContainer.addChild(titlePane, 0);
                gridContainer.startup();
                gridContainer.resize();

                var xpos=0, ypos=0;

                var viewMeta = {
                    id:0,
                    name: pageName,
                    type: NOCCONSTANTS.TYPE.AVAILABILITY,
                    subtype: NOCCONSTANTS.SUBTYPE.AVAILABILITY.META,
                    dimensions:[AvailabilityPage.CP[pageNumber].w, AvailabilityPage.CP[pageNumber].h],
                    position:[xpos,ypos],
                    custom: [componentName, clusterName]
                };

                NocUtility.xhrPostCentral(NOCCONSTANTS.ACTION.REQUEST_HANDLER, viewMeta);

            }
        });

        // static variables of this class
        AvailabilityPage.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.PAGES.AVAILABILITYPAGE));

        AvailabilityPage.CP = [];

        return AvailabilityPage;
    });