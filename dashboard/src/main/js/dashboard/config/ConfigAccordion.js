define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper",
    "dashboard/abstract/AbstractAccordion", "dashboard/config/ConfigView", "dashboard/config/RenderAttributes"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, xhr, lang, Helper, AbstractAccordion, ConfigView, RenderAttributes) {

        dashboard.classnames.ConfigAccordion = "dashboard.config.ConfigAccordion";

        var ConfigAccordion = declare(dashboard.classnames.ConfigAccordion, AbstractAccordion, {

            showView: function(enumId, uuid, name, type, newWindow) {
                var configView = this.getView(name);

                console.log("view id = " + enumId + " name = " + name + " uuid = " + uuid + " type = " + type);
                var viewMeta = {
                    id:uuid,
                    name: name,
                    type: 0,
                    newWindow: newWindow,
                    custom:[]
                };

                dashboard.dom.TopMenuPane[dashboard.pageTypes.dashboard].domNode.innerHTML = Helper.getHeading(dashboardI18nString[name]);

                // ToDo: Change this switch away from Name to some ID
                switch(parseInt(enumId)) {
                    case dashboard.enumMap.CONFIG.APPLICATION_ALERTS:
                        xhr("config/alertGridDetailsRetrieve.action", {
                            handleAs:"json",
                            method:"POST",
                            query:viewMeta,
                            headers:Helper.JSON_HEADER
                        }).then(lang.hitch(this, this.alertGridHandle));
                        break;

                    case dashboard.enumMap.CONFIG.TRANSACTION_GRID:
                        xhr("config/transactionGridDetailsRetrieve.action", {
                            handleAs:"json",
                            method:"POST",
                            query:viewMeta,
                            headers:Helper.JSON_HEADER
                        }).then(lang.hitch(this, this.transactionsGridHandle));
                        break;

                    case dashboard.enumMap.CONFIG.APPLICATION_LAYERS:
                        break;

                    case dashboard.enumMap.CONFIG.APPLICATION_GROUPS:
                        break;

                    case dashboard.enumMap.CONFIG.APPLICATION_TOPOLOGY:
                        break;

                    case dashboard.enumMap.CONFIG.COMPONENT_TOPOLOGY:
                        break;

                    default:
                        console.log("Unknown page id = " + enumId);
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
                    configView.setAccordion(this);
                    ConfigAccordion.VIEWMAP[name] = configView; // there should be only one view per name (filtered views are for later)
                }
                return configView;
            }
        });

        ConfigAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAccordion));

        ConfigAccordion.VIEWMAP = {};

        return ConfigAccordion;
    });