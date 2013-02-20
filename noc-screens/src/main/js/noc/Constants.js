define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var CONSTANTS = declare("noc.Constants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.CLASSNAME = {};
        CONSTANTS.CLASSNAME.PAGELOADER = "noc.PageLoader";
        CONSTANTS.CLASSNAME.UTILITY = "noc.Utility";
        CONSTANTS.CLASSNAME.VIEWMANAGER = "noc.ViewManager";
        CONSTANTS.CLASSNAME.CONFIG = "noc.Config";

        CONSTANTS.CLASSNAME.PAGES = {};
        CONSTANTS.CLASSNAME.PAGES.AVAILABILITYPAGE = "noc.pages.AvailabilityPage";
        CONSTANTS.CLASSNAME.PAGES.COMPONENTPAGE = "noc.pages.ComponentPage";
        CONSTANTS.CLASSNAME.PAGES.TXTIMESERIESPAGE = "noc.pages.TxTimeSeriesPage";
        CONSTANTS.CLASSNAME.PAGES.TXTREEMAPPAGE = "noc.pages.TxTreemapPage";
        CONSTANTS.CLASSNAME.PAGES.INCIDENTPAGE = "noc.pages.IncidentPage";
        CONSTANTS.CLASSNAME.PAGES.ALLCLUSTERAVAILABILITY = "noc.pages.AllClusterAvailability";
        CONSTANTS.CLASSNAME.PAGES.TRANSACTIONGRID = "noc.pages.TransactionGrid";
        CONSTANTS.CLASSNAME.PAGES.TOPOLOGYPAGE = "noc.pages.TopologyPage";

        CONSTANTS.CLASSNAME.TIMESERIES = {};
        CONSTANTS.CLASSNAME.TIMESERIES.BATCHTX = "noc.timeseries.BatchTxTimeSeries";
        CONSTANTS.CLASSNAME.TIMESERIES.COMPSTATIC = "noc.timeseries.CompStaticTimeSeries";
        CONSTANTS.CLASSNAME.TIMESERIES.ONLINETX = "noc.timeseries.OnlineTxTimeSeries";

        CONSTANTS.CLASSNAME.WIDGETS = {};
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY = {};
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITY = "noc.Widgets.Availability.Availability";
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITYGRID = "noc.Widgets.Availability.AvailabilityGrid";
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX = "noc.Widgets.Availability.AvailMatrix";
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX2 = "noc.Widgets.Availability.AvailMatrix2";
        CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES = "noc.Widgets.Availability.ClusterZones";

        CONSTANTS.CLASSNAME.WIDGETS.COMPONENT = {};
        CONSTANTS.CLASSNAME.WIDGETS.COMPONENT.CELLMAKER = "noc.Component.CellMaker";
        CONSTANTS.CLASSNAME.WIDGETS.COMPONENT.ZONES = "noc.Component.Zones";

        CONSTANTS.CLASSNAME.WIDGETS.INCIDENT = {};
        CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID = "noc.Widgets.Incident.IncidentAvailabilityGrid";
        CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONGRID = "noc.Widgets.Incident.ApplicationGrid";
        CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONDATA = "noc.Widgets.Incident.ApplicationData";

        CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION = {};
        CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA = "noc.Widgets.Transaction.GridMeta";
        CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA = "noc.Widgets.Transaction.GridData";

        CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY = {};
        CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES = "noc.Widgets.Topology.RenderNodes";
        CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERCONNECTIVITY = "noc.Widgets.Topology.RenderConnectivity";
        CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.NODESTATUS = "noc.Widgets.Topology.NodeStatus";
        CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.CONNECTIONSTATUS = "noc.Widgets.Topology.ConnectionStatus";

        CONSTANTS.CLASSNAME.WIDGETS.CONFIG = {};
        CONSTANTS.CLASSNAME.WIDGETS.CONFIG.APPALERTGRID = "noc.Widgets.Config.AppAlertGrid";

        CONSTANTS.CLASSNAME.LOGIN = "login/Login";
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
        CONSTANTS.TYPE.TOPOLOGY = 5;
        CONSTANTS.TYPE.CONFIG = 6;

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
        CONSTANTS.SUBTYPE.TRANSACTION.APPDATA = 3;

        CONSTANTS.SUBTYPE.TOPOLOGY = {};
        CONSTANTS.SUBTYPE.TOPOLOGY.NODES = 1;
        CONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIVITY = 2;
        CONSTANTS.SUBTYPE.TOPOLOGY.NODESTATUS = 3;
        CONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIONSTATUS = 4;

        CONSTANTS.SUBTYPE.CONFIG = {};
        CONSTANTS.SUBTYPE.APPALERTGRID = 1;


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
        CONSTANTS.ACTION.TRANSACTION.APPDATA = "transaction/AppData.action";

        CONSTANTS.ACTION.TOPOLOGY = {};
        CONSTANTS.ACTION.TOPOLOGY.NODES = "topology/Nodes.action";
        CONSTANTS.ACTION.TOPOLOGY.CONNECTIONS = "topology/Connections.action";
        CONSTANTS.ACTION.TOPOLOGY.NODESTATUS = "topology/NodeStatus.action";
        CONSTANTS.ACTION.TOPOLOGY.CONNECTIONSTATUS = "topology/ConnectionStatus.action";

        CONSTANTS.ACTION.CONFIG = {};
        CONSTANTS.ACTION.CONFIG.APPALERTGRID = "config/applicableAlertGridDetailsRetrieve";

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

        CONSTANTS.TXGRID = {};
        CONSTANTS.TXGRID.ALERTS = 1;
        CONSTANTS.TXGRID.RESPONSE = 2;
        CONSTANTS.TXGRID.VOLUME = 3;
        CONSTANTS.TXGRID.STATUS = 4;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

        CONSTANTS.getClassPath = function(name) {
            return name.replace(/\./g, "/");
        }

        return CONSTANTS;
    });