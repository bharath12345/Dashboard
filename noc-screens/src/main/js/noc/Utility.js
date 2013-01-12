define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "dojo/request/xhr"],

    function (declare, i18n, i18nString, xhr) {

        var Utility = declare("noc.Utility", null, {});

        Utility.xhrPostCentral = function (url, options) {
            xhr(url, options, {
                handleAs: "json"
            }).then(function(data){
                    // Do something with the handled data
                    noc.ViewManager.manageView(data);
                }, function(err){
                    // Handle the error condition
                    console.log("xhr error = " + err);
                }, function(evt){
                    // Handle a progress event from the request if the
                    // browser supports XHR2
                    console.log("hit event = " + evt);
                });
        };

        Utility.serialiseObject = function (obj) {
            var pairs = [];
            for (var prop in obj) {
                if (!obj.hasOwnProperty(prop)) {
                    continue;
                }
                if (Object.prototype.toString.call(obj[prop]) == '[object Object]') {
                    pairs.push(ViewManager.serialiseObject(obj[prop]));
                    continue;
                }
                pairs.push(prop + '=' + obj[prop]);
            }
            return pairs.join('&');
        };

        return Utility;
    });