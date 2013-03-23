define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigForm", "dojox/layout/TableContainer", "dijit/form/TextBox", "dashboard/helper/ConfigHelper",
    "dojo/string", "dojo/_base/lang", "dojo/dom-construct", "dashboard/helper/ButtonHelper", "dojo/on"],

    function (declare, i18n, dashboardI18nString, Logger, ConfigForm, TableContainer, TextBox, ConfigHelper, string,
              lang, domConstruct, ButtonHelper, on) {

        dashboard.classnames.ConfigAppLayerTransitions = "dashboard.config.forms.ConfigAppLayerTransitions";

        var ConfigAppLayerTransitions = declare(dashboard.classnames.ConfigAppLayerTransitions, ConfigForm, {

            title: dashboardI18nString.LAYER_TRANSITION,

            startup: function() {
                this.inherited(arguments);

                console.log("making icons = " + this.title);
                this.createConfigMenu();

                var tableDiv = dojo.create('div', {'id':ConfigAppLayerTransitions.FORMNAME, style:'width: 100%; height: 100%;'});
                this.attr('content', tableDiv);

                ////

                var layerDef = dojo.create('div', {style:'width: 100%; height: 40px;'});
                tableDiv.appendChild(layerDef);
                this.configTable = new TableContainer({cols: 3,"labelWidth": "150"}, layerDef);

                this.layerBox = TextBox({label:"Layer Name", name:ConfigAppLayerTransitions.LAYER,
                    id:ConfigAppLayerTransitions.LAYER, intermediateChanges:true});
                this.configTable.addChild(this.layerBox);

                this.configTable.startup();

                ConfigHelper.addSuggest(ConfigAppLayerTransitions.LAYER, dashboard.config.forms.ConfigAppLayersForm.LAYERARRAY);

                ////

                var topoDef = dojo.create('div', {style:'width: 100%;'});
                tableDiv.appendChild(topoDef);

                this.configTable = new TableContainer({cols: 2,"labelWidth": "10"}, topoDef);

                this.fromBox = TextBox({name:ConfigAppLayerTransitions.FROM, id:ConfigAppLayerTransitions.FROM});
                this.configTable.addChild(this.fromBox);

                this.toBox = TextBox({name:ConfigAppLayerTransitions.TO, id:ConfigAppLayerTransitions.TO});
                this.configTable.addChild(this.toBox);

                this.configTable.startup();

                /// Add heading row

                this.addHeadingRow();

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

            addHeadingRow: function() {
                var table = this.configTable.domNode.childNodes[0];

                var thead = dojo.create('thead');
                //table.appendChild(thead);
                domConstruct.place(thead, table, "first");

                var row = dojo.create('tr');
                thead.appendChild(row);

                var blankCol = dojo.create('th');
                row.appendChild(blankCol);
                var col = dojo.create('th');
                col.className = 'configTableHead';
                col.innerHTML = "From Layer";
                row.appendChild(col);

                blankCol = lang.clone(blankCol);
                row.appendChild(blankCol);
                col = lang.clone(col);
                col.innerHTML = "To Layer";
                row.appendChild(col);
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
                this.configTable.addChild(x);

                this.configTable._initialized = false;
                this.configTable._started = false;
                this.configTable.startup();

                this.addHeadingRow();

            }
        });

        ConfigAppLayerTransitions.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppLayerTransitions));

        ConfigAppLayerTransitions.FORMNAME = "ConfigAppLayerTransitions";

        ConfigAppLayerTransitions.FROM = "from";
        ConfigAppLayerTransitions.TO = "two";
        ConfigAppLayerTransitions.LAYER = "layerName";

        return ConfigAppLayerTransitions;
    });