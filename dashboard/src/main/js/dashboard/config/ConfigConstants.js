define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var ConfigConstants = declare("dashboard.config.ConfigConstants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ConfigConstants.CLASSNAME = {};
        ConfigConstants.CLASSNAME.RENDERATTRIBUTES = "dashboard.config.RenderAttributes";
        ConfigConstants.CLASSNAME.UTILITY = "dashboard.config.ConfigUtility";

        ConfigConstants.CLASSNAME.INCIDENTGRID = "dashboard.config.pages.IncidentGrid";
        ConfigConstants.CLASSNAME.CLUSTERGRID = "dashboard.config.pages.ClusterGrid";
        ConfigConstants.CLASSNAME.TRANSACTIONGRID = "dashboard.config.pages.TransactionGrid";
        ConfigConstants.CLASSNAME.TOPOLOGY = "dashboard.config.pages.Topology";
        ConfigConstants.CLASSNAME.GLOBAL = "dashboard.config.pages.Global";

        ConfigConstants.CLASSNAME.COMBOBOX = "dashboard.config.widgets.ComboBox";
        ConfigConstants.CLASSNAME.NUMBERSPINNER = "dashboard.config.widgets.NumberSpinner";
        ConfigConstants.CLASSNAME.RADIOBUTTON = "dashboard.config.widgets.RadioButton";
        ConfigConstants.CLASSNAME.CHECKEDMULTISELECT = "dashboard.config.widgets.CheckedMultiSelect";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ConfigConstants.TYPE = {};
        ConfigConstants.TYPE.PAGECONFIG = 2;
        ConfigConstants.TYPE.SAVE = 3;

        ConfigConstants.SAVE = {};
        ConfigConstants.SAVE.INCIDENTGRID = 1;
        ConfigConstants.SAVE.CLUSTERGRID = 2;
        ConfigConstants.SAVE.TRANSACTIONGRID = 3;
        ConfigConstants.SAVE.TOPOLOGY = 4;
        ConfigConstants.SAVE.GLOBAL = 5;

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ConfigConstants.ACTION = {};
        ConfigConstants.ACTION.PAGESET = "config/pages.action";

        ConfigConstants.ACTION.ALERTGRIDSAVE = "config/alertGridDetailsSave.action";
        ConfigConstants.ACTION.CLUSTERGRIDSAVE = "config/clusterGridDetailsSave";
        ConfigConstants.ACTION.TRANSACTIONGRIDSAVE = "config/transactionGridDetailsSave";
        ConfigConstants.ACTION.TOPOLOGYSAVE = "config/topologyDetailsSave";
        ConfigConstants.ACTION.GLOBALSAVE = "config/globalDetailsSave";

        ConfigConstants.ACTION.ALERTGRIDATTRIBUTES = "config/alertGridDetailsRetrieve.action";
        ConfigConstants.ACTION.CLUSTERGRIDATTRIBUTES = "config/clusterGridDetailsRetrieve.action";
        ConfigConstants.ACTION.TRANSACTIONGRIDATTRIBUTES = "config/transactionGridDetailsRetrieve.action";
        ConfigConstants.ACTION.TOPOLOGYATTRIBUTES = "config/topologyDetailsRetrieve.action";
        ConfigConstants.ACTION.GLOBALATTRIBUTES = "config/globalDetailsRetrieve.action";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ConfigConstants.DIVTYPE = {};
        ConfigConstants.DIVTYPE.USER = "_user";
        ConfigConstants.DIVTYPE.ADMIN = "_admin";
        ConfigConstants.DIVTYPE.FACTORY = "_factory";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////

        ConfigConstants.getClassPath = function(name) {
            return name.replace(/\./g, "/");
        }

        return ConfigConstants;
    });