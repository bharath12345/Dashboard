define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/analytics/abstract/AnalyticsForm", "dijit/form/Form", "dashboard/helper/ButtonHelper", "dojo/_base/lang",
    "dojo/on", "dojox/layout/TableContainer", "dojo/dom-construct"],

    function (declare, i18n, i18nString, Logger, AnalyticsForm, Form, ButtonHelper, lang, on, TableContainer, domConstruct) {

        dashboard.classnames.AnalyticsSummaryForm = "dashboard.analytics.abstract.AnalyticsSummaryForm";

        var AnalyticsSummaryForm = declare(dashboard.classnames.AnalyticsSummaryForm, [AnalyticsForm], {

            createTableContainers:function (data, input) {
                // the result set has all the fields to be put up in the form

                var tableDiv = dojo.create('div', {style:'width: 100%; height: 100%;'});
                dashboard.dom.CpCenterInner[this.title].attr('content', tableDiv);


                if(this.tableCount == 1) {
                    // ToDo: This TableContainer has to be within a TitlePane and not hanging outside
                    this.analyticsTable = new TableContainer({cols:this.columnCount, "labelWidth":"150"}, tableDiv);
                    return;
                }

                this.analyticsTable = [];
                for(var i=0;i<this.tableCount;i++) {
                    var layerDef = dojo.create('div', {style:'width: 100%; height: 40px;'});
                    tableDiv.appendChild(layerDef);
                    // ToDo: This TableContainer has to be within a TitlePane and not hanging outside
                    this.analyticsTable.push(new TableContainer({cols: this.columnCount[i],"labelWidth": "150"}, layerDef));
                }
            }

        });

        AnalyticsSummaryForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AnalyticsSummaryForm));

        return AnalyticsSummaryForm;
    });