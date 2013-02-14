define(["dojo/_base/declare", "dojo/i18n",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, Logger, Utility, CONSTANTS, i18nString) {

        var ConfigAccordion = declare(CONSTANTS.CLASSNAME.ACCORDION, null, {

            loadAccordion: function() {

            }
        });

        ConfigAccordion.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.ACCORDION));

        return ConfigAccordion;
    });