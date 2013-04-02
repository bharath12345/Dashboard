define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/analytics/AlertsSummaryForm", "dojo/request/xhr", "dojo/_base/lang"],

    function (declare, i18n, i18nString, Logger, AlertsSummaryForm, xhr, lang) {

        dashboard.classnames.SqlDBOutlierSummaryForm = "dashboard.analytics.forms.SqlDBOutlierSummaryForm";

        var SqlDBOutlierSummaryForm = declare(dashboard.classnames.SqlDBOutlierSummaryForm, AlertsSummaryForm, {

            title:"SQL DB Outlier Summary",
            tableCount: 1,
            columnCount: 1,

            createFormSpecificMenu:function () {
            },

            startup:function () {
                this.inherited(arguments);

                var viewMeta = {};
                xhr("analytics/sqlAnalyticsForm.action", {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.createForm));
            },

            createForm:function (data, input) {
                // the result set has all the fields to be put up in the form


            },

            refreshSummary:function () {

            }

        });

        SqlDBOutlierSummaryForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.SqlDBOutlierSummaryForm));

        return SqlDBOutlierSummaryForm;
    });