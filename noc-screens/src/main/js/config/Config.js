define(["dojo/_base/declare", "dojo/i18n", "dojox/widget/Standby", "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config", "config/ConfigPageElements", "config/ConfigAccordion"],

    function (declare, i18n, Standby, Logger, Utility,
              CONSTANTS, i18nString, ConfigPageElements, ConfigAccordion) {

        var Config = declare(CONSTANTS.CLASSNAME.CONFIG, null, {
            // create an Accordion with multiple links like in NNMi

            load: function() {

                var cpe = new ConfigPageElements();
                cpe.createPageElements();

                Config.STANDBY = new Standby({target: ConfigPageElements.TopBc.domNode});
                document.body.appendChild(Config.STANDBY.domNode);
                Config.STANDBY.startup();
                Config.STANDBY.show();

                var ca = new ConfigAccordion();
                ca.loadAccordion();

            }

        });

        Config.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.CONFIG));
        Config.STANDBY = null;

        return Config;
    });