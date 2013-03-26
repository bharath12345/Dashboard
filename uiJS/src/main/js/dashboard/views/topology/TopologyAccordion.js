define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/topology/nls/topology", "dojo/i18n!dashboard/nls/dashboard",
    "dashboard/logger/Logger", "dojo/_base/lang",
    "dashboard/abstract/AbstractAccordion", "dashboard/views/topology/TopologyView", "dashboard/helper/Scheduler", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, lang, AbstractAccordion, TopologyView, Scheduler, Helper) {

        dashboard.classnames.TopologyAccordion = "dashboard.topology.TopologyAccordion";

        var TopologyAccordion = declare(dashboard.classnames.TopologyAccordion, AbstractAccordion, {

            showView: function(enumId, uuid, name, type, newWindow) {
                console.log("view id = " + enumId + " name = " + name + " uuid = " + uuid + " type = " + type);

                this.topologyView = this.getView(name, newWindow);
                this.topologyView.loadMenu(enumId, uuid, name, type);

                dashboard.dom.TopMenuPane[this.topologyView.pageType].domNode.innerHTML = Helper.getHeading(dashboardI18nString[name]);

                switch(parseInt(enumId)) {
                    case dashboard.enumMap.TOPOLOGY.SAMPLE_TOPOLOGY:
                        require(["dashboard/views/topology/forms/SampleTopologyForm"], lang.hitch(this, function (SampleTopologyForm) {
                            this.topologyView.createSplitCenterPanes(dashboard.dom.CpCenterInner[this.topologyView.pageType], new SampleTopologyForm(this.topologyView.pageType));
                        }));
                        break;

                    case dashboard.enumMap.TOPOLOGY.LAYERONE:
                        require(["dashboard/views/topology/forms/LayerOne"], lang.hitch(this, function (LayerOne) {
                            this.topologyView.createSplitCenterPanes(dashboard.dom.CpCenterInner[this.topologyView.pageType], new LayerOne(this.topologyView.pageType));
                        }));
                        break;

                    default:
                        console.log("Unknown page id = " + enumId);
                        return;
                }
            },

            /*
             Per the current design, one Accordion holds only one ACTIVE VIEW
             but later for faster loading, we can keep a list of views per accordion and load them instantly
             */
            getView: function(name, newWindow) {
                if(this.topologyView == null || this.topologyView == undefined) {
                    this.topologyView = new TopologyView(newWindow);
                    this.topologyView.setAccordion(this);
                }
                return this.topologyView;
            }
        });

        TopologyAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.TopologyAccordion));

        return TopologyAccordion;
    });