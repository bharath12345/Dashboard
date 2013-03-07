define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "noc/Logger", "dojo/request/xhr", "dijit/Dialog",
    "dashboard/DashboardConstants", "dashboard/DashboardCallbacks"],

    function (declare, i18n, i18nString, Logger, xhr, Dialog, DBCONSTANTS, DashboardCallbacks) {

        var Utility = declare(DBCONSTANTS.CLASSNAME.DASHBOARD.UTILITY, null, {});

        Utility.LOG = Logger.addTimer(new Logger(DBCONSTANTS.CLASSNAME.DASHBOARD.UTILITY));

        Utility.JSON_HEADER = { 'Content-Type':'application/json' };

        Utility.xhrPostCentral = function (url, options) {
            xhr(url, {
                handleAs:"json",
                method:"POST",
                query:options,
                headers:Utility.JSON_HEADER
            }).then(function (data) {
                    // Do something with the handled data
                    Utility.handleResponse(data);
                }, function (err) {
                    // Handle the error condition
                    Utility.LOG.log(Logger.SEVERITY.SEVERE, "xhr error = " + err);
                }, function (evt) {
                    // Handle a progress event from the request if the
                    // browser supports XHR2
                    //Utility.LOG.log(Logger.SEVERITY.SEVERE, "xhr event = " + evt);
                });
        };

        Utility.handleResponse = function(data) {
            var type = parseInt(data.param.type[0]);
            console.log("response type = " + type);

            if(DashboardCallbacks.responseHandle[type] == undefined || DashboardCallbacks.responseHandle[type] == null) {
                console.log("No handler registered for response type = " + type);
                return;
            }

            var handler = DashboardCallbacks.responseHandle[type];
            handler(data);
        };

        return Utility;
    });