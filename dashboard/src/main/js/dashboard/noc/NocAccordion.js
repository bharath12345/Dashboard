define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/logger/Logger",
    "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/abstract/AbstractAccordion"],

    function (declare, i18n, i18nString, Logger, NocUtility, NOCCONSTANTS, AbstractAccordion) {

        var NocAccordion = declare(NOCCONSTANTS.CLASSNAME.ACCORDION, AbstractAccordion, {

            ALERTSGRID: "Alerts Grid",
            CLUSTERSGRID: "Clusters Grid",
            TRANSACTIONSGRID: "Transactions Grid",
            TOPOLOGYVIEW: "Topology View",

            responseHandles:[],

            renderAccordion: function(data) {
                // keep in mind that the superclass's method will be called after this method is finished due to the
                // custom chain configuration
                console.log("in NOC render accordion. data = " + dojo.toJson(data));
                this.data = data.pageListVO;
                this.param = data.param;
            },

            showPageConfig: function(id, name, newWindow) {
                console.log("show page config called with id = " + id);

            },

            constructor:function () {
                this.responseHandles[this.ALERTSGRID] =  this.alertGridHandle;
                this.responseHandles[this.CLUSTERSGRID] = this.clustersGridHandle;
                this.responseHandles[this.TRANSACTIONSGRID] = this.transactionsGridHandle;
                this.responseHandles[this.TOPOLOGYVIEW] = this.topologyViewHandle;
            },

            alertGridHandle:function (data, ra) {
                new IncidentPage().loadPage("IncidentGrid");
            },

            clustersGridHandle: function(data, ra) {
                new AllClusterAvailability().loadPage(pageNum, "AllClusterAvailability");
            },

            transactionsGridHandle: function(data, ra) {
                new TransactionGrid().loadPage(pageNum, "TransactionGrid");
            },

            topologyViewHandle: function(data, ra) {
                new TopologyPage().loadPage(pageNum, "NetBankingTopology");
            }

        });

        NocAccordion.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.ACCORDION));

        return NocAccordion;
    });