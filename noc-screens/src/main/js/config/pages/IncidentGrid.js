define(["dojo/_base/declare", "dojo/i18n", "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, Logger, Utility, CONSTANTS, i18nString) {

        var IncidentGrid = declare(CONSTANTS.CLASSNAME.INCIDENTGRID, null, {
            renderAttributes: function(data) {
                for(var attribute in data.agcVO) {
                    var type = data.agcVO[attribute].type;
                    var value = data.agcVO[attribute].value;
                    console.log("type = " + type + " value = " + value + " attribute = " + attribute);

                    switch(attribute) {
                        case "applicationRefreshTime":
                            require([CONSTANTS.WIDGETS.NUMBERSPINNER], function (NumberSpinner) {
                                new NumberSpinner().renderNumberSpinner(data.agcVO[attribute], attribute, 10, 60, 1);
                            });
                            break;

                        case "fontName":
                            require([CONSTANTS.WIDGETS.COMBOBOX], function (ComboBox) {
                                var values = ["Arial", "Verdana", "Times New Roman"];
                                new ComboBox().renderComboBox(data.agcVO[attribute], attribute, values);
                            });
                            break;

                        case "fontSize":
                            require([CONSTANTS.WIDGETS.NUMBERSPINNER], function (NumberSpinner) {
                                new NumberSpinner().renderNumberSpinner(data.agcVO[attribute], attribute, 6, 20, 1);
                            });
                            break;

                        case "showAllGreenApplications":
                            require([CONSTANTS.WIDGETS.RADIOBUTTON], function (RadioButton) {
                                var values = ["True", "False"];
                                new RadioButton().renderRadioButton(data.agcVO[attribute],attribute, values);
                            });
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