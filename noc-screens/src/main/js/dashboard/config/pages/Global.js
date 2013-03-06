define(["dojo/_base/declare", "dojo/i18n", "noc/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!dashboard/config/nls/config",
    "dashboard/config/widgets/NumberSpinner", "dashboard/config/widgets/ComboBox", "dashboard/config/widgets/RadioButton" ],

    function (declare, i18n, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString, NumberSpinner, ComboBox, RadioButton) {

        var Global = declare(CONFIGCONSTANTS.CLASSNAME.GLOBAL, null, {
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

        Global.LOG = Logger.addTimer(new Logger(CONFIGCONSTANTS.CLASSNAME.GLOBAL));

        return Global;
    });