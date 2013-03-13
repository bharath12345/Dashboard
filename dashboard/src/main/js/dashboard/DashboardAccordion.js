define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard","dijit/layout/AccordionContainer",
    "dijit/layout/ContentPane", "dojo/request/xhr", "dojo/_base/lang", "dashboard/logger/Logger", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, AccordionContainer, ContentPane, xhr, lang, Logger, Helper) {

        var DashboardAccordion = declare("dashboard.DashboardAccordion", null, {

        loadAccordion: function() {
                var viewMeta = {};
                xhr("dashboard/panes.action", {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(function (data) {
                        // Do something with the handled data
                        this.data = data;
                        lang.hitch(this, "createAccordion");
                    }, function (err) {
                        // Handle the error condition
                        console.log("xhr error = " + err);
                    });
            },

            createAccordion: function() {
                DashboardAccordion.AccContainer = new AccordionContainer({gutters: false});
                DashboardAccordion.AccPane = [];

                var paneList = this.data.tabListVO;
                for(var i=0;i<paneList.length; i++) {
                    DashboardAccordion.AccPane[paneList[i].name] = new ContentPane({
                        region:"center",
                        title:paneList[i].label,
                        content: "<div id='" + paneList[i].name + "' ></div>"
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
                    }).then(function (data) {
                            var accClassPath = Helper.getClassPath(DashboardAccordion.ACCORDIONMAP[data.param.name[0]]);
                            console.log("fetching callback class = " + accClassPath);
                            require([accClassPath], function (AccordionLoader) {
                                // AccordionLoader is a prototype of ConfigAccordion in the case of Config and so on...
                                var al = new AccordionLoader();
                                al.renderAccordion(data);
                            });
                        }, function (err) {
                            // Handle the error condition
                            console.log("xhr error = " + err);
                        });

                }

                DashboardAccordion.AccContainer.placeAt(dashboard.CpLeft);
                DashboardAccordion.AccContainer.startup();
                DashboardAccordion.AccContainer.resize();
                dashboard.TopBc.resize();
            }

        });

        DashboardAccordion.LOG = Logger.addTimer(new Logger("dashboard.DashboardAccordion"));

        DashboardAccordion.ACCORDIONMAP = [];
        DashboardAccordion.ACCORDIONMAP["topology"] = "dashboard.topology.TopologyAccordion";
        DashboardAccordion.ACCORDIONMAP["noc"] = "dashboard.noc.NocAccordion";
        DashboardAccordion.ACCORDIONMAP["alerts"] = "dashboard.alerts.AlertsAccordion";
        DashboardAccordion.ACCORDIONMAP["custom"] = "dashboard.custom.CustomAccordion";
        DashboardAccordion.ACCORDIONMAP["config"] = "dashboard.config.ConfigAccordion";


        return DashboardAccordion;
    });