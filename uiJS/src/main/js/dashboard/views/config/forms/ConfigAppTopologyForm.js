define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigForm", "dojox/layout/TableContainer", "dijit/form/TextBox", "dashboard/helper/ConfigHelper",
    "dojo/string", "dojo/_base/lang", "dojo/dom-construct", "dashboard/helper/ButtonHelper", "dojo/on",
    "dojo/data/ItemFileReadStore", "dojo/store/Memory", "dojox/form/MultiComboBox", "dashboard/views/config/ConfigUtility"],

    function (declare, i18n, dashboardI18nString, Logger, ConfigForm, TableContainer, TextBox, ConfigHelper, string,
              lang, domConstruct, ButtonHelper, on, ItemFileReadStore, Memory, MultiComboBox, ConfigUtility) {

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
                this.configTable = new TableContainer({cols: 3,"labelWidth": "150"}, layerDef);

                this.layerBox = new MultiComboBox({label:"Layer Name", intermediateChanges:true,
                    store: ConfigUtility.getMemoryStore(dashboard.config.forms.ConfigAppLayersForm.LAYERARRAY, './images/topologyicons/AppGroup.128.png'),
                    searchAttr: "name",
                    labelAttr:"label",
                    labelType:"html"});
                this.configTable.addChild(this.layerBox);

                this.configTable.startup();

                //ConfigHelper.addSuggest(ConfigAppTopologyForm.LAYER, dashboard.config.forms.ConfigAppLayersForm.LAYERARRAY);

                ////

                var topoDef = dojo.create('div', {style:'width: 100%;'});
                tableDiv.appendChild(topoDef);

                this.configTable = new TableContainer({cols: 3,"labelWidth": "10"}, topoDef);

                this.nodeOneBox = new MultiComboBox({searchAttr: "name",
                    store: ConfigUtility.getMemoryStore([], './images/topologyicons/Transaction.128.png'),
                    labelAttr:"label",
                    labelType:"html"});
                this.configTable.addChild(this.nodeOneBox);

                this.nodeTwoBox = new MultiComboBox({searchAttr: "name",
                    store: ConfigUtility.getMemoryStore([], './images/topologyicons/Transaction.128.png'),
                    labelAttr:"label",
                    labelType:"html"});
                this.configTable.addChild(this.nodeTwoBox);

                this.txBox = new MultiComboBox({searchAttr: "name",
                    store: ConfigUtility.getMemoryStore(ConfigAppTopologyForm.TXARRAY, './images/topologyicons/Transaction.128.png'),
                    labelAttr:"label",
                    labelType:"html"});
                this.configTable.addChild(this.txBox);

                this.configTable.startup();

                /// Add heading row

                this.addHeadingRow();

                /// Add content assist

                on(this.layerBox, "change", lang.hitch(this, this.contentAssist));
                //ConfigHelper.addSuggest(ConfigAppTopologyForm.TX, ConfigAppTopologyForm.TXARRAY);

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

                this.nodeOneBox.set('store', ConfigUtility.getMemoryStore(allAppAndTags, './images/topologyicons/Transaction.128.png'));
                this.nodeTwoBox.set('store', ConfigUtility.getMemoryStore(allAppAndTags, './images/topologyicons/Transaction.128.png'));

                //ConfigHelper.addSuggest(ConfigAppTopologyForm.NODEONE, allAppAndTags);
                //ConfigHelper.addSuggest(ConfigAppTopologyForm.NODETWO, allAppAndTags);
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
                col.innerHTML = "Application/Tag Source Endpoint";
                row.appendChild(col);

                blankCol = lang.clone(blankCol);
                row.appendChild(blankCol);
                col = lang.clone(col);
                col.innerHTML = "Application/Tag Destination Endpoint";
                row.appendChild(col);

                blankCol = lang.clone(blankCol);
                row.appendChild(blankCol);
                col = lang.clone(col);
                col.innerHTML = "Edge Transaction";
                row.appendChild(col);
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

                var topoObject = ConfigAppTopologyForm.TOPOLOGY[layerName] = [];
                var edgeDef = {};
                edgeDef[ConfigAppTopologyForm.SOURCE] = nodeOneName;
                edgeDef[ConfigAppTopologyForm.DESTINATION] = nodeTwoName;
                edgeDef[ConfigAppTopologyForm.TX] = txNameArray;
                topoObject.push(edgeDef);
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

        ConfigAppTopologyForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppTopologyForm));

        ConfigAppTopologyForm.FORMNAME = "ConfigAppTopologyForm";

        ConfigAppTopologyForm.NODEONE = "nodeOne";
        ConfigAppTopologyForm.NODETWO = "nodeTwo";
        ConfigAppTopologyForm.TX = "transactions";
        ConfigAppTopologyForm.LAYER = "layerName";

        ConfigAppTopologyForm.SOURCE = "source";
        ConfigAppTopologyForm.DESTINATION = "destination";

        ConfigAppTopologyForm.TXARRAY = ['TxA', 'TxB', 'TxC', 'TxD', 'TxE'];
        ConfigAppTopologyForm.TOPOLOGY = {
            'LayerOne': [
                {
                    'source': 'CustomerFacingApp',
                    'destination': 'CriticalInterfaceApp',
                    'transactions': ConfigAppTopologyForm.TXARRAY
                },{
                    'source': 'CriticalInterfaceApp',
                    'destination': 'CoreBankingSol',
                    'transactions': ConfigAppTopologyForm.TXARRAY
                },{
                    'source': 'CriticalInterfaceApp',
                    'destination': 'InternalOperationsApp',
                    'transactions': ConfigAppTopologyForm.TXARRAY
                },{
                    'source': 'CriticalInterfaceApp',
                    'destination': 'InternalBusinessApp',
                    'transactions': ConfigAppTopologyForm.TXARRAY
                },{
                    'source': 'InternalOperationsApp',
                    'destination': 'CoreBankingSol',
                    'transactions': ConfigAppTopologyForm.TXARRAY
                },{
                    'source': 'InternalBusinessApp',
                    'destination': 'CoreBankingSol',
                    'transactions': ConfigAppTopologyForm.TXARRAY
                },{
                    'source': 'InternalBusinessApp',
                    'destination': 'InternalOperationsApp',
                    'transactions': ConfigAppTopologyForm.TXARRAY
                },{
                    'source': 'InternalOperationsApp',
                    'destination': 'InternalBusinessApp',
                    'transactions': ConfigAppTopologyForm.TXARRAY
                },{
                    'source': 'CMSCollection',
                    'destination': 'CriticalInterfaceApp',
                    'transactions': ConfigAppTopologyForm.TXARRAY
                },{
                    'source': 'CMSDisbursement',
                    'destination': 'InternalOperationsApp',
                    'transactions': ConfigAppTopologyForm.TXARRAY
                },{
                    'source': 'PRMEnterprise',
                    'destination': 'InternalBusinessApp',
                    'transactions': ConfigAppTopologyForm.TXARRAY
                }
            ]
        };

        return ConfigAppTopologyForm;
    });