define(["dojo/_base/declare", "dojo/i18n", "dojo/store/Memory", "dijit/form/ComboBox",
    "dashboard/logger/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!dashboard/config/nls/config"],

    function (declare, i18n, Memory, DojoComboBox, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString) {

        dashboard.classnames.ConfigWidgetComboBox = "dashboard.config.widgets.ConfigWidgetComboBox";

        var ConfigWidgetComboBox = declare(dashboard.classnames.ConfigWidgetComboBox, null, {

            renderComboBox: function(userData, attribute, values) {

                var comboBoxStore = new Memory();
                for(var i=0;i<values.length;i++) {
                    var datum = {name:values[i], id:values[i]};
                    comboBoxStore.put(datum);
                }

                var comboBoxList = [];

                var type = CONFIGCONSTANTS.DIVTYPE.USER;
                comboBoxList[CONFIGCONSTANTS.DIVTYPE.USER] = this.getComboBox(attribute, type, comboBoxStore, userData);

                type = CONFIGCONSTANTS.DIVTYPE.ADMIN;
                comboBoxList[CONFIGCONSTANTS.DIVTYPE.ADMIN] = this.getComboBox(attribute, type, comboBoxStore, "");

                type = CONFIGCONSTANTS.DIVTYPE.FACTORY;
                comboBoxList[CONFIGCONSTANTS.DIVTYPE.FACTORY] = this.getComboBox(attribute, type, comboBoxStore, "");

                return comboBoxList;
            },

            getComboBox: function(attribute, type, comboBoxStore, selectedValue) {
                var node = ConfigUtility.getConfigDiv(attribute, type);
                var comboBox = new DojoComboBox({
                    id: attribute + type + ConfigWidgetComboBox.POSTFIX,
                    name: attribute,
                    value: selectedValue,
                    store: comboBoxStore,
                    searchAttr: "name"
                }, node);
                if(type != CONFIGCONSTANTS.DIVTYPE.USER) {
                    comboBox.set('disabled','disabled');
                }
                return comboBox;
            }
        });

        ConfigWidgetComboBox.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigWidgetComboBox));
        ConfigWidgetComboBox.POSTFIX = "_combobox";

        return ConfigWidgetComboBox;
    });