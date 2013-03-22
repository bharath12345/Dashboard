define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm", "dijit/form/Form", "dojox/layout/TableContainer", "dijit/form/NumberTextBox",
    "dijit/form/Button"],

    function (declare, i18n, i18nString, Logger, AbstractForm, Form, TableContainer, NumberTextBox, Button) {

        dashboard.classnames.ConfigAppLayersForm = "dashboard.config.forms.ConfigAppLayersForm";

        var ConfigAppLayersForm = declare(dashboard.classnames.ConfigAppLayersForm, [AbstractForm, Form], {

            startup: function() {
                this.inherited(arguments);

                this.attr('content', dojo.create('div', {'id':ConfigAppLayersForm.FORMNAME, style:'width: 100%; height: 100%;'}));

                var configTable = new TableContainer({cols: 2,"labelWidth": "150"}, dojo.byId(ConfigAppLayersForm.FORMNAME));
                var numLayers = NumberTextBox({label: "Number of Layers"});
                var configureLayers = new Button({label: "Configure Layers"});
                configTable.addChild(numLayers);
                configTable.addChild(configure);
                configTable.startup();



                dashboard.dom.STANDBY.hide();
            }
        });

        ConfigAppLayersForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppLayersForm));

        ConfigAppLayersForm.FORMNAME= "ConfigAppLayersForm";

        return ConfigAppLayersForm;
    });