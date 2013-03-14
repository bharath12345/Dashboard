define(["../dashboard/src/main/js/dojo/_base/declare", "dojo/i18n", "dashboard/logger/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!dashboard/config/nls/config",
    "dashboard/config/widgets/ConfigWidgetNumberSpinner", "dashboard/config/widgets/ConfigWidgetComboBox", "dashboard/config/widgets/ConfigWidgetRadioButton" ],

    function (declare, i18n, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString, ConfigWidgetNumberSpinner, ConfigWidgetComboBox, ConfigWidgetRadioButton) {

        dashboard.classnames.ConfigViewGlobal = "dashboard.config.views.ConfigViewGlobal";

        var ConfigViewGlobal = declare(dashboard.classnames.ConfigViewGlobal, null, {
            getAttrib: function(data) {
                return null;
            },

            getAttribIgnoreList: function() {
                var ignore = [];
                return ignore;
            },

            renderAttributes: function(data) {

            },

            saveValues: function() {

            }
        });

        ConfigViewGlobal.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigViewGlobal));

        return ConfigViewGlobal;
    });