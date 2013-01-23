define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "dojo/request/xhr"],

    function (declare, i18n, i18nString, xhr) {

        var Utility = declare("noc.Utility", null, {});

        Utility.JSON_HEADER = { 'Content-Type': 'application/json' };

        Utility.xhrPostCentral = function (url, options) {
            xhr(url, {
                handleAs: "json",
                method: "POST",
                query: options,
                headers:Utility.JSON_HEADER
            }).then(function(data){
                    // Do something with the handled data

                    //console.log("xhr data = " + data);
                    require(["noc/ViewManager"], function (ViewManager) {
                        ViewManager.manageView(data);
                    });

                }, function(err){
                    // Handle the error condition
                    console.log("xhr error = " + err);
                }, function(evt){
                    // Handle a progress event from the request if the
                    // browser supports XHR2
                    //console.log("xhr event = " + evt);
                    //noc.ViewManager.manageView(evt);
                });
        };

        return Utility;
    });