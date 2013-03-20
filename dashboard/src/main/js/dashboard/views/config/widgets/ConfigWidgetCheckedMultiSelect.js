define(["dojo/_base/declare", "dojo/i18n", "dojox/form/CheckedMultiSelect", "dijit/form/Button", "dojo/_base/lang", "dojo/dom", "dojo/dom-style",
    "dashboard/logger/Logger", "dashboard/views/config/ConfigUtility", "dojo/i18n!dashboard/views/config/nls/config"],

    function (declare, i18n, DojoCheckedMultiSelect, Button, lang, dom, domStyle, Logger, ConfigUtility, i18nString) {

        dashboard.classnames.ConfigWidgetCheckedMultiSelect = "dashboard.config.widgets.ConfigWidgetCheckedMultiSelect";

        var ConfigWidgetCheckedMultiSelect = declare(dashboard.classnames.ConfigWidgetCheckedMultiSelect, null, {

            renderCheckedMultiSelect: function(selectedValues, attribute, restValues) {

                var type = ConfigUtility.USER;
                ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.USER] = this.getCMSL(attribute, type, selectedValues, restValues);

                /*type = ConfigUtility.ADMIN;
                 ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.ADMIN] = this.getCMSL(attribute, type, "");

                 type = ConfigUtility.FACTORY;
                 ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.FACTORY] = this.getCMSL(attribute, type, "");
                 */

                return ConfigWidgetCheckedMultiSelect.checkedMSList;
            },

            getCMSL: function(attribute, type, selectedValue, restValues) {
                var node = ConfigUtility.getConfigDiv(attribute, type);
                this.createSkeleton(node, type, attribute);

                var cmsl = [];
                cmsl[0] = this.makeCMS(restValues, "lhsSelect"+type+attribute);
                cmsl[1] = this.makeCMS(selectedValue, "rhsSelect"+type+attribute);

                if(type != ConfigUtility.USER) {
                    cmsl[0].set('disabled','disabled');
                    cmsl[1].set('disabled','disabled');
                }
                return cmsl;
            },

            makeCMS: function(values, id) {
                var options = [];
                if(values == null || values == undefined) {
                    values = [];
                }
                for(var i=0;i<values.length;i++) {
                    console.log("cms id = " + id + " value = " + values[i]);
                    options[i] = {label:values[i], value:values[i], selected:false};
                }
                var CMS = new DojoCheckedMultiSelect({
                    multiple:true,
                    name:"multiselect"
                }, id);
                CMS.addOption(options);
                return CMS;
            },

            createSkeleton: function(node, type, attribute) {
                var table = dojo.create("table");
                node.appendChild(table);

                var row = dojo.create("tr");
                table.appendChild(row);
                var col = dojo.create("td");
                row.appendChild(col);

                var select = dojo.create("select");
                select.id = "lhsSelect"+type+attribute;
                col.appendChild(select);

                col = dojo.create("td");
                this.makeButtons(col, attribute, type);
                row.appendChild(col, attribute);

                col = dojo.create("td");
                select = dojo.create("select");
                select.id = "rhsSelect"+type+attribute;
                col.appendChild(select);
                row.appendChild(col);
            },

            getNewRowCol: function(table) {
                var row = dojo.create("tr");
                table.appendChild(row);
                var col = dojo.create("td");
                row.appendChild(col);
                return col;
            },

            setButtonWidth: function(btn) {
                domStyle.set(btn.domNode, "width", "150px");
                domStyle.set(btn.domNode, "fontSize", "12");
                domStyle.set(btn.domNode.firstChild, "display", "block");
            },

            makeButtons: function(bigCol, attribute, type) {
                var table = dojo.create("table");
                bigCol.appendChild(table);

                var col = this.getNewRowCol(table);
                var tempAdd = dojo.create("div");
                col.appendChild(tempAdd);
                var tempRemove = dojo.create("div");
                col.appendChild(tempRemove);

                col = this.getNewRowCol(table);
                var tempSelectAllLeft = dojo.create("div");
                col.appendChild(tempSelectAllLeft);
                var tempUnselectAllLeft = dojo.create("div");
                col.appendChild(tempUnselectAllLeft);

                col = this.getNewRowCol(table);
                var tempSelectAllRight = dojo.create("div");
                col.appendChild(tempSelectAllRight);
                var tempUnselectAllRight = dojo.create("div");
                col.appendChild(tempUnselectAllRight);

                var buttonStyle = "width: 100px; fontSize: 10;";
                var addButtonObj = new Button({label:"Add", id: attribute + "_Add" + ConfigWidgetCheckedMultiSelect.BUTTONPOSTFIX}, tempAdd);
                var removeButtonObj = new Button({label:"Remove", id: attribute + "_Remove" + ConfigWidgetCheckedMultiSelect.BUTTONPOSTFIX}, tempRemove);

                var selectAllLeftButtonObj = new Button({label:"Select All on Left", id: attribute + "_SelectAllLeft" + ConfigWidgetCheckedMultiSelect.BUTTONPOSTFIX}, tempSelectAllLeft);
                var unselectAllLeftButtonObj = new Button({label:"Unselect All on Left", id: attribute + "_UnselectAllLeft" + ConfigWidgetCheckedMultiSelect.BUTTONPOSTFIX}, tempUnselectAllLeft);

                var selectAllRightButtonObj = new Button({label:"Select All on Right", id: attribute + "_SelectAllRight" + ConfigWidgetCheckedMultiSelect.BUTTONPOSTFIX}, tempSelectAllRight);
                var unselectAllRightButtonObj = new Button({label:"Unselect All on Right", id: attribute + "_UnselectAllRight" + ConfigWidgetCheckedMultiSelect.BUTTONPOSTFIX}, tempUnselectAllRight);

                this.setButtonWidth(addButtonObj);
                this.setButtonWidth(removeButtonObj);
                this.setButtonWidth(selectAllLeftButtonObj);
                this.setButtonWidth(unselectAllLeftButtonObj);
                this.setButtonWidth(selectAllRightButtonObj);
                this.setButtonWidth(unselectAllRightButtonObj);

                if(type == ConfigUtility.USER) {
                    dojo.connect(addButtonObj, "onClick", lang.hitch(this, "moveUserLhsToRhs"));
                    dojo.connect(removeButtonObj, "onClick", lang.hitch(this, "moveUserRhsToLhs"));

                    dojo.connect(selectAllLeftButtonObj, "onClick", lang.hitch(this, "selectAllLeftUser"));
                    dojo.connect(unselectAllLeftButtonObj, "onClick", lang.hitch(this, "unselectAllLeftUser"));

                    dojo.connect(selectAllRightButtonObj, "onClick", lang.hitch(this, "selectAllRightUser"));
                    dojo.connect(unselectAllRightButtonObj, "onClick", lang.hitch(this, "unselectAllRightUser"));

                } else if(type == ConfigUtility.ADMIN) {
                    dojo.connect(addButtonObj, "onClick", lang.hitch(this, "moveAdminLhsToRhs"));
                    dojo.connect(removeButtonObj, "onClick", lang.hitch(this, "moveAdminRhsToLhs"));
                } else if(type == ConfigUtility.FACTORY) {
                    dojo.connect(addButtonObj, "onClick", lang.hitch(this, "moveFactoryLhsToRhs"));
                    dojo.connect(removeButtonObj, "onClick", lang.hitch(this, "moveFactoryRhsToLhs"));
                } else {
                    console.log("unknown type = " + type);
                }
            },

            getAttribute: function(id) {
                var attribute = id.split("_")[0];
                return attribute;
            },

            moveUserLhsToRhs: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.moveLhsToRhs(ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.USER][0], ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.USER][1]);
            },
            moveUserRhsToLhs: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.moveRhsToLhs(ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.USER][1]);
            },
            moveAdminLhsToRhs: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.moveLhsToRhs(ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.ADMIN][0], ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.ADMIN][1]);
            },
            moveAdminRhsToLhs: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.moveRhsToLhs(ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.ADMIN][1]);
            },
            moveFactoryLhsToRhs: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.moveLhsToRhs(ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.FACTORY][0], ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.FACTORY][1]);
            },
            moveFactoryRhsToLhs: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.moveRhsToLhs(ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.FACTORY][1]);
            },

            selectAllLeftUser: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.selectAllCMS(ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.USER][0]);
            },
            unselectAllLeftUser: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.unselectAllCMS(ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.USER][0]);
            },
            selectAllRightUser: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.selectAllCMS(ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.USER][1]);
            },
            unselectAllRightUser: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.unselectAllCMS(ConfigWidgetCheckedMultiSelect.checkedMSList[attribute + ConfigUtility.USER][1]);
            },

            moveLhsToRhs: function(lhsCMS, rhsCMS) {
                dashboard.dom.STANDBY.show();
                var msLhsOptions = lhsCMS.getOptions();
                var msRhsOptions = rhsCMS.getOptions();
                for (var i = 0; i < msLhsOptions.length; i++) {
                    if (msLhsOptions[i].selected == true) {
                        console.log("selected option = " + msLhsOptions[i].value + " label = " + msLhsOptions[i].label);
                        var found = false;
                        for (var j = 0; j < msRhsOptions.length; j++) {
                            if (msLhsOptions[i].value == msRhsOptions[j].value) {
                                found = true;
                                break;
                            }
                        }
                        if (found == true) {
                            continue;
                        }
                        var newRhsOption = {label:msLhsOptions[i].value, value:msLhsOptions[i].value, selected:false};
                        rhsCMS.addOption(newRhsOption);
                    }
                }
                dashboard.dom.STANDBY.hide();
            },

            moveRhsToLhs: function(rhsCMS) {
                dashboard.dom.STANDBY.show();
                var msRhsOptions = rhsCMS.getOptions();
                for (var i = 0; i < msRhsOptions.length; i++) {
                    if (msRhsOptions[i].selected == true) {
                        console.log("selected option = " + msRhsOptions[i].value + " label = " + msRhsOptions[i].label);
                        rhsCMS.removeOption(msRhsOptions[i]);
                    }
                }
                dashboard.dom.STANDBY.hide();
            },

            selectAllCMS: function(cms) {
                this.cmsUpdate(true, cms);
            },

            unselectAllCMS: function(cms) {
                this.cmsUpdate(false, cms);
            },

            cmsUpdate: function(bool, cms) {
                dashboard.dom.STANDBY.show();
                var cmsOptions = cms.getOptions();
                for (var i = 0; i < cmsOptions.length; i++) {
                    cmsOptions[i].selected = bool;
                }
                cms.updateOption(cmsOptions);
                dashboard.dom.STANDBY.hide();
            }

        });

        ConfigWidgetCheckedMultiSelect.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigWidgetCheckedMultiSelect));
        ConfigWidgetCheckedMultiSelect.POSTFIX = "_CheckedMultiSelect";
        ConfigWidgetCheckedMultiSelect.BUTTONPOSTFIX = ConfigWidgetCheckedMultiSelect.POSTFIX + "Button";
        ConfigWidgetCheckedMultiSelect.checkedMSList = [];

        return ConfigWidgetCheckedMultiSelect;
    });