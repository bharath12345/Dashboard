define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dijit/layout/ContentPane", "dojo/on", "dojo/_base/lang", "dashboard/helper/ButtonHelper", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, Logger, ContentPane, on, lang, ButtonHelper, Helper) {

        dashboard.classnames.AbstractForm = "dashboard.abstract.AbstractForm";

        var AbstractForm = declare(dashboard.classnames.AbstractForm, ContentPane, {

            region: "center",
            splitter: true,
            style: "height: 100%",

            "-chains-":{
                createMenuButtons:"after" //method is called after its superclass’ method
            },

            createHeading: function() {
                dashboard.dom.TopMenuPane[this.title].domNode.innerHTML = Helper.getHeading(this.title);
            },

            createMenuButtons: function() {
                dashboard.dom.Toolbar[this.title].destroyDescendants(false);

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

            },

            minAnalysisPane: function() {
                console.log('minimizing');
                dojo.style(dashboard.dom.CpCenterInnerBottom.domNode, "height", "0px");
                dojo.style(dashboard.dom.CpCenterInnerBottom.domNode, "display", "none");
                dashboard.dom.InnerBcSplit.resize();
            },

            refreshView: function() {

            },

            launchNewWindow: function() {

            }

        });

        AbstractForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AbstractForm));

        return AbstractForm;
    });