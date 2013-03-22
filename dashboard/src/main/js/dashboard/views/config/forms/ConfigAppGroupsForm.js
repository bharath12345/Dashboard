define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm", "dijit/form/Form", "dojox/layout/TableContainer", "dijit/form/TextBox",
    "dijit/form/Button", "dijit/form/ComboBox", "dijit/form/Select"],

    function (declare, i18n, i18nString, Logger, AbstractForm, Form, TableContainer, TextBox, Button, ComboBox, Select) {

        dashboard.classnames.ConfigAppGroupsForm = "dashboard.config.forms.ConfigAppGroupsForm";

        var ConfigAppGroupsForm = declare(dashboard.classnames.ConfigAppGroupsForm, [AbstractForm, Form], {

            startup:function () {
                this.inherited(arguments);

                this.attr('content', dojo.create('div', {'id':ConfigAppGroupsForm.FORMNAME, style:'width: 100%; height: 100%;'}));

                var configTable = new TableContainer({cols:1, "labelWidth":"150"}, dojo.byId(ConfigAppGroupsForm.FORMNAME));

                var groupName = TextBox({label:"Group Name"});
                configTable.addChild(groupName);

                var tagBox = TextBox({label:"Tags", name:'tags-ajax', id:'tags-ajax'});
                configTable.addChild(tagBox);

                configTable.startup();

                var tagArray = ['one', 'two', 'three'];
                $('#tags-ajax').tagSuggest({
                    tags:tagArray
                    //url: 'tagging.php',
                    //delay: 250
                });

                var tagAjaxParent = dojo.byId('tags-ajax').parentNode;
                var tagMatches = tagAjaxParent.childNodes[1];
                dojo.destroy(tagMatches); // remove from DOM and place it outside the dojo input div container
                tagAjaxParent.parentNode.parentNode.appendChild(tagMatches);

                dashboard.dom.STANDBY.hide();
            }
        });

        ConfigAppGroupsForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigAppGroupsForm));

        ConfigAppGroupsForm.FORMNAME = "ConfigAppGroupsForm";

        return ConfigAppGroupsForm;
    });