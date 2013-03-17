define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc",
    "dojo/on", "dojo/_base/lang",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager", "dashboard/helper/ButtonHelper",
    "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, on, lang, AbstractView, WindowManager, ButtonHelper, Scheduler) {

        dashboard.classnames.NocView = "dashboard.noc.NocView";

        var NocView = declare("dashboard.noc.NocView", AbstractView, {

            newWindow: false,

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            // the method is called only in a NEW Window. Never in the 'central' dashboard
            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.dom.CpTopCenter.domNode, true, dashboard.pageTypes.NOC);
            },

            refreshView: function() {
                var nocAccordion = NocView.ACCORDION;
                nocAccordion.createView(NocView.ID, NocView.NAME, NocView.TYPE, this.newWindow);
            },

            launchNewWindow: function() {
                // launch the child window
                var wm = new WindowManager();
                var queryParams = [];
                queryParams.push("noc");
                queryParams.push(NocView.ID);
                queryParams.push(NocView.NAME);
                queryParams.push(NocView.TYPE);
                wm.getNewWindow(queryParams);
            },

            loadMenu: function(id, name, type) {
                NocView.ID = id;
                NocView.NAME = name;
                NocView.TYPE = type;

                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getRefresh();
                on(button, "click", lang.hitch(this, this.refreshView));
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

                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getActive());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getArrowDown());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getArrowLeft());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getArrowRight());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getArrowUp());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getBackToPreviousNodeGroupMap());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getClose());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getConfiguration());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getDelete());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getEdit());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getExtension());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getFastForwardToEnd());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getFilterUndo());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getFind());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getFirst());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getFitToContent());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getGo());

                dashboard.dom.TopBc.resize();
            },

            setAccordion: function(nocAccordion) {
                NocView.ACCORDION = nocAccordion;
            }
        });

        NocView.ACCORDION = null;

        return NocView;
    });