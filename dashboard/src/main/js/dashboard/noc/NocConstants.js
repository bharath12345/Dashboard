define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "dashboard/DashboardConstants"],

    function (require, declare, i18n, i18nString, DBCONSTANTS) {

        // this is a completely static class
        var NocConstants = declare("dashboard.noc.NocConstants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        NocConstants.CLASSNAME = {};
        NocConstants.CLASSNAME.ACCORDION = DBCONSTANTS.ACCORDIONMAP["noc"];
        NocConstants.CLASSNAME.UTILITY = "dashboard.noc.NocUtility";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////

        NocConstants.getClassPath = function(name) {
            return name.replace(/\./g, "/");
        }

        return NocConstants;
    });