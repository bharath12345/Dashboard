define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/noc/nls/noc",  "dojo/i18n!dashboard/nls/dashboard",
    "dashboard/logger/Logger", "dojo/_base/lang",
    "dashboard/abstract/AbstractAccordion", "dashboard/views/noc/NocView", "dashboard/helper/Scheduler", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, lang, AbstractAccordion, NocView, Scheduler, Helper) {

        dashboard.classnames.NocAccordion = "dashboard.noc.NocAccordion";

        var NocAccordion = declare(dashboard.classnames.NocAccordion, AbstractAccordion, {

            showView: function(enumId, uuid, name, type, newWindow) {
                console.log("view id = " + enumId + " name = " + name + " uuid = " + uuid + " type = " + type);

                this.nocView = this.getView(name, newWindow);
                this.nocView.loadMenu(enumId, uuid, name, type);

                dashboard.dom.TopMenuPane[this.nocView.pageType].domNode.innerHTML = Helper.getHeading(dashboardI18nString[name]);

                switch(parseInt(enumId)) {
                    case dashboard.enumMap.NOC.APPLICATION_ALERTS:
                        require(["dashboard/views/noc/forms/NocApplicationIncidentForm"], lang.hitch(this, function (NocApplicationIncidentForm) {
                            Helper.createView(this.nocView, this.nocView.pageType, new NocApplicationIncidentForm());
                        }));
                        break;

                    case dashboard.enumMap.NOC.TRANSACTION_GRID:
                        require(["dashboard/views/noc/forms/NocTransactionGridForm"], lang.hitch(this, function (NocTransactionGridForm) {
                            Helper.createView(this.nocView, this.nocView.pageType, new NocTransactionGridForm());
                        }));
                        break;

                    default:
                        console.log("Unknown page id = " + enumId + " name = " + name);
                        return;
                }

            },

            /*
                Per the current design, one Accordion holds only one ACTIVE VIEW
                but later for faster loading, we can keep a list of views per accordion and load them instantly
             */
            getView: function(name, newWindow) {
                if(this.nocView == null || this.nocView == undefined) {
                    this.nocView = new NocView(newWindow);
                    this.nocView.setAccordion(this);
                }
                return this.nocView;
            }
        });

        NocAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.NocAccordion));

        return NocAccordion;
    });