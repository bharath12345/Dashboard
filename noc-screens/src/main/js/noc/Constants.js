define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var CONSTANTS = declare("noc.Constants", null, {});

        CONSTANTS.TYPE = {};
        CONSTANTS.TYPE.AVAILABILITY = 1;
        CONSTANTS.TYPE.AVAILABILITY_DATA = 2;

        CONSTANTS.ACTION = {};
        CONSTANTS.ACTION.REQUEST_HANDLER = "noc/RequestHandler.action";
        CONSTANTS.ACTION.LOGIN = "user/UserLogin.action";
        CONSTANTS.ACTION.AVAILABILITY = {};
        CONSTANTS.ACTION.AVAILABILITY.META = "availability/AvailabilityMeta.action";
        CONSTANTS.ACTION.AVAILABILITY.COMPONENT = "availability/AvailabilityDataComponent.action";
        CONSTANTS.ACTION.AVAILABILITY.CLUSTER = "availability/AvailabilityDataCluster.action";
        CONSTANTS.ACTION.AVAILABILITY.HOST = "availability/AvailabilityDataHost.action";

        return CONSTANTS;
    });