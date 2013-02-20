define(["dojo/_base/declare", "dojo/i18n", "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config",
    "config/widgets/NumberSpinner", "config/widgets/ComboBox", "config/widgets/RadioButton" ],

    function (declare, i18n, Logger, Utility, CONSTANTS, i18nString, NumberSpinner, ComboBox, RadioButton) {

        var IncidentGrid = declare(CONSTANTS.CLASSNAME.INCIDENTGRID, null, {
            renderAttributes: function(data) {
                var gridConfig = data.age;
                for(var attribute in gridConfig) {
                    var adminSetting = gridConfig[attribute].adminSetting;
                    var factoryModified = gridConfig[attribute].factoryModified;
                    var factoryReadOnly = gridConfig[attribute].factoryReadOnly;
                    var userSetting = gridConfig[attribute].userSetting;
                    console.log("adminSetting = " + adminSetting + " factoryModified = " + factoryModified + " factoryReadOnly = " + factoryReadOnly + " userSetting = " + userSetting);
                }

                var applicationRefreshTime = "applicationRefreshTime";
                var ns = new NumberSpinner();
                IncidentGrid.APPLICATIONREFRESHTIME = ns.renderNumberSpinner(gridConfig[applicationRefreshTime].userSetting, applicationRefreshTime, 10, 60, 1);

                var fontName = "fontName";
                var values = ["Arial", "Verdana", "Times New Roman"];
                var cb = new ComboBox();
                IncidentGrid.FONTNAME = cb.renderComboBox(gridConfig[fontName], fontName, values);

                var fontSize = "fontSize";
                var nss = new NumberSpinner();
                IncidentGrid.FONTSIZE = nss.renderNumberSpinner(gridConfig[fontSize], fontSize, 6, 20, 1);

                var showAllGreenApplications = "showAllGreenApplications";
                values = ["True", "False"];
                var rb = new RadioButton();
                IncidentGrid.SHOWALLGREEN = rb.renderRadioButton(gridConfig[showAllGreenApplications],showAllGreenApplications, values);
            },

            saveValues: function() {
                var refreshTime = IncidentGrid.APPLICATIONREFRESHTIME[CONSTANTS.DIVTYPE.USER].get('value');
                var fontName = IncidentGrid.FONTNAME[CONSTANTS.DIVTYPE.USER].get('value');
                var fontSize = IncidentGrid.FONTSIZE[CONSTANTS.DIVTYPE.USER].get('value');
                var showGreenApp = null;//IncidentGrid.SHOWALLGREEN[CONSTANTS.DIVTYPE.USER].get('value');
                console.log("refreshTime = " + refreshTime + " fontName = " + fontName + " fontSize = " + fontSize + " showGreen = " + showGreenApp);
            }
        });

        IncidentGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.INCIDENTGRID));

        IncidentGrid.APPLICATIONREFRESHTIME = null;
        IncidentGrid.FONTNAME = null;
        IncidentGrid.FONTSIZE = null;
        IncidentGrid.SHOWALLGREEN = null;

        return IncidentGrid;
    });