define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAnalysisPane", "dashboard/views/noc/forms/AppComponentSummaryForm",
    "dashboard/views/noc/forms/AppSummaryForm", "dashboard/views/noc/forms/AppTopologyForm",
    "dashboard/views/noc/forms/AppTransactionSummaryForm"],

    function (declare, i18n, i18nString, Logger, AbstractAnalysisPane, AppComponentSummaryForm, AppSummaryForm,
              AppTopologyForm, AppTransactionSummaryForm) {

        dashboard.classnames.ApplicationAnalysisPane = "dashboard.analysis.ApplicationAnalysisPane";

        var ApplicationAnalysisPane = declare(dashboard.classnames.ApplicationAnalysisPane, AbstractAnalysisPane, {

            launch: function(name, id) {
                this.tabList = [];
                this.tabList.push(new AppSummaryForm());
                this.tabList.push(new AppTopologyForm());
                this.tabList.push(new AppTransactionSummaryForm());
                this.tabList.push(new AppComponentSummaryForm());
            }

        });

        ApplicationAnalysisPane.LOG = Logger.addTimer(new Logger(dashboard.classnames.ApplicationAnalysisPane));

        return ApplicationAnalysisPane;
    });