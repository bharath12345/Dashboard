define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractView", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, Logger, AbstractView, Helper) {

        dashboard.classnames.AbstractAnalysisPane = "dashboard.abstract.AbstractAnalysisPane";

        var AbstractAnalysisPane = declare(dashboard.classnames.AbstractAnalysisPane, AbstractView, {

            "-chains-":{
                launch:"before" //method is called before calling its superclass method
            },

            tabList: [],

            constructor: function(pageType) {
                // if its a new window then the pageType will be Analytics, else Dashboard
                this.pageType = pageType;
            },

            launch: function(id) {

                dojo.style(dashboard.dom.CpCenterInnerBottom.domNode, "display", "block");
                dojo.style(dashboard.dom.CpCenterInnerBottom.domNode, "height",
                    (dashboard.dom.CpCenterInner[dashboard.pageTypes.dashboard].h/2)+"px");
                dashboard.dom.InnerBcSplit.resize();

                dashboard.dom.AnalysisPaneTC.destroyDescendants(false);

                for(var i=0; i<this.tabList.length; i++) {
                    dashboard.dom.AnalysisPaneTC.addChild(this.tabList[i]);
                }
                dashboard.dom.AnalysisPaneTC.startup();

                for(var i=0; i<this.tabList.length; i++) {
                    /*
                     Similar stuff happens in Helper createView() method to bring up a form
                     If it is a center-top form, then, ==> createSplitCenterPanes (in AbstractView)
                     If it is a center-bottom form, then ==> createInnerMenuAndPanes (in AbstractView)
                     */

                    this.createInnerMenuAndPanes(this.tabList[i].domNode, this.tabList[i].title);
                    this.tabList[i].selectedId(id);
                    Helper.initializeForm(this.tabList[i]);

                }

            }
        });

        AbstractAnalysisPane.LOG = Logger.addTimer(new Logger(dashboard.classnames.AbstractAnalysisPane));

        return AbstractAnalysisPane;
    });