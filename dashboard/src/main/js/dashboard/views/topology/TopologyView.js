define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/topology/nls/topology",
    "dojo/on", "dojo/_base/lang",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager", "dashboard/helper/ButtonHelper",
    "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, on, lang, AbstractView, WindowManager, ButtonHelper, Scheduler) {

        var TopologyView = declare("dashboard.topology.TopologyView", AbstractView, {

            newWindow: false,

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            // the method is called only in a NEW Window. Never in the 'central' dashboard
            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.dom.CpTopCenter.domNode, true, dashboard.pageTypes.TOPOLOGY);
            },

            refreshView: function() {
                var topologyAccordion = TopologyView.ACCORDION;
                topologyAccordion.createView(TopologyView.ID, TopologyView.NAME, TopologyView.TYPE, this.newWindow);
            },

            launchNewWindow: function() {
                // launch the child window
                var wm = new WindowManager();
                var queryParams = [];
                queryParams.push("topology");
                queryParams.push(TopologyView.ID);
                queryParams.push(TopologyView.NAME);
                queryParams.push(TopologyView.TYPE);
                wm.getNewWindow(queryParams);
            },

            loadMenu: function(id, name, type) {
                TopologyView.ID = id;
                TopologyView.NAME = name;
                TopologyView.TYPE = type;

                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getRefresh();
                on(button, "click", lang.hitch(this, "refreshView"));
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(button);

                button = buttonHelper.getViewNewWindow();
                on(button, "click", lang.hitch(this, this.launchNewWindow));
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(button);

                button = buttonHelper.getStatusRefresh();
                on(button, "click", function() {
                    Scheduler.startStopRefresh(true);
                });
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(button);

                button = buttonHelper.getRefreshStop();
                on(button, "click", function() {
                    Scheduler.startStopRefresh(false);
                });
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(button);

                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getPin());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getPrevious());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getQuickFind());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getQuickView());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getRefreshStatus());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getRestoreDefault());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getRestoreFilter());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getRewindToBeginning());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getSave());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getSaveClose());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getSaveLayout());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getSaveNew());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getSignedInUsers());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getSmartAction());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getStepWizard());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getStop());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getSupport());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getSwapPathNodes());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getTableHorizontal());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getTestGraph());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getTextWrap());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getTooltip());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getTopology());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getTree());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getTroubleshooting());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getUndo());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getView());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getViewAction());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getWarning());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getWindowClose());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getWindowMaximize());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getWindowMinimize());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getWindowRestore());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getWizard3());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getZoomIn());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getZoomOut());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getCollapse());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getExpand());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getRefreshSmaller());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getTreeCollapse());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getTreeExpand());

                dashboard.dom.TopBc.resize();
            },

            setAccordion: function(nocAccordion) {
                TopologyView.ACCORDION = nocAccordion;
            }
        });

        TopologyView.ACCORDION = null;

        return TopologyView;
    });