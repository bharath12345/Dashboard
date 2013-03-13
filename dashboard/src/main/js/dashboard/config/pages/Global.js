define(["dojo/_base/declare", "dojo/i18n", "dashboard/logger/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!dashboard/config/nls/config",
    "dashboard/config/widgets/NumberSpinner", "dashboard/config/widgets/ComboBox", "dashboard/config/widgets/RadioButton" ],

    function (declare, i18n, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString, NumberSpinner, ComboBox, RadioButton) {

        dashboard.classnames.Global = "dashboard.config.pages.Global";

        var Global = declare(dashboard.classnames.Global, null, {
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

        Global.LOG = Logger.addTimer(new Logger(dashboard.classnames.Global));

        return Global;
    });