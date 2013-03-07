define(["dojo/_base/declare", "dojo/i18n", "dijit/form/NumberSpinner",
    "noc/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!dashboard/config/nls/config"],

    function (declare, i18n, DojoNumberSpinner, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString) {

        var NumberSpinner = declare(CONFIGCONSTANTS.CLASSNAME.NUMBERSPINNER, null, {

            renderNumberSpinner: function(userData, attribute, min, max, delta) {
                console.log("creating number spinner in attrib = " + attribute);

                var numberSpinnerList = [];

                var type = CONFIGCONSTANTS.DIVTYPE.USER;
                numberSpinnerList[CONFIGCONSTANTS.DIVTYPE.USER] = this.getNumberSpinner(attribute, type, min, max, delta, userData);

                type = CONFIGCONSTANTS.DIVTYPE.ADMIN;
                numberSpinnerList[CONFIGCONSTANTS.DIVTYPE.ADMIN] = this.getNumberSpinner(attribute, type, min, max, delta, "");

                type = CONFIGCONSTANTS.DIVTYPE.FACTORY;
                numberSpinnerList[CONFIGCONSTANTS.DIVTYPE.FACTORY] = this.getNumberSpinner(attribute, type, min, max, delta, "");

                return numberSpinnerList;
            },

            getNumberSpinner: function(attribute, type, min, max, delta, data) {
                var node = ConfigUtility.getConfigDiv(attribute, type);
                var numberSpinner = new DojoNumberSpinner({
                    id: attribute + type + NumberSpinner.POSTFIX,
                    smallDelta: delta,
                    value: data,
                    constraints: { min:min, max:max, places:0 }
                }, node);
                if(type != CONFIGCONSTANTS.DIVTYPE.USER) {
                    numberSpinner.set('disabled','disabled');
                }
                return numberSpinner;
            }
        });

        NumberSpinner.LOG = Logger.addTimer(new Logger(CONFIGCONSTANTS.CLASSNAME.NUMBERSPINNER));
        NumberSpinner.POSTFIX = "_numberspinner";

        return NumberSpinner;
    });