define(["dojo/_base/declare", "dojo/i18n", "dojo/store/Memory", "dijit/form/ComboBox",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, Memory, DojoComboBox, Logger, Utility, CONSTANTS, i18nString) {

        var ComboBox = declare(CONSTANTS.CLASSNAME.COMBOBOX, null, {
            renderComboBox: function(attribData, attribute, values) {

                var comboBoxStore = new Memory();
                for(var i=0;i<values.length;i++) {
                    var datum = {name:values[i], id:values[i]};
                    comboBoxStore.put(datum);
                }

                var comboBoxList = [];

                var type = CONSTANTS.DIVTYPE.USER;
                comboBoxList[CONSTANTS.DIVTYPE.USER] = this.getComboBox(attribute, type, values[0], comboBoxStore);

                type = CONSTANTS.DIVTYPE.ADMIN;
                comboBoxList[CONSTANTS.DIVTYPE.ADMIN] = this.getComboBox(attribute, type, values[0], comboBoxStore);

                type = CONSTANTS.DIVTYPE.FACTORY;
                comboBoxList[CONSTANTS.DIVTYPE.FACTORY] = this.getComboBox(attribute, type, values[0], comboBoxStore);

                return comboBoxList;
            },

            getComboBox: function(attribute, type, selectedValue, comboBoxStore) {
                var node = Utility.getConfigDiv(attribute, type);
                var comboBox = new DojoComboBox({
                    id: attribute + type + ComboBox.POSTFIX,
                    name: attribute,
                    value: selectedValue,
                    store: comboBoxStore,
                    searchAttr: "name"
                }, node);
                return comboBox;
            }
        });

        ComboBox.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.COMBOBOX));
        ComboBox.POSTFIX = "_combobox";

        return ComboBox;
    });