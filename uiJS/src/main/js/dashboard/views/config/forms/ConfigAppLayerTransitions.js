define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigForm", "dojox/layout/TableContainer", "dijit/form/TextBox", "dashboard/helper/Helper",
    "dojo/string", "dojo/_base/lang", "dojo/dom-construct", "dashboard/helper/ButtonHelper", "dojo/on"],

    function (declare, i18n, dashboardI18nString, Logger, ConfigForm, TableContainer, TextBox, Helper, string,
              lang, domConstruct, ButtonHelper, on) {

        dashboard.classnames.ConfigAppLayerTransitions = "dashboard.config.forms.ConfigAppLayerTransitions";

        var ConfigAppLayerTransitions = declare(dashboard.classnames.ConfigAppLayerTransitions, ConfigForm, {

            title: dashboardI18nString.LAYER_TRANSITION,
            tableCount: 2,
            columnCount: [1, 2],
            headings: ["From Layer", "To Layer"],
            inAnalysisPane: false,

            startup: function() {
                this.inherited(arguments);
            },

            createToolbarButtons:function () {
                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getNew();
                on(button, "click", lang.hitch(this, this.addRow));
                dashboard.dom.Toolbar[this.pageType].addChild(button);
            },

            launch: function() {

                this.layerBox = TextBox({label:"Layer Name", name:ConfigAppLayerTransitions.LAYER,
                    id:ConfigAppLayerTransitions.LAYER, intermediateChanges:true});
                this.configTable[0].addChild(this.layerBox);

                this.configTable[0].startup();

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
                    allAppAndTags = Helper.arrayUnique(layerMap['TAGS'].concat(layerMap['APPS']));
                }

                //ConfigHelper.addSuggest(ConfigAppTopologyForm.FROM, allAppAndTags);
                //ConfigHelper.addSuggest(ConfigAppTopologyForm.TO, allAppAndTags);
            },

            saveConfig:function () {
                var fromLayer = this.fromBox.get('value');
                var toLayer = this.toBox.get('value');
                var layerName = this.layerBox.get('value');
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