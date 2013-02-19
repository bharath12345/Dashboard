define(["dojo/_base/declare", "dojo/i18n", "dijit/form/RadioButton", "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, DojoRadioButton, Logger, Utility, CONSTANTS, i18nString) {

        var RadioButton = declare(CONSTANTS.CLASSNAME.RADIOBUTTON, null, {

            renderRadioButton: function(attribData, attribute, values) {
                for(var i=0;i<values.length;i++) {
                    var divToAdd = dojo.byId(attribute+"_user");
                    divToAdd.style.margin=1;
                    //divToAdd.style.paddingLeft=1;

                    var node = dojo.create("div");
                    divToAdd.appendChild(node);

                    var checked = false;
                    if(i==0) {checked = true;}

                    var radioButton = new DojoRadioButton({
                        id: attribute + RadioButton.POSTFIX + i,
                        checked: checked,
                        name: attribute,
                        value: values[i]
                    }, node);

                    return radioButton;
                }
            }
        });

        RadioButton.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.RADIOBUTTON));
        RadioButton.POSTFIX = "_radiobutton_";

        return RadioButton;
    });