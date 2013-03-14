define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc"],

    function (require, declare, i18n, i18nString) {

        dashboard.classnames.NocConstants = "dashboard.noc.NocConstants";

        // this is a completely static class
        var NocConstants = declare("dashboard.noc.NocConstants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // VARIOUS TYPES FOR SWITCHING VIEWS
        NocConstants.TYPE = {};
        NocConstants.SUBTYPE = {};

        NocConstants.TYPE.LOGIN = 1653;

        NocConstants.TYPE.AVAILABILITY = 1;
        NocConstants.TYPE.COMPONENT = 2;
        NocConstants.TYPE.INCIDENT = 3;
        NocConstants.TYPE.TRANSACTION = 4;

        NocConstants.SUBTYPE.AVAILABILITY = {};
        NocConstants.SUBTYPE.AVAILABILITY.COMPONENT = 1;
        NocConstants.SUBTYPE.AVAILABILITY.CLUSTER = 2;
        NocConstants.SUBTYPE.AVAILABILITY.INSTANCE = 3;
        NocConstants.SUBTYPE.AVAILABILITY.META = 4;
        NocConstants.SUBTYPE.AVAILABILITY.ALLCLUSTER = 5;
        NocConstants.SUBTYPE.AVAILABILITY.CLUSTERZONES = 6;

        NocConstants.SUBTYPE.COMPONENT = {};
        NocConstants.SUBTYPE.COMPONENT.ZONES = 1;
        NocConstants.SUBTYPE.COMPONENT.DATA = 2;

        NocConstants.SUBTYPE.INCIDENT = {};
        NocConstants.SUBTYPE.INCIDENT.META = 1;
        NocConstants.SUBTYPE.INCIDENT.DATA = 2;
        NocConstants.SUBTYPE.INCIDENT.AVAILABILITY = {};
        NocConstants.SUBTYPE.INCIDENT.AVAILABILITY.COMPONENT = 3;
        NocConstants.SUBTYPE.INCIDENT.AVAILABILITY.CLUSTER = 4;
        NocConstants.SUBTYPE.INCIDENT.AVAILABILITY.INSTANCE = 5;
        NocConstants.SUBTYPE.INCIDENT.AVAILABILITY.META = 6;

        NocConstants.SUBTYPE.TRANSACTION = {};
        NocConstants.SUBTYPE.TRANSACTION.META = 1;
        NocConstants.SUBTYPE.TRANSACTION.DATA = 2;
        NocConstants.SUBTYPE.TRANSACTION.APPDATA = 3;


        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ACTION URLs
        NocConstants.ACTION = {};
        NocConstants.ACTION.REQUEST_HANDLER = "noc/RequestHandler.action";
        NocConstants.ACTION.LOGIN = "user/UserLogin.action";

        NocConstants.ACTION.AVAILABILITY = {};
        NocConstants.ACTION.AVAILABILITY.META = "availability/Meta.action";
        NocConstants.ACTION.AVAILABILITY.COMPONENTMETA = "availability/ComponentMeta.action";
        NocConstants.ACTION.AVAILABILITY.COMPONENT = "availability/ComponentData.action";
        NocConstants.ACTION.AVAILABILITY.CLUSTER = "availability/ClusterData.action";
        NocConstants.ACTION.AVAILABILITY.INSTANCE = "availability/InstanceData.action";
        NocConstants.ACTION.AVAILABILITY.CLUSTERZONES = "availability/NocWidgetClusterZones.action";

        NocConstants.ACTION.COMPONENT = {};
        NocConstants.ACTION.COMPONENT.ZONES = "component/zones.action";
        NocConstants.ACTION.COMPONENT.META = 'component/KpiMatrixMeta.action';
        NocConstants.ACTION.COMPONENT.DATA = 'component/KpiMatrixData.acton';

        NocConstants.ACTION.INCIDENT = {};
        NocConstants.ACTION.INCIDENT.COMPONENT = "alert/Component.action";
        NocConstants.ACTION.INCIDENT.CLUSTER = "alert/Cluster.action";
        NocConstants.ACTION.INCIDENT.INSTANCE = "alert/Instance.action";
        NocConstants.ACTION.INCIDENT.APPLICATIONMETA = "alert/ApplicationMeta.action";
        NocConstants.ACTION.INCIDENT.APPLICATIONDATA = "alert/NocWidgetIncidentData.action";

        NocConstants.ACTION.TRANSACTION = {};
        NocConstants.ACTION.TRANSACTION.META = "transaction/Meta.action";
        NocConstants.ACTION.TRANSACTION.DATA = "transaction/Data.action";
        NocConstants.ACTION.TRANSACTION.APPDATA = "transaction/AppData.action";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

        NocConstants.ATTRIBUTE = {};

        NocConstants.ATTRIBUTE.AVAILABILITY = {};
        NocConstants.ATTRIBUTE.AVAILABILITY.COMPONENT = "data-component-id";
        NocConstants.ATTRIBUTE.AVAILABILITY.CLUSTER = "data-cluster-id";
        NocConstants.ATTRIBUTE.AVAILABILITY.INSTANCE = "data-instance-id";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

        NocConstants.PREFIX = {};
        NocConstants.PREFIX.COMPONENT_GRID = "COMPONENT_GRID_";
        NocConstants.PREFIX.COMPONENT_CELL = "COMPONENT_CELL_";
        NocConstants.PREFIX.CLUSTER_CELL = "CLUSTER_CELL_";
        NocConstants.PREFIX.INSTANCE_CELL = "INSTANCE_CELL_";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

        NocConstants.TXGRID = {};
        NocConstants.TXGRID.ALERTS = 1;
        NocConstants.TXGRID.RESPONSE = 2;
        NocConstants.TXGRID.VOLUME = 3;
        NocConstants.TXGRID.STATUS = 4;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

        NocConstants.getClassPath = function(name) {
            return name.replace(/\./g, "/");
        }

        return NocConstants;
    });