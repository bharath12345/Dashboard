define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "dojo/request/xhr", "noc/Constants", "noc/Logger"],

    function (declare, i18n, i18nString, xhr, CONSTANTS, Logger) {

        var Utility = declare(CONSTANTS.CLASSNAME.UTILITY, null, {});

        Utility.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.LOGIN));

        Utility.JSON_HEADER = { 'Content-Type': 'application/json' };

        Utility.xhrPostCentral = function (url, options) {
            xhr(url, {
                handleAs: "json",
                method: "POST",
                query: options,
                headers:Utility.JSON_HEADER
            }).then(function(data){
                    // Do something with the handled data

                    //Utility.LOG.log(Logger.SEVERITY.SEVERE, "xhr data = " + data);
                    require(["noc/ViewManager"], function (ViewManager) {
                        ViewManager.manageView(data);
                    });

                }, function(err){
                    // Handle the error condition
                    Utility.LOG.log(Logger.SEVERITY.SEVERE, "xhr error = " + err);
                }, function(evt){
                    // Handle a progress event from the request if the
                    // browser supports XHR2
                    //Utility.LOG.log(Logger.SEVERITY.SEVERE, "xhr event = " + evt);
                    //noc.ViewManager.manageView(evt);
                });
        };

        Utility.LOG = new Logger(CONSTANTS.CLASSNAME.UTILITY);

        return Utility;
    });