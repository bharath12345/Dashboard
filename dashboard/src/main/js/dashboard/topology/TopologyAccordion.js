define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAccordion", "dashboard/topology/TopologyView", "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, Logger, AbstractAccordion, TopologyView, Scheduler) {

        dashboard.classnames.TopologyAccordion = "dashboard.topology.TopologyAccordion";

        var TopologyAccordion = declare(dashboard.classnames.TopologyAccordion, AbstractAccordion, {

            SAMPLE: i18nString.sampleTopoology,

            showView: function(id, name, type, newWindow) {
                console.log("show page config called with id = " + id + " and name = " + name);

                topologyView = this.getView(name, newWindow);
                topologyView.loadMenu(id, name, type);
                topologyView.createSplitCenterPanes(dashboard.dom.CpCenterInner[dashboard.pageTypes.dashboard]);

                switch(name) {
                    case this.SAMPLE:
                        require(["dashboard/topology/views/SampleTopologyView"], function (SampleTopologyView) {
                            new SampleTopologyView().loadPage(this.SAMPLE);
                        });
                        break;

                    default:
                        console.log("Unknown page id = " + id);
                        return;
                }
            },

            getView: function(name, newWindow) {
                var topologyView = TopologyAccordion.VIEWMAP[name];
                if(topologyView == null) {
                    topologyView = new TopologyView(newWindow);
                    topologyView.setAccordion(this);
                    TopologyAccordion.VIEWMAP[name] = topologyView; // there should be only one view per name (filtered views are for later)
                }
                return topologyView;
            }
        });

        TopologyAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.TopologyAccordion));

        TopologyAccordion.VIEWMAP = {};

        return TopologyAccordion;
    });