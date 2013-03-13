define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAccordion", "dashboard/helper/Scheduler"],

    function (declare, i18n, i18nString, Logger, AbstractAccordion, Scheduler) {

        dashboard.classnames.CustomAccordion = "dashboard.alerts.CustomAccordion";

        var CustomAccordion = declare(dashboard.classnames.CustomAccordion, AbstractAccordion, {

            
        });

        CustomAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.CustomAccordion));

        CustomAccordion.LINKMAP = {};
        CustomAccordion.VIEWMAP = {};

        return CustomAccordion;
    });