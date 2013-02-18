define(["dojo/_base/declare", "dojo/i18n", "dijit/form/NumberSpinner",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, NumberSpinner, Logger, Utility, CONSTANTS, i18nString) {

        var NumberSpinner = declare(CONSTANTS.CLASSNAME.NUMBERSPINNER, null, {

            renderNumberSpinner: function(attribData, attribute, min, max, delta) {
                console.log("creating number spinner in attrib = " + attribute);
                var node = dojo.create("div");
                dojo.byId(attribute).appendChild(node);

                var numberSpinner = new NumberSpinner({
                    id: attribute + NumberSpinner.POSTFIX,
                    smallDelta: delta,
                    constraints: { min:min, max:max, places:0 }
                }, node);
                numberSpinner.startup();
            }
        });

        NumberSpinner.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.NUMBERSPINNER));
        NumberSpinner.POSTFIX = "_numberspinner";

        return NumberSpinner;
    });