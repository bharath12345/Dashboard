define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dijit/layout/ContentPane", "dojo/on", "dojo/_base/lang", "dashboard/helper/ButtonHelper", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, Logger, ContentPane, on, lang, ButtonHelper, Helper) {

        dashboard.classnames.AbstractForm = "dashboard.abstract.AbstractForm";

        var AbstractForm = declare(dashboard.classnames.AbstractForm, ContentPane, {

            region:"center",
            splitter:true,
            style:"height: 100%",
            inAnalysisPane: false,

            "-chains-":{
                createToolbarButtons:"after", //method is called after its superclass’ method
                launch:"after" //method is called after its superclass’ method
            },

            constructor:function (pageType) {
                // if its a new window then the pageType will be Analytics (and like), else Dashboard
                this.pageType = pageType;
            },

            createHeading:function () {
                if(this.inAnalysisPane == true) {
                    dashboard.dom.TopMenuPane[this.title].domNode.innerHTML = Helper.getHeading(this.title);
                } else {
                    dashboard.dom.TopMenuPane[this.pageType].domNode.innerHTML = Helper.getHeading(this.title);
                }

            },

            createToolbarButtons:function () {

                if (this.inAnalysisPane == true) {

                    var buttonHelper = new ButtonHelper();
                    var button = buttonHelper.getRefresh();
                    on(button, "click", lang.hitch(this, this.refreshView));
                    dashboard.dom.Toolbar[this.title].addChild(button);

                    button = buttonHelper.getViewNewWindow();
                    on(button, "click", lang.hitch(this, this.launchNewWindow));
                    dashboard.dom.Toolbar[this.title].addChild(button);

                    button = buttonHelper.getWindowMinimize();
                    on(button, "click", lang.hitch(this, this.minAnalysisPane));
                    dashboard.dom.Toolbar[this.title].addChild(button);
                    button.domNode.className += " floatRight";

                    button = buttonHelper.getWindowRestore();
                    on(button, "click", lang.hitch(this, this.minAnalysisPane));
                    dashboard.dom.Toolbar[this.title].addChild(button);
                    button.domNode.className += " floatRight";

                    button = buttonHelper.getWindowMaximize();
                    on(button, "click", lang.hitch(this, this.minAnalysisPane));
                    dashboard.dom.Toolbar[this.title].addChild(button);
                    button.domNode.className += " floatRight";

                    button = buttonHelper.getWindowClose();
                    on(button, "click", lang.hitch(this, this.minAnalysisPane));
                    dashboard.dom.Toolbar[this.title].addChild(button);
                    button.domNode.className += " floatRight";
                }

            },

            minAnalysisPane:function () {
                console.log('minimizing');
                dojo.style(dashboard.dom.CpCenterInnerBottom.domNode, "height", "0px");
                dojo.style(dashboard.dom.CpCenterInnerBottom.domNode, "display", "none");
                dashboard.dom.InnerBcSplit.resize();
            },

            refreshView:function () {

            },

            launchNewWindow:function () {

            }

        });

        AbstractForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AbstractForm));

        return AbstractForm;
    });