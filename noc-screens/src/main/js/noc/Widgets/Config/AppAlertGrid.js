define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility) {

        var AppAlertGrid = declare(CONSTANTS.CLASSNAME.WIDGETS.CONFIG.APPALERTGRID, null, {

            applyConfig: function(data, input) {

                for(var attribute in data.agcVO) {
                    var value = data.agcVO[attribute].value;

                    switch(attribute) {
                        case "applicationRefreshTime":
                            break;

                        case "fontName":
                            break;

                        case "fontSize":
                            break;

                        case "showAllGreenApplications":
                            break;

                        default:
                            console.log("unknown attribute = " + attribute);
                            break;
                    }
                }
            }
            
        });

        AppAlertGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.CONFIG.APPALERTGRID));

        return AppAlertGrid;
    });