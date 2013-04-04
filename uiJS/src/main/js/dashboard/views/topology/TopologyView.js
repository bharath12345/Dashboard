define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/topology/nls/topology",
    "dojo/on", "dojo/_base/lang",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager", "dashboard/helper/ButtonHelper",
    "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, on, lang, AbstractView, WindowManager, ButtonHelper, Scheduler) {

        var TopologyView = declare("dashboard.topology.TopologyView", AbstractView, {

            newWindow: false,

            constructor: function(newWindow) {
                this.newWindow = newWindow;
                if(this.newWindow) {
                    this.pageType = dashboard.pageTypes.TOPOLOGY;
                } else {
                    this.pageType = dashboard.pageTypes.dashboard;
                }
            },

            // the method is called only in a NEW Window. Never in the 'central' dashboard
            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.dom.CpTopCenter.domNode, dashboard.pageTypes.TOPOLOGY);
            },

            refreshView: function() {
                this.ACCORDION.createView(this.ENUMID, this.UUID, this.NAME, this.TYPE, this.newWindow);
            },

            launchNewWindow: function() {
                // launch the child window
                var wm = new WindowManager();
                var queryParams = [];
                queryParams.push(dashboard.pageTypes.TOPOLOGY);
                queryParams.push(this.UUID);
                queryParams.push(this.ENUMID);
                queryParams.push(this.NAME);
                queryParams.push(this.TYPE);
                wm.getNewWindow(queryParams);
            },

            /*
             Button can be created at multiple levels -
             a) At the view level (which happens below)
             b) At the Form or it its inheritance hierarchy
             */
            createToolbarButtons: function(enumId, id, name, type) {
                this.ENUMID = enumId;
                this.ID = id;
                this.NAME = name;
                this.TYPE = type;

                /*
                 The destory of the previous toolbar happens ONLY in the view - never in the form or form's inheritance hierarchy
                 */
                dashboard.dom.Toolbar[this.pageType].destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getRefresh();
                on(button, "click", lang.hitch(this, "refreshView"));
                dashboard.dom.Toolbar[this.pageType].addChild(button);

                button = buttonHelper.getViewNewWindow();
                on(button, "click", lang.hitch(this, this.launchNewWindow));
                dashboard.dom.Toolbar[this.pageType].addChild(button);

                button = buttonHelper.getStatusRefresh();
                on(button, "click", function() {
                    Scheduler.startStopRefresh(true);
                });
                dashboard.dom.Toolbar[this.pageType].addChild(button);

                button = buttonHelper.getRefreshStop();
                on(button, "click", function() {
                    Scheduler.startStopRefresh(false);
                });
                dashboard.dom.Toolbar[this.pageType].addChild(button);

                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getPin());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getPrevious());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getQuickFind());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getQuickView());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getRefreshStatus());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getRestoreDefault());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getRestoreFilter());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getRewindToBeginning());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getSave());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getSaveClose());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getSaveLayout());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getSaveNew());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getSignedInUsers());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getSmartAction());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getStepWizard());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getStop());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getSupport());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getSwapPathNodes());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getTableHorizontal());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getTestGraph());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getTextWrap());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getTooltip());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getTopology());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getTree());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getTroubleshooting());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getUndo());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getView());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getViewAction());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getWarning());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getWindowClose());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getWindowMaximize());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getWindowMinimize());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getWindowRestore());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getWizard3());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getZoomIn());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getZoomOut());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getCollapse());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getExpand());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getRefreshSmaller());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getTreeCollapse());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getTreeExpand());

                dashboard.dom.TopBc.resize();
            },

            setAccordion: function(nocAccordion) {
                this.ACCORDION = nocAccordion;
            }
        });

        return TopologyView;
    });