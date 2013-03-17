define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, Logger) {

        dashboard.classnames.AnalysisPane = "dashboard.abstract.AnalysisPane";

        var AnalysisPane = declare(dashboard.classnames.AnalysisPane, null, {

            "-chains-":{
                launch:"before" //method is called before calling its superclass method
            },

            tabList: [],

            launch: function() {

                dojo.style(dashboard.dom.CpCenterInnerBottom.domNode, "display", "block");
                dojo.style(dashboard.dom.CpCenterInnerBottom.domNode, "height", (dashboard.dom.CpCenterInner.h/2)+"px");
                dashboard.dom.InnerBcSplit.resize();

                dashboard.dom.AnalysisPaneTC.destroyDescendants(false);

                for(var i=0; i<this.tabList.length; i++) {
                    dashboard.dom.AnalysisPaneTC.addChild(this.tabList[i]);
                }

            }
        });

        AnalysisPane.LOG = Logger.addTimer(new Logger(dashboard.classnames.AnalysisPane));

        return AnalysisPane;
    });