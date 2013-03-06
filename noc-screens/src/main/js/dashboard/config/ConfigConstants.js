define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!config/nls/config", "dashboard/Constants"],

    function (require, declare, i18n, i18nString, CONSTANTS) {

        // this is a completely static class
        var CONSTANTS = declare("dashboard.config.Constants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.CLASSNAME = {};
        CONSTANTS.CLASSNAME.CONFIG = "dashboard.config.Config";
        CONSTANTS.CLASSNAME.ACCORDION = CONSTANTS.ACCORDIONMAP["configuration"];
        CONSTANTS.CLASSNAME.PAGEELEMENTS = "dashboard.config.ConfigPageElements";
        CONSTANTS.CLASSNAME.RENDERATTRIBUTES = "dashboard.config.RenderAttributes";
        CONSTANTS.CLASSNAME.UTILITY = "dashboard.config.Utility";

        CONSTANTS.CLASSNAME.INCIDENTGRID = "dashboard.config.pages.IncidentGrid";
        CONSTANTS.CLASSNAME.CLUSTERGRID = "dashboard.config.pages.ClusterGrid";
        CONSTANTS.CLASSNAME.TRANSACTIONGRID = "dashboard.config.pages.TransactionGrid";
        CONSTANTS.CLASSNAME.TOPOLOGY = "dashboard.config.pages.Topology";
        CONSTANTS.CLASSNAME.GLOBAL = "dashboard.config.pages.Global";

        CONSTANTS.CLASSNAME.COMBOBOX = "dashboard.config.widgets.ComboBox";
        CONSTANTS.CLASSNAME.NUMBERSPINNER = "dashboard.config.widgets.NumberSpinner";
        CONSTANTS.CLASSNAME.RADIOBUTTON = "dashboard.config.widgets.RadioButton";
        CONSTANTS.CLASSNAME.CHECKEDMULTISELECT = "dashboard.config.widgets.CheckedMultiSelect";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.TYPE = {};
        CONSTANTS.TYPE.ACCORDION = 1;
        CONSTANTS.TYPE.PAGECONFIG = 2;
        CONSTANTS.TYPE.SAVE = 3;

        CONSTANTS.SAVE = {};
        CONSTANTS.SAVE.INCIDENTGRID = 1;
        CONSTANTS.SAVE.CLUSTERGRID = 2;
        CONSTANTS.SAVE.TRANSACTIONGRID = 3;
        CONSTANTS.SAVE.TOPOLOGY = 4;
        CONSTANTS.SAVE.GLOBAL = 5;

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.ACTION = {};
        CONSTANTS.ACTION.PAGESET = "config/pages.action";

        CONSTANTS.ACTION.ALERTGRIDSAVE = "config/alertGridDetailsSave.action";
        CONSTANTS.ACTION.CLUSTERGRIDSAVE = "config/clusterGridDetailsSave";
        CONSTANTS.ACTION.TRANSACTIONGRIDSAVE = "config/transactionGridDetailsSave";
        CONSTANTS.ACTION.TOPOLOGYSAVE = "config/topologyDetailsSave";
        CONSTANTS.ACTION.GLOBALSAVE = "config/globalDetailsSave";

        CONSTANTS.ACTION.ALERTGRIDATTRIBUTES = "config/alertGridDetailsRetrieve.action";
        CONSTANTS.ACTION.CLUSTERGRIDATTRIBUTES = "config/clusterGridDetailsRetrieve.action";
        CONSTANTS.ACTION.TRANSACTIONGRIDATTRIBUTES = "config/transactionGridDetailsRetrieve.action";
        CONSTANTS.ACTION.TOPOLOGYATTRIBUTES = "config/topologyDetailsRetrieve.action";
        CONSTANTS.ACTION.GLOBALATTRIBUTES = "config/globalDetailsRetrieve.action";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.DIVTYPE = {};
        CONSTANTS.DIVTYPE.USER = "_user";
        CONSTANTS.DIVTYPE.ADMIN = "_admin";
        CONSTANTS.DIVTYPE.FACTORY = "_factory";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////

        CONSTANTS.getClassPath = function(name) {
            return name.replace(/\./g, "/");
        }

        return CONSTANTS;
    });