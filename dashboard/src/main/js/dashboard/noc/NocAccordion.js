define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAccordion", "dashboard/noc/NocView", "dashboard/helper/Scheduler", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, AbstractAccordion, NocView, Scheduler, Helper) {

        dashboard.classnames.NocAccordion = "dashboard.noc.NocAccordion";

        var NocAccordion = declare(dashboard.classnames.NocAccordion, AbstractAccordion, {

            showView: function(enumId, uuid, name, type, newWindow) {
                console.log("view id = " + enumId + " name = " + name + " uuid = " + uuid + " type = " + type);

                var nocView = this.getView(name);
                nocView.loadMenu(uuid, name, type);
                nocView.createSplitCenterPanes(dashboard.dom.CpCenterInner[dashboard.pageTypes.dashboard]);

                dashboard.dom.TopMenuPane[dashboard.pageTypes.dashboard].domNode.innerHTML = Helper.getHeading(dashboardI18nString[name]);

                // ToDo: Change this switch away from Name to some ID
                switch(parseInt(enumId)) {
                    case dashboard.enumMap.NOC.APPLICATION_ALERTS:
                        require(["dashboard/noc/views/NocViewIncident"], function (NocViewIncident) {
                            new NocViewIncident().loadPage("IncidentGrid");
                        });
                        break;

                    case dashboard.enumMap.NOC.TRANSACTION_GRID:
                        require(["dashboard/noc/views/NocViewTransactionGrid"], function (NocViewTransactionGrid) {
                            new NocViewTransactionGrid().loadPage("NocViewTransactionGrid");
                        });
                        break;

                    default:
                        console.log("Unknown page id = " + enumId + " name = " + name);
                        return;
                }
            },

            getView: function(name, newWindow) {
                var nocView = NocAccordion.VIEWMAP[name];
                if(nocView == null) {
                    nocView = new NocView(newWindow);
                    nocView.setAccordion(this);
                    NocAccordion.VIEWMAP[name] = nocView; // there should be only one view per name (filtered views are for later)
                }
                return nocView;
            }
        });

        NocAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.NocAccordion));

        NocAccordion.VIEWMAP = {};

        return NocAccordion;
    });