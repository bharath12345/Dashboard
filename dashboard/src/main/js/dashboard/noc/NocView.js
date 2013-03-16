define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc",
    "dojo/on", "dojo/_base/lang",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager", "dashboard/main/loader", "dashboard/helper/ButtonHelper",
    "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, on, lang, AbstractView, WindowManager, loader, ButtonHelper, Scheduler) {

        dashboard.classnames.NocView = "dashboard.noc.NocView";

        var NocView = declare("dashboard.noc.NocView", AbstractView, {

            newWindow: false,

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.dom.CpTopCenter.domNode, true);
            },

            refreshView: function() {
                var nocAccordion = NocView.ACCORDION;
                nocAccordion.createView(NocView.ID, NocView.NAME, NocView.TYPE, this.newWindow);
            },

            loadMenu: function(id, name, type) {
                NocView.ID = id;
                NocView.NAME = name;
                NocView.TYPE = type;

                dashboard.dom.toolbar.destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getRefresh();
                on(button, "click", lang.hitch(this, "refreshView"));
                dashboard.dom.toolbar.addChild(button);

                button = buttonHelper.getViewNewWindow();
                on(button, "click", function() {
                    NocView.launchNewWindowConfigPane();
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

                dashboard.dom.toolbar.addChild(buttonHelper.getActive());
                dashboard.dom.toolbar.addChild(buttonHelper.getArrowDown());
                dashboard.dom.toolbar.addChild(buttonHelper.getArrowLeft());
                dashboard.dom.toolbar.addChild(buttonHelper.getArrowRight());
                dashboard.dom.toolbar.addChild(buttonHelper.getArrowUp());
                dashboard.dom.toolbar.addChild(buttonHelper.getBackToPreviousNodeGroupMap());
                dashboard.dom.toolbar.addChild(buttonHelper.getClose());
                dashboard.dom.toolbar.addChild(buttonHelper.getConfiguration());
                dashboard.dom.toolbar.addChild(buttonHelper.getDelete());
                dashboard.dom.toolbar.addChild(buttonHelper.getEdit());
                dashboard.dom.toolbar.addChild(buttonHelper.getExtension());
                dashboard.dom.toolbar.addChild(buttonHelper.getFastForwardToEnd());
                dashboard.dom.toolbar.addChild(buttonHelper.getFilterUndo());
                dashboard.dom.toolbar.addChild(buttonHelper.getFind());
                dashboard.dom.toolbar.addChild(buttonHelper.getFirst());
                dashboard.dom.toolbar.addChild(buttonHelper.getFitToContent());
                dashboard.dom.toolbar.addChild(buttonHelper.getGo());


                dashboard.dom.bottomMenuPane.resize();
                dashboard.dom.TopBc.resize();
            },

            setAccordion: function(nocAccordion) {
                NocView.ACCORDION = nocAccordion;
            }
        });

        NocView.launchNewWindowConfigPane = function(id, name, type) {
            // launch the child window
            var wm = new WindowManager();
            wm.getNewWindow(NocView.ID, NocView.NAME, NocView.TYPE, pageTypes.NOC);
        };

        NocView.ACCORDION = null;

        return NocView;
    });