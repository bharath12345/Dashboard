define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants", "noc/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, i18nString, Utility, CONSTANTS, Logger) {

        var IncidentPage = declare(CONSTANTS.CLASSNAME.PAGES.INCIDENTPAGE, null, {

            loadPage:function (pageNumber, pageName) {

                IncidentPage.CP = noc.PageLoader.CpCenter[pageNumber];

                var paneWidth = IncidentPage.CP.w;
                var paneHeight = IncidentPage.CP.h;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                var titlePane = new TitlePane({
                    splitter:false,
                    style:styleString,
                    content:"<div id='"+pageName+"' style='width: 100%; height: 100%;'></div>",
                    title:"Alerts Grid",
                    toggleable:false
                });

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                IncidentPage.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                gridContainer.addChild(titlePane, 0);
                gridContainer.startup();
                gridContainer.resize();

                dojo.query(".dijitTitlePaneContentInner")[0].style.padding = "0px";

                var textNode = dojo.query(".dijitTitlePaneTextNode", gridContainer.domNode);
                for (var i = 0; i < textNode.length; i++) {
                    textNode[i].style.fontSize = "16px";
                }

                var xpos=0, ypos=0;

                var viewMeta = {
                    id:pageName,
                    name: pageName,
                    type: CONSTANTS.TYPE.INCIDENT,
                    subtype: CONSTANTS.SUBTYPE.INCIDENT.META,
                    dimensions:[IncidentPage.CP.w, IncidentPage.CP.h],
                    position:[xpos,ypos],
                    custom: []
                };

                Utility.xhrPostCentral(CONSTANTS.ACTION.INCIDENT.APPLICATIONMETA, viewMeta);

            }
        });

        // static variables of this class
        IncidentPage.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.PAGES.AVAILABILITYPAGE));

        IncidentPage.CP = null;

        return IncidentPage;
    });