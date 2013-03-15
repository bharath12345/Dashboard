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
                this.createInnerMenuAndPanes(dashboard.dom.CpTopCenter.domNode);
            },

            refreshView: function() {
                var topologyAccordion = TopologyView.ACCORDION;
                topologyAccordion.createView(TopologyView.ID, TopologyView.NAME, TopologyView.TYPE, this.newWindow);
            },

            loadMenu: function(id, name, type) {
                TopologyView.ID = id;
                TopologyView.NAME = name;
                TopologyView.TYPE = type;

                dashboard.dom.toolbar.destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getRefresh();
                on(button, "click", lang.hitch(this, "refreshView"));
                dashboard.dom.toolbar.addChild(button);

                button = buttonHelper.getViewNewWindow();
                on(button, "click", function() {
                    TopologyView.launchNewWindowConfigPane();
                });
                dashboard.dom.toolbar.addChild(button);

                button = buttonHelper.getStatusRefresh();
                on(button, "click", function() {
                    Scheduler.startStopRefresh(true);
                });
                dashboard.dom.toolbar.addChild(button);

                button = buttonHelper.getRefreshStop();
                on(button, "click", function() {
                    Scheduler.startStopRefresh(false);
                });
                dashboard.dom.toolbar.addChild(button);

                dashboard.dom.toolbar.addChild(buttonHelper.getPin());
                dashboard.dom.toolbar.addChild(buttonHelper.getPrevious());
                dashboard.dom.toolbar.addChild(buttonHelper.getQuickFind());
                dashboard.dom.toolbar.addChild(buttonHelper.getQuickView());
                dashboard.dom.toolbar.addChild(buttonHelper.getRefreshStatus());
                dashboard.dom.toolbar.addChild(buttonHelper.getRestoreDefault());
                dashboard.dom.toolbar.addChild(buttonHelper.getRestoreFilter());
                dashboard.dom.toolbar.addChild(buttonHelper.getRewindToBeginning());
                dashboard.dom.toolbar.addChild(buttonHelper.getSave());
                dashboard.dom.toolbar.addChild(buttonHelper.getSaveClose());
                dashboard.dom.toolbar.addChild(buttonHelper.getSaveLayout());
                dashboard.dom.toolbar.addChild(buttonHelper.getSaveNew());
                dashboard.dom.toolbar.addChild(buttonHelper.getSignedInUsers());
                dashboard.dom.toolbar.addChild(buttonHelper.getSmartAction());
                dashboard.dom.toolbar.addChild(buttonHelper.getStepWizard());
                dashboard.dom.toolbar.addChild(buttonHelper.getStop());
                dashboard.dom.toolbar.addChild(buttonHelper.getSupport());
                dashboard.dom.toolbar.addChild(buttonHelper.getSwapPathNodes());
                dashboard.dom.toolbar.addChild(buttonHelper.getTableHorizontal());
                dashboard.dom.toolbar.addChild(buttonHelper.getTestGraph());
                dashboard.dom.toolbar.addChild(buttonHelper.getTextWrap());
                dashboard.dom.toolbar.addChild(buttonHelper.getTooltip());
                dashboard.dom.toolbar.addChild(buttonHelper.getTopology());
                dashboard.dom.toolbar.addChild(buttonHelper.getTree());
                dashboard.dom.toolbar.addChild(buttonHelper.getTroubleshooting());
                dashboard.dom.toolbar.addChild(buttonHelper.getUndo());
                dashboard.dom.toolbar.addChild(buttonHelper.getView());
                dashboard.dom.toolbar.addChild(buttonHelper.getViewAction());
                dashboard.dom.toolbar.addChild(buttonHelper.getWarning());
                dashboard.dom.toolbar.addChild(buttonHelper.getWindowClose());
                dashboard.dom.toolbar.addChild(buttonHelper.getWindowMaximize());
                dashboard.dom.toolbar.addChild(buttonHelper.getWindowMinimize());
                dashboard.dom.toolbar.addChild(buttonHelper.getWindowRestore());
                dashboard.dom.toolbar.addChild(buttonHelper.getWizard3());
                dashboard.dom.toolbar.addChild(buttonHelper.getZoomIn());
                dashboard.dom.toolbar.addChild(buttonHelper.getZoomOut());
                dashboard.dom.toolbar.addChild(buttonHelper.getCollapse());
                dashboard.dom.toolbar.addChild(buttonHelper.getExpand());
                dashboard.dom.toolbar.addChild(buttonHelper.getRefreshSmaller());
                dashboard.dom.toolbar.addChild(buttonHelper.getTreeCollapse());
                dashboard.dom.toolbar.addChild(buttonHelper.getTreeExpand());


                dashboard.dom.bottomMenuPane.resize();
                dashboard.dom.TopBc.resize();
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