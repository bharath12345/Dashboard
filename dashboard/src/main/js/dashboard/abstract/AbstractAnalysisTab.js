define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dijit/layout/ContentPane", "dashboard/helper/ButtonHelper", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, Logger, ContentPane, ButtonHelper, Helper) {

        dashboard.classnames.AbstractAnalysisTab = "dashboard.abstract.AbstractAnalysisTab";

        var AbstractAnalysisTab = declare(dashboard.classnames.AbstractAnalysisTab, ContentPane, {

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
                //on(button, "click", lang.hitch(this, this.refreshView));
                dashboard.dom.Toolbar[this.title].addChild(button);

                button = buttonHelper.getViewNewWindow();
                //on(button, "click", lang.hitch(this, this.launchNewWindow));
                dashboard.dom.Toolbar[this.title].addChild(button);

            }

        });

        AbstractAnalysisTab.LOG = Logger.addTimer(new Logger(dashboard.classnames.AbstractAnalysisTab));

        return AbstractAnalysisTab;
    });