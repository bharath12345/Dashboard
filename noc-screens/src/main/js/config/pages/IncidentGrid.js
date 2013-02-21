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
                if(gridConfig[applicationRefreshTime] != null) {
                    var ns = new NumberSpinner();
                    IncidentGrid.APPLICATIONREFRESHTIME = ns.renderNumberSpinner(gridConfig[applicationRefreshTime].userSetting, applicationRefreshTime, 10, 60, 1);
                }

                var fontName = "fontName";
                if(gridConfig[fontName] != null) {
                    var values = ["Arial", "Verdana", "Times New Roman"];
                    var cb = new ComboBox();
                    IncidentGrid.FONTNAME = cb.renderComboBox(gridConfig[fontName], fontName, values);
                }

                var fontSize = "fontSize";
                if(gridConfig[fontSize] != null) {
                    var nss = new NumberSpinner();
                    IncidentGrid.FONTSIZE = nss.renderNumberSpinner(gridConfig[fontSize], fontSize, 6, 20, 1);
                }

                var showAllGreenApplications = "showAllGreenApplications";
                if(gridConfig[showAllGreenApplications] != null) {
                    values = ["True", "False"];
                    var rb = new RadioButton();
                    IncidentGrid.SHOWALLGREEN = rb.renderRadioButton(gridConfig[showAllGreenApplications],showAllGreenApplications, values);
                }
            },

            saveValues: function() {
                var refreshTime, fontName, fontSize, showGreenApp;
                if(IncidentGrid.APPLICATIONREFRESHTIME != null) {
                    refreshTime = IncidentGrid.APPLICATIONREFRESHTIME[CONSTANTS.DIVTYPE.USER].get('value');
                }
                if(IncidentGrid.FONTNAME != null) {
                    fontName = IncidentGrid.FONTNAME[CONSTANTS.DIVTYPE.USER].get('value');
                }
                if(IncidentGrid.FONTSIZE != null) {
                    fontSize = IncidentGrid.FONTSIZE[CONSTANTS.DIVTYPE.USER].get('value');
                }
                if(IncidentGrid.SHOWALLGREEN != null) {
                    showGreenApp = null;//IncidentGrid.SHOWALLGREEN[CONSTANTS.DIVTYPE.USER].get('value');
                }

                var saveData = {
                    type: CONSTANTS.TYPE.SAVE,
                    saveType: CONSTANTS.SAVE.INCIDENTGRID,
                    refreshTime:refreshTime,
                    fontName:fontName,
                    fontSize:fontSize,
                    showGreenApp:showGreenApp
                };
                Utility.xhrPostCentral(CONSTANTS.ACTION.ALERTGRIDSAVE, saveData);
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