define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!config/nls/config", "dojo/request/xhr",
    "config/Constants", "noc/Logger"],

    function (declare, i18n, i18nString, xhr, CONSTANTS, Logger) {

        var Utility = declare(CONSTANTS.CLASSNAME.UTILITY, null, {});

        Utility.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.UTILITY));

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
            switch(type) {
                case CONSTANTS.TYPE.ACCORDION:
                    Utility.handleAccordion(data);
                    break;

                case CONSTANTS.TYPE.PAGECONFIG:
                    Utility.handlePageConfig(data);
                    break;

                default:
                    console.log("unknown response type = " + type);
                    return;
            }
        };

        Utility.handleAccordion = function(data) {
            require([CONSTANTS.WIDGETS.ACCORDION], function (ConfigAccordion) {
                var ca = new ConfigAccordion();
                ca.renderAccordion(data);
            });
        };

        Utility.handlePageConfig = function(data) {
            require([CONSTANTS.WIDGETS.RENDERATTRIBUTES], function (RenderAttributes) {
                var ra = new RenderAttributes();
                ra.renderConfigParameters(data);
            });
        };s

        return Utility;
    });