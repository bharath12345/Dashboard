define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var DashboardConstants = declare("dashboard.DashboardConstants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        DashboardConstants.CLASSNAME = {};
        DashboardConstants.CLASSNAME.DASHBOARD = {};
        DashboardConstants.CLASSNAME.DASHBOARD.ACCORDION = "dashboard.DashboardAccordion";
        DashboardConstants.CLASSNAME.DASHBOARD.CONTAINER = "dashboard.DashboardContainers";
        DashboardConstants.CLASSNAME.DASHBOARD.UTILITY = "dashboard.DashboardUtility";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        DashboardConstants.TYPE = {};
        DashboardConstants.TYPE.ACCORDIONSET = 1;
        DashboardConstants.TYPE.ACCORDIONDATA = 2;

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        DashboardConstants.ACTION = {};
        DashboardConstants.ACTION.ACCORDIONSET = "dashboard/panes.action";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        DashboardConstants.ACCORDIONMAP = [];
        DashboardConstants.ACCORDIONMAP["topoViews"] = "dashboard.config.ConfigAccordion";
        DashboardConstants.ACCORDIONMAP["commandScreens"] = "dashboard.config.ConfigAccordion";
        DashboardConstants.ACCORDIONMAP["alerts"] = "dashboard.config.ConfigAccordion";
        DashboardConstants.ACCORDIONMAP["configuration"] = "dashboard.config.ConfigAccordion";

        DashboardConstants.getClassPath = function(name) {
            return name.replace(/\./g, "/");
        }

        return DashboardConstants;
    });