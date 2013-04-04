define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/analytics/abstract/AnalyticsSummaryForm", "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper",
    "dashboard/widgets/AoneFormValue"],

    function (declare, i18n, i18nString, Logger, AnalyticsSummaryForm, xhr, lang, Helper, AoneFormValue) {

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

            createForm: function(data) {

                var sqlQueryOutlierFormVO = data.sqlQueryOutlierFormVO;

                this.analyticsTable.addChild(new AoneFormValue({label:"Component Name",value:sqlQueryOutlierFormVO.componentName}));
                this.analyticsTable.addChild(new AoneFormValue({label:"SQL ID",value:sqlQueryOutlierFormVO.sqlId}));
                this.analyticsTable.addChild(new AoneFormValue({label:"SQL Text",value:sqlQueryOutlierFormVO.sqlText}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Timestamp",value:sqlQueryOutlierFormVO.timestamp}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Inference Message",value:sqlQueryOutlierFormVO.inferenceMessage}));

                ////

                this.analyticsTable.addChild(new AoneFormValue({label:"Average CPU",value:sqlQueryOutlierFormVO.avgCpu}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Rows Processed",value:sqlQueryOutlierFormVO.rowsProcessed}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Application Wait Time",value:sqlQueryOutlierFormVO.appWaitTime}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Average Elapsed Time",value:sqlQueryOutlierFormVO.avgElapsedTime}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Execution Count",value:sqlQueryOutlierFormVO.executionsCount}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Sort Count",value:sqlQueryOutlierFormVO.sortCount}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Fetch Count",value:sqlQueryOutlierFormVO.fetchCount}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Disk Reads",value:sqlQueryOutlierFormVO.diskReads}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Disk Writes",value:sqlQueryOutlierFormVO.diskWrites}));

                ////

                this.analyticsTable.addChild(new AoneFormValue({label:"Last Hour Outliers",value:sqlQueryOutlierFormVO.lastHourOutliers}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Last Day Outliers",value:sqlQueryOutlierFormVO.lastDayOutliers}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Last Hour Occurrences",value:sqlQueryOutlierFormVO.lastHourOccurrences}));
                this.analyticsTable.addChild(new AoneFormValue({label:"Last Day Occurrences",value:sqlQueryOutlierFormVO.lastDayOccurrences}));

                this.analyticsTable.startup();

                dashboard.dom.STANDBY.hide();

            },

            refreshSummary:function () {

            }

        });

        SqlDBOutlierSummaryForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.SqlDBOutlierSummaryForm));

        return SqlDBOutlierSummaryForm;
    });