define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "dojo/request/xhr", "dijit/Dialog",
    "dashboard/noc/NocConstants", "noc/Logger"],

    function (declare, i18n, i18nString, xhr, Dialog, NOCCONSTANTS, Logger) {

        var NocUtility = declare(NOCCONSTANTS.CLASSNAME.UTILITY, null, {});

        NocUtility.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.UTILITY));

        NocUtility.JSON_HEADER = { 'Content-Type':'application/json' };

        NocUtility.xhrPostCentral = function (url, options) {
            xhr(url, {
                handleAs:"json",
                method:"POST",
                query:options,
                headers:NocUtility.JSON_HEADER
            }).then(function (data) {
                    // Do something with the handled data
                    NocUtility.handleResponse(data);
                }, function (err) {
                    // Handle the error condition
                    NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr error = " + err);
                }, function (evt) {
                    // Handle a progress event from the request if the
                    // browser supports XHR2
                    //NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr event = " + evt);
                });
        };

        NocUtility.handleResponse = function(data) {
        };

        return NocUtility;
    });