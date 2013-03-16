define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/custom/nls/custom",
    "dojo/on", "dojo/_base/lang",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager", "dashboard/main/loader", "dashboard/helper/ButtonHelper",
    "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, on, lang, AbstractView, WindowManager, loader, ButtonHelper, Scheduler) {

        dashboard.classnames.CustomView = "dashboard.custom.CustomView";

        var CustomView = declare("dashboard.custom.CustomView", AbstractView, {

            newWindow: false,

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.dom.CpTopCenter.domNode, false);
            },

            refreshView: function() {
                var customAccordion = CustomView.ACCORDION;
                customAccordion.createView(CustomView.ID, CustomView.NAME, CustomView.TYPE, this.newWindow);
            },

            loadMenu: function(id, name, type) {
                CustomView.ID = id;
                CustomView.NAME = name;
                CustomView.TYPE = type;

                dashboard.dom.toolbar.destroyDescendants(false);


            },

            setAccordion: function(customAccordion) {
                CustomView.ACCORDION = customAccordion;
            }
        });

        CustomView.launchNewWindowConfigPane = function(id, name, type) {
            // launch the child window
            var wm = new WindowManager();
            wm.getNewWindow(CustomView.ID, CustomView.NAME, CustomView.TYPE, pageTypes.CUSTOM);
        };

        CustomView.ACCORDION = null;

        return CustomView;
    });