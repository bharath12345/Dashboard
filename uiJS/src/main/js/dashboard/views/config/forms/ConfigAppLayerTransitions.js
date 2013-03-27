define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigForm", "dojox/layout/TableContainer", "dijit/form/TextBox", "dashboard/helper/ConfigHelper",
    "dojo/string", "dojo/_base/lang", "dojo/dom-construct", "dashboard/helper/ButtonHelper", "dojo/on"],

    function (declare, i18n, dashboardI18nString, Logger, ConfigForm, TableContainer, TextBox, ConfigHelper, string,
              lang, domConstruct, ButtonHelper, on) {

        dashboard.classnames.ConfigAppLayerTransitions = "dashboard.config.forms.ConfigAppLayerTransitions";

        var ConfigAppLayerTransitions = declare(dashboard.classnames.ConfigAppLayerTransitions, ConfigForm, {

            title: dashboardI18nString.LAYER_TRANSITION,
            tableCount: 2,
            columnCount: [1, 2],
            headings: ["From Layer", "To Layer"],

            startup: function() {
                this.inherited(arguments);

                this.layerBox = TextBox({label:"Layer Name", name:ConfigAppLayerTransitions.LAYER,
                    id:ConfigAppLayerTransitions.LAYER, intermediateChanges:true});
                this.configTable[0].addChild(this.layerBox);

                this.configTable[0].startup();

                //ConfigHelper.addSuggest(ConfigAppLayerTransitions.LAYER, dashboard.config.forms.ConfigAppLayersForm.LAYERARRAY);

                ////

                this.fromBox = TextBox({name:ConfigAppLayerTransitions.FROM, id:ConfigAppLayerTransitions.FROM});
                this.configTable[1].addChild(this.fromBox);

                this.toBox = TextBox({name:ConfigAppLayerTransitions.TO, id:ConfigAppLayerTransitions.TO});
                this.configTable[1].addChild(this.toBox);

                this.configTable[1].startup();

                /// Add heading row

                this.addHeadingRow(this.configTable[1]);

                /// Add content assist

                on(this.layerBox, "change", lang.hitch(this, this.contentAssist));

                dashboard.dom.STANDBY.hide();
            },

            contentAssist: function() {
                var layerName = string.trim(this.layerBox.get('value'));
                var configAppLayersForm = dashboard.config.forms.ConfigAppLayersForm;
                var layerMap = configAppLayersForm.LAYERMAP[layerName];

                var allAppAndTags = [];
                if(layerMap != null && layerMap != undefined) {
                    allAppAndTags = ConfigHelper.arrayUnique(layerMap['TAGS'].concat(layerMap['APPS']));
                }

                ConfigHelper.addSuggest(ConfigAppTopologyForm.FROM, allAppAndTags);
                ConfigHelper.addSuggest(ConfigAppTopologyForm.TO, allAppAndTags);
            },

            saveConfig:function () {
                var fromLayer = this.fromBox.get('value');
                var toLayer = this.toBox.get('value');
                var layerName = this.layerBox.get('value');
            },

            createFormSpecificMenu:function () {
                /*
                 called from the base ConfigForm class
                 one can add further form specific buttons and actions here
                 */

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getNew();
                on(button, "click", lang.hitch(this, this.addRow));
                dashboard.dom.Toolbar[this.pageType].addChild(button);
            },

            addRow: function() {
                var x = TextBox({});
                this.configTable[1].addChild(x);

                this.configTable[1]._initialized = false;
                this.configTable[1]._started = false;
                this.configTable[1].startup();

                this.addHeadingRow(this.configTable[1]);

            }
        });

        ConfigAppLayerTransitions.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppLayerTransitions));

        ConfigAppLayerTransitions.FORMNAME = "ConfigAppLayerTransitions";

        ConfigAppLayerTransitions.FROM = "from";
        ConfigAppLayerTransitions.TO = "two";
        ConfigAppLayerTransitions.LAYER = "layerName";

        return ConfigAppLayerTransitions;
    });