define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var DashboardConstants = declare("dashboard.DashboardConstants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        DashboardConstants.CLASSNAME = {};
        DashboardConstants.CLASSNAME.DASHBOARD = {};
        DashboardConstants.CLASSNAME.DASHBOARD.ACCORDION = "dashboard.DashboardAccordion";
        DashboardConstants.CLASSNAME.DASHBOARD.CONTAINER = "dashboard.DashboardContainer";
        DashboardConstants.CLASSNAME.DASHBOARD.UTILITY = "dashboard.DashboardUtility";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        DashboardConstants.ACTION = {};
        DashboardConstants.ACTION.ACCORDIONSET = "dashboard/panes.action";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        DashboardConstants.ACCORDIONMAP = [];
        DashboardConstants.ACCORDIONMAP["topology"] = "";
        DashboardConstants.ACCORDIONMAP["noc"] = "dashboard.noc.NocAccordion";
        DashboardConstants.ACCORDIONMAP["alerts"] = "";
        DashboardConstants.ACCORDIONMAP["configurableDashboard"] = "";
        DashboardConstants.ACCORDIONMAP["config"] = "dashboard.config.ConfigAccordion";

        DashboardConstants.getClassPath = function(name) {
            return name.replace(/\./g, "/");
        }

        return DashboardConstants;
    });