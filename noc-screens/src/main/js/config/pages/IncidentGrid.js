define(["dojo/_base/declare", "dojo/i18n", "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config",
    "config/widgets/NumberSpinner", "config/widgets/ComboBox", "config/widgets/RadioButton" ],

    function (declare, i18n, Logger, Utility, CONSTANTS, i18nString, NumberSpinner, ComboBox, RadioButton) {

        var IncidentGrid = declare(CONSTANTS.CLASSNAME.INCIDENTGRID, null, {
            renderAttributes: function(data) {

                for(var attribute in data.agcVO) {
                    var type = data.agcVO[attribute].type;
                    var value = data.agcVO[attribute].value;
                    console.log("type = " + type + " value = " + value + " attribute = " + attribute);

                    switch(attribute) {
                        case "applicationRefreshTime":
                            var ns = new NumberSpinner();
                            ns.renderNumberSpinner(data.agcVO[attribute], attribute, 10, 60, 1);
                            break;

                        case "fontName":
                            var values = ["Arial", "Verdana", "Times New Roman"];
                            var cb = new ComboBox();
                            cb.renderComboBox(data.agcVO[attribute], attribute, values);
                            break;

                        case "fontSize":
                            var nss = new NumberSpinner();
                            nss.renderNumberSpinner(data.agcVO[attribute], attribute, 6, 20, 1);
                            break;

                        case "showAllGreenApplications":
                            var values = ["True", "False"];
                            var rb = new RadioButton();
                            rb.renderRadioButton(data.agcVO[attribute],attribute, values);
                            break;

                        default:
                            console.log("unknown attribute = " + attribute);
                            break;
                    }
                }

            }
        });

        IncidentGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.INCIDENTGRID));

        return IncidentGrid;
    });