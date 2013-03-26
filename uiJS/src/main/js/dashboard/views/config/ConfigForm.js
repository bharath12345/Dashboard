define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm", "dijit/form/Form", "dashboard/helper/ButtonHelper", "dojo/_base/lang",
    "dojo/on"],

    function (declare, i18n, i18nString, Logger, AbstractForm, Form, ButtonHelper, lang, on) {

        dashboard.classnames.ConfigForm = "dashboard.config.ConfigForm";

        var ConfigForm = declare(dashboard.classnames.ConfigForm, [AbstractForm, Form], {

            pageType: dashboard.pageTypes.CONFIG, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor

            constructor: function(pageType) {
                // if its a new window then the pageType will be Config, else Dashboard
                this.pageType = pageType;
            },

            createConfigMenu:function () {
                dashboard.dom.Toolbar[this.pageType].destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getSave();
                on(button, "click", lang.hitch(this, this.saveConfig)); // this is a superclass call
                dashboard.dom.Toolbar[this.pageType].addChild(button);

                // this superclass call should be the last - form specific buttons appended at the end of the toolbar
                this.createFormSpecificMenu();
            }



        });

        ConfigForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigForm));

        return ConfigForm;
    });