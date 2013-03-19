define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "dashboard/logger/Logger",
    "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper",
    "dashboard/config/ConfigUtility", "dashboard/config/widgets/ConfigWidgetNumberSpinner",
    "dashboard/config/widgets/ConfigWidgetComboBox", "dashboard/config/widgets/ConfigWidgetRadioButton", "dashboard/config/widgets/ConfigWidgetCheckedMultiSelect" ],

    function (declare, i18n, i18nString, Logger, xhr, lang, Helper,
              ConfigUtility, ConfigWidgetNumberSpinner, ConfigWidgetComboBox, ConfigWidgetRadioButton, ConfigWidgetCheckedMultiSelect) {

        dashboard.classnames.ConfigViewIncidentGrid = "dashboard.config.views.ConfigViewIncidentGrid";

        var ConfigViewIncidentGrid = declare(dashboard.classnames.ConfigViewIncidentGrid, null, {

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
                    var ns = new ConfigWidgetNumberSpinner();
                    ConfigViewIncidentGrid.APPLICATIONREFRESHTIME = ns.renderNumberSpinner(gridConfig[applicationRefreshTime].userSetting, applicationRefreshTime, 10, 60, 1);
                }

                var fontName = "fontName";
                if(gridConfig[fontName] != null) {
                    var values = ["Arial", "Verdana", "Times New Roman", "Helvetica"];
                    var cb = new ConfigWidgetComboBox();
                    ConfigViewIncidentGrid.FONTNAME = cb.renderComboBox(gridConfig[fontName].userSetting, fontName, values);
                }

                var fontSize = "fontSize";
                if(gridConfig[fontSize] != null) {
                    var nss = new ConfigWidgetNumberSpinner();
                    ConfigViewIncidentGrid.FONTSIZE = nss.renderNumberSpinner(gridConfig[fontSize].userSetting, fontSize, 6, 50, 1);
                }

                var showAllGreenApplications = "showAllGreenApplications";
                if(gridConfig[showAllGreenApplications] != null) {
                    values = ["true", "false"];
                    //var rb = new ConfigWidgetRadioButton();
                    //ConfigViewIncidentGrid.SHOWALLGREEN = rb.renderRadioButton(gridConfig[showAllGreenApplications],showAllGreenApplications, values);
                    var cb = new ConfigWidgetComboBox();
                    ConfigViewIncidentGrid.SHOWALLGREEN = cb.renderComboBox(gridConfig[showAllGreenApplications].userSetting, showAllGreenApplications, values);
                }

                var applicationNames = "applicationNames";
                if(gridConfig[applicationNames] != null) {
                    var values = gridConfig.allUserApplications;
                    var cb = new ConfigWidgetCheckedMultiSelect();
                    ConfigViewIncidentGrid.APPLICATIONS = cb.renderCheckedMultiSelect(gridConfig[applicationNames].userSetting, applicationNames, values);
                }

            },

            saveValues: function() {
                var refreshTime, fontName, fontSize, showGreenApp, applications = [];
                if(ConfigViewIncidentGrid.APPLICATIONREFRESHTIME != null) {
                    refreshTime = ConfigViewIncidentGrid.APPLICATIONREFRESHTIME[ConfigUtility.USER].get('value');
                }
                if(ConfigViewIncidentGrid.FONTNAME != null) {
                    fontName = ConfigViewIncidentGrid.FONTNAME[ConfigUtility.USER].domNode.childNodes[2].childNodes[0].value;
                }
                if(ConfigViewIncidentGrid.FONTSIZE != null) {
                    fontSize = ConfigViewIncidentGrid.FONTSIZE[ConfigUtility.USER].get('value');
                }
                if(ConfigViewIncidentGrid.SHOWALLGREEN != null) {
                    showGreenApp = ConfigViewIncidentGrid.SHOWALLGREEN[ConfigUtility.USER].domNode.childNodes[2].childNodes[0].value;;
                }
                var applicationNames = "applicationNames";
                if(ConfigViewIncidentGrid.APPLICATIONS != null) {
                    var rhsCMS = ConfigWidgetCheckedMultiSelect.checkedMSList[applicationNames + ConfigUtility.USER][1];
                    var msRhsOptions = rhsCMS.getOptions();
                    for (var j = 0; j < msRhsOptions.length; j++) {
                        applications[j] = msRhsOptions[j].value;
                    }
                }

                var saveData = {
                    saveType: 1,
                    refreshTime:refreshTime,
                    fontName:fontName,
                    fontSize:fontSize,
                    showGreenApp:showGreenApp,
                    applications:applications
                };

                xhr("config/alertGridDetailsSave.action", {
                    handleAs:"json",
                    method:"POST",
                    query:saveData,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.alertGridSave));

                console.log("refreshTime = " + refreshTime + " fontName = " + fontName + " fontSize = " + fontSize + " showGreen = " + showGreenApp);
            },

            alertGridSave: function(data) {
                ConfigUtility.handleSave(data);
            }
        });

        ConfigViewIncidentGrid.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigViewIncidentGrid));

        ConfigViewIncidentGrid.APPLICATIONREFRESHTIME = null;
        ConfigViewIncidentGrid.FONTNAME = null;
        ConfigViewIncidentGrid.FONTSIZE = null;
        ConfigViewIncidentGrid.SHOWALLGREEN = null;
        ConfigViewIncidentGrid.APPLICATIONS = null;

        return ConfigViewIncidentGrid;
    });