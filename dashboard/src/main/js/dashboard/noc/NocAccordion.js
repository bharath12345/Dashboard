define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/logger/Logger",
    "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/abstract/AbstractAccordion", "dashboard/noc/NocView"],

    function (declare, i18n, i18nString, Logger, NocUtility, NOCCONSTANTS, AbstractAccordion, NocView) {

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

            showPageConfig: function(id, name, type, newWindow) {
                console.log("show page config called with id = " + id + " and name = " + name);
                var nocView = new NocView();
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

            constructor:function () {
            }

        });

        NocAccordion.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.ACCORDION));

        return NocAccordion;
    });