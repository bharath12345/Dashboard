define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc"],

    function (declare, i18n, i18nString) {

        var Logger = declare("noc.Logger", null, {});

        Logger.map = {};

        Logger.log = function (classname, string) {
            var date = (new Date()).toString();
            var logMessage = "[" + date + "] [" + classname + "] " + string;
            console.log(logMessage);
        };

        Logger.getLogger = function(classname) {

        };

        // every 1 minute send all these log messages to the server
        // in the server, capture these log messages and dump them in a single log AND
        // in class-name specific logs - All using Java util logging so that roll up and other stuff is built in

        return Logger;
    });