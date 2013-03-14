define(["dojo/_base/declare", "dojo/i18n", "dashboard/logger/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!dashboard/config/nls/config",
    "dashboard/config/widgets/ConfigWidgetNumberSpinner", "dashboard/config/widgets/ConfigWidgetComboBox", "dashboard/config/widgets/ConfigWidgetRadioButton", "dashboard/config/widgets/ConfigWidgetCheckedMultiSelect" ],

    function (declare, i18n, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString, ConfigWidgetNumberSpinner, ConfigWidgetComboBox, ConfigWidgetRadioButton, ConfigWidgetCheckedMultiSelect) {

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
                    refreshTime = ConfigViewTransactionGrid.TRANSACTIONREFRESHTIME[CONFIGCONSTANTS.DIVTYPE.USER].get('value');
                }

                var transactionNames = "transactionNames";
                if(ConfigViewTransactionGrid.TRANSACTIONS != null) {
                    var rhsCMS = ConfigWidgetCheckedMultiSelect.checkedMSList[transactionNames + CONFIGCONSTANTS.DIVTYPE.USER][1];
                    var msRhsOptions = rhsCMS.getOptions();
                    for (var j = 0; j < msRhsOptions.length; j++) {
                        transactions[j] = msRhsOptions[j].value;
                    }
                }

                var applicationNames = "applicationNames";
                if(ConfigViewTransactionGrid.APPLICATIONS != null) {
                    var rhsCMS = ConfigWidgetCheckedMultiSelect.checkedMSList[applicationNames + CONFIGCONSTANTS.DIVTYPE.USER][1];
                    var msRhsOptions = rhsCMS.getOptions();
                    for (var j = 0; j < msRhsOptions.length; j++) {
                        applications[j] = msRhsOptions[j].value;
                    }
                }

                var saveData = {
                    type: CONFIGCONSTANTS.TYPE.SAVE,
                    saveType: CONFIGCONSTANTS.SAVE.ConfigViewTransactionGrid,
                    refreshTime:refreshTime,
                    transactions:transactions,
                    applications:applications
                };
                ConfigUtility.xhrPostCentral(CONFIGCONSTANTS.ACTION.ConfigViewTransactionGridSAVE, saveData);
                console.log("transaction grid save refreshTime = " + refreshTime);
            }
        });

        ConfigViewTransactionGrid.TRANSACTIONREFRESHTIME = null;
        ConfigViewTransactionGrid.TRANSACTIONS = null;
        ConfigViewTransactionGrid.APPLICATIONS = null;

        ConfigViewTransactionGrid.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigViewTransactionGrid));

        return ConfigViewTransactionGrid;
    });