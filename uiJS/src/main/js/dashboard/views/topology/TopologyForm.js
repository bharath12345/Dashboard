define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm", "dijit/form/Form", "dashboard/helper/ButtonHelper", "dojo/_base/lang",
    "dojo/on"],

    function (declare, i18n, i18nString, Logger, AbstractForm, Form, ButtonHelper, lang, on) {

        dashboard.classnames.TopologyForm = "dashboard.topology.TopologyForm";

        var TopologyForm = declare(dashboard.classnames.TopologyForm, [AbstractForm, Form], {

            pageType: dashboard.pageTypes.TOPOLOGY, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor

            constructor: function(pageType) {
                // if its a new window then the pageType will be Topology, else Dashboard
                this.pageType = pageType;
            },

            createTopologyMenu:function () {
                dashboard.dom.Toolbar[this.pageType].destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getRefresh();
                on(button, "click", lang.hitch(this, this.refresh)); // this is a superclass call
                dashboard.dom.Toolbar[this.pageType].addChild(button);

                // this superclass call should be the last - form specific buttons appended at the end of the toolbar
                this.createFormSpecificMenu();
            }

        });

        TopologyForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.TopologyForm));

        return TopologyForm;
    });