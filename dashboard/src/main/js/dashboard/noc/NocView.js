define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard",
    "dojo/on", "dojo/_base/lang",
    "dashboard/abstract/AbstractView", "dashboard/WindowManager", "dashboard/main/loader", "dashboard/helper/ButtonHelper"],

    function (declare, i18n, i18nString, on, lang, AbstractView, WindowManager, loader, ButtonHelper) {

        var NocView = declare("dashboard.noc.NocView", AbstractView, {

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.CpTopCenter.domNode);
            },

            loadMenu: function(id, name, type) {
                NocView.ID = id;
                NocView.NAME = name;
                NocView.TYPE = type;

                dashboard.toolbar.destroyDescendants(false);

                var button = ButtonHelper.getRefresh();
                on(button, "click", function() {
                });
                dashboard.toolbar.addChild(button);

                button = ButtonHelper.getPopUpWindow();
                on(button, "click", function() {
                    NocView.launchNewWindowConfigPane();
                });
                dashboard.toolbar.addChild(button);
            }
        });

        NocView.launchNewWindowConfigPane = function(id, name, type) {
            // launch the child window
            var wm = new WindowManager();
            wm.getNewWindow(NocView.ID, NocView.NAME, NocView.TYPE, pageTypes.NOC);
        };

        return NocView;
    });