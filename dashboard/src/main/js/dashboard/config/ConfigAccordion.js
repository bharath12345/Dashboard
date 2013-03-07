define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "noc/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dashboard/abstract/AbstractAccordion"],

    function (declare, i18n, i18nString, Logger, ConfigUtility, CONFIGCONSTANTS, AbstractAccordion) {

        var ConfigAccordion = declare(CONFIGCONSTANTS.CLASSNAME.ACCORDION, AbstractAccordion, {

            ALERTSGRID: "Alerts Grid",
            CLUSTERSGRID: "Clusters Grid",
            TRANSACTIONSGRID: "Transactions Grid",
            TOPOLOGYVIEW: "Topology View",
            GLOBALCONFIG: "Global Config",

            responseHandles:[],

            renderAccordion: function(data) {
                // keep in mind that the superclass's method will be called after this method is finished due to the
                // custom chain configuration
                console.log("in config render accordion. data = " + dojo.toJson(data));
                this.data = data.pageListVO;
                this.param = data.param;
            },

            showPageConfig: function(id, name) {
                console.log("show page config called with id = " + id);
                var viewMeta = {
                    id:id,
                    name: name,
                    type:CONFIGCONSTANTS.TYPE.PAGECONFIG,
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
                require([CONFIGCONSTANTS.getClassPath(CONFIGCONSTANTS.CLASSNAME.INCIDENTGRID)], function(IncidentGrid) {
                    var incidentGrid = new IncidentGrid();
                    ra.renderConfigParameters(data, incidentGrid);
                });
            },

            clustersGridHandle: function(data, ra) {
                require([CONFIGCONSTANTS.getClassPath(CONFIGCONSTANTS.CLASSNAME.CLUSTERGRID)], function(ClusterGrid) {
                    var clusterGrid = new ClusterGrid();
                    ra.renderConfigParameters(data, clusterGrid);
                });
            },

            transactionsGridHandle: function(data, ra) {
                require([CONFIGCONSTANTS.getClassPath(CONFIGCONSTANTS.CLASSNAME.TRANSACTIONGRID)], function(TransactionGrid) {
                    var transactionGrid = new TransactionGrid();
                    ra.renderConfigParameters(data, transactionGrid);
                });
            },

            topologyViewHandle: function(data, ra) {
                require([CONFIGCONSTANTS.getClassPath(CONFIGCONSTANTS.CLASSNAME.TOPOLOGY)], function(Topology) {
                    var topology = new Topology();
                    ra.renderConfigParameters(data, topology);
                });
            },

            globalConfigHandle: function(data, ra) {
                require([CONFIGCONSTANTS.getClassPath(CONFIGCONSTANTS.CLASSNAME.GLOBAL)], function(Global) {
                    var global = new Global();
                    ra.renderConfigParameters(data, global);
                });
            }
        });

        ConfigAccordion.LOG = Logger.addTimer(new Logger(CONFIGCONSTANTS.CLASSNAME.ACCORDION));

        return ConfigAccordion;
    });