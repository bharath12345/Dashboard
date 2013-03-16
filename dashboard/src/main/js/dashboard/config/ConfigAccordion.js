define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "dashboard/logger/Logger",
    "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper",
    "dashboard/abstract/AbstractAccordion", "dashboard/config/ConfigView", "dashboard/config/RenderAttributes"],

    function (declare, i18n, i18nString, Logger, xhr, lang, Helper, AbstractAccordion, ConfigView, RenderAttributes) {

        dashboard.classnames.ConfigAccordion = "dashboard.config.ConfigAccordion";

        var ConfigAccordion = declare(dashboard.classnames.ConfigAccordion, AbstractAccordion, {

            ALERTSGRID: i18nString.alertsGrid,
            TRANSACTIONSGRID: i18nString.transactionGrid,

            APPLAYERS: i18nString.appLayers,
            APPGROUPSTOPO: i18nString.appGroupsTopo,
            APPTOPO: i18nString.appTopology,
            COMPTOPO: i18nString.compTopology,

            showView: function(id, name, type, newWindow) {
                var configView = this.getView(name);
                configView.setAccordion(this);

                console.log("show page config called with id = " + id + " name = " + name);
                var viewMeta = {
                    id:id,
                    name: name,
                    type: 0,
                    newWindow: newWindow,
                    custom:[]
                };

                // ToDo: Change this switch away from Name to some ID
                switch(name) {
                    case this.ALERTSGRID:
                        dashboard.dom.topMenuPane.domNode.innerHTML = "<div class='text-center alert alert-info heading'>Alerts Grid Configuration</div>";
                        xhr("config/alertGridDetailsRetrieve.action", {
                            handleAs:"json",
                            method:"POST",
                            query:viewMeta,
                            headers:Helper.JSON_HEADER
                        }).then(lang.hitch(this, this.alertGridHandle));
                        break;

                    case this.TRANSACTIONSGRID:
                        dashboard.dom.topMenuPane.domNode.innerHTML = "<div class='text-center alert alert-info heading'>Transactions Grid Configuration</div>";
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

        ConfigAccordion.VIEWMAP = {};

        return ConfigAccordion;
    });