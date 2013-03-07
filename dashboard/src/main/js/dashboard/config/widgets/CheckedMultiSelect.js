define(["dojo/_base/declare", "dojo/i18n", "dojox/form/CheckedMultiSelect", "dijit/form/Button", "dojo/_base/lang", "dojo/dom", "dojo/dom-style",
    "noc/Logger", "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!dashboard/config/nls/config"],

    function (declare, i18n, DojoCheckedMultiSelect, Button, lang, dom, domStyle, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString) {

        var CheckedMultiSelect = declare(CONFIGCONSTANTS.CLASSNAME.CHECKEDMULTISELECT, null, {

            renderCheckedMultiSelect: function(selectedValues, attribute, restValues) {

                var type = CONFIGCONSTANTS.DIVTYPE.USER;
                CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.USER] = this.getCMSL(attribute, type, selectedValues, restValues);

                /*type = CONFIGCONSTANTS.DIVTYPE.ADMIN;
                 CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.ADMIN] = this.getCMSL(attribute, type, "");

                 type = CONFIGCONSTANTS.DIVTYPE.FACTORY;
                 CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.FACTORY] = this.getCMSL(attribute, type, "");
                 */

                return CheckedMultiSelect.checkedMSList;
            },

            getCMSL: function(attribute, type, selectedValue, restValues) {
                var node = ConfigUtility.getConfigDiv(attribute, type);
                this.createSkeleton(node, type, attribute);

                var cmsl = [];
                cmsl[0] = this.makeCMS(restValues, "lhsSelect"+type+attribute);
                cmsl[1] = this.makeCMS(selectedValue, "rhsSelect"+type+attribute);

                if(type != CONFIGCONSTANTS.DIVTYPE.USER) {
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
                var addButtonObj = new Button({label:"Add", id: attribute + "_Add" + CheckedMultiSelect.BUTTONPOSTFIX}, tempAdd);
                var removeButtonObj = new Button({label:"Remove", id: attribute + "_Remove" + CheckedMultiSelect.BUTTONPOSTFIX}, tempRemove);

                var selectAllLeftButtonObj = new Button({label:"Select All on Left", id: attribute + "_SelectAllLeft" + CheckedMultiSelect.BUTTONPOSTFIX}, tempSelectAllLeft);
                var unselectAllLeftButtonObj = new Button({label:"Unselect All on Left", id: attribute + "_UnselectAllLeft" + CheckedMultiSelect.BUTTONPOSTFIX}, tempUnselectAllLeft);

                var selectAllRightButtonObj = new Button({label:"Select All on Right", id: attribute + "_SelectAllRight" + CheckedMultiSelect.BUTTONPOSTFIX}, tempSelectAllRight);
                var unselectAllRightButtonObj = new Button({label:"Unselect All on Right", id: attribute + "_UnselectAllRight" + CheckedMultiSelect.BUTTONPOSTFIX}, tempUnselectAllRight);

                this.setButtonWidth(addButtonObj);
                this.setButtonWidth(removeButtonObj);
                this.setButtonWidth(selectAllLeftButtonObj);
                this.setButtonWidth(unselectAllLeftButtonObj);
                this.setButtonWidth(selectAllRightButtonObj);
                this.setButtonWidth(unselectAllRightButtonObj);

                if(type == CONFIGCONSTANTS.DIVTYPE.USER) {
                    dojo.connect(addButtonObj, "onClick", lang.hitch(this, "moveUserLhsToRhs"));
                    dojo.connect(removeButtonObj, "onClick", lang.hitch(this, "moveUserRhsToLhs"));

                    dojo.connect(selectAllLeftButtonObj, "onClick", lang.hitch(this, "selectAllLeftUser"));
                    dojo.connect(unselectAllLeftButtonObj, "onClick", lang.hitch(this, "unselectAllLeftUser"));

                    dojo.connect(selectAllRightButtonObj, "onClick", lang.hitch(this, "selectAllRightUser"));
                    dojo.connect(unselectAllRightButtonObj, "onClick", lang.hitch(this, "unselectAllRightUser"));

                } else if(type == CONFIGCONSTANTS.DIVTYPE.ADMIN) {
                    dojo.connect(addButtonObj, "onClick", lang.hitch(this, "moveAdminLhsToRhs"));
                    dojo.connect(removeButtonObj, "onClick", lang.hitch(this, "moveAdminRhsToLhs"));
                } else if(type == CONFIGCONSTANTS.DIVTYPE.FACTORY) {
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
                this.moveLhsToRhs(CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.USER][0], CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.USER][1]);
            },
            moveUserRhsToLhs: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.moveRhsToLhs(CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.USER][1]);
            },
            moveAdminLhsToRhs: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.moveLhsToRhs(CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.ADMIN][0], CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.ADMIN][1]);
            },
            moveAdminRhsToLhs: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.moveRhsToLhs(CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.ADMIN][1]);
            },
            moveFactoryLhsToRhs: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.moveLhsToRhs(CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.FACTORY][0], CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.FACTORY][1]);
            },
            moveFactoryRhsToLhs: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.moveRhsToLhs(CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.FACTORY][1]);
            },

            selectAllLeftUser: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.selectAllCMS(CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.USER][0]);
            },
            unselectAllLeftUser: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.unselectAllCMS(CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.USER][0]);
            },
            selectAllRightUser: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.selectAllCMS(CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.USER][1]);
            },
            unselectAllRightUser: function(event) {
                var attribute = this.getAttribute(event.target.id);
                this.unselectAllCMS(CheckedMultiSelect.checkedMSList[attribute + CONFIGCONSTANTS.DIVTYPE.USER][1]);
            },

            moveLhsToRhs: function(lhsCMS, rhsCMS) {
                config.Config.STANDBY.show();
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
                config.Config.STANDBY.hide();
            },

            moveRhsToLhs: function(rhsCMS) {
                config.Config.STANDBY.show();
                var msRhsOptions = rhsCMS.getOptions();
                for (var i = 0; i < msRhsOptions.length; i++) {
                    if (msRhsOptions[i].selected == true) {
                        console.log("selected option = " + msRhsOptions[i].value + " label = " + msRhsOptions[i].label);
                        rhsCMS.removeOption(msRhsOptions[i]);
                    }
                }
                config.Config.STANDBY.hide();
            },

            selectAllCMS: function(cms) {
                this.cmsUpdate(true, cms);
            },

            unselectAllCMS: function(cms) {
                this.cmsUpdate(false, cms);
            },

            cmsUpdate: function(bool, cms) {
                config.Config.STANDBY.show();
                var cmsOptions = cms.getOptions();
                for (var i = 0; i < cmsOptions.length; i++) {
                    cmsOptions[i].selected = bool;
                }
                cms.updateOption(cmsOptions);
                config.Config.STANDBY.hide();
            }

        });

        CheckedMultiSelect.LOG = Logger.addTimer(new Logger(CONFIGCONSTANTS.CLASSNAME.CHECKEDMULTISELECT));
        CheckedMultiSelect.POSTFIX = "_CheckedMultiSelect";
        CheckedMultiSelect.BUTTONPOSTFIX = CheckedMultiSelect.POSTFIX + "Button";
        CheckedMultiSelect.checkedMSList = [];

        return CheckedMultiSelect;
    });