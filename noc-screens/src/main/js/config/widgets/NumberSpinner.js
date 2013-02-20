define(["dojo/_base/declare", "dojo/i18n", "dijit/form/NumberSpinner",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, DojoNumberSpinner, Logger, Utility, CONSTANTS, i18nString) {

        var NumberSpinner = declare(CONSTANTS.CLASSNAME.NUMBERSPINNER, null, {

            renderNumberSpinner: function(attribData, attribute, min, max, delta) {
                console.log("creating number spinner in attrib = " + attribute);

                var numberSpinnerList = [];

                var type = CONSTANTS.DIVTYPE.USER;
                numberSpinnerList[CONSTANTS.DIVTYPE.USER] = this.getNumberSpinner(attribute, type, min, max, delta);

                type = CONSTANTS.DIVTYPE.ADMIN;
                numberSpinnerList[CONSTANTS.DIVTYPE.ADMIN] = this.getNumberSpinner(attribute, type, min, max, delta);

                type = CONSTANTS.DIVTYPE.FACTORY;
                numberSpinnerList[CONSTANTS.DIVTYPE.FACTORY] = this.getNumberSpinner(attribute, type, min, max, delta);

                return numberSpinnerList;
            },

            getNumberSpinner: function(attribute, type, min, max, delta) {
                var node = Utility.getConfigDiv(attribute, type);
                var numberSpinner = new DojoNumberSpinner({
                    id: attribute + type + NumberSpinner.POSTFIX,
                    smallDelta: delta,
                    constraints: { min:min, max:max, places:0 }
                }, node);
                return numberSpinner;
            }
        });

        NumberSpinner.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.NUMBERSPINNER));
        NumberSpinner.POSTFIX = "_numberspinner";

        return NumberSpinner;
    });