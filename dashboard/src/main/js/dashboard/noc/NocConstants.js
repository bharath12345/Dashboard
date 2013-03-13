define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/DashboardConstants"],

    function (require, declare, i18n, i18nString, DBCONSTANTS) {

        // this is a completely static class
        var NocConstants = declare("dashboard.noc.NocConstants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        NocConstants.CLASSNAME = {};
        NocConstants.CLASSNAME.ACCORDION = DBCONSTANTS.ACCORDIONMAP["noc"];
        NocConstants.CLASSNAME.UTILITY = "dashboard.noc.NocUtility";
        NocConstants.CLASSNAME.PAGELOADER = "dashboard.noc.PageLoader";

        NocConstants.CLASSNAME.PAGES = {};
        NocConstants.CLASSNAME.PAGES.AVAILABILITYPAGE = "dashboard.noc.pages.AvailabilityPage";
        NocConstants.CLASSNAME.PAGES.COMPONENTPAGE = "dashboard.noc.pages.ComponentPage";
        NocConstants.CLASSNAME.PAGES.TXTIMESERIESPAGE = "dashboard.noc.pages.TxTimeSeriesPage";
        NocConstants.CLASSNAME.PAGES.TXTREEMAPPAGE = "dashboard.noc.pages.TxTreemapPage";
        NocConstants.CLASSNAME.PAGES.INCIDENTPAGE = "dashboard.noc.pages.IncidentPage";
        NocConstants.CLASSNAME.PAGES.ALLCLUSTERAVAILABILITY = "dashboard.noc.pages.AllClusterAvailability";
        NocConstants.CLASSNAME.PAGES.TRANSACTIONGRID = "dashboard.noc.pages.TransactionGrid";

        NocConstants.CLASSNAME.TIMESERIES = {};
        NocConstants.CLASSNAME.TIMESERIES.BATCHTX = "dashboard.noc.timeseries.BatchTxTimeSeries";
        NocConstants.CLASSNAME.TIMESERIES.COMPSTATIC = "dashboard.noc.timeseries.CompStaticTimeSeries";
        NocConstants.CLASSNAME.TIMESERIES.ONLINETX = "dashboard.noc.timeseries.OnlineTxTimeSeries";

        NocConstants.CLASSNAME.WIDGETS = {};
        NocConstants.CLASSNAME.WIDGETS.AVAILABILITY = {};
        NocConstants.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITY = "dashboard.noc.widgets.availability.Availability";
        NocConstants.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITYGRID = "dashboard.noc.widgets.availability.AvailabilityGrid";
        NocConstants.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX = "dashboard.noc.widgets.availability.AvailMatrix";
        NocConstants.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX2 = "dashboard.noc.widgets.availability.AvailMatrix2";
        NocConstants.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES = "dashboard.noc.widgets.availability.ClusterZones";

        NocConstants.CLASSNAME.WIDGETS.COMPONENT = {};
        NocConstants.CLASSNAME.WIDGETS.COMPONENT.CELLMAKER = "dashboard.noc.widgets.component.CellMaker";
        NocConstants.CLASSNAME.WIDGETS.COMPONENT.ZONES = "dashboard.noc.widgets.component.Zones";

        NocConstants.CLASSNAME.WIDGETS.INCIDENT = {};
        NocConstants.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID = "dashboard.noc.widgets.incident.IncidentAvailabilityGrid";
        NocConstants.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONGRID = "dashboard.noc.widgets.incident.ApplicationGrid";
        NocConstants.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONDATA = "dashboard.noc.widgets.incident.ApplicationData";
        NocConstants.CLASSNAME.WIDGETS.INCIDENT.APPINCIDENTGRID = "dashboard.noc.widgets.incident.AppIncidentGrid";

        NocConstants.CLASSNAME.WIDGETS.TRANSACTION = {};
        NocConstants.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA = "dashboard.noc.widgets.transaction.GridMeta";
        NocConstants.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA = "dashboard.noc.widgets.transaction.GridData";


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
        NocConstants.ACTION.AVAILABILITY.CLUSTERZONES = "availability/ClusterZones.action";

        NocConstants.ACTION.COMPONENT = {};
        NocConstants.ACTION.COMPONENT.ZONES = "component/zones.action";
        NocConstants.ACTION.COMPONENT.META = 'component/KpiMatrixMeta.action';
        NocConstants.ACTION.COMPONENT.DATA = 'component/KpiMatrixData.acton';

        NocConstants.ACTION.INCIDENT = {};
        NocConstants.ACTION.INCIDENT.COMPONENT = "alert/Component.action";
        NocConstants.ACTION.INCIDENT.CLUSTER = "alert/Cluster.action";
        NocConstants.ACTION.INCIDENT.INSTANCE = "alert/Instance.action";
        NocConstants.ACTION.INCIDENT.APPLICATIONMETA = "alert/ApplicationMeta.action";
        NocConstants.ACTION.INCIDENT.APPLICATIONDATA = "alert/ApplicationData.action";

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