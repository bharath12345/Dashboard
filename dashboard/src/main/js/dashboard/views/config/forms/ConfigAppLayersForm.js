define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/views/config/ConfigForm", "dojox/layout/TableContainer", "dijit/form/NumberTextBox",
    "dijit/form/Button", "dijit/form/TextBox", "dashboard/helper/ConfigHelper", "dojo/string"],

    function (declare, i18n, dashboardI18nString, Logger, ConfigForm, TableContainer, NumberTextBox, Button, TextBox,
              ConfigHelper, string) {

        dashboard.classnames.ConfigAppLayersForm = "dashboard.config.forms.ConfigAppLayersForm";

        var ConfigAppLayersForm = declare(dashboard.classnames.ConfigAppLayersForm, ConfigForm, {

            title: dashboardI18nString.APPLICATION_LAYERS,

            startup: function() {
                this.inherited(arguments);

                console.log("making icons = " + this.title);
                this.createConfigMenu();

                this.attr('content', dojo.create('div', {'id':ConfigAppLayersForm.FORMNAME, style:'width: 100%; height: 100%;'}));

                var configTable = new TableContainer({cols: 1,"labelWidth": "150"}, dojo.byId(ConfigAppLayersForm.FORMNAME));

                this.layerBox = TextBox({label:"Layer Name"});
                configTable.addChild(this.layerBox);

                this.appBox = TextBox({label:"Applications", name:ConfigAppLayersForm.APPID, id:ConfigAppLayersForm.APPID});
                configTable.addChild(this.appBox);

                this.tagBox = TextBox({label:"Application Tags", name:ConfigAppLayersForm.APPTAGID, id:ConfigAppLayersForm.APPTAGID});
                configTable.addChild(this.tagBox);

                configTable.startup();

                ConfigHelper.addSuggest(ConfigAppLayersForm.APPID, dashboard.config.forms.ConfigAppTagsForm.APPARRAY);
                ConfigHelper.addSuggest(ConfigAppLayersForm.APPTAGID, dashboard.config.forms.ConfigAppTagsForm.TAGARRAY);

                dashboard.dom.STANDBY.hide();
            },

            saveConfig:function () {
                var appNames = this.appBox.get('value');
                var tagNames = this.tagBox.get('value');
                var layerName = this.layerBox.get('value');

                var appNameArray = appNames.split(',');
                var tagNameArray = tagNames.split(',');

                for(var i=0;i<appNameArray.length;i++) {
                    appNameArray[i] = string.trim(appNameArray[i]);
                }

                for(var i=0;i<tagNameArray.length;i++) {
                    tagNameArray[i] = string.trim(tagNameArray[i]);
                }

                for (var i = 0; i < appNameArray.length; i++) {
                    var layerMap = ConfigAppLayersForm.LAYERMAP[layerName] = {};
                    layerMap['TAGS'] = tagNameArray;
                    layerMap['APPS'] = appNameArray;
                }
            },

            createFormSpecificMenu:function () {
                /*
                 called from the base ConfigForm class
                 one can add further form specific buttons and actions here
                 */
            }
        });

        ConfigAppLayersForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppLayersForm));

        ConfigAppLayersForm.FORMNAME= "ConfigAppLayersForm";

        ConfigAppLayersForm.LAYERMAP = {};

        ConfigAppLayersForm.APPID = "apps";
        ConfigAppLayersForm.APPTAGID = "app-tags";

        return ConfigAppLayersForm;
    });