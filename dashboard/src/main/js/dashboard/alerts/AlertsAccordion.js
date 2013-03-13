define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAccordion", "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, Logger, AbstractAccordion, Scheduler) {

        dashboard.classnames.AlertsAccordion = "dashboard.alerts.AlertsAccordion";

        var AlertsAccordion = declare(dashboard.classnames.AlertsAccordion, AbstractAccordion, {

            
        });

        AlertsAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.AlertsAccordion));

        AlertsAccordion.LINKMAP = {};
        AlertsAccordion.VIEWMAP = {};

        return AlertsAccordion;
    });