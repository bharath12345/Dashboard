define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/custom/nls/custom",
    "dojo/on", "dojo/_base/lang",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager", "dashboard/helper/ButtonHelper",
    "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, on, lang, AbstractView, WindowManager, ButtonHelper, Scheduler) {

        dashboard.classnames.CustomView = "dashboard.custom.CustomView";

        var CustomView = declare("dashboard.custom.CustomView", AbstractView, {

            newWindow: false,

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            // the method is called only in a NEW Window. Never in the 'central' dashboard
            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.dom.CpTopCenter.domNode, false, dashboard.pageTypes.CUSTOM);
            },

            refreshView: function() {
                var customAccordion = CustomView.ACCORDION;
                customAccordion.createView(CustomView.ID, CustomView.NAME, CustomView.TYPE, this.newWindow);
            },

            loadMenu: function(id, name, type) {
                CustomView.ID = id;
                CustomView.NAME = name;
                CustomView.TYPE = type;

                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].destroyDescendants(false);
            },

            setAccordion: function(customAccordion) {
                CustomView.ACCORDION = customAccordion;
            }
        });

        CustomView.ACCORDION = null;

        return CustomView;
    });