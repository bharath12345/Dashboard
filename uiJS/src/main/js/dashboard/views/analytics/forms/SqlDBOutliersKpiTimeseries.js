define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dojo/i18n!dashboard/views/analytics/nls/analytics",
    "dashboard/logger/Logger", "dashboard/abstract/AbstractForm",
    "dashboard/helper/Helper", "dojo/request/xhr", "dojo/_base/lang"],

    function (declare, i18n, dashboardI18nString, i18nString, Logger, AbstractForm, Helper, xhr, lang) {

        dashboard.classnames.SqlDBOutliersKpiTimeseries = "dashboard.analytics.forms.SqlDBOutliersKpiTimeseries";

        var SqlDBOutliersKpiTimeseries = declare(dashboard.classnames.SqlDBOutliersKpiTimeseries, AbstractForm, {

            title: "KPI Timeseries",
            pageType: dashboard.pageTypes.ANALYTICS, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor
            inAnalysisPane: true,

            startup:function () {
                this.inherited(arguments);
            },

            createToolbarButtons: function() {
            },

            launch: function() {

                this.innerDIV = dojo.create('div', {style:'width: 100%; height: 100%;'});
                this.attr('content', this.innerDIV);

                var viewMeta = {};
                xhr("analytics/sqlAnalyticsViolatedKpiTimeseries.action", {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.createTimeSeries));
            },

            createTimeSeries:function (input) {
            }

        });

        SqlDBOutliersKpiTimeseries.LOG = Logger.addTimer(new Logger(dashboard.classnames.SqlDBOutliersKpiTimeseries));

        return SqlDBOutliersKpiTimeseries;
    });