define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config",
    "dashboard/abstract/AbstractView", "dashboard/helper/WindowManager", "dashboard/main/loader"],

    function (declare, i18n, i18nString, AbstractView, WindowManager, loader) {

        dashboard.classnames.ConfigView = "dashboard.config.ConfigView";

        var ConfigView = declare(dashboard.classnames.ConfigView, AbstractView, {

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.dom.CpTopCenter.domNode, false);
            },

            setAccordion: function(configAccordion) {
                ConfigView.ACCORDION = configAccordion;
            }
        });

        ConfigView.launchNewWindowConfigPane = function(id, name, type) {
            // launch the child window
            var wm = new WindowManager();
            wm.getNewWindow(id, name, type, pageTypes.CONFIG);
        };

        ConfigView.ACCORDION = null;

        return ConfigView;
    });