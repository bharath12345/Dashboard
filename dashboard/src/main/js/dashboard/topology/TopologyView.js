define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology",
    "dojo/on", "dojo/_base/lang",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager", "dashboard/main/loader", "dashboard/helper/ButtonHelper",
    "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, on, lang, AbstractView, WindowManager, loader, ButtonHelper, Scheduler) {

        var TopologyView = declare("dashboard.topology.TopologyView", AbstractView, {

            newWindow: false,

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.CpTopCenter.domNode);
            },

            refreshView: function() {
                var topologyAccordion = TopologyView.ACCORDION;
                topologyAccordion.createView(TopologyView.ID, TopologyView.NAME, TopologyView.TYPE, this.newWindow);
            },

            loadMenu: function(id, name, type) {
                TopologyView.ID = id;
                TopologyView.NAME = name;
                TopologyView.TYPE = type;

                dashboard.toolbar.destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getRefresh();
                on(button, "click", lang.hitch(this, "refreshView"));
                dashboard.toolbar.addChild(button);

                button = buttonHelper.getNewWindow();
                on(button, "click", function() {
                    TopologyView.launchNewWindowConfigPane();
                });
                dashboard.toolbar.addChild(button);

                button = buttonHelper.getStatusRefresh();
                on(button, "click", function() {
                    Scheduler.startStopRefresh(true);
                });
                dashboard.toolbar.addChild(button);

                button = buttonHelper.getStopRefresh();
                on(button, "click", function() {
                    Scheduler.startStopRefresh(false);
                });
                dashboard.toolbar.addChild(button);

                dashboard.bottomMenuPane.resize();
                dashboard.TopBc.resize();
            },

            setAccordion: function(nocAccordion) {
                TopologyView.ACCORDION = nocAccordion;
            }
        });

        TopologyView.launchNewWindowConfigPane = function(id, name, type) {
            // launch the child window
            var wm = new WindowManager();
            wm.getNewWindow(TopologyView.ID, TopologyView.NAME, TopologyView.TYPE, pageTypes.TOPOLOGY);
        };

        TopologyView.ACCORDION = null;

        return TopologyView;
    });