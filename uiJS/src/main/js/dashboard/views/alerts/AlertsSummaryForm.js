define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm", "dijit/form/Form", "dashboard/helper/ButtonHelper", "dojo/_base/lang",
    "dojo/on", "dojox/layout/TableContainer", "dojo/dom-construct"],

    function (declare, i18n, i18nString, Logger, AbstractForm, Form, ButtonHelper, lang, on, TableContainer, domConstruct) {

        dashboard.classnames.AlertsSummaryForm = "dashboard.alerts.AlertsSummaryForm";

        var AlertsSummaryForm = declare(dashboard.classnames.AlertsSummaryForm, [AbstractForm, Form], {

            "-chains-":{
                renderAccordion:"before" //method is called before calling its superclass method
            },

            pageType: dashboard.pageTypes.ALERTS, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor

            constructor: function(pageType) {
                // if its a new window then the pageType will be Alerts, else Dashboard
                this.pageType = pageType;
            },

            createAlertsMenu:function () {
                dashboard.dom.Toolbar[this.pageType].destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getRefresh();
                on(button, "click", lang.hitch(this, this.refreshSummary)); // this is a superclass call
                dashboard.dom.Toolbar[this.pageType].addChild(button);

                // this superclass call should be the last - form specific buttons appended at the end of the toolbar
                this.createFormSpecificMenu();
            },

            startup: function() {
                this.inherited(arguments);

                this.createAlertsMenu();

                var tableDiv = dojo.create('div', {style:'width: 100%; height: 100%;'});
                this.attr('content', tableDiv);

                if(this.tableCount == 1) {
                    // ToDo: This TableContainer has to be within a TitlePane and not hanging outside
                    this.alertsTable = new TableContainer({cols:this.columnCount, "labelWidth":"150"}, tableDiv);
                    return;
                }

                this.alertsTable = [];
                for(var i=0;i<this.tableCount;i++) {
                    var layerDef = dojo.create('div', {style:'width: 100%; height: 40px;'});
                    tableDiv.appendChild(layerDef);
                    // ToDo: This TableContainer has to be within a TitlePane and not hanging outside
                    this.alertsTable.push(new TableContainer({cols: this.columnCount[i],"labelWidth": "150"}, layerDef));
                }

            }

        });

        AlertsSummaryForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AlertsSummaryForm));

        return AlertsSummaryForm;
    });