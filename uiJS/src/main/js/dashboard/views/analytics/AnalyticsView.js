define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/analytics/nls/analytics",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager", "dashboard/helper/ButtonHelper",
    "dojo/on", "dojo/_base/lang"],

    function (declare, i18n, i18nString, AbstractView, WindowManager, ButtonHelper, on, lang) {

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

                dashboard.dom.Toolbar[this.pageType].destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getRefresh();
                on(button, "click", lang.hitch(this, this.refreshView));
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

                dashboard.dom.TopBc.resize();
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