define(["dojo/_base/declare", "dojo/i18n", "dijit/form/NumberSpinner",
    "dashboard/logger/Logger",
    "dashboard/views/config/ConfigUtility", "dojo/i18n!dashboard/views/config/nls/config"],

    function (declare, i18n, DojoNumberSpinner, Logger, ConfigUtility, i18nString) {

        dashboard.classnames.ConfigWidgetNumberSpinner = "dashboard.config.widgets.ConfigWidgetNumberSpinner";

        var ConfigWidgetNumberSpinner = declare(dashboard.classnames.ConfigWidgetNumberSpinner, null, {

            renderNumberSpinner: function(userData, attribute, min, max, delta) {
                console.log("creating number spinner in attrib = " + attribute);

                var numberSpinnerList = [];

                var type = ConfigUtility.USER;
                numberSpinnerList[ConfigUtility.USER] = this.getNumberSpinner(attribute, type, min, max, delta, userData);

                type = ConfigUtility.ADMIN;
                numberSpinnerList[ConfigUtility.ADMIN] = this.getNumberSpinner(attribute, type, min, max, delta, "");

                type = ConfigUtility.FACTORY;
                numberSpinnerList[ConfigUtility.FACTORY] = this.getNumberSpinner(attribute, type, min, max, delta, "");

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
                if(type != ConfigUtility.USER) {
                    numberSpinner.set('disabled','disabled');
                }
                return numberSpinner;
            }
        });

        ConfigWidgetNumberSpinner.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigWidgetNumberSpinner));
        ConfigWidgetNumberSpinner.POSTFIX = "_numberspinner";

        return ConfigWidgetNumberSpinner;
    });