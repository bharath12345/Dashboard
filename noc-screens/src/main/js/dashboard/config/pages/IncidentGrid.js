define(["dojo/_base/declare", "dojo/i18n", "noc/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!config/nls/config",
    "dashboard/config/widgets/NumberSpinner", "dashboard/config/widgets/ComboBox", "dashboard/config/widgets/RadioButton", "dashboard/config/widgets/CheckedMultiSelect" ],

    function (declare, i18n, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString, NumberSpinner, ComboBox, RadioButton, CheckedMultiSelect) {

        var IncidentGrid = declare(CONFIGCONSTANTS.CLASSNAME.INCIDENTGRID, null, {
            getAttrib: function(data) {
                return data.age;
            },

            getAttribIgnoreList: function() {
                var ignore = [];
                ignore["allUserApplications"] = "allUserApplications";
                return ignore;
            },

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
                    var values = ["Arial", "Verdana", "Times New Roman", "Helvetica"];
                    var cb = new ComboBox();
                    IncidentGrid.FONTNAME = cb.renderComboBox(gridConfig[fontName].userSetting, fontName, values);
                }

                var fontSize = "fontSize";
                if(gridConfig[fontSize] != null) {
                    var nss = new NumberSpinner();
                    IncidentGrid.FONTSIZE = nss.renderNumberSpinner(gridConfig[fontSize].userSetting, fontSize, 6, 50, 1);
                }

                var showAllGreenApplications = "showAllGreenApplications";
                if(gridConfig[showAllGreenApplications] != null) {
                    values = ["true", "false"];
                    //var rb = new RadioButton();
                    //IncidentGrid.SHOWALLGREEN = rb.renderRadioButton(gridConfig[showAllGreenApplications],showAllGreenApplications, values);
                    var cb = new ComboBox();
                    IncidentGrid.SHOWALLGREEN = cb.renderComboBox(gridConfig[showAllGreenApplications].userSetting, showAllGreenApplications, values);
                }

                var applicationNames = "applicationNames";
                if(gridConfig[applicationNames] != null) {
                    var values = gridConfig.allUserApplications;
                    var cb = new CheckedMultiSelect();
                    IncidentGrid.APPLICATIONS = cb.renderCheckedMultiSelect(gridConfig[applicationNames].userSetting, applicationNames, values);
                }

            },

            saveValues: function() {
                var refreshTime, fontName, fontSize, showGreenApp, applications = [];
                if(IncidentGrid.APPLICATIONREFRESHTIME != null) {
                    refreshTime = IncidentGrid.APPLICATIONREFRESHTIME[CONFIGCONSTANTS.DIVTYPE.USER].get('value');
                }
                if(IncidentGrid.FONTNAME != null) {
                    fontName = IncidentGrid.FONTNAME[CONFIGCONSTANTS.DIVTYPE.USER].domNode.childNodes[2].childNodes[0].value;
                }
                if(IncidentGrid.FONTSIZE != null) {
                    fontSize = IncidentGrid.FONTSIZE[CONFIGCONSTANTS.DIVTYPE.USER].get('value');
                }
                if(IncidentGrid.SHOWALLGREEN != null) {
                    showGreenApp = IncidentGrid.SHOWALLGREEN[CONFIGCONSTANTS.DIVTYPE.USER].domNode.childNodes[2].childNodes[0].value;;
                }
                var applicationNames = "applicationNames";
                if(IncidentGrid.APPLICATIONS != null) {
                    var rhsCMS = CheckedMultiSelect.checkedMSList[applicationNames + CONFIGCONSTANTS.DIVTYPE.USER][1];
                    var msRhsOptions = rhsCMS.getOptions();
                    for (var j = 0; j < msRhsOptions.length; j++) {
                        applications[j] = msRhsOptions[j].value;
                    }
                }

                var saveData = {
                    type: CONFIGCONSTANTS.TYPE.SAVE,
                    saveType: CONFIGCONSTANTS.SAVE.INCIDENTGRID,
                    refreshTime:refreshTime,
                    fontName:fontName,
                    fontSize:fontSize,
                    showGreenApp:showGreenApp,
                    applications:applications
                };
                ConfigUtility.xhrPostCentral(CONFIGCONSTANTS.ACTION.ALERTGRIDSAVE, saveData);
                console.log("refreshTime = " + refreshTime + " fontName = " + fontName + " fontSize = " + fontSize + " showGreen = " + showGreenApp);
            }
        });

        IncidentGrid.LOG = Logger.addTimer(new Logger(CONFIGCONSTANTS.CLASSNAME.INCIDENTGRID));

        IncidentGrid.APPLICATIONREFRESHTIME = null;
        IncidentGrid.FONTNAME = null;
        IncidentGrid.FONTSIZE = null;
        IncidentGrid.SHOWALLGREEN = null;
        IncidentGrid.APPLICATIONS = null;

        return IncidentGrid;
    });