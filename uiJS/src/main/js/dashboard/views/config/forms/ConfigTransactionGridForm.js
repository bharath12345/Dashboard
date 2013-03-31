define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/config/nls/config", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper", "dashboard/views/config/ConfigUtility",
    "dashboard/views/config/widgets/ConfigWidgetCheckedMultiSelect", "dashboard/views/config/ConfigForm", "dijit/form/NumberSpinner", "dijit/form/TextBox" ],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, xhr, lang, Helper,
              ConfigUtility, ConfigWidgetCheckedMultiSelect, ConfigForm, NumberSpinner, TextBox) {

        dashboard.classnames.ConfigTransactionGridForm = "dashboard.config.forms.ConfigTransactionGridForm";

        var ConfigTransactionGridForm = declare(dashboard.classnames.ConfigTransactionGridForm, ConfigForm, {

            title:dashboardI18nString.TRANSACTION_GRID,
            tableCount:1,
            columnCount:1,

            startup: function() {
                this.inherited(arguments);

                this.numberSpinner = new NumberSpinner({
                    label:"Refresh Time",
                    smallDelta:1,
                    value:30,
                    constraints:{ min:1, max:120, places:0 }
                });
                this.configTable.addChild(this.numberSpinner);

                // Note - these 2 should be the last - because this one is replaced by a CheckedMultiSelect with options
                this.dummyTextbox = new TextBox({
                    label:"Select Application",
                    id:"dummyForMultiSelectApp"
                });
                this.configTable.addChild(this.dummyTextbox);

                this.dummyTextbox = new TextBox({
                    label:"Select Transaction",
                    id:"dummyForMultiSelectTx"
                });
                this.configTable.addChild(this.dummyTextbox);

                this.configTable.startup();

                // we shall add the Multi-Select-box row after the TableContainer has been rendered
                var dummyForMultiSelect = dijit.byId('dummyForMultiSelectApp');
                var tableCol = dummyForMultiSelect.domNode.parentNode;
                dummyForMultiSelect.destroyRendering();

                this.appCheckedMultiSelect = new ConfigWidgetCheckedMultiSelect();
                this.appCheckedMultiSelect.render(tableCol, "selectApplications", [], []);

                dummyForMultiSelect = dijit.byId('dummyForMultiSelectTx');
                tableCol = dummyForMultiSelect.domNode.parentNode;
                dummyForMultiSelect.destroyRendering();

                this.txCheckedMultiSelect = new ConfigWidgetCheckedMultiSelect();
                this.txCheckedMultiSelect.render(tableCol, "selectTransactions", [], []);

                dashboard.dom.STANDBY.hide();
            },

            createFormSpecificMenu:function () {
                /*
                 called from the base ConfigForm class
                 one can add further form specific buttons and actions here
                 */
            },

            saveConfig: function() {
                var refreshTime = this.numberSpinner.get('value');

                var applications = [];
                var rhsCMS = this.appCheckedMultiSelect.rhsCMS;
                var msRhsOptions = rhsCMS.getOptions();
                for (var j = 0; j < msRhsOptions.length; j++) {
                    applications[j] = msRhsOptions[j].value;
                }

                var transactions = [];
                var rhsCMS = this.txCheckedMultiSelect.rhsCMS;
                var msRhsOptions = rhsCMS.getOptions();
                for (var j = 0; j < msRhsOptions.length; j++) {
                    transactions[j] = msRhsOptions[j].value;
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
                }).then(lang.hitch(this, this.postSave));

                console.log("transaction grid save refreshTime = " + refreshTime);
            },

            postSave: function(data) {
                console.log("Save successful. Remove the dialog now!");
                ConfigUtility.handleSave(data);
            }
        });

        ConfigTransactionGridForm.TRANSACTIONREFRESHTIME = null;
        ConfigTransactionGridForm.TRANSACTIONS = null;
        ConfigTransactionGridForm.APPLICATIONS = null;

        ConfigTransactionGridForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigTransactionGridForm));

        return ConfigTransactionGridForm;
    });