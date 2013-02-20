define(["dojo/_base/declare", "dojo/i18n", "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config",
    "config/widgets/NumberSpinner", "config/widgets/ComboBox", "config/widgets/RadioButton" ],

    function (declare, i18n, Logger, Utility, CONSTANTS, i18nString, NumberSpinner, ComboBox, RadioButton) {

        var ClusterGrid = declare(CONSTANTS.CLASSNAME.CLUSTERGRID, null, {
            renderAttributes: function(data) {

            }
        });

        ClusterGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.CLUSTERGRID));

        return ClusterGrid;
    });