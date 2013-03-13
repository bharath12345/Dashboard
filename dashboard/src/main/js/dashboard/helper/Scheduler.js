define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, Logger) {

        var Scheduler = declare("dashboard.helper.Scheduler", null, {});

        Scheduler.cancelAllTimers = function() {
            for(var i=0;i<Scheduler.TIMERS.length;i++) {
                clearInterval(Scheduler.TIMERS[i]);
            }
            Scheduler.TIMERS = [];
        };

        Scheduler.startStopRefresh = function(state) {
            if(state == false) {
                Scheduler.cancelAllTimers();
            } else {
                Scheduler.POLLER.startStaggeredDatabasePolling();
            }
        };

        Scheduler.TIMERS = [];

        Scheduler.POLLER = null;

        Scheduler.LOG = Logger.addTimer(new Logger("dashboard.abstract.Scheduler"));

        return Scheduler;
    });