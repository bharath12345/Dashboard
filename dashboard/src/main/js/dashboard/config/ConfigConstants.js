define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config"],

    function (require, declare, i18n, i18nString) {

        dashboard.classnames.ConfigConstants = "dashboard.config.ConfigConstants";

        // this is a completely static class
        var ConfigConstants = declare(dashboard.classnames.ConfigConstants, null, {});

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