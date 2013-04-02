define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dijit/layout/AccordionContainer",
    "dijit/layout/ContentPane", "dojo/request/xhr", "dojo/_base/lang", "dashboard/logger/Logger", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, AccordionContainer, ContentPane, xhr, lang, Logger, Helper) {

        dashboard.classnames.DashboardAccordion = "dashboard.DashboardAccordion";

        var DashboardAccordion = declare(dashboard.classnames.DashboardAccordion, null, {

            loadAccordion:function () {
                var viewMeta = {};

                var url = "dashboard/enums.action";
                xhr(url, {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.loadPanes));

            },

            initAccMap: function() {
                /*
                 * ToDo: Do NOT keep this map - force the programmers to conform to 'A' classname pattern
                 */

                this.ACCORDIONMAP = [];
                for(var key in dashboard.enumMap) {
                    switch(key) {
                        case "TOPOLOGY":
                            this.ACCORDIONMAP[key] = "dashboard/views/topology/TopologyAccordion";
                            break;

                        case "CONFIG":
                            this.ACCORDIONMAP[key] = "dashboard/views/config/ConfigAccordion";
                            break;

                        case "NOC":
                            this.ACCORDIONMAP[key] = "dashboard/views/noc/NocAccordion";
                            break;

                        case "CUSTOM":
                            this.ACCORDIONMAP[key] = "dashboard/views/custom/CustomAccordion";
                            break;

                        case "ANALYTICS":
                            this.ACCORDIONMAP[key] = "dashboard/views/analytics/AnalyticsAccordion";
                            break;

                        default:
                            console.log("unknown key = " + key);
                            break;
                    }
                }
            },

            loadPanes: function(data) {
                dashboard.enumMap = data.enumMap;
                this.initAccMap();

                var viewMeta = {};
                var url = "dashboard/panes.action";
                xhr(url, {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.createAccordion));
            },

            createAccordion:function (data) {
                DashboardAccordion.AccContainer = new AccordionContainer({gutters:false});
                DashboardAccordion.AccPane = [];

                var paneList = data.paneList;
                for (var i = 0; i < paneList.length; i++) {
                    DashboardAccordion.AccPane[paneList[i].name] = new ContentPane({
                        region:"center",
                        title:i18nString[paneList[i].name],
                        content:"<div id='" + paneList[i].name + "' ></div>"
                    });
                    DashboardAccordion.AccContainer.addChild(DashboardAccordion.AccPane[paneList[i].name]);

                    var viewMeta = {
                        id:paneList[i].id,
                        name:paneList[i].name
                    };
                    xhr(paneList[i].action, {
                        handleAs:"json",
                        method:"POST",
                        query:viewMeta,
                        headers:Helper.JSON_HEADER
                    }).then(lang.hitch(this, this.createAccordionPanes));

                    DashboardAccordion.AccContainer.placeAt(dashboard.dom.CpLeft);
                    DashboardAccordion.AccContainer.startup();
                    DashboardAccordion.AccContainer.resize();
                    dashboard.dom.TopBc.resize();
                }
            },

            createAccordionPanes:function (data) {
                var accClassPath = this.ACCORDIONMAP[data.param.name[0]];
                console.log("fetching callback class = " + accClassPath);
                require([accClassPath], function (AccordionLoader) {
                    // AccordionLoader is a prototype of ConfigAccordion in the case of Config and so on...
                    var al = new AccordionLoader();
                    al.renderAccordion(data);
                });
            }

        });

        DashboardAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.DashboardAccordion));

        return DashboardAccordion;
    });