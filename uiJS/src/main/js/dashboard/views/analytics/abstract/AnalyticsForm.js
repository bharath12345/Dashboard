define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm", "dijit/form/Form", "dashboard/helper/ButtonHelper", "dojo/_base/lang",
    "dojo/on", "dojox/layout/TableContainer", "dojo/dom-construct"],

    function (declare, i18n, i18nString, Logger, AbstractForm, Form, ButtonHelper, lang, on, TableContainer, domConstruct) {

        dashboard.classnames.AnalyticsForm = "dashboard.analytics.abstract.AnalyticsForm";

        var AnalyticsForm = declare(dashboard.classnames.AnalyticsForm, [AbstractForm, Form], {

            pageType: dashboard.pageTypes.ANALYTICS, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor
            inAnalysisPane: true,

            constructor: function(pageType) {
                // if its a new window then the pageType will be Analytics, else Dashboard
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

        AnalyticsForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.AnalyticsForm));

        return AnalyticsForm;
    });