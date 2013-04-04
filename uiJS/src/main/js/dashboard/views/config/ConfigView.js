define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/config/nls/config",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager"],

    function (declare, i18n, i18nString, AbstractView, WindowManager) {

        dashboard.classnames.ConfigView = "dashboard.config.ConfigView";

        var ConfigView = declare(dashboard.classnames.ConfigView, AbstractView, {

            newWindow: false,

            constructor: function(newWindow) {
                this.newWindow = newWindow;
                if(this.newWindow) {
                    this.pageType = dashboard.pageTypes.CONFIG;
                } else {
                    this.pageType = dashboard.pageTypes.dashboard;
                }
            },

            // the method is called only in a NEW Window. Never in the 'central' dashboard
            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.dom.CpTopCenter.domNode, dashboard.pageTypes.CONFIG);
            },

            setAccordion: function(configAccordion) {
                this.ACCORDION = configAccordion;
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
            },

            launchNewWindow: function() {
                // launch the child window
                var wm = new WindowManager();
                var queryParams = [];
                queryParams.push(dashboard.pageTypes.CONFIG);
                queryParams.push(this.UUID);
                queryParams.push(this.ENUMID);
                queryParams.push(this.NAME);
                queryParams.push(this.TYPE);
                wm.getNewWindow(queryParams);
            }
        });

        return ConfigView;
    });