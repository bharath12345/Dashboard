define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dojo/request/xhr", "dijit/Dialog",
    "dashboard/DashboardConstants", "noc/Logger"],

    function (declare, i18n, i18nString, xhr, Dialog, DBCONSTANTS, Logger) {

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
            switch(type) {
                case DBCONSTANTS.TYPE.ACCORDIONSET:
                    console.log("classname = " + DBCONSTANTS.getClassPath(DBCONSTANTS.CLASSNAME.DASHBOARD.ACCORDION));;
                    require([DBCONSTANTS.getClassPath(DBCONSTANTS.CLASSNAME.DASHBOARD.ACCORDION)], function (DashboardAccordion) {
                        var ca = new DashboardAccordion();
                        ca.createAccordion(data);
                    });
                    break;

                case DBCONSTANTS.TYPE.ACCORDIONDATA:
                    require([DBCONSTANTS.getClassPath(DBCONSTANTS.ACCORDIONMAP[data.param.name])], function (AccordionLoader) {
                        var al = new AccordionLoader();
                        al.renderAccordion(data);
                    });
                    break;

                case DBCONSTANTS.TYPE.PAGECONFIG:
                    Utility.handlePageConfig(data);
                    break;

                case DBCONSTANTS.TYPE.SAVE:
                    Utility.handleSave(data);
                    break;

                default:
                    console.log("unknown response type = " + type);
                    return;
            }
        };

        return Utility;
    });