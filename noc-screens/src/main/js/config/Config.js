define(["dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer",
    "dijit/layout/AccordionContainer",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config", "config/ConfigPageElements", "config/ConfigAccordion"],

    function (declare, i18n, ContentPane, BorderContainer, AccordionContainer, Logger, Utility,
              CONSTANTS, i18nString, ConfigPageElements, ConfigAccordion) {

        var Config = declare(CONSTANTS.CLASSNAME.CONFIG, null, {
            // create an Accordion with multiple links like in NNMi

            load: function() {
                var cpe = new ConfigPageElements();
                cpe.createPageElements();

                var ca = new ConfigAccordion();
                ca.loadAccordion();


            }

        });

        Config.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.CONFIG));

        return Config;
    });