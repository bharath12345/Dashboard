define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/analytics/abstract/AnalyticsSummaryForm", "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, Logger, AnalyticsSummaryForm, xhr, lang, Helper) {

        dashboard.classnames.SqlDBOutlierSummaryForm = "dashboard.analytics.forms.SqlDBOutlierSummaryForm";

        var SqlDBOutlierSummaryForm = declare(dashboard.classnames.SqlDBOutlierSummaryForm, AnalyticsSummaryForm, {

            title:"SQL DB Outlier Summary",
            tableCount: 1,
            columnCount: 1,

            pageType: dashboard.pageTypes.ANALYTICS, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor
            inAnalysisPane: true,

            createToolbarButtons:function () {
            },

            startup:function () {
                this.inherited(arguments);
            },

            launch: function() {
                this.createTableContainers();

                var viewMeta = {
                    id: this.selectedId
                };
                xhr("analytics/sqlAnalyticsForm.action", {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.createForm));
            },

            createForm: function() {

            },

            refreshSummary:function () {

            }

        });

        SqlDBOutlierSummaryForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.SqlDBOutlierSummaryForm));

        return SqlDBOutlierSummaryForm;
    });