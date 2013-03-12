define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/logger/Logger",
    "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/abstract/AbstractAccordion", "dashboard/noc/NocView", "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, Logger, NocUtility, NOCCONSTANTS, AbstractAccordion, NocView, Scheduler) {

        var NocAccordion = declare(NOCCONSTANTS.CLASSNAME.ACCORDION, AbstractAccordion, {

            ALERTSGRID: "Alerts Grid",
            CLUSTERSGRID: "Clusters Grid",
            TRANSACTIONSGRID: "Transactions Grid",

            renderAccordion: function(data) {
                // keep in mind that the superclass's method will be called after this method is finished due to the
                // custom chain configuration
                console.log("in NOC render accordion. data = " + dojo.toJson(data));
                this.data = data.pageListVO;
                this.param = data.param;
            },

            showView: function(id, name, type, newWindow) {
                console.log("show page config called with id = " + id + " and name = " + name);

                nocView = this.getView(name);
                nocView.setAccordion(this);
                nocView.loadMenu(id, name, type);

                switch(name) {
                    case this.ALERTSGRID:
                        require(["dashboard/noc/pages/IncidentPage"], function (IncidentPage) {
                            new IncidentPage().loadPage("IncidentGrid");
                        });
                        break;

                    case this.CLUSTERSGRID:
                        require(["dashboard/noc/pages/AllClusterAvailability"], function (AllClusterAvailability) {
                            new AllClusterAvailability().loadPage("AllClusterAvailability");
                        });
                        break;

                    case this.TRANSACTIONSGRID:
                        require(["dashboard/noc/pages/TransactionGrid"], function (TransactionGrid) {
                            new TransactionGrid().loadPage("TransactionGrid");
                        });
                        break;

                    default:
                        console.log("Unknown page id = " + id);
                        return;
                }
            },

            getLinkMap: function() {
                return NocAccordion.LINKMAP;
            },

            getView: function(name, newWindow) {
                var nocView = NocAccordion.VIEWMAP[name];
                if(nocView == null) {
                    nocView = new NocView(newWindow);
                    NocAccordion.VIEWMAP[name] = nocView; // there should be only one view per name (filtered views are for later)
                }
                return nocView;
            }
        });

        NocAccordion.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.ACCORDION));

        NocAccordion.LINKMAP = {};
        NocAccordion.VIEWMAP = {};

        return NocAccordion;
    });