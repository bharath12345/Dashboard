define(["dojo/_base/declare", "dojo/i18n","dojo/i18n!dashboard/views/config/nls/config", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigForm", "dojox/layout/TableContainer", "dijit/form/TextBox",
    "dijit/form/Button", "dijit/form/ComboBox", "dijit/form/Select", "dashboard/helper/ButtonHelper", "dojo/_base/lang",
    "dojo/on", "dojo/string", "dashboard/helper/ConfigHelper", "dojo/data/ItemFileReadStore", "dojo/store/Memory", "dojox/form/MultiComboBox"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, ConfigForm, TableContainer, TextBox, Button,
              ComboBox, Select, ButtonHelper, lang, on, string, ConfigHelper, ItemFileReadStore, Memory, MultiComboBox) {

        dashboard.classnames.ConfigAppTagsForm = "dashboard.config.forms.ConfigAppTagsForm";

        var ConfigAppTagsForm = declare(dashboard.classnames.ConfigAppTagsForm, ConfigForm, {

            title: dashboardI18nString.APPLICATION_TAGS,

            startup:function () {
                this.inherited(arguments);

                console.log("making icons = " + this.title);
                this.createConfigMenu();

                var tableDiv = dojo.create('div', {'id':ConfigAppTagsForm.FORMNAME, style:'width: 100%; height: 100%;'});
                this.attr('content', tableDiv);

                var configTable = new TableContainer({cols:1, "labelWidth":"150"}, tableDiv);

                this.appBox = new TextBox({label:"Application Name", name:ConfigAppTagsForm.APPID, id:ConfigAppTagsForm.APPID});
                configTable.addChild(this.appBox);

                this.tagBox = new TextBox({label:"Tags", name:ConfigAppTagsForm.APPTAGID, id: ConfigAppTagsForm.APPTAGID});
                configTable.addChild(this.tagBox);

                var stateStore = new Memory({
                    data: [
                        {
                            name: 'Ecuador',
                            label:"<img width='16px' height='16px' src='./images/toolbar/Active.16.png'/>Ecuador"
                        },
                        {
                            name: 'Egypt',
                            label:"<img width='16px' height='16px' src='./images/toolbar/Find.16.png'/>Egypt"
                        },
                        {
                            name: 'El Salvador',
                            label:"<img width='16px' height='16px' src='./images/toolbar/First.16.png'/>El Salvador"
                        }]
                });

                var comboBox = new MultiComboBox({
                    store: stateStore,
                    searchAttr: "name",
                    labelAttr:"label",
                    labelType:"html"
                });
                configTable.addChild(comboBox);

                var storeData = {
                    identifier: 'abbr',
                    label: 'name',
                    items: [{
                        abbr: 'ec',
                        name: 'Ecuador',
                        capital: 'Quito',
                        label:"<img width='16px' height='16px' src='images/toolbar/Active.16.png'/>Ecuador"
                    },
                        {
                            abbr: 'eg',
                            name: 'Egypt',
                            capital: 'Cairo',
                            label:"<img width='16px' height='16px' src='images/toolbar/Find.16.png'/>Egypt"
                        },
                        {
                            abbr: 'sv',
                            name: 'El Salvador',
                            capital: 'San Salvador',
                            label:"<img width='16px' height='16px' src='images/toolbar/First.16.png'/>El Salvador"
                        }]
                };

                var countryStore = new ItemFileReadStore({data: storeData});
                comboBox = new ComboBox({
                    store: countryStore,
                    searchAttr: "name",
                    labelAttr:"label",
                    labelType:"html"
                });
                configTable.addChild(comboBox);

                configTable.startup();

                ConfigHelper.addSuggest(ConfigAppTagsForm.APPID, ConfigAppTagsForm.APPARRAY);
                ConfigHelper.addSuggest(ConfigAppTagsForm.APPTAGID, ConfigAppTagsForm.TAGARRAY);

                dashboard.dom.STANDBY.hide();
            },

            createFormSpecificMenu:function () {
                /*
                    called from the base ConfigForm class
                    one can add further form specific buttons and actions here
                 */
            },

            saveConfig:function () {
                var appNames = this.appBox.get('value');
                var tagNames = this.tagBox.get('value');

                var appNameArray = appNames.split(',');
                var tagNameArray = tagNames.split(',');

                for(var i=0;i<appNameArray.length;i++) {
                    appNameArray[i] = string.trim(appNameArray[i]);
                }

                for(var i=0;i<tagNameArray.length;i++) {
                    tagNameArray[i] = string.trim(tagNameArray[i]);
                }

                for (var i = 0; i < appNameArray.length; i++) {
                    ConfigAppTagsForm.APPTOTAGMAP[appNameArray[i]] = tagNameArray;
                }

                ConfigAppTagsForm.TAGARRAY = ConfigHelper.arrayUnique(ConfigAppTagsForm.TAGARRAY.concat(tagNameArray));
            }
        });

        ConfigAppTagsForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppTagsForm));

        ConfigAppTagsForm.FORMNAME = "ConfigAppTagsForm";
        
        ConfigAppTagsForm.APPARRAY = ['NetBanking','RTGSPI','UBS','CRMNext','FinnoneLOS','Dealerpad','FinnoneLMS',
            'MobileBanking','FlexRTGS','ICUSTODY','Debos','CMSCollection','CMSDisbursement','ENET','PRMEnterprise',
            'eTreasury','FCCorporate','INSULATION_LAYER','NCB_Test','FCC_Production','HSL_IPO_UAT','SFMS'	];

        ConfigAppTagsForm.TAGARRAY = ['CustomerFacingApp', 'CriticalInterfaceApp', 'CoreBankingSol', 'InternalOperationsApp', 'InternalBusinessApp'];

        ConfigAppTagsForm.APPTOTAGMAP = {
            'NetBanking':['CustomerFacingApp'],
            'FCCorporate':['CustomerFacingApp'],
            'ENET': ['CustomerFacingApp'],
            'MobileBanking': ['CustomerFacingApp'],

            'RTGSPI': ['CriticalInterfaceApp'],
            'SFMS': ['CriticalInterfaceApp'],
            'INSULATION_LAYER': ['CriticalInterfaceApp'],
            'FlexRTGS': ['CriticalInterfaceApp'],

            'UBS': ['CoreBankingSol'],
            'NCB': ['CoreBankingSol'],

            'ICUSTODY': ['InternalOperationsApp'],
            'Dealerpad': ['InternalOperationsApp'],
            'eTreasury': ['InternalOperationsApp'],
            'Debos': ['InternalOperationsApp'],

            'FinnoneLMS': ['InternalBusinessApp'],
            'FinnoneLOS': ['InternalBusinessApp'],
            'CRMNext': ['InternalBusinessApp']

            /*
                Applications left out -
                    CMSCollection
                    CMSDisbursement
                    PRMEnterprise
             */

        };

        ConfigAppTagsForm.APPID = "apps";
        ConfigAppTagsForm.APPTAGID = "app-tags";

        return ConfigAppTagsForm;
    }
);