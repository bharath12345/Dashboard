define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants"],

    function (require, declare, i18n, TitlePane, GridContainer, lang, Grid, i18nString, Utility, Constants) {

        var AvailabilityPage = declare("noc.pages.AvailabilityPage", null, {

            loadPage:function () {

                AvailabilityPage.CP = noc.PageLoader.CpCenter[0];

                var paneWidth = AvailabilityPage.CP.w;
                var paneHeight = AvailabilityPage.CP.h;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                var titlePane = new TitlePane({
                    splitter:false,
                    style:styleString,
                    content:"<div id='availGrid' style='width: 100%; height: 100%;'></div>",
                    title:"Availability Grid",
                    "class":"soria", toggleable:false
                });

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;", "class":"soria"});
                AvailabilityPage.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                gridContainer.addChild(titlePane, 0);
                gridContainer.startup();
                gridContainer.resize();

                var gridViewMeta = {
                    id:"availGrid",
                    type: CONSTANTS.AVAILABILITY,
                    width:AvailabilityPage.CP.offsetWidth,
                    height:AvailabilityPage.CP.offsetHeight,
                    xpos:0,
                    ypos:0
                };

                var queryUrl = Utility.serialiseObject(gridViewMeta);
                var baseUrl = "component/AvailabilityGrid.jsp";
                Utility.xhrPostCentral(baseUrl + queryUrl, gridViewMeta);

            }
        });

        // static variables of this class

        AvailabilityPage.PageCounter = 0;
        AvailabilityPage.CP = null;
        AvailabilityPage.GridID = 0;

        return AvailabilityPage;
    });