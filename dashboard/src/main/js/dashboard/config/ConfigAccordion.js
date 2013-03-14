define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "dashboard/logger/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dashboard/abstract/AbstractAccordion",
    "dashboard/config/ConfigView"],

    function (declare, i18n, i18nString, Logger, ConfigUtility, CONFIGCONSTANTS, AbstractAccordion, ConfigView) {

        dashboard.classnames.ConfigAccordion = "dashboard.config.ConfigAccordion";

        var ConfigAccordion = declare(dashboard.classnames.ConfigAccordion, AbstractAccordion, {

            ALERTSGRID: "Alerts Grid",
            CLUSTERSGRID: "Clusters Grid",
            TRANSACTIONSGRID: "Transactions Grid",
            TOPOLOGYVIEW: "Topology View",
            GLOBALCONFIG: "Global Config",

            responseHandles:[],

            renderAccordion: function(data) {
                // the superclass's overridden method will be called after this method due to custom chain configuration
                console.log("in config render accordion. data = " + dojo.toJson(data));
                this.data = data.pageListVO;
                this.param = data.param;
            },

            showView: function(id, name, type, newWindow) {
                configView = this.getView(name);
                configView.setAccordion(this);

                console.log("show page config called with id = " + id);
                var viewMeta = {
                    id:id,
                    name: name,
                    type:CONFIGCONSTANTS.TYPE.PAGECONFIG,
                    newWindow: newWindow,
                    custom:[]
                };
                var actionClass;
                switch(name) {
                    case this.ALERTSGRID:
                        actionClass = CONFIGCONSTANTS.ACTION.ALERTGRIDATTRIBUTES;
                        break;

                    case this.CLUSTERSGRID:
                        actionClass = CONFIGCONSTANTS.ACTION.CLUSTERGRIDATTRIBUTES;
                        break;

                    case this.TRANSACTIONSGRID:
                        actionClass = CONFIGCONSTANTS.ACTION.TRANSACTIONGRIDATTRIBUTES;
                        break;

                    case this.TOPOLOGYVIEW:
                        actionClass = CONFIGCONSTANTS.ACTION.TOPOLOGYATTRIBUTES;
                        break;

                    case this.GLOBALCONFIG:
                        actionClass = CONFIGCONSTANTS.ACTION.GLOBALATTRIBUTES;
                        break;

                    default:
                        console.log("Unknown page id = " + id);
                        return;
                }
                ConfigUtility.xhrPostCentral(actionClass, viewMeta);
            },

            constructor:function () {
                this.responseHandles[this.ALERTSGRID] =  this.alertGridHandle;
                this.responseHandles[this.CLUSTERSGRID] = this.clustersGridHandle;
                this.responseHandles[this.TRANSACTIONSGRID] = this.transactionsGridHandle;
                this.responseHandles[this.TOPOLOGYVIEW] = this.topologyViewHandle;
                this.responseHandles[this.GLOBALCONFIG] = this.globalConfigHandle;
            },

            alertGridHandle:function (data, ra) {
                require([CONFIGCONSTANTS.getClassPath(dashboard.classnames.ConfigViewIncidentGrid)], function(ConfigViewIncidentGrid) {
                    var configViewIncidentGrid = new ConfigViewIncidentGrid();
                    ra.renderConfigParameters(data, configViewIncidentGrid);
                });
            },

            clustersGridHandle: function(data, ra) {
                require([CONFIGCONSTANTS.getClassPath(dashboard.classnames.ConfigViewClusterGrid)], function(ConfigViewClusterGrid) {
                    var clusterGrid = new ConfigViewClusterGrid();
                    ra.renderConfigParameters(data, clusterGrid);
                });
            },

            transactionsGridHandle: function(data, ra) {
                require([CONFIGCONSTANTS.getClassPath(dashboard.classnames.ConfigViewTransactionGrid)], function(ConfigViewTransactionGrid) {
                    var transactionGrid = new ConfigViewTransactionGrid();
                    ra.renderConfigParameters(data, transactionGrid);
                });
            },

            topologyViewHandle: function(data, ra) {
                require([CONFIGCONSTANTS.getClassPath(dashboard.classnames.Topology)], function(Topology) {
                    var topology = new Topology();
                    ra.renderConfigParameters(data, topology);
                });
            },

            globalConfigHandle: function(data, ra) {
                require([CONFIGCONSTANTS.getClassPath(dashboard.classnames.ConfigViewGlobal)], function(ConfigViewGlobal) {
                    var global = new ConfigViewGlobal();
                    ra.renderConfigParameters(data, global);
                });
            },

            getLinkMap: function() {
                return ConfigAccordion.LINKMAP;
            },

            getView: function(name) {
                var configView = ConfigAccordion.VIEWMAP[name];
                if(configView == null) {
                    configView = new ConfigView();
                    ConfigAccordion.VIEWMAP[name] = configView; // there should be only one view per name (filtered views are for later)
                }
                return configView;
            }
        });

        ConfigAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAccordion));

        ConfigAccordion.LINKMAP = {};
        ConfigAccordion.VIEWMAP = {};

        return ConfigAccordion;
    });