define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc",
    "dojo/on", "dojo/_base/lang",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager", "dashboard/main/loader", "dashboard/helper/ButtonHelper",
    "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, on, lang, AbstractView, WindowManager, loader, ButtonHelper, Scheduler) {

        var NocView = declare("dashboard.noc.NocView", AbstractView, {

            newWindow: false,

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.CpTopCenter.domNode);
            },

            refreshView: function() {
                var nocAccordion = NocView.ACCORDION;
                nocAccordion.createView(NocView.ID, NocView.NAME, NocView.TYPE, this.newWindow);
            },

            loadMenu: function(id, name, type) {
                NocView.ID = id;
                NocView.NAME = name;
                NocView.TYPE = type;

                dashboard.toolbar.destroyDescendants(false);

                var button = ButtonHelper.getRefresh();
                on(button, "click", lang.hitch(this, "refreshView"));
                dashboard.toolbar.addChild(button);

                button = ButtonHelper.getNewWindow();
                on(button, "click", function() {
                    NocView.launchNewWindowConfigPane();
                });
                dashboard.toolbar.addChild(button);

                button = ButtonHelper.getStatusRefresh();
                on(button, "click", function() {
                    Scheduler.startStopRefresh(true);
                });
                dashboard.toolbar.addChild(button);

                button = ButtonHelper.getStopRefresh();
                on(button, "click", function() {
                    Scheduler.startStopRefresh(false);
                });
                dashboard.toolbar.addChild(button);

                dashboard.bottomMenuPane.resize();
                dashboard.TopBc.resize();
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