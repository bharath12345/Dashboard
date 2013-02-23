define(["dojo/_base/declare", "dojo/i18n", "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config",
    "config/widgets/NumberSpinner", "config/widgets/ComboBox", "config/widgets/RadioButton" ],

    function (declare, i18n, Logger, Utility, CONSTANTS, i18nString, NumberSpinner, ComboBox, RadioButton) {

        var Global = declare(CONSTANTS.CLASSNAME.GLOBAL, null, {
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

        Global.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.GLOBAL));

        return Global;
    });