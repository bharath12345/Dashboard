define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/topology/TopologyUtility", "dashboard/topology/TopologyConstants", "dashboard/abstract/AbstractAccordion", "dashboard/topology/TopologyView", "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, Logger, TopologyUtility, NOCCONSTANTS, AbstractAccordion, NocView, Scheduler) {

        dashboard.classnames.TopologyAccordion = "dashboard.topology.TopologyAccordion";

        var TopologyAccordion = declare(dashboard.classnames.TopologyAccordion, AbstractAccordion, {

            SAMPLE: "Sample Topology",

            renderAccordion: function(data) {
                // keep in mind that the superclass's method will be called after this method is finished due to the
                // custom chain configuration
                console.log("in Topology render accordion. data = " + dojo.toJson(data));
                this.data = data;
                this.param = data.param;
            },

            showView: function(id, name, type, newWindow) {
                console.log("show page config called with id = " + id + " and name = " + name);

                topologyView = this.getView(name);
                topologyView.setAccordion(this);
                topologyView.loadMenu(id, name, type);

                switch(name) {
                    case this.SAMPLE:

                        break;

                    default:
                        console.log("Unknown page id = " + id);
                        return;
                }
            },

            getLinkMap: function() {
                return TopologyAccordion.LINKMAP;
            },

            getView: function(name, newWindow) {
                var topologyView = TopologyAccordion.VIEWMAP[name];
                if(topologyView == null) {
                    topologyView = new NocView(newWindow);
                    TopologyAccordion.VIEWMAP[name] = topologyView; // there should be only one view per name (filtered views are for later)
                }
                return topologyView;
            }
        });

        TopologyAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.TopologyAccordion));

        TopologyAccordion.LINKMAP = {};
        TopologyAccordion.VIEWMAP = {};

        return TopologyAccordion;
    });