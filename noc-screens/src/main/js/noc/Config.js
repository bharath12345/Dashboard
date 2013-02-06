define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants", "noc/Logger"],

    function (declare, i18n, i18nString, Utility, CONSTANTS, Logger) {

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