define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/config/nls/config", "dashboard/logger/Logger",
    "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper",
    "dashboard/views/config/ConfigUtility", "dashboard/views/config/widgets/ConfigWidgetNumberSpinner",
    "dashboard/views/config/widgets/ConfigWidgetComboBox", "dashboard/views/config/widgets/ConfigWidgetRadioButton", "dashboard/views/config/widgets/ConfigWidgetCheckedMultiSelect" ],

    function (declare, i18n, i18nString, Logger, xhr, lang, Helper,
              ConfigUtility, ConfigWidgetNumberSpinner, ConfigWidgetComboBox, ConfigWidgetRadioButton, ConfigWidgetCheckedMultiSelect) {

        dashboard.classnames.ConfigTransactionGridForm = "dashboard.config.forms.ConfigTransactionGridForm";

        var ConfigTransactionGridForm = declare(dashboard.classnames.ConfigTransactionGridForm, null, {

            getAttrib: function(data) {
                return data.tge;
            },

            getAttribIgnoreList: function() {
                var ignore = [];
                ignore["allUserTransactions"] = "allUserTransactions";
                ignore["allUserApplications"] = "allUserApplications";
                return ignore;
            },

            renderAttributes: function(data) {
                var gridConfig = data.tge;
                for(var attribute in gridConfig) {
                    var adminSetting = gridConfig[attribute].adminSetting;
                    var factoryModified = gridConfig[attribute].factoryModified;
                    var factoryReadOnly = gridConfig[attribute].factoryReadOnly;
                    var userSetting = gridConfig[attribute].userSetting;
                    console.log("adminSetting = " + adminSetting + " factoryModified = " + factoryModified + " factoryReadOnly = " + factoryReadOnly + " userSetting = " + userSetting);
                }

                var transactionRefreshTime = "transactionRefreshTime";
                if(gridConfig[transactionRefreshTime] != null) {
                    var ns = new ConfigWidgetNumberSpinner();
                    ConfigTransactionGridForm.TRANSACTIONREFRESHTIME = ns.renderNumberSpinner(gridConfig[transactionRefreshTime].userSetting, transactionRefreshTime, 10, 60, 1);
                }

                var applicationNames = "applicationNames";
                if(gridConfig[applicationNames] != null) {
                    var values = data.tge.allUserApplications;
                    var cb = new ConfigWidgetCheckedMultiSelect();
                    ConfigTransactionGridForm.APPLICATIONS = cb.renderCheckedMultiSelect(gridConfig[applicationNames].userSetting, applicationNames, values);
                }

                var transactionNames = "transactionNames";
                if(gridConfig[transactionNames] != null) {
                    var values = data.tge.allUserTransactions;
                    var cb = new ConfigWidgetCheckedMultiSelect();
                    ConfigTransactionGridForm.TRANSACTIONS = cb.renderCheckedMultiSelect(gridConfig[transactionNames].userSetting, transactionNames, values);
                }
            },

            saveValues: function() {
                var refreshTime, transactions = [], applications = [];
                if(ConfigTransactionGridForm.TRANSACTIONREFRESHTIME != null) {
                    refreshTime = ConfigTransactionGridForm.TRANSACTIONREFRESHTIME[ConfigUtility.USER].get('value');
                }

                var transactionNames = "transactionNames";
                if(ConfigTransactionGridForm.TRANSACTIONS != null) {
                    var rhsCMS = ConfigWidgetCheckedMultiSelect.checkedMSList[transactionNames + ConfigUtility.USER][1];
                    var msRhsOptions = rhsCMS.getOptions();
                    for (var j = 0; j < msRhsOptions.length; j++) {
                        transactions[j] = msRhsOptions[j].value;
                    }
                }

                var applicationNames = "applicationNames";
                if(ConfigTransactionGridForm.APPLICATIONS != null) {
                    var rhsCMS = ConfigWidgetCheckedMultiSelect.checkedMSList[applicationNames + ConfigUtility.USER][1];
                    var msRhsOptions = rhsCMS.getOptions();
                    for (var j = 0; j < msRhsOptions.length; j++) {
                        applications[j] = msRhsOptions[j].value;
                    }
                }

                var saveData = {
                    saveType: 2,
                    refreshTime:refreshTime,
                    transactions:transactions,
                    applications:applications
                };

                xhr("config/transactionGridDetailsSave.action", {
                    handleAs:"json",
                    method:"POST",
                    query:saveData,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.transactionGridSave));

                ConfigUtility.xhrPostCentral(CONFIGCONSTANTS.ACTION.ConfigViewTransactionGridSAVE, saveData);
                console.log("transaction grid save refreshTime = " + refreshTime);
            },

            transactionGridSave: function(data) {
                ConfigUtility.handleSave(data);
            }
        });

        ConfigTransactionGridForm.TRANSACTIONREFRESHTIME = null;
        ConfigTransactionGridForm.TRANSACTIONS = null;
        ConfigTransactionGridForm.APPLICATIONS = null;

        ConfigTransactionGridForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigTransactionGridForm));

        return ConfigTransactionGridForm;
    });