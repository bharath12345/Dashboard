define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "dojo/request/xhr"],

    function (declare, i18n, i18nString, xhr) {

        var Logger = declare("noc.Logger", null, {

            messages: [],

            constructor: function(classname) {
                this.classname = classname;
                this.counter = 0;
            },

            log: function (severity, message) {
                var date = (new Date()).toString();
                var logMessage = "[" + date + "] [" + severity + "] [" + this.classname + "] " + message;
                console.log(logMessage);

                return;

                //this.messages.push(logMessage);
                Logger.MESSAGES[Logger.INDEX]= logMessage;
                Logger.INDEX++;
            }
        });

        Logger.COUNTER = 0;
        Logger.MAP = {};
        Logger.MESSAGES = [];
        Logger.INDEX = 0;

        Logger.initialize = function() {
            //setInterval(function(){
            setTimeout(function(){
                console.log("Number of messages = " + Logger.MESSAGES.length);
                Logger.log(Logger.MESSAGES);
                //Logger.MESSAGES = [];
                //Logger.INDEX=0;
            }, 5*1000);
        };

        Logger.addTimer = function(logger) {
            Logger.MAP[Logger.COUNTER] = logger;
            Logger.COUNTER++;
            //setInterval(function(){
            /*setTimeout(function(){
             console.log("Log class = " + logger.classname + ". number of messages = " + logger.messages.length);
             Logger.log(logger.messages);
             logger.messages = [];
             logger.counter = 0;
             }, 5*1000);*/
            return logger;
        };

        Logger.log = function(messages) {

            for(var i=0;i<messages.length;i++) {
                xhr("logger/Logger.action", {
                    handleAs:"json",
                    method:"POST",
                    query:dojo.toJson(messages[i]),
                    headers:{ 'Content-Type': 'application/json' }
                }).then(function (data) {
                        //console.log("logger xhr success = " + data);
                    }, function (err) {
                        // Handle the error condition
                        console.log("xhr error = " + err);
                    }, function (evt) {
                        //console.log("xhr event = " + evt);
                    });
            }
        };

        Logger.SEVERITY = {};
        Logger.SEVERITY.INFO = "Info";
        Logger.SEVERITY.DEBUG = "Debug";
        Logger.SEVERITY.SEVERE = "Severe";

        // in the server, capture these log messages and dump them in a single log AND
        // in class-name specific logs - All using Java util logging so that roll up and other stuff is built in

        return Logger;
    });