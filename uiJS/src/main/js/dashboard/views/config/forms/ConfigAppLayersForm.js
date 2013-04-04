define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigForm", "dojox/layout/TableContainer", "dijit/form/NumberTextBox",
    "dijit/form/Button", "dijit/form/TextBox", "dashboard/helper/Helper", "dojo/string",
    "dojo/data/ItemFileReadStore", "dojo/store/Memory", "dojox/form/MultiComboBox", "dashboard/views/config/ConfigUtility"],

    function (declare, i18n, dashboardI18nString, Logger, ConfigForm, TableContainer, NumberTextBox, Button, TextBox,
              Helper, string, ItemFileReadStore, Memory, MultiComboBox, ConfigUtility) {

        dashboard.classnames.ConfigAppLayersForm = "dashboard.config.forms.ConfigAppLayersForm";

        var ConfigAppLayersForm = declare(dashboard.classnames.ConfigAppLayersForm, ConfigForm, {

            title: dashboardI18nString.APPLICATION_LAYERS,
            tableCount: 1,
            columnCount: 1,
            inAnalysisPane: false,

            startup: function() {
                this.inherited(arguments);
            },

            createToolbarButtons:function () {

            },

            launch: function() {

                this.layerBox = new TextBox({label:"Layer Name"});
                this.configTable.addChild(this.layerBox);

                this.appBox = new MultiComboBox({label:"Applications",
                    store: ConfigUtility.getMemoryStore(dashboard.config.forms.ConfigAppTagsForm.APPARRAY, './images/topologyicons/AppWindow.128.png'),
                    searchAttr: "name",
                    labelAttr:"label",
                    labelType:"html"});
                this.configTable.addChild(this.appBox);

                this.tagBox = new MultiComboBox({label:"Tags",
                    store: ConfigUtility.getMemoryStore(dashboard.config.forms.ConfigAppTagsForm.TAGARRAY, './images/topologyicons/AppSet.128.png'),
                    searchAttr: "name",
                    labelAttr:"label",
                    labelType:"html"});
                this.configTable.addChild(this.tagBox);

                this.configTable.startup();

                dashboard.dom.STANDBY.hide();
            },

            saveConfig:function () {
                var appNames = this.appBox.get('value');
                var tagNames = this.tagBox.get('value');
                var layerName = string.trim(this.layerBox.get('value'));

                var appNameArray = appNames.split(',');
                var tagNameArray = tagNames.split(',');

                for(var i=0;i<appNameArray.length;i++) {
                    appNameArray[i] = string.trim(appNameArray[i]);
                }

                for(var i=0;i<tagNameArray.length;i++) {
                    tagNameArray[i] = string.trim(tagNameArray[i]);
                }

                ConfigAppLayersForm.LAYERARRAY.push(layerName);
                ConfigAppLayersForm.LAYERARRAY = Helper.arrayUnique(ConfigAppLayersForm.LAYERARRAY);

                for (var i = 0; i < appNameArray.length; i++) {
                    var layerMap = ConfigAppLayersForm.LAYERMAP[layerName] = {};
                    layerMap['TAGS'] = tagNameArray;
                    layerMap['APPS'] = appNameArray;
                }
            }

        });

        ConfigAppLayersForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppLayersForm));

        ConfigAppLayersForm.LAYERARRAY = ['LayerOne'];
        ConfigAppLayersForm.LAYERMAP = {
            'LayerOne': {
                'TAGS' : ['CustomerFacingApp', 'CriticalInterfaceApp', 'CoreBankingSol', 'InternalOperationsApp', 'InternalBusinessApp'],
                'APPS' : ['CMSCollection','CMSDisbursement','PRMEnterprise']
            }
        };

        ConfigAppLayersForm.APPID = "apps";
        ConfigAppLayersForm.APPTAGID = "app-tags";

        return ConfigAppLayersForm;
    });