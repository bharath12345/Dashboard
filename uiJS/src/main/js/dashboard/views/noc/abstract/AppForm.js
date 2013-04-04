define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm", "dijit/form/Form", "dashboard/helper/ButtonHelper", "dojo/_base/lang",
    "dojo/on", "dojox/layout/TableContainer", "dojo/dom-construct"],

    function (declare, i18n, i18nString, Logger, AbstractForm, Form, ButtonHelper, lang, on, TableContainer, domConstruct) {

        dashboard.classnames.AppForm = "dashboard.noc.abstract.AppForm";

        var AppForm = declare(dashboard.classnames.AppForm, [AbstractForm, Form], {

            pageType: dashboard.pageTypes.NOC, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor
            inAnalysisPane: true,

            constructor: function(pageType) {
                // if its a new window then the pageType will be NOC, else Dashboard
                this.pageType = pageType;
            },

            createToolbarButtons:function () {

            },

            startup: function() {
                this.inherited(arguments);
            },

            selectedId: function(id) {
                this.selectedId = id;
            }

        });

        AppForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppForm));

        return AppForm;
    });