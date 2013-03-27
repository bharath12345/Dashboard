define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigForm", "dojox/layout/TableContainer", "dijit/form/TextBox", "dashboard/helper/ConfigHelper",
    "dojo/string", "dojo/_base/lang", "dojo/dom-construct", "dashboard/helper/ButtonHelper", "dojo/on",
    "dojo/data/ItemFileReadStore", "dojo/store/Memory", "dojox/form/MultiComboBox", "dashboard/views/config/ConfigUtility"],

    function (declare, i18n, dashboardI18nString, Logger, ConfigForm, TableContainer, TextBox, ConfigHelper, string,
              lang, domConstruct, ButtonHelper, on, ItemFileReadStore, Memory, MultiComboBox, ConfigUtility) {

        dashboard.classnames.ConfigAppTopologyForm = "dashboard.config.forms.ConfigAppTopologyForm";

        var ConfigAppTopologyForm = declare(dashboard.classnames.ConfigAppTopologyForm, ConfigForm, {

            title: dashboardI18nString.APPLICATION_TOPOLOGY,
            tableCount: 3,
            columnCount: [1, 3],
            headings: ["Source Endpoint", "Destination Endpoint", "Edge Transaction"],

            startup: function() {
                this.inherited(arguments);

                this.layerBox = new MultiComboBox({label:"Layer Name", intermediateChanges:true,
                    store: ConfigUtility.getMemoryStore(dashboard.config.forms.ConfigAppLayersForm.LAYERARRAY, './images/topologyicons/AppGroup.128.png'),
                    searchAttr: "name",
                    labelAttr:"label",
                    labelType:"html"});
                this.configTable[0].addChild(this.layerBox);

                this.configTable[0].startup();

                //ConfigHelper.addSuggest(ConfigAppTopologyForm.LAYER, dashboard.config.forms.ConfigAppLayersForm.LAYERARRAY);

                ////

                this.nodeOneBox = new MultiComboBox({searchAttr: "name",
                    store: ConfigUtility.getMemoryStore([], './images/topologyicons/Transaction.128.png'),
                    labelAttr:"label",
                    labelType:"html"});
                this.configTable[1].addChild(this.nodeOneBox);

                this.nodeTwoBox = new MultiComboBox({searchAttr: "name",
                    store: ConfigUtility.getMemoryStore([], './images/topologyicons/Transaction.128.png'),
                    labelAttr:"label",
                    labelType:"html"});
                this.configTable[1].addChild(this.nodeTwoBox);

                this.txBox = new MultiComboBox({searchAttr: "name",
                    store: ConfigUtility.getMemoryStore(ConfigAppTopologyForm.TXARRAY, './images/topologyicons/Transaction.128.png'),
                    labelAttr:"label",
                    labelType:"html"});
                this.configTable[1].addChild(this.txBox);

                this.configTable[1].startup();

                /// Add heading row

                this.addHeadingRow(this.configTable[1]);

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
                this.configTable[1].addChild(x);

                this.configTable[1]._initialized = false;
                this.configTable[1]._started = false;
                this.configTable[1].startup();

                this.addHeadingRow(this.configTable[1]);

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