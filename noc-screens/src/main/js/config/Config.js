define(["dojo/_base/declare", "dojo/i18n", "noc/Utility", "noc/Logger",
    "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, Utility, Logger, CONSTANTS, i18nString) {

        var Config = declare(CONSTANTS.CLASSNAME.CONFIG, null, {
            // create an Accordion with multiple links like in NNMi

            // There is one Global Config
            // There is one master config for each page
            // User can map each page for each appliation
            // A new Accordion tab gets added for each application page
            // So page level update for each application get applied at that level
            // App level config take highest preference followed by master config for that page type followed by Global Config


        });

        Config.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.CONFIG));

        return Config;
    });