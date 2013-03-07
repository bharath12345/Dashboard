define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "noc/Logger", "dojox/collections/Dictionary",
    "dashboard/DashboardConstants"],

    function (declare, i18n, i18nString, Logger, Dictionary, DBCONSTANTS) {

        var ResponseDictionary = declare("dashboard.ResponseDictionary", null, {

            ACCORDIONSET:1,
            ACCORDIONDATA:2,

            responseHandles:[],

            loadResponseHandler:function () {
                this.responseHandles[this.ACCORDIONSET] =  this.accordionSetHandle;
                this.responseHandles[this.ACCORDIONDATA] = this.accordionDataHandle;
            },

            accordionSetHandle:function (data) {
                console.log("classname = " + DBCONSTANTS.getClassPath(DBCONSTANTS.CLASSNAME.DASHBOARD.ACCORDION));
                require([DBCONSTANTS.getClassPath(DBCONSTANTS.CLASSNAME.DASHBOARD.ACCORDION)], function (DashboardAccordion) {
                    var ca = new DashboardAccordion();
                    ca.createAccordion(data);
                });
            },

            accordionDataHandle:function (data) {
                require([DBCONSTANTS.getClassPath(DBCONSTANTS.ACCORDIONMAP[data.param.name])], function (AccordionLoader) {
                    var al = new AccordionLoader();
                    al.renderAccordion(data);
                });
            }
        });

        var DashboardCallbacks = declare("dashboard.DashboardCallbacks", null, {});

        DashboardCallbacks.initialize = function() {
            DashboardCallbacks.responseHandler = new ResponseDictionary();
            DashboardCallbacks.responseHandler.loadResponseHandler();
            DashboardCallbacks.responseHandle = DashboardCallbacks.responseHandler.responseHandles;
        };

        return DashboardCallbacks;
    });