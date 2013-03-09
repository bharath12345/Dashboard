define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard",
    "dashboard/abstract/AbstractView", "dashboard/WindowManager", "dashboard/main/loader"],

    function (declare, i18n, i18nString, AbstractView, WindowManager, loader) {

        var NocView = declare("dashboard.noc.NocView", AbstractView, {

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.CpTopCenter.domNode);
            }
        });

        NocView.launchNewWindowConfigPane = function(id, name, type) {
            // launch the child window
            var wm = new WindowManager();
            wm.getNewWindow(id, name, type, pageTypes.NOC);
        };

        return NocView;
    });