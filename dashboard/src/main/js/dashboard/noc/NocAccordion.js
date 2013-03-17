define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAccordion", "dashboard/noc/NocView", "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, Logger, AbstractAccordion, NocView, Scheduler) {

        dashboard.classnames.NocAccordion = "dashboard.noc.NocAccordion";

        var NocAccordion = declare(dashboard.classnames.NocAccordion, AbstractAccordion, {

            ALERTSGRID: "Application",
            TRANSACTIONSGRID: i18nString.transactionGrid,

            showView: function(id, name, type, newWindow) {
                console.log("show page config called with id = " + id + " and name = " + name);

                var nocView = this.getView(name);
                nocView.loadMenu(id, name, type);
                nocView.createSplitCenterPanes();

                // ToDo: Change this switch away from Name to some ID
                switch(name) {
                    case this.ALERTSGRID:
                        require(["dashboard/noc/views/NocViewIncident"], function (NocViewIncident) {
                            new NocViewIncident().loadPage("IncidentGrid");
                        });
                        break;

                    case this.TRANSACTIONSGRID:
                        require(["dashboard/noc/views/NocViewTransactionGrid"], function (NocViewTransactionGrid) {
                            new NocViewTransactionGrid().loadPage("NocViewTransactionGrid");
                        });
                        break;

                    default:
                        console.log("Unknown page id = " + id + " name = " + name);
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