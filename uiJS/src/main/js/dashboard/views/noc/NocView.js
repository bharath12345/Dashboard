define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/noc/nls/noc",
    "dojo/on", "dojo/_base/lang",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager", "dashboard/helper/ButtonHelper",
    "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, on, lang, AbstractView, WindowManager, ButtonHelper, Scheduler) {

        dashboard.classnames.NocView = "dashboard.noc.NocView";

        var NocView = declare("dashboard.noc.NocView", AbstractView, {

            newWindow: false,

            constructor: function(newWindow) {
                this.newWindow = newWindow;
                if(this.newWindow) {
                    this.pageType = dashboard.pageTypes.NOC;
                } else {
                    this.pageType = dashboard.pageTypes.dashboard;
                }
            },

            // the method is called only in a NEW Window. Never in the 'central' dashboard
            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.dom.CpTopCenter.domNode, dashboard.pageTypes.NOC);
            },

            refreshView: function() {
                this.ACCORDION.createView(this.ENUMID, this.UUID, this.NAME, this.TYPE, this.newWindow);
            },

            launchNewWindow: function() {
                // launch the child window
                var wm = new WindowManager();
                var queryParams = [];
                queryParams.push(dashboard.pageTypes.NOC);
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
                this.UUID = id;
                this.NAME = name;
                this.TYPE = type;

                /*
                 The destory of the previous toolbar happens ONLY in the view - never in the form or form's inheritance hierarchy
                 */
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

                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getActive());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getArrowDown());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getArrowLeft());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getArrowRight());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getArrowUp());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getBackToPreviousNodeGroupMap());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getClose());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getConfiguration());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getDelete());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getEdit());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getExtension());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getFastForwardToEnd());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getFilterUndo());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getFind());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getFirst());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getFitToContent());
                dashboard.dom.Toolbar[this.pageType].addChild(buttonHelper.getGo());

                dashboard.dom.TopBc.resize();
            },

            setAccordion: function(nocAccordion) {
                this.ACCORDION = nocAccordion;
            }
        });

        return NocView;
    });