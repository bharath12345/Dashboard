define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dojo/i18n!dashboard/views/analytics/nls/analytics",
    "dashboard/logger/Logger", "dashboard/views/analytics/abstract/AnalyticsForm",
    "dashboard/helper/Helper", "dojo/request/xhr", "dojo/_base/lang"],

    function (declare, i18n, dashboardI18nString, i18nString, Logger, AnalyticsForm, Helper, xhr, lang) {

        dashboard.classnames.SqlDBOutliersKpiTimeseries = "dashboard.analytics.forms.SqlDBOutliersKpiTimeseries";

        var SqlDBOutliersKpiTimeseries = declare(dashboard.classnames.SqlDBOutliersKpiTimeseries, AnalyticsForm, {

            title:"KPI Timeseries",
            pageType:dashboard.pageTypes.ANALYTICS, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor
            inAnalysisPane:true,

            startup:function () {
                this.inherited(arguments);
            },

            createToolbarButtons:function () {
            },

            launch:function () {

                this.innerDIV = dojo.create('div', {id:SqlDBOutliersKpiTimeseries.ID, style:'width: 100%; height: 100%;'});
                this.attr('content', this.innerDIV);

                var viewMeta = {
                    id:this.selectedId
                };
                xhr("analytics/sqlAnalyticsViolatedKPI.action", {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.createTimeSeries));

            },

            createTimeSeries:function (input) {
                this.data = input.sqlQueryOutlierViolatedKpiVO.violatedDbKpis;
                this.componentId = input.sqlQueryOutlierViolatedKpiVO.id;

                var context = cubism.context()
                    //    .serverDelay(60*1000)
                    .step(60 * 1000)// 1 minute approximately
                    .size(1000)
                    .stop();

                d3.select("#" + SqlDBOutliersKpiTimeseries.ID).selectAll(".cubism-axis")
                    .data(["top", "bottom"])
                    .enter().append("div")
                    .attr("class", function (d) {
                        return d + " cubism-axis";
                    })
                    .each(function (d) {
                        d3.select(this).call(context.axis().orient(d));
                    });

                d3.select("#" + SqlDBOutliersKpiTimeseries.ID).append("div")
                    .attr("class", "rule")
                    .call(context.rule());

                d3.select("#" + SqlDBOutliersKpiTimeseries.ID).selectAll(".cubism-horizon")
                    .data(this.data.map(lang.hitch(this, this.kpi)))
                    .enter().insert("div", ".bottom")
                    .attr("class", "cubism-horizon")
                    .call(context.horizon()
                    .format(d3.format("+,d"))
                    .height(this.innerDIV.clientHeight / this.data.length));

                context.on("focus", function (i) {
                    d3.selectAll(".cubism-value").style("right", i == null ? null : context.size() - i + "px");
                });
            },

            kpi:function (name) {
                var retVal = context.metric(
                    function (start, stop, step, callback) {
                        var viewMeta = {
                            id:this.componentId,
                            name:name
                        };
                        xhr("analytics/sqlAnalyticsViolatedKpiTimeseries.action", {
                            handleAs:"json",
                            method:"POST",
                            query:viewMeta,
                            headers:Helper.JSON_HEADER
                        }).then(lang.hitch(this, function (input) {
                            var rows = input.sqlQueryOutlierViolatedKpiTimeseriesVOList;
                            rows = rows.map(function (d) {
                                return [d.time, +d.value];
                            }).filter(
                                function (d) {
                                    return d[1];
                                }).reverse();
                            var value = rows[0][1];
                            var values = [value];
                            rows.forEach(function (d) {
                                values.push(d[1]);
                            });

                            callback(null, values.slice(-context.size()));

                        }));

                    }, name);

                console.log("retVal = " + retVal);
                return retVal;
            }

        });

        SqlDBOutliersKpiTimeseries.LOG = Logger.addTimer(new Logger(dashboard.classnames.SqlDBOutliersKpiTimeseries));
        SqlDBOutliersKpiTimeseries.ID = "SqlDBOutliersKpiTimeseries";

        return SqlDBOutliersKpiTimeseries;
    });