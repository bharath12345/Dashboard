define(["dojo/_base/declare", "dojo/i18n", "dijit/form/NumberSpinner",
    "dashboard/logger/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!dashboard/config/nls/config"],

    function (declare, i18n, DojoNumberSpinner, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString) {

        dashboard.classnames.ConfigWidgetNumberSpinner = "dashboard.config.widgets.ConfigWidgetNumberSpinner";

        var ConfigWidgetNumberSpinner = declare(dashboard.classnames.ConfigWidgetNumberSpinner, null, {

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
                    id: attribute + type + ConfigWidgetNumberSpinner.POSTFIX,
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

        ConfigWidgetNumberSpinner.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigWidgetNumberSpinner));
        ConfigWidgetNumberSpinner.POSTFIX = "_numberspinner";

        return ConfigWidgetNumberSpinner;
    });