define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var CONSTANTS = declare("noc.Constants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // VARIOUS TYPES FOR SWITCHING IN ViewManager
        CONSTANTS.TYPE = {};
        CONSTANTS.TYPE.AVAILABILITY = 1;
        CONSTANTS.TYPE.AVAILABILITY_DATA = 2;
        CONSTANTS.TYPE.COMPONENT_ZONES = 3;
        CONSTANTS.TYPE.COMPONENT_DATA = 4;

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ACTION URLs
        CONSTANTS.ACTION = {};
        CONSTANTS.ACTION.REQUEST_HANDLER = "noc/RequestHandler.action";
        CONSTANTS.ACTION.LOGIN = "user/UserLogin.action";

        CONSTANTS.ACTION.AVAILABILITY = {};
        CONSTANTS.ACTION.AVAILABILITY.META = "availability/AvailabilityMeta.action";
        CONSTANTS.ACTION.AVAILABILITY.COMPONENT = "availability/AvailabilityDataComponent.action";
        CONSTANTS.ACTION.AVAILABILITY.CLUSTER = "availability/AvailabilityDataCluster.action";
        CONSTANTS.ACTION.AVAILABILITY.HOST = "availability/AvailabilityDataHost.action";

        CONSTANTS.ACTION.COMPONENT = {};
        CONSTANTS.ACTION.COMPONENT.ZONES = "component/zones.action";
        CONSTANTS.ACTION.COMPONENT.META = 'component/Meta.action';
        CONSTANTS.ACTION.COMPONENT.DATA = 'component/Data.acton';

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // WIDGET CLASS PATHS
        CONSTANTS.WIDGETS = {};

        CONSTANTS.WIDGETS.AVAILABILITY = {};
        CONSTANTS.WIDGETS.AVAILABILITY.GRID = 'noc/Widgets/Availability/AvailabilityGrid';
        CONSTANTS.WIDGETS.AVAILABILITY.MATRIX = 'noc/Widgets/Availability/AvailMatrix';

        CONSTANTS.WIDGETS.COMPONENT = {};
        CONSTANTS.WIDGETS.COMPONENT.ZONES = 'noc/Widgets/component/Zones';
        CONSTANTS.WIDGETS.COMPONENT.CELLMAKER = 'noc/Widgets/component/CellMaker';

        return CONSTANTS;
    });