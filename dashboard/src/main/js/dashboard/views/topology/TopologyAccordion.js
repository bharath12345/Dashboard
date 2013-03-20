define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/topology/nls/topology", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAccordion", "dashboard/views/topology/TopologyView", "dashboard/helper/Scheduler", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, AbstractAccordion, TopologyView, Scheduler, Helper) {

        dashboard.classnames.TopologyAccordion = "dashboard.topology.TopologyAccordion";

        var TopologyAccordion = declare(dashboard.classnames.TopologyAccordion, AbstractAccordion, {

            showView: function(enumId, uuid, name, type, newWindow) {
                console.log("view id = " + enumId + " name = " + name + " uuid = " + uuid + " type = " + type);

                topologyView = this.getView(name, newWindow);
                topologyView.loadMenu(uuid, name, type);
                topologyView.createSplitCenterPanes(dashboard.dom.CpCenterInner[dashboard.pageTypes.dashboard]);

                dashboard.dom.TopMenuPane[dashboard.pageTypes.dashboard].domNode.innerHTML = Helper.getHeading(dashboardI18nString[name]);

                switch(parseInt(enumId)) {
                    case dashboard.enumMap.TOPOLOGY.SAMPLE_TOPOLOGY:
                        require(["dashboard/views/topology/forms/SampleTopologyForm"], function (SampleTopologyForm) {
                            new SampleTopologyForm().loadPage(this.SAMPLE);
                        });
                        break;

                    default:
                        console.log("Unknown page id = " + enumId);
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