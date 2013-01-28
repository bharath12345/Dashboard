define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "dojo/request/xhr", "noc/Constants"],

    function (declare, i18n, i18nString, xhr, CONSTANTS) {

        var Logger = declare("noc.Logger", null, {});

        Logger.map = {};

        Logger.SEVERITY = {};
        Logger.SEVERITY.INFO = "Info";
        Logger.SEVERITY.DEBUG = "Debug";
        Logger.SEVERITY.SEVERE = "Severe";

        Logger.log = function (classname, severity, message) {
            var date = (new Date()).toString();
            var logMessage = "[" + date + "] [" + severity + "] [" + classname + "] " + message;
            console.log(logMessage);

            var options = {};
            options.date = date;
            options.severity = severity;
            options.classname = classname;
            options.message = message;

            xhr(CONSTANTS.ACTION.LOGGER, {
                handleAs:"json",
                method:"POST",
                query:options,
                headers:Utility.JSON_HEADER
            }).then(function (data) {
                    //console.log("logger xhr success = " + data);
                }, function (err) {
                    // Handle the error condition
                    console.log("xhr error = " + err);
                }, function (evt) {
                    //console.log("xhr event = " + evt);
                });

        };

        Logger.getLogger = function(classname) {
            map[classname] = new Logger();
            return map[classname];
        };

        // in the server, capture these log messages and dump them in a single log AND
        // in class-name specific logs - All using Java util logging so that roll up and other stuff is built in

        return Logger;
    });