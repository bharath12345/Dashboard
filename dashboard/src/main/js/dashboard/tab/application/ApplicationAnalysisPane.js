define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AnalysisPane", "dashboard/tab/application/TabA", "dashboard/tab/application/TabB",
    "dashboard/tab/application/TabC"],

    function (declare, i18n, i18nString, Logger, AnalysisPane, TabA, TabB, TabC) {

        dashboard.classnames.ApplicationAnalysisPane = "dashboard.noc.tab.application.ApplicationAnalysisPane";

        var ApplicationAnalysisPane = declare(dashboard.classnames.ApplicationAnalysisPane, AnalysisPane, {

            tabList: [],

            launch: function(name, id) {

                dojo.style(dashboard.dom.CpCenterInnerBottom.domNode, "display", "block");
                dojo.style(dashboard.dom.CpCenterInnerBottom.domNode, "height", (dashboard.dom.CpCenterInner.h/2)+"px");
                dashboard.dom.InnerBcSplit.resize();

                dashboard.dom.AnalysisPaneTC.destroyDescendants(false);
                dashboard.dom.AnalysisPaneTC.addChild(new TabA());
                dashboard.dom.AnalysisPaneTC.addChild(new TabB());
                dashboard.dom.AnalysisPaneTC.addChild(new TabC());

            }

        });

        ApplicationAnalysisPane.LOG = Logger.addTimer(new Logger(dashboard.classnames.ApplicationAnalysisPane));

        return ApplicationAnalysisPane;
    });