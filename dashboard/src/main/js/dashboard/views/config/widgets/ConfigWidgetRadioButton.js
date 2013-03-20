define(["dojo/_base/declare", "dojo/i18n", "dijit/form/RadioButton", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigUtility", "dojo/i18n!dashboard/views/config/nls/config"],

    function (declare, i18n, DojoRadioButton, Logger, ConfigUtility, i18nString) {

        dashboard.classnames.ConfigWidgetRadioButton = "dashboard.config.widgets.ConfigWidgetRadioButton";

        var ConfigWidgetRadioButton = declare(dashboard.classnames.ConfigWidgetRadioButton, null, {

            renderRadioButton: function(attribData, attribute, values) {

                var radioButtonList = [];
                this.makeGroup(attribute, ConfigUtility.USER, values, radioButtonList);
                this.makeGroup(attribute, ConfigUtility.ADMIN, values, radioButtonList);
                this.makeGroup(attribute, ConfigUtility.FACTORY, values, radioButtonList);
                return radioButtonList;
            },

            makeGroup: function(attribute, type, values, radioButtonList) {
                var node = ConfigUtility.getConfigDiv(attribute, type);
                radioButtonList[type] = [];
                for(var i=0;i<values.length;i++) {
                    var innerDiv = dojo.create("div");
                    innerDiv.style = "width: 100%; height: 100%;";
                    node.appendChild(innerDiv);

                    var checked = false;
                    if(i==0) {checked = true;}

                    var radioButton = new DojoRadioButton({
                        id: attribute + type + ConfigWidgetRadioButton.POSTFIX + values[i],
                        checked: checked,
                        name: attribute,
                        value: values[i]
                    }, innerDiv);

                    if(type != ConfigUtility.USER) {
                        radioButton.set('disabled','disabled');
                    }
                    radioButtonList[type][values[i]] = radioButton;
                }
            }
        });

        ConfigWidgetRadioButton.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigWidgetRadioButton));
        ConfigWidgetRadioButton.POSTFIX = "_radiobutton_";

        return ConfigWidgetRadioButton;
    });