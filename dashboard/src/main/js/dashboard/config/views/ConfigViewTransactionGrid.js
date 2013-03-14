define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "dashboard/logger/Logger",
    "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper",
    "dashboard/config/ConfigUtility", "dashboard/config/widgets/ConfigWidgetNumberSpinner",
    "dashboard/config/widgets/ConfigWidgetComboBox", "dashboard/config/widgets/ConfigWidgetRadioButton", "dashboard/config/widgets/ConfigWidgetCheckedMultiSelect" ],

    function (declare, i18n, i18nString, Logger, xhr, lang, Helper,
              ConfigUtility, ConfigWidgetNumberSpinner, ConfigWidgetComboBox, ConfigWidgetRadioButton, ConfigWidgetCheckedMultiSelect) {

        dashboard.classnames.ConfigViewTransactionGrid = "dashboard.config.views.ConfigViewTransactionGrid";

        var ConfigViewTransactionGrid = declare(dashboard.classnames.ConfigViewTransactionGrid, null, {

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
                    ConfigViewTransactionGrid.TRANSACTIONREFRESHTIME = ns.renderNumberSpinner(gridConfig[transactionRefreshTime].userSetting, transactionRefreshTime, 10, 60, 1);
                }

                var applicationNames = "applicationNames";
                if(gridConfig[applicationNames] != null) {
                    var values = data.tge.allUserApplications;
                    var cb = new ConfigWidgetCheckedMultiSelect();
                    ConfigViewTransactionGrid.APPLICATIONS = cb.renderCheckedMultiSelect(gridConfig[applicationNames].userSetting, applicationNames, values);
                }

                var transactionNames = "transactionNames";
                if(gridConfig[transactionNames] != null) {
                    var values = data.tge.allUserTransactions;
                    var cb = new ConfigWidgetCheckedMultiSelect();
                    ConfigViewTransactionGrid.TRANSACTIONS = cb.renderCheckedMultiSelect(gridConfig[transactionNames].userSetting, transactionNames, values);
                }
            },

            saveValues: function() {
                var refreshTime, transactions = [], applications = [];
                if(ConfigViewTransactionGrid.TRANSACTIONREFRESHTIME != null) {
                    refreshTime = ConfigViewTransactionGrid.TRANSACTIONREFRESHTIME[ConfigUtility.USER].get('value');
                }

                var transactionNames = "transactionNames";
                if(ConfigViewTransactionGrid.TRANSACTIONS != null) {
                    var rhsCMS = ConfigWidgetCheckedMultiSelect.checkedMSList[transactionNames + ConfigUtility.USER][1];
                    var msRhsOptions = rhsCMS.getOptions();
                    for (var j = 0; j < msRhsOptions.length; j++) {
                        transactions[j] = msRhsOptions[j].value;
                    }
                }

                var applicationNames = "applicationNames";
                if(ConfigViewTransactionGrid.APPLICATIONS != null) {
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
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.transactionGridSave));

                ConfigUtility.xhrPostCentral(CONFIGCONSTANTS.ACTION.ConfigViewTransactionGridSAVE, saveData);
                console.log("transaction grid save refreshTime = " + refreshTime);
            },

            transactionGridSave: function(data) {
                ConfigUtility.handleSave(data);
            }
        });

        ConfigViewTransactionGrid.TRANSACTIONREFRESHTIME = null;
        ConfigViewTransactionGrid.TRANSACTIONS = null;
        ConfigViewTransactionGrid.APPLICATIONS = null;

        ConfigViewTransactionGrid.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigViewTransactionGrid));

        return ConfigViewTransactionGrid;
    });