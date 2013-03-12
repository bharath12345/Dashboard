define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dojo/request/xhr", "dojo/keys", "dojo/on", "dijit/Dialog",
    "dashboard/noc/NocConstants", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, xhr, keys, on, Dialog, NOCCONSTANTS, Logger) {

        var NocUtility = declare(NOCCONSTANTS.CLASSNAME.UTILITY, null, {});

        NocUtility.JSON_HEADER = { 'Content-Type':'application/json' };

        NocUtility.xhrPostCentral = function (url, options) {
            xhr(url, {
                handleAs:"json",
                method:"POST",
                query:options,
                headers:NocUtility.JSON_HEADER
            }).then(function (data) {
                    // Do something with the handled data

                    //NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr data = " + data);
                    require(["dashboard/noc/ViewManager"], function (ViewManager) {
                        ViewManager.manageView(data);
                    });

                }, function (err) {
                    // Handle the error condition
                    NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr error = " + err);
                }, function (evt) {
                    // Handle a progress event from the request if the
                    // browser supports XHR2
                    //NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr event = " + evt);
                    //noc.ViewManager.manageView(evt);
                });
        };

        NocUtility.removeChildren = function (elem) {
            while (elem.hasChildNodes()) {
                NocUtility.removeChildren(elem.lastChild)
                elem.removeChild(elem.lastChild);
            }
        };

        NocUtility.InitKeyControls = function () {
            on(document.body, "keypress", function (evt) {
                var charOrCode = evt.charCode || evt.keyCode;
                switch (charOrCode) {
                    case keys.ESCAPE:
                        // stop all timers and stop scrolling on first keypress
                        // on second keypress restart all
                        require(["dashboard/noc/PageLoader"], function (PageLoader) {
                            if (NocUtility.ESCAPE_HIT == false) {
                                NocUtility.ESCAPE_HIT = true;
                                clearInterval(PageLoader.SCROLL_TIMER);
                                var title = "Escape Hit";
                                var content = "Stopped scrolling and refresh of all data";
                                if(NocUtility.ESCAPE_DIALOG == null) {
                                    NocUtility.ESCAPE_DIALOG = new Dialog({
                                        title: title,
                                        content: content
                                    });
                                    NocUtility.ESCAPE_DIALOG.show();
                                } else {
                                    NocUtility.ESCAPE_DIALOG.attr("content", content);
                                    NocUtility.ESCAPE_DIALOG.attr("title", title);
                                    NocUtility.ESCAPE_DIALOG.show();
                                }
                            } else {
                                NocUtility.ESCAPE_HIT = false;
                                PageLoader.SCROLL_TIMER = setInterval(PageLoader.prototype.pageScroll, PageLoader.SCROLL_PERIOD);
                                if(NocUtility.ESCAPE_DIALOG != null) {
                                    NocUtility.ESCAPE_DIALOG.attr("content", "Restarted scrolling and refresh of data");
                                    NocUtility.ESCAPE_DIALOG.attr("title", "Escape Hit Cleared");
                                    NocUtility.ESCAPE_DIALOG.show();
                                } else {
                                    console.log("somehow escape dialog not initialized");
                                }
                            }
                            setTimeout(function(){dashboard.noc.NocUtility.ESCAPE_DIALOG.hide();}, 2*1000);
                        });
                        break;
                    case keys.SPACE:
                        // stop scrolling but NOT timers on first keypress
                        // restart scroll on second keypress

                        require(["dashboard/noc/PageLoader"], function (PageLoader) {
                            if (NocUtility.SPACE_HIT == false) {
                                NocUtility.SPACE_HIT = true;
                                clearInterval(PageLoader.SCROLL_TIMER);
                                var title = "Space Hit";
                                var content = "Stopped scrolling but data refresh continues...";
                                if(NocUtility.SPACE_DIALOG == null) {
                                    NocUtility.SPACE_DIALOG = new Dialog({
                                        title: title,
                                        content: content
                                    });
                                    NocUtility.SPACE_DIALOG.show();
                                } else {
                                    NocUtility.SPACE_DIALOG.attr("content", content);
                                    NocUtility.ESCAPE_DIALOG.attr("title", title);
                                    NocUtility.SPACE_DIALOG.show();
                                }
                            } else {
                                NocUtility.SPACE_HIT = false;
                                PageLoader.SCROLL_TIMER = setInterval(PageLoader.prototype.pageScroll, PageLoader.SCROLL_PERIOD);
                                if(NocUtility.SPACE_DIALOG != null) {
                                    NocUtility.SPACE_DIALOG.attr("content", "Restarted scrolling and refresh of data");
                                    NocUtility.SPACE_DIALOG.attr("title", "Space Hit Cleared");
                                    NocUtility.SPACE_DIALOG.show();
                                } else {
                                    console.log("Somehow space hit but dialog not initialized");
                                }
                            }
                            setTimeout(function(){dashboard.noc.NocUtility.SPACE_DIALOG.hide();}, 2*1000);
                        });
                        break;
                }
            })
        };

        NocUtility.LOG = new Logger(NOCCONSTANTS.CLASSNAME.UTILITY);

        NocUtility.SPACE_HIT = false;
        NocUtility.ESCAPE_HIT = false;

        NocUtility.ESCAPE_DIALOG = null;
        NocUtility.SPACE_DIALOG = null;

        return NocUtility;
    });