define(["dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer", "dojo/on", "dojo/_base/lang",
    "dijit/layout/AccordionContainer", "dijit/layout/ContentPane", "noc/Logger",
    "dashboard/DashboardUtility", "dashboard/DashboardConstants", "dojo/i18n!dashboard/nls/dashboard"],

    function (declare, i18n, TitlePane, GridContainer, on, lang, AccordionContainer, ContentPane, Logger,
              DashboardUtility, DBCONSTANTS, i18nString) {

        var DashboardAccordion = declare(DBCONSTANTS.CLASSNAME.DASHBOARD.ACCORDION, null, {

            loadAccordion: function() {
                var viewMeta = {
                    id:"",
                    name:"",
                    type:DBCONSTANTS.TYPE.ACCORDIONSET,
                    custom:[]
                };
                DashboardUtility.xhrPostCentral(DBCONSTANTS.ACTION.ACCORDIONSET, viewMeta);
            },

            createAccordion: function(data) {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                dashboard.DashboardContainers.CpLeft.domNode.appendChild(node);

                DashboardAccordion.AccContainer = new AccordionContainer({}, node);
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
                        type:DBCONSTANTS.TYPE.ACCORDIONDATA,
                        custom:[]
                    };
                    DashboardUtility.xhrPostCentral(paneList[i].action, viewMeta);
                }

                DashboardAccordion.AccContainer.startup();
                DashboardAccordion.AccContainer.resize();
                dashboard.DashboardContainers.TopBc.resize();
            }

        });

        DashboardAccordion.LOG = Logger.addTimer(new Logger(DBCONSTANTS.CLASSNAME.DASHBOARD.ACCORDION));
        
        return DashboardAccordion;
    });