define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/config/nls/config", "dojo/i18n!dashboard/nls/dashboard",
    "dashboard/logger/Logger", "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper",
    "dashboard/views/config/ConfigUtility", "dashboard/views/config/ConfigForm", "dijit/form/NumberSpinner", "dijit/form/TextBox",
    "dashboard/views/config/widgets/ConfigWidgetCheckedMultiSelect"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, xhr, lang, Helper,
              ConfigUtility, ConfigForm, NumberSpinner, TextBox, ConfigWidgetCheckedMultiSelect) {

        dashboard.classnames.ConfigIncidentGridForm = "dashboard.config.forms.ConfigIncidentGridForm";

        var ConfigIncidentGridForm = declare(dashboard.classnames.ConfigIncidentGridForm, ConfigForm, {

            title: dashboardI18nString.APPLICATION_ALERTS,
            tableCount: 1,
            columnCount: 1,

            startup:function () {
                this.inherited(arguments);

                this.numberSpinner = new NumberSpinner({
                    label: "Refresh Time",
                    smallDelta: 1,
                    value: 30,
                    constraints: { min:1, max:120, places:0 }
                });
                this.configTable.addChild(this.numberSpinner);

                // Note - this should be the last - because this one is replaced by a CheckedMultiSelect with options
                this.dummyTextbox = new TextBox({
                    label: "Select Application",
                    id: "dummyForMultiSelect"
                });
                this.configTable.addChild(this.dummyTextbox);

                this.configTable.startup();

                // we shall add the Multi-Select-box row after the TableContainer has been rendered
                var dummyForMultiSelect = dijit.byId('dummyForMultiSelect');
                var tableCol = dummyForMultiSelect.domNode.parentNode;
                dummyForMultiSelect.destroyRendering();

                var configWidgetCheckedMultiSelect = new ConfigWidgetCheckedMultiSelect();
                configWidgetCheckedMultiSelect.render(tableCol, "selectApplications", [], []);

                dashboard.dom.STANDBY.hide();
            },

            createFormSpecificMenu:function () {
                /*
                 called from the base ConfigForm class
                 one can add further form specific buttons and actions here
                 */
            },

            saveConfig: function() {
                var refreshTime, fontName, fontSize, showGreenApp, applications = [];
                if(ConfigIncidentGridForm.APPLICATIONREFRESHTIME != null) {
                    refreshTime = ConfigIncidentGridForm.APPLICATIONREFRESHTIME[ConfigUtility.USER].get('value');
                }
                if(ConfigIncidentGridForm.FONTNAME != null) {
                    fontName = ConfigIncidentGridForm.FONTNAME[ConfigUtility.USER].domNode.childNodes[2].childNodes[0].value;
                }
                if(ConfigIncidentGridForm.FONTSIZE != null) {
                    fontSize = ConfigIncidentGridForm.FONTSIZE[ConfigUtility.USER].get('value');
                }
                if(ConfigIncidentGridForm.SHOWALLGREEN != null) {
                    showGreenApp = ConfigIncidentGridForm.SHOWALLGREEN[ConfigUtility.USER].domNode.childNodes[2].childNodes[0].value;;
                }
                var applicationNames = "applicationNames";
                if(ConfigIncidentGridForm.APPLICATIONS != null) {
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
            }
        });

        ConfigIncidentGridForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigIncidentGridForm));

        ConfigIncidentGridForm.APPLICATIONREFRESHTIME = null;
        ConfigIncidentGridForm.FONTNAME = null;
        ConfigIncidentGridForm.FONTSIZE = null;
        ConfigIncidentGridForm.SHOWALLGREEN = null;
        ConfigIncidentGridForm.APPLICATIONS = null;

        return ConfigIncidentGridForm;
    });