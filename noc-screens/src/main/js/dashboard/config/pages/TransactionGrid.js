define(["dojo/_base/declare", "dojo/i18n", "noc/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!config/nls/config",
    "dashboard/config/widgets/NumberSpinner", "dashboard/config/widgets/ComboBox", "dashboard/config/widgets/RadioButton", "dashboard/config/widgets/CheckedMultiSelect" ],

    function (declare, i18n, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString, NumberSpinner, ComboBox, RadioButton, CheckedMultiSelect) {

        var TransactionGrid = declare(CONFIGCONSTANTS.CLASSNAME.TRANSACTIONGRID, null, {
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
                    var ns = new NumberSpinner();
                    TransactionGrid.TRANSACTIONREFRESHTIME = ns.renderNumberSpinner(gridConfig[transactionRefreshTime].userSetting, transactionRefreshTime, 10, 60, 1);
                }

                var applicationNames = "applicationNames";
                if(gridConfig[applicationNames] != null) {
                    var values = data.tge.allUserApplications;
                    var cb = new CheckedMultiSelect();
                    TransactionGrid.APPLICATIONS = cb.renderCheckedMultiSelect(gridConfig[applicationNames].userSetting, applicationNames, values);
                }

                var transactionNames = "transactionNames";
                if(gridConfig[transactionNames] != null) {
                    var values = data.tge.allUserTransactions;
                    var cb = new CheckedMultiSelect();
                    TransactionGrid.TRANSACTIONS = cb.renderCheckedMultiSelect(gridConfig[transactionNames].userSetting, transactionNames, values);
                }
            },

            saveValues: function() {
                var refreshTime, transactions = [], applications = [];
                if(TransactionGrid.TRANSACTIONREFRESHTIME != null) {
                    refreshTime = TransactionGrid.TRANSACTIONREFRESHTIME[CONFIGCONSTANTS.DIVTYPE.USER].get('value');
                }

                var transactionNames = "transactionNames";
                if(TransactionGrid.TRANSACTIONS != null) {
                    var rhsCMS = CheckedMultiSelect.checkedMSList[transactionNames + CONFIGCONSTANTS.DIVTYPE.USER][1];
                    var msRhsOptions = rhsCMS.getOptions();
                    for (var j = 0; j < msRhsOptions.length; j++) {
                        transactions[j] = msRhsOptions[j].value;
                    }
                }

                var applicationNames = "applicationNames";
                if(TransactionGrid.APPLICATIONS != null) {
                    var rhsCMS = CheckedMultiSelect.checkedMSList[applicationNames + CONFIGCONSTANTS.DIVTYPE.USER][1];
                    var msRhsOptions = rhsCMS.getOptions();
                    for (var j = 0; j < msRhsOptions.length; j++) {
                        applications[j] = msRhsOptions[j].value;
                    }
                }

                var saveData = {
                    type: CONFIGCONSTANTS.TYPE.SAVE,
                    saveType: CONFIGCONSTANTS.SAVE.TRANSACTIONGRID,
                    refreshTime:refreshTime,
                    transactions:transactions,
                    applications:applications
                };
                ConfigUtility.xhrPostCentral(CONFIGCONSTANTS.ACTION.TRANSACTIONGRIDSAVE, saveData);
                console.log("transaction grid save refreshTime = " + refreshTime);
            }
        });

        TransactionGrid.TRANSACTIONREFRESHTIME = null;
        TransactionGrid.TRANSACTIONS = null;
        TransactionGrid.APPLICATIONS = null;

        TransactionGrid.LOG = Logger.addTimer(new Logger(CONFIGCONSTANTS.CLASSNAME.TRANSACTIONGRID));

        return TransactionGrid;
    });