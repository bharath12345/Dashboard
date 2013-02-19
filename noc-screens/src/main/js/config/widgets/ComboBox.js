define(["dojo/_base/declare", "dojo/i18n", "dojo/store/Memory", "dijit/form/ComboBox",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, Memory, DojoComboBox, Logger, Utility, CONSTANTS, i18nString) {

        var ComboBox = declare(CONSTANTS.CLASSNAME.COMBOBOX, null, {
            renderComboBox: function(attribData, attribute, values) {
                var divToAdd = dojo.byId(attribute+"_user");
                divToAdd.style.margin=1;
                //divToAdd.style.paddingLeft=1;

                var node = dojo.create("div");
                divToAdd.appendChild(node);

                var comboBoxStore = new Memory();
                for(var i=0;i<values.length;i++) {
                    var datum = {name:values[i], id:values[i]};
                    comboBoxStore.put(datum);
                }

                var comboBox = new DojoComboBox({
                    id: attribute + ComboBox.POSTFIX,
                    name: attribute,
                    value: values[0],
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