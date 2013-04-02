define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/config/nls/config", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dojo/request/xhr", "dojo/_base/lang", "dashboard/helper/Helper",
    "dashboard/abstract/AbstractAccordion", "dashboard/views/config/ConfigView"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, xhr, lang, Helper, AbstractAccordion, ConfigView) {

        dashboard.classnames.ConfigAccordion = "dashboard.config.ConfigAccordion";

        var ConfigAccordion = declare(dashboard.classnames.ConfigAccordion, AbstractAccordion, {

            showView: function(enumId, uuid, name, type, newWindow) {
                console.log("view id = " + enumId + " name = " + name + " uuid = " + uuid + " type = " + type);

                this.configView = this.getView(name);
                this.configView.loadMenu(enumId, uuid, name, type);

                dashboard.dom.TopMenuPane[this.configView.pageType].domNode.innerHTML = Helper.getHeading(dashboardI18nString[name]);

                switch(parseInt(enumId)) {
                    case dashboard.enumMap.CONFIG.APPLICATION_ALERTS:
                        require(["dashboard/views/config/forms/ConfigIncidentGridForm"], lang.hitch(this, function (ConfigIncidentGridForm) {
                            Helper.createView(this.configView, this.configView.pageType, new ConfigIncidentGridForm(this.configView.pageType));
                        }));
                        break;

                    case dashboard.enumMap.CONFIG.TRANSACTION_GRID:
                        require(["dashboard/views/config/forms/ConfigTransactionGridForm"], lang.hitch(this, function (ConfigTransactionGridForm) {
                            Helper.createView(this.configView, this.configView.pageType, new ConfigTransactionGridForm(this.configView.pageType));
                        }));
                        break;

                    case dashboard.enumMap.CONFIG.APPLICATION_LAYERS:
                        require(["dashboard/views/config/forms/ConfigAppLayersForm"], lang.hitch(this, function (ConfigAppLayersForm) {
                            Helper.createView(this.configView, this.configView.pageType, new ConfigAppLayersForm(this.configView.pageType));
                        }));
                        break;

                    case dashboard.enumMap.CONFIG.APPLICATION_TAGS:
                        require(["dashboard/views/config/forms/ConfigAppTagsForm"], lang.hitch(this, function (ConfigAppTagsForm) {
                            Helper.createView(this.configView, this.configView.pageType, new ConfigAppTagsForm(this.configView.pageType));
                        }));
                        break;

                    case dashboard.enumMap.CONFIG.APPLICATION_TOPOLOGY:
                        require(["dashboard/views/config/forms/ConfigAppTopologyForm"], lang.hitch(this, function (ConfigAppTopologyForm) {
                            Helper.createView(this.configView, this.configView.pageType, new ConfigAppTopologyForm(this.configView.pageType));
                        }));
                        break;

                    case dashboard.enumMap.CONFIG.LAYER_TRANSITIONS:
                        require(["dashboard/views/config/forms/ConfigAppLayerTransitions"], lang.hitch(this, function (ConfigAppLayerTransitions) {
                            Helper.createView(this.configView, this.configView.pageType, new ConfigAppLayerTransitions(this.configView.pageType));
                        }));
                        break;


                    case dashboard.enumMap.CONFIG.COMPONENT_TOPOLOGY:
                        break;

                    default:
                        console.log("Unknown page id = " + enumId);
                        return;
                }
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