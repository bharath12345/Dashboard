define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/config/nls/config", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper",
    "dashboard/abstract/AbstractAccordion", "dashboard/views/config/ConfigView", "dashboard/views/config/RenderAttributes"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, xhr, lang, Helper, AbstractAccordion, ConfigView, RenderAttributes) {

        dashboard.classnames.ConfigAccordion = "dashboard.config.ConfigAccordion";

        var ConfigAccordion = declare(dashboard.classnames.ConfigAccordion, AbstractAccordion, {

            showView: function(enumId, uuid, name, type, newWindow) {
                console.log("view id = " + enumId + " name = " + name + " uuid = " + uuid + " type = " + type);

                this.configView = this.getView(name);
                this.configView.loadMenu(enumId, uuid, name, type);


                dashboard.dom.TopMenuPane[this.configView.pageType].domNode.innerHTML = Helper.getHeading(dashboardI18nString[name]);

                // ToDo: Change this switch away from Name to some ID
                switch(parseInt(enumId)) {
                    case dashboard.enumMap.CONFIG.APPLICATION_ALERTS:
                        var viewMeta = {
                            id:uuid,
                            name: name,
                            type: 0,
                            newWindow: newWindow,
                            custom:[]
                        };xhr("config/alertGridDetailsRetrieve.action", {
                            handleAs:"json",
                            method:"POST",
                            query:viewMeta,
                            headers:Helper.JSON_HEADER
                        }).then(lang.hitch(this, this.alertGridHandle));
                        break;

                    case dashboard.enumMap.CONFIG.TRANSACTION_GRID:
                        var viewMeta = {
                            id:uuid,
                            name: name,
                            type: 0,
                            newWindow: newWindow,
                            custom:[]
                        };xhr("config/transactionGridDetailsRetrieve.action", {
                            handleAs:"json",
                            method:"POST",
                            query:viewMeta,
                            headers:Helper.JSON_HEADER
                        }).then(lang.hitch(this, this.transactionsGridHandle));
                        break;

                    case dashboard.enumMap.CONFIG.APPLICATION_LAYERS:
                        require(["dashboard/views/config/forms/ConfigAppLayersForm"], lang.hitch(this, function (ConfigAppLayersForm) {
                            this.configView.createSplitCenterPanes(dashboard.dom.CpCenterInner[this.configView.pageType], new ConfigAppLayersForm());
                        }));
                        break;

                    case dashboard.enumMap.CONFIG.APPLICATION_GROUPS:
                        require(["dashboard/views/config/forms/ConfigAppGroupsForm"], lang.hitch(this, function (ConfigAppGroupsForm) {
                            this.configView.createSplitCenterPanes(dashboard.dom.CpCenterInner[this.configView.pageType], new ConfigAppGroupsForm());
                        }));
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
                require(["dashboard/views/config/forms/ConfigIncidentGridForm"], function(ConfigIncidentGridForm) {
                    var ra = new RenderAttributes();
                    var configViewIncidentGrid = new ConfigIncidentGridForm();
                    ra.renderConfigParameters(data, configViewIncidentGrid);
                });
            },

            transactionsGridHandle: function(data) {
                require(["dashboard/views/config/forms/ConfigTransactionGridForm"], function(ConfigTransactionGridForm) {
                    var ra = new RenderAttributes();
                    var transactionGrid = new ConfigTransactionGridForm();
                    ra.renderConfigParameters(data, transactionGrid);
                });
            },

            getView: function(name, newWindow) {
                if(this.configView == null || this.configView == undefined) {
                    this.configView = new ConfigView();
                    this.configView.setAccordion(this);
                }
                return this.configView;
            }
        });

        ConfigAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAccordion));

        return ConfigAccordion;
    });