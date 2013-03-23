define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigForm", "dojox/layout/TableContainer", "dijit/form/TextBox", "dashboard/helper/ConfigHelper",
    "dojo/string", "dojo/_base/lang", "dojo/dom-construct"],

    function (declare, i18n, dashboardI18nString, Logger, ConfigForm, TableContainer, TextBox, ConfigHelper, string, lang, domConstruct) {

        dashboard.classnames.ConfigAppTopologyForm = "dashboard.config.forms.ConfigAppTopologyForm";

        var ConfigAppTopologyForm = declare(dashboard.classnames.ConfigAppTopologyForm, ConfigForm, {

            title: dashboardI18nString.APPLICATION_TOPOLOGY,

            startup: function() {
                this.inherited(arguments);

                console.log("making icons = " + this.title);
                this.createConfigMenu();

                var tableDiv = dojo.create('div', {'id':ConfigAppTopologyForm.FORMNAME, style:'width: 100%; height: 100%;'});
                this.attr('content', tableDiv);

                ////

                var layerDef = dojo.create('div', {style:'width: 100%; height: 40px;'});
                tableDiv.appendChild(layerDef);
                var configTable = new TableContainer({cols: 3,"labelWidth": "150"}, layerDef);

                this.layerBox = TextBox({label:"Layer Name", name:ConfigAppTopologyForm.LAYER, id:ConfigAppTopologyForm.LAYER});
                configTable.addChild(this.layerBox);

                configTable.startup();

                ConfigHelper.addSuggest(ConfigAppTopologyForm.LAYER, dashboard.config.forms.ConfigAppLayersForm.LAYERARRAY);

                ////

                var topoDef = dojo.create('div', {style:'width: 100%; height: 100%;'});
                tableDiv.appendChild(topoDef);

                configTable = new TableContainer({cols: 3,"labelWidth": "10"}, topoDef);

                this.nodeOneBox = TextBox({name:ConfigAppTopologyForm.NODEONE, id:ConfigAppTopologyForm.NODEONE});
                configTable.addChild(this.nodeOneBox);

                this.nodeTwoBox = TextBox({name:ConfigAppTopologyForm.NODETWO, id:ConfigAppTopologyForm.NODETWO});
                configTable.addChild(this.nodeTwoBox);

                this.txBox = TextBox({name:ConfigAppTopologyForm.TX, id:ConfigAppTopologyForm.TX});
                configTable.addChild(this.txBox);

                configTable.startup();

                /// Add heading row

                var table = configTable.domNode.childNodes[0];

                var thead = dojo.create('thead');
                //table.appendChild(thead);
                domConstruct.place(thead, table, "first");

                var row = dojo.create('tr');
                thead.appendChild(row);

                var blankCol = dojo.create('th');
                row.appendChild(blankCol);
                var col = dojo.create('th');
                col.className = 'configTableHead';
                col.innerHTML = "Application/Tag Endpoint";
                row.appendChild(col);

                blankCol = lang.clone(blankCol);
                row.appendChild(blankCol);
                col = lang.clone(col);
                row.appendChild(col);

                blankCol = lang.clone(blankCol);
                row.appendChild(blankCol);
                col = lang.clone(col);
                col.innerHTML = "Edge Transaction";
                row.appendChild(col);

                /// Add content assist

                var layerName = this.layerBox.get('value');
                var configAppLayersForm = dashboard.config.forms.ConfigAppLayersForm;
                var layerMap = configAppLayersForm.LAYERMAP[layerName];

                var allAppAndTags = [];
                if(layerMap != null && layerMap != undefined) {
                    allAppAndTags = ConfigHelper.arrayUnique(layerMap['TAGS'].concat(layerMap['APPS']));
                }

                ConfigHelper.addSuggest(ConfigAppTopologyForm.NODEONE, allAppAndTags);
                ConfigHelper.addSuggest(ConfigAppTopologyForm.NODETWO, allAppAndTags);
                ConfigHelper.addSuggest(ConfigAppTopologyForm.TX, ConfigAppTopologyForm.TXARRAY);

                dashboard.dom.STANDBY.hide();
            },

            saveConfig:function () {
                var nodeOneName = this.nodeOneBox.get('value');
                var nodeTwoName = this.nodeTwoBox.get('value');
                var layerName = this.layerBox.get('value');
                var txNames = this.txBox.get('value');

                var txNameArray = txNames.split(',');
                for(var i=0;i<txNameArray.length;i++) {
                    txNameArray[i] = string.trim(txNameArray[i]);
                }

                var topoKey = nodeOneName + "__" + nodeTwoName + "__" + layerName;
                ConfigAppTopologyForm.TOPOLOGY[topoKey] = txNameArray;
            },

            createFormSpecificMenu:function () {
                /*
                 called from the base ConfigForm class
                 one can add further form specific buttons and actions here
                 */
            }
        });

        ConfigAppTopologyForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppTopologyForm));

        ConfigAppTopologyForm.FORMNAME = "ConfigAppTopologyForm";

        ConfigAppTopologyForm.NODEONE = "nodeOne";
        ConfigAppTopologyForm.NODETWO = "nodeTwo";
        ConfigAppTopologyForm.TX = "transactions";
        ConfigAppTopologyForm.LAYER = "layerName";

        ConfigAppTopologyForm.TXARRAY = ['TxA', 'TxB', 'TxC', 'TxD', 'TxE'];
        ConfigAppTopologyForm.TOPOLOGY = {};

        return ConfigAppTopologyForm;
    });