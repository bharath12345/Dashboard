define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var CONSTANTS = declare("noc.Constants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.CLASSNAME = {};
        CONSTANTS.CLASSNAME.PAGELOADER = "noc.PageLoader";
        CONSTANTS.CLASSNAME.UTILITY = "noc.Utility";
        CONSTANTS.CLASSNAME.VIEWMANAGER = "noc.ViewManager";

        CONSTANTS.CLASSNAME.PAGES = {};
        CONSTANTS.CLASSNAME.PAGES.AVAILABILITYPAGE = "noc.pages.AvailabilityPage";
        CONSTANTS.CLASSNAME.PAGES.COMPONENTPAGE = "noc.pages.ComponentPage";
        CONSTANTS.CLASSNAME.PAGES.TXTIMESERIESPAGE = "noc.pages.TxTimeSeriesPage";
        CONSTANTS.CLASSNAME.PAGES.TXTREEMAPPAGE = "noc.pages.TxTreemapPage";
        CONSTANTS.CLASSNAME.PAGES.INCIDENTPAGE = "noc.pages.IncidentPage";
        CONSTANTS.CLASSNAME.PAGES.ALLCLUSTERAVAILABILITY = "noc.pages.AllClusterAvailability";
        CONSTANTS.CLASSNAME.PAGES.TRANSACTIONGRID = "noc.pages.TransactionGrid";

        CONSTANTS.CLASSNAME.TIMESERIES = {};
        CONSTANTS.CLASSNAME.TIMESERIES.BATCHTX = "noc.timeseries.BatchTxTimeSeries";
        CONSTANTS.CLASSNAME.TIMESERIES.COMPSTATIC = "noc.timeseries.CompStaticTimeSeries";
        CONSTANTS.CLASSNAME.TIMESERIES.ONLINETX = "noc.timeseries.OnlineTxTimeSeries";

        CONSTANTS.CLASSNAME.WIDGETS = {};
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY = {};
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITY = "noc.Components.Availability.Availability";
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITYGRID = "noc.Components.Availability.AvailabilityGrid";
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX = "noc.Components.Availability.AvailMatrix";
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX2 = "noc.Components.Availability.AvailMatrix2";
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES = "noc.Components.Availability.ClusterZones";

        CONSTANTS.CLASSNAME.WIDGETS.COMPONENT = {};
        CONSTANTS.CLASSNAME.WIDGETS.COMPONENT.CELLMAKER = "noc.component.CellMaker";
        CONSTANTS.CLASSNAME.WIDGETS.COMPONENT.ZONES = "noc.component.Zones";

        CONSTANTS.CLASSNAME.WIDGETS.INCIDENT = {};
        CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID = "noc.Widgets.Incident.IncidentAvailabilityGrid";
        CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONGRID = "noc.Widgets.Incident.ApplicationGrid";
        CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONDATA = "noc.Widgets.Incident.ApplicationData";

        CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION = {};
        CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA = "noc.Widgets.Transaction.GridMeta";
        CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA = "noc.Widgets.Transaction.GridData";

        CONSTANTS.CLASSNAME.LOGIN = "Login";
        CONSTANTS.CLASSNAME.UTILITY = "noc.Utility";
        CONSTANTS.CLASSNAME.VIEWMANAGER = "noc.ViewManager";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // VARIOUS TYPES FOR SWITCHING IN ViewManager
        CONSTANTS.TYPE = {};
        CONSTANTS.SUBTYPE = {};

        CONSTANTS.TYPE.LOGIN = 1653;

        CONSTANTS.TYPE.AVAILABILITY = 1;
        CONSTANTS.TYPE.COMPONENT = 2;
        CONSTANTS.TYPE.INCIDENT = 3;
        CONSTANTS.TYPE.TRANSACTION = 4;

        CONSTANTS.SUBTYPE.AVAILABILITY = {};
        CONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT = 1;
        CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER = 2;
        CONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE = 3;
        CONSTANTS.SUBTYPE.AVAILABILITY.META = 4;
        CONSTANTS.SUBTYPE.AVAILABILITY.ALLCLUSTER = 5;
        CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTERZONES = 6;

        CONSTANTS.SUBTYPE.COMPONENT = {};
        CONSTANTS.SUBTYPE.COMPONENT.ZONES = 1;
        CONSTANTS.SUBTYPE.COMPONENT.DATA = 2;

        CONSTANTS.SUBTYPE.INCIDENT = {};
        CONSTANTS.SUBTYPE.INCIDENT.META = 1;
        CONSTANTS.SUBTYPE.INCIDENT.DATA = 2;
        CONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY = {};
        CONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.COMPONENT = 3;
        CONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.CLUSTER = 4;
        CONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.INSTANCE = 5;
        CONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.META = 6;

        CONSTANTS.SUBTYPE.TRANSACTION = {};
        CONSTANTS.SUBTYPE.TRANSACTION.META = 1;
        CONSTANTS.SUBTYPE.TRANSACTION.DATA = 2;


        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ACTION URLs
        CONSTANTS.ACTION = {};
        CONSTANTS.ACTION.REQUEST_HANDLER = "noc/RequestHandler.action";
        CONSTANTS.ACTION.LOGIN = "user/UserLogin.action";
        CONSTANTS.ACTION.LOGGER = "logger/Logger.action"

        CONSTANTS.ACTION.AVAILABILITY = {};
        CONSTANTS.ACTION.AVAILABILITY.META = "availability/Meta.action";
        CONSTANTS.ACTION.AVAILABILITY.COMPONENTMETA = "availability/ComponentMeta.action";
        CONSTANTS.ACTION.AVAILABILITY.COMPONENT = "availability/ComponentData.action";
        CONSTANTS.ACTION.AVAILABILITY.CLUSTER = "availability/ClusterData.action";
        CONSTANTS.ACTION.AVAILABILITY.INSTANCE = "availability/InstanceData.action";
        CONSTANTS.ACTION.AVAILABILITY.CLUSTERZONES = "availability/ClusterZones.action";

        CONSTANTS.ACTION.COMPONENT = {};
        CONSTANTS.ACTION.COMPONENT.ZONES = "component/zones.action";
        CONSTANTS.ACTION.COMPONENT.META = 'component/KpiMatrixMeta.action';
        CONSTANTS.ACTION.COMPONENT.DATA = 'component/KpiMatrixData.acton';

        CONSTANTS.ACTION.INCIDENT = {};
        CONSTANTS.ACTION.INCIDENT.COMPONENT = "alert/Component.action";
        CONSTANTS.ACTION.INCIDENT.CLUSTER = "alert/Cluster.action";
        CONSTANTS.ACTION.INCIDENT.INSTANCE = "alert/Instance.action";
        CONSTANTS.ACTION.INCIDENT.APPLICATIONMETA = "alert/ApplicationMeta.action";
        CONSTANTS.ACTION.INCIDENT.APPLICATIONDATA = "alert/ApplicationData.action";

        CONSTANTS.ACTION.TRANSACTION = {};
        CONSTANTS.ACTION.TRANSACTION.META = "transaction/Meta.action";
        CONSTANTS.ACTION.TRANSACTION.DATA = "transaction/Data.action";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // WIDGET CLASS PATHS
        CONSTANTS.WIDGETS = {};

        CONSTANTS.WIDGETS.LOGIN = "noc/Login";

        CONSTANTS.WIDGETS.AVAILABILITY = {};
        CONSTANTS.WIDGETS.AVAILABILITY.GRID = 'noc/Widgets/Availability/AvailabilityGrid';
        CONSTANTS.WIDGETS.AVAILABILITY.MATRIX = 'noc/Widgets/Availability/AvailMatrix';
        CONSTANTS.WIDGETS.AVAILABILITY.AVAILABILITY = 'noc/Widgets/Availability/Availability';
        CONSTANTS.WIDGETS.AVAILABILITY.CLUSTERZONES = "noc/Widgets/Availability/ClusterZones";
        CONSTANTS.WIDGETS.AVAILABILITY.MATRIX2 = 'noc/Widgets/Availability/AvailMatrix2';

        CONSTANTS.WIDGETS.COMPONENT = {};
        CONSTANTS.WIDGETS.COMPONENT.ZONES = 'noc/Widgets/component/Zones';
        CONSTANTS.WIDGETS.COMPONENT.CELLMAKER = 'noc/Widgets/component/CellMaker';

        CONSTANTS.WIDGETS.INCIDENT = {};
        CONSTANTS.WIDGETS.INCIDENT.AVAILABILITY = 'noc/Widgets/Incident/IncidentAvailabilityGrid';
        CONSTANTS.WIDGETS.INCIDENT.APPLICATIONGRID = 'noc/Widgets/Incident/ApplicationGrid';
        CONSTANTS.WIDGETS.INCIDENT.APPLICATIONDATA = 'noc/Widgets/Incident/ApplicationData';

        CONSTANTS.WIDGETS.TRANSACTION = {};
        CONSTANTS.WIDGETS.TRANSACTION.META = "noc/Widgets/Transaction/GridMeta";
        CONSTANTS.WIDGETS.TRANSACTION.DATA = "noc/Widgets/Transaction/GridData";

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