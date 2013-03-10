define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dijit/TitlePane", "dojox/layout/GridContainer", "dojo/on", "dojo/_base/lang",
    "dijit/layout/AccordionContainer", "dijit/layout/ContentPane", "dashboard/logger/Logger",
    "dashboard/DashboardUtility", "dashboard/DashboardConstants", "dashboard/DashboardCallbacks"],

    function (declare, i18n, i18nString, TitlePane, GridContainer, on, lang, AccordionContainer, ContentPane, Logger,
              DashboardUtility, DBCONSTANTS, DashboardCallbacks) {

        var DashboardAccordion = declare(DBCONSTANTS.CLASSNAME.DASHBOARD.ACCORDION, null, {

            loadAccordion: function() {
                var viewMeta = {
                    id:"",
                    name:"",
                    type:DashboardCallbacks.responseHandler.ACCORDIONSET,
                    custom:[]
                };
                DashboardUtility.xhrPostCentral(DBCONSTANTS.ACTION.ACCORDIONSET, viewMeta);
            },

            createAccordion: function(data) {
                DashboardAccordion.AccContainer = new AccordionContainer({gutters: false});
                DashboardAccordion.AccPane = [];

                var paneList = data.tabListVO;
                for(var i=0;i<paneList.length; i++) {
                    DashboardAccordion.AccPane[paneList[i].name] = new ContentPane({
                        region:"center",
                        title:paneList[i].label,
                        content: "<div id='" + paneList[i].name + "' ></div>"
                    });
                    DashboardAccordion.AccContainer.addChild(DashboardAccordion.AccPane[paneList[i].name]);
                    var viewMeta = {
                        id:paneList[i].id,
                        name:paneList[i].name,
                        type:DashboardCallbacks.responseHandler.ACCORDIONDATA,
                        custom:[]
                    };
                    DashboardUtility.xhrPostCentral(paneList[i].action, viewMeta);
                }

                DashboardAccordion.AccContainer.placeAt(dashboard.CpLeft);
                DashboardAccordion.AccContainer.startup();
                DashboardAccordion.AccContainer.resize();
                dashboard.TopBc.resize();
            }

        });

        DashboardAccordion.LOG = Logger.addTimer(new Logger(DBCONSTANTS.CLASSNAME.DASHBOARD.ACCORDION));

        return DashboardAccordion;
    });