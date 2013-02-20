define(["dojo/_base/declare", "dojo/i18n", "dijit/form/RadioButton", "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, DojoRadioButton, Logger, Utility, CONSTANTS, i18nString) {

        var RadioButton = declare(CONSTANTS.CLASSNAME.RADIOBUTTON, null, {

            renderRadioButton: function(attribData, attribute, values) {

                var radioButtonList = [];
                this.makeGroup(attribute, CONSTANTS.DIVTYPE.USER, values, radioButtonList);
                this.makeGroup(attribute, CONSTANTS.DIVTYPE.ADMIN, values, radioButtonList);
                this.makeGroup(attribute, CONSTANTS.DIVTYPE.FACTORY, values, radioButtonList);

                return radioButtonList;
            },

            makeGroup: function(attribute, type, values, radioButtonList) {
                var node = Utility.getConfigDiv(attribute, type);
                radioButtonList[type] = [];
                for(var i=0;i<values.length;i++) {
                    var checked = false;
                    if(i==0) {checked = true;}

                    var radioButton = new DojoRadioButton({
                        id: attribute + type + RadioButton.POSTFIX + values[i],
                        checked: checked,
                        name: attribute,
                        value: values[i]
                    });
                    radioButtonList[type][values[i]] = radioButton;
                    node.appendChild(radioButton.domNode);
                }
            }
        });

        RadioButton.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.RADIOBUTTON));
        RadioButton.POSTFIX = "_radiobutton_";

        return RadioButton;
    });