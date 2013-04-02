define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/analytics/nls/analytics",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager"],

    function (declare, i18n, i18nString, AbstractView, WindowManager) {

        dashboard.classnames.AnalyticsView = "dashboard.analytics.AnalyticsView";

        var AnalyticsView = declare(dashboard.classnames.AnalyticsView, AbstractView, {

            newWindow: false,

            constructor: function(newWindow) {
                this.newWindow = newWindow;
                if(this.newWindow) {
                    this.pageType = dashboard.pageTypes.ANALYTICS;
                } else {
                    this.pageType = dashboard.pageTypes.dashboard;
                }
            },

            // the method is called only in a NEW Window. Never in the 'central' dashboard
            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.dom.CpTopCenter.domNode, dashboard.pageTypes.ANALYTICS);
            },

            setAccordion: function(analyticsAccordion) {
                this.ACCORDION = analyticsAccordion;
            },

            loadMenu: function(enumId, id, name, type) {
                this.ENUMID = enumId;
                this.UUID = id;
                this.NAME = name;
                this.TYPE = type;
            },

            launchNewWindow: function() {
                // launch the child window
                var wm = new WindowManager();
                var queryParams = [];
                queryParams.push(dashboard.pageTypes.ANALYTICS);
                queryParams.push(this.UUID);
                queryParams.push(this.ENUMID);
                queryParams.push(this.NAME);
                queryParams.push(this.TYPE);
                wm.getNewWindow(queryParams);
            }
        });

        return AnalyticsView;
    });