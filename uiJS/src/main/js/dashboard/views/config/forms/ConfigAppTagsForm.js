define(["dojo/_base/declare", "dojo/i18n","dojo/i18n!dashboard/views/config/nls/config", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigForm", "dojox/layout/TableContainer", "dijit/form/TextBox",
    "dijit/form/Button", "dijit/form/ComboBox", "dijit/form/Select", "dashboard/helper/ButtonHelper", "dojo/_base/lang",
    "dojo/on", "dojo/string", "dashboard/helper/ConfigHelper", "dojo/data/ItemFileReadStore", "dojo/store/Memory",
    "dojox/form/MultiComboBox", "dashboard/views/config/ConfigUtility"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, ConfigForm, TableContainer, TextBox, Button,
              ComboBox, Select, ButtonHelper, lang, on, string, ConfigHelper, ItemFileReadStore, Memory, MultiComboBox, ConfigUtility) {

        dashboard.classnames.ConfigAppTagsForm = "dashboard.config.forms.ConfigAppTagsForm";

        var ConfigAppTagsForm = declare(dashboard.classnames.ConfigAppTagsForm, ConfigForm, {

            title: dashboardI18nString.APPLICATION_TAGS,
            tableCount: 1,
            columnCount: 1,
            inAnalysisPane: false,

            startup:function () {
                this.inherited(arguments);
            },

            createToolbarButtons:function () {

            },

            launch:function () {
                this.appBox = new MultiComboBox({
                    label:"Application Name",
                    store: ConfigUtility.getMemoryStore(ConfigAppTagsForm.APPARRAY, './images/topologyicons/AppWindow.128.png'),
                    searchAttr: "name",
                    labelAttr:"label",
                    labelType:"html"});
                this.configTable.addChild(this.appBox);

                this.tagBox = new MultiComboBox({
                    label:"Tags",
                    store: ConfigUtility.getMemoryStore(ConfigAppTagsForm.TAGARRAY, './images/topologyicons/AppSet.128.png'),
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