define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "dashboard/logger/Logger",
    "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper",
    "dashboard/abstract/AbstractAccordion", "dashboard/config/ConfigView", "dashboard/config/RenderAttributes"],

    function (declare, i18n, i18nString, Logger, xhr, lang, Helper, AbstractAccordion, ConfigView, RenderAttributes) {

        dashboard.classnames.ConfigAccordion = "dashboard.config.ConfigAccordion";

        var ConfigAccordion = declare(dashboard.classnames.ConfigAccordion, AbstractAccordion, {

            ALERTSGRID: "Alerts Grid",
            TRANSACTIONSGRID: "Transactions Grid",

            renderAccordion: function(data) {
                // the superclass's overridden method will be called after this method due to custom chain configuration
                console.log("in config render accordion. data = " + dojo.toJson(data));
                this.data = data.pageListVO;
                this.param = data.param;
            },

            showView: function(id, name, type, newWindow) {
                configView = this.getView(name);
                configView.setAccordion(this);

                console.log("show page config called with id = " + id + " name = " + name);
                var viewMeta = {
                    id:id,
                    name: name,
                    type: 0,
                    newWindow: newWindow,
                    custom:[]
                };

                switch(name) {
                    case this.ALERTSGRID:
                        xhr("config/alertGridDetailsRetrieve.action", {
                            handleAs:"json",
                            method:"POST",
                            query:viewMeta,
                            headers:Helper.JSON_HEADER
                        }).then(lang.hitch(this, this.alertGridHandle));
                        break;

                    case this.TRANSACTIONSGRID:
                        xhr("config/transactionGridDetailsRetrieve.action", {
                            handleAs:"json",
                            method:"POST",
                            query:viewMeta,
                            headers:Helper.JSON_HEADER
                        }).then(lang.hitch(this, this.transactionsGridHandle));
                        break;

                    default:
                        console.log("Unknown page id = " + id);
                        return;
                }
            },

            alertGridHandle:function (data) {
                require(["dashboard/config/views/ConfigViewIncidentGrid"], function(ConfigViewIncidentGrid) {
                    var ra = new RenderAttributes();
                    var configViewIncidentGrid = new ConfigViewIncidentGrid();
                    ra.renderConfigParameters(data, configViewIncidentGrid);
                });
            },

            transactionsGridHandle: function(data) {
                require(["dashboard/config/views/ConfigViewTransactionGrid"], function(ConfigViewTransactionGrid) {
                    var ra = new RenderAttributes();
                    var transactionGrid = new ConfigViewTransactionGrid();
                    ra.renderConfigParameters(data, transactionGrid);
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