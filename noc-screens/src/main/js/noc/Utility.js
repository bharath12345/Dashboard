define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "dojo/request/xhr", "dojo/keys", "dojo/on",
    "noc/Constants", "noc/Logger"],

    function (declare, i18n, i18nString, xhr, keys, on, CONSTANTS, Logger) {

        var Utility = declare(CONSTANTS.CLASSNAME.UTILITY, null, {});

        Utility.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.LOGIN));

        Utility.JSON_HEADER = { 'Content-Type':'application/json' };

        Utility.xhrPostCentral = function (url, options) {
            xhr(url, {
                handleAs:"json",
                method:"POST",
                query:options,
                headers:Utility.JSON_HEADER
            }).then(function (data) {
                    // Do something with the handled data

                    //Utility.LOG.log(Logger.SEVERITY.SEVERE, "xhr data = " + data);
                    require(["noc/ViewManager"], function (ViewManager) {
                        ViewManager.manageView(data);
                    });

                }, function (err) {
                    // Handle the error condition
                    Utility.LOG.log(Logger.SEVERITY.SEVERE, "xhr error = " + err);
                }, function (evt) {
                    // Handle a progress event from the request if the
                    // browser supports XHR2
                    //Utility.LOG.log(Logger.SEVERITY.SEVERE, "xhr event = " + evt);
                    //noc.ViewManager.manageView(evt);
                });
        };

        Utility.removeChildren = function (elem) {
            while (elem.hasChildNodes()) {
                Utility.removeChildren(elem.lastChild)
                elem.removeChild(elem.lastChild);
            }
        };

        Utility.InitKeyControls = function () {
            on(document.body, "keypress", function (evt) {
                var charOrCode = evt.charCode || evt.keyCode;
                switch (charOrCode) {
                    case keys.ESCAPE:
                        // stop all timers and stop scrolling on first keypress
                        // on second keypress restart all
                        require(["noc/PageLoader"], function (PageLoader) {
                            if (Utility.ESCAPE_HIT == false) {
                                Utility.ESCAPE_HIT = true;
                                clearInterval(PageLoader.SCROLL_TIMER);
                            } else {
                                Utility.ESCAPE_HIT = false;
                                PageLoader.SCROLL_TIMER = setInterval(PageLoader.prototype.pageScroll, PageLoader.SCROLL_PERIOD);
                            }
                        });
                        break;
                    case keys.SPACE:
                        // stop scrolling but NOT timers on first keypress
                        // restart scroll on second keypress

                        require(["noc/PageLoader"], function (PageLoader) {
                            if (Utility.SPACE_HIT == false) {
                                Utility.SPACE_HIT = true;
                                clearInterval(PageLoader.SCROLL_TIMER);
                            } else {
                                Utility.SPACE_HIT = false;
                                PageLoader.SCROLL_TIMER = setInterval(PageLoader.prototype.pageScroll, PageLoader.SCROLL_PERIOD);
                            }
                        });
                        break;
                }
            })
        };

        Utility.LOG = new Logger(CONSTANTS.CLASSNAME.UTILITY);
        Utility.SPACE_HIT = false;
        Utility.ESCAPE_HIT = false;

        return Utility;
    });