define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var CONSTANTS = declare("noc.Constants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // VARIOUS TYPES FOR SWITCHING IN ViewManager
        CONSTANTS.TYPE = {};
        CONSTANTS.SUBTYPE = {};

        CONSTANTS.TYPE.LOGIN = 1653;

        CONSTANTS.TYPE.AVAILABILITY = 1;
        CONSTANTS.TYPE.COMPONENT = 2;
        CONSTANTS.TYPE.ALERT = 3;

        CONSTANTS.SUBTYPE.AVAILABILITY = {};
        CONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT = 1;
        CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER = 2;
        CONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE = 3;
        CONSTANTS.SUBTYPE.AVAILABILITY.META = 4;

        CONSTANTS.SUBTYPE.COMPONENT = {};
        CONSTANTS.SUBTYPE.COMPONENT.ZONES = 1;
        CONSTANTS.SUBTYPE.COMPONENT.DATA = 2;

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ACTION URLs
        CONSTANTS.ACTION = {};
        CONSTANTS.ACTION.REQUEST_HANDLER = "noc/RequestHandler.action";
        CONSTANTS.ACTION.LOGIN = "user/UserLogin.action";

        CONSTANTS.ACTION.AVAILABILITY = {};
        CONSTANTS.ACTION.AVAILABILITY.META = "availability/Meta.action";
        CONSTANTS.ACTION.AVAILABILITY.COMPONENT = "availability/ComponentData.action";
        CONSTANTS.ACTION.AVAILABILITY.CLUSTER = "availability/ClusterData.action";
        CONSTANTS.ACTION.AVAILABILITY.INSTANCE = "availability/InstanceData.action";

        CONSTANTS.ACTION.COMPONENT = {};
        CONSTANTS.ACTION.COMPONENT.ZONES = "component/zones.action";
        CONSTANTS.ACTION.COMPONENT.META = 'component/KpiMatrixMeta.action';
        CONSTANTS.ACTION.COMPONENT.DATA = 'component/KpiMatrixData.acton';

        CONSTANTS.ACTION.ALERT = {};
        CONSTANTS.ACTION.ALERT.COMPONENT = "alert/Component.action";
        CONSTANTS.ACTION.ALERT.CLUSTER = "alert/Cluster.action";
        CONSTANTS.ACTION.ALERT.INSTANCE = "alert/Instance.action";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // WIDGET CLASS PATHS
        CONSTANTS.WIDGETS = {};

        CONSTANTS.WIDGETS.LOGIN = "noc/Login";

        CONSTANTS.WIDGETS.AVAILABILITY = {};
        CONSTANTS.WIDGETS.AVAILABILITY.GRID = 'noc/Widgets/Availability/AvailabilityGrid';
        CONSTANTS.WIDGETS.AVAILABILITY.MATRIX = 'noc/Widgets/Availability/AvailMatrix';

        CONSTANTS.WIDGETS.COMPONENT = {};
        CONSTANTS.WIDGETS.COMPONENT.ZONES = 'noc/Widgets/component/Zones';
        CONSTANTS.WIDGETS.COMPONENT.CELLMAKER = 'noc/Widgets/component/CellMaker';

        CONSTANTS.WIDGETS.ALERT = {};
        CONSTANTS.WIDGETS.ALERT.AVAILABILITY = 'noc/Widgets/Alert/AlertAvailabilityGrid';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////        

        CONSTANTS.ATTRIBUTE = {};

        CONSTANTS.ATTRIBUTE.AVAILABILITY = {};
        CONSTANTS.ATTRIBUTE.AVAILABILITY.COMPONENT = "data-component-id";
        CONSTANTS.ATTRIBUTE.AVAILABILITY.CLUSTER = "data-cluster-id";
        CONSTANTS.ATTRIBUTE.AVAILABILITY.INSTANCE = "data-instance-id";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////        

        CONSTANTS.PREFIX = {};
        CONSTANTS.PREFIX.COMPONENT_GRID = "COMPONENT_GRID_";
        CONSTANTS.PREFIX.COMPONENT_CELL = "COMPONENT_CELL_";
        CONSTANTS.PREFIX.CLUSTER_CELL = "CLUSTER_CELL_";
        CONSTANTS.PREFIX.INSTANCE_CELL = "INSTANCE_CELL_";

        return CONSTANTS;
    });