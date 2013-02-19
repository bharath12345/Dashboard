define(["dojo/_base/declare", "dojo/i18n", "dojo/store/Memory", "dijit/form/ComboBox",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, Memory, DojoComboBox, Logger, Utility, CONSTANTS, i18nString) {

        var ComboBox = declare(CONSTANTS.CLASSNAME.COMBOBOX, null, {
            renderComboBox: function(attribData, attribute, values) {
                var node = dojo.create("div");
                dojo.byId(attribute).appendChild(node);

                var comboBoxStore = new Memory();
                for(var i=0;i<values.length;i++) {
                    var datum = {name:values[i], id:values[i]};
                    comboBoxStore.put(datum);
                }

                var comboBox = new DojoComboBox({
                    id: attribute + ComboBox.POSTFIX,
                    name: attribute,
                    value: "California",
                    store: comboBoxStore,
                    searchAttr: "name"
                }, node);
            }
        });

        ComboBox.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.COMBOBOX));
        ComboBox.POSTFIX = "_combobox";

        return ComboBox;
    });