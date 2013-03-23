define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigForm", "dojox/layout/TableContainer", "dijit/form/TextBox",
    "dijit/form/Button", "dijit/form/ComboBox", "dijit/form/Select", "dashboard/helper/ButtonHelper", "dojo/_base/lang",
    "dojo/on", "dojo/string"],

    function (declare, i18n, i18nString, Logger, ConfigForm, TableContainer, TextBox, Button, ComboBox, Select, ButtonHelper, lang, on, string) {

        dashboard.classnames.ConfigAppTagsForm = "dashboard.config.forms.ConfigAppTagsForm";

        var ConfigAppTagsForm = declare(dashboard.classnames.ConfigAppTagsForm, ConfigForm, {

            title: i18nString.APPLICATION_TAGS,

            constructor: function(pageType) {
                // if its a new window then the pageType will be Config, else Dashboard
                this.pageType = pageType;
            },

            startup:function () {
                this.inherited(arguments);

                console.log("making icons = " + this.title);
                this.createMenu();

                this.attr('content', dojo.create('div', {'id':ConfigAppTagsForm.FORMNAME, style:'width: 100%; height: 100%;'}));

                var configTable = new TableContainer({cols:1, "labelWidth":"150"}, dojo.byId(ConfigAppTagsForm.FORMNAME));

                this.appBox = TextBox({label:"Application Name", name:'apps', id:'apps'});
                configTable.addChild(this.appBox);

                this.tagBox = TextBox({label:"Tags", name:'app-tags', id:'app-tags'});
                configTable.addChild(this.tagBox);

                configTable.startup();

                this.addSuggest('apps', ConfigAppTagsForm.APPARRAY);
                this.addSuggest('app-tags', ConfigAppTagsForm.TAGARRAY);

                dashboard.dom.STANDBY.hide();
            },

            addSuggest: function(inputId, suggestArray) {
                $('#'+inputId).tagSuggest({
                    tags: suggestArray
                    //url: 'tagging.php',
                    //delay: 250
                });

                var tagAjaxParent = dojo.byId(inputId).parentNode;
                var tagMatches = tagAjaxParent.childNodes[1];
                dojo.destroy(tagMatches); // remove from DOM and place it outside the dojo input div container
                tagAjaxParent.parentNode.parentNode.appendChild(tagMatches);
            },

            arrayUnique:function (array) {
                var a = array.concat();
                for (var i = 0; i < a.length; ++i) {
                    for (var j = i + 1; j < a.length; ++j) {
                        if (a[i] === a[j])
                            a.splice(j--, 1);
                    }
                }
                return a;
            },

            createMenu:function () {
                dashboard.dom.Toolbar[this.pageType].destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getSave();
                on(button, "click", lang.hitch(this, this.saveTagConfig));
                dashboard.dom.Toolbar[this.pageType].addChild(button);
            },

            saveTagConfig:function () {
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

                ConfigAppTagsForm.TAGARRAY = this.arrayUnique(ConfigAppTagsForm.TAGARRAY.concat(tagNameArray));
            }
        });

        ConfigAppTagsForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppTagsForm));

        ConfigAppTagsForm.FORMNAME = "ConfigAppTagsForm";
        
        ConfigAppTagsForm.APPARRAY = ['NetBanking','RTGSPI','UBS','CRMNext','FinnoneLOS','Dealerpad','FinnoneLMS',
            'MobileBanking','FlexRTGS','ICUSTODY','Debos','CMSCollection','CMSDisbursement','ENET','PRMEnterprise',
            'eTreasury','FCCorporate','INSULATION_LAYER','NCB_Test','FCC_Production','HSL_IPO_UAT'	];

        ConfigAppTagsForm.TAGARRAY = [];

        ConfigAppTagsForm.APPTOTAGMAP = {};

        return ConfigAppTagsForm;
    }
);