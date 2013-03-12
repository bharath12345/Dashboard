define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config",
    "dashboard/abstract/AbstractView", "dashboard/WindowManager", "dashboard/main/loader"],

    function (declare, i18n, i18nString, AbstractView, WindowManager, loader) {

        var ConfigView = declare("dashboard.config.ConfigView", AbstractView, {

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            createDom: function() {
                this.createInnerMenuAndPanes(dashboard.CpTopCenter.domNode);
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