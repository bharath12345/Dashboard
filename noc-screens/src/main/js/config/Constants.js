define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!config/nls/config"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var CONSTANTS = declare("config.Constants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.CLASSNAME = {};
        CONSTANTS.CLASSNAME.CONFIG = "config.Config";
        CONSTANTS.CLASSNAME.ACCORDION = "config.ConfigAccordion";
        CONSTANTS.CLASSNAME.PAGEELEMENTS = "config.ConfigPageElements";
        CONSTANTS.CLASSNAME.RENDERATTRIBUTES = "config.RenderAttributes";
        CONSTANTS.CLASSNAME.UTILITY = "config.Utility";

        CONSTANTS.CLASSNAME.INCIDENTGRID = "config.pages.IncidentGrid";
        CONSTANTS.CLASSNAME.CLUSTERGRID = "config.pages.ClusterGrid";
        CONSTANTS.CLASSNAME.TRANSACTIONGRID = "config.pages.TransactionGrid";
        CONSTANTS.CLASSNAME.TOPOLOGY = "config.pages.Topology";

        CONSTANTS.CLASSNAME.COMBOBOX = "config.widgets.ComboBox";
        CONSTANTS.CLASSNAME.NUMBERSPINNER = "config.widgets.NumberSpinner";
        CONSTANTS.CLASSNAME.RADIOBUTTON = "config.widgets.RadioButton";
        CONSTANTS.CLASSNAME.CHECKEDMULTISELECT = "config.widgets.CheckedMultiSelect";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.TYPE = {};
        CONSTANTS.TYPE.ACCORDION = 1;
        CONSTANTS.TYPE.PAGECONFIG = 2;
        CONSTANTS.TYPE.SAVE = 3;

        CONSTANTS.SAVE = {};
        CONSTANTS.SAVE.INCIDENTGRID = 1;
        CONSTANTS.SAVE.CLUSTERGRID = 2;

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.ACTION = {};
        CONSTANTS.ACTION.PAGESET = "config/pages.action";

        CONSTANTS.ACTION.ALERTGRIDATTRIBUTES = "config/alertGridDetailsRetrieve.action";
        CONSTANTS.ACTION.ALERTGRIDSAVE = "config/alertGridDetailsSave.action";
        CONSTANTS.ACTION.CLUSTERGRIDSAVE = "config/clusterGridDetailsSave";

        CONSTANTS.ACTION.CLUSTERGRIDATTRIBUTES = "config/clusterGridDetailsRetrieve.action";
        CONSTANTS.ACTION.TRANSACTIONGRIDATTRIBUTES = "config/transactionGridDetailsRetrieve.action";
        CONSTANTS.ACTION.TOPOLOGYATTRIBUTES = "config/topologyDetailsRetrieve.action";

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