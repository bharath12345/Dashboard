define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/logger/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, i18nString, NocUtility, NOCCONSTANTS, Logger) {

        var IncidentPage = declare(NOCCONSTANTS.CLASSNAME.PAGES.INCIDENTPAGE, null, {

            loadPage:function (pageName) {

                var paneWidth = dashboard.CpCenterInner.w;
                var paneHeight = dashboard.CpCenterInner.h;
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
                dashboard.CpCenterInner.addChild(gridContainer);
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
                    type: NOCCONSTANTS.TYPE.INCIDENT,
                    subtype: NOCCONSTANTS.SUBTYPE.INCIDENT.META,
                    dimensions:[dashboard.CpCenterInner.w, dashboard.CpCenterInner.h],
                    position:[xpos,ypos],
                    custom: []
                };

                NocUtility.xhrPostCentral(NOCCONSTANTS.ACTION.INCIDENT.APPLICATIONMETA, viewMeta);

            }
        });

        // static variables of this class
        IncidentPage.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.PAGES.AVAILABILITYPAGE));

        return IncidentPage;
    });