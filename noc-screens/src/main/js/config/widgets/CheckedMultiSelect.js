define(["dojo/_base/declare", "dojo/i18n", "dojox/form/CheckedMultiSelect", "dijit/form/Button", "dojo/_base/lang",
    "noc/Logger", "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, DojoCheckedMultiSelect, Button, lang, Logger, Utility, CONSTANTS, i18nString) {

        var CheckedMultiSelect = declare(CONSTANTS.CLASSNAME.CHECKEDMULTISELECT, null, {

            renderCheckedMultiSelect: function(selectedValues, attribute, restValues) {

                var type = CONSTANTS.DIVTYPE.USER;
                CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.USER] = this.getCMSL(attribute, type, selectedValues, restValues);

                /*type = CONSTANTS.DIVTYPE.ADMIN;
                 CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.ADMIN] = this.getCMSL(attribute, type, "");

                 type = CONSTANTS.DIVTYPE.FACTORY;
                 CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.FACTORY] = this.getCMSL(attribute, type, "");
                 */

                return CheckedMultiSelect.checkedMSList;
            },

            getCMSL: function(attribute, type, selectedValue, restValues) {
                var node = Utility.getConfigDiv(attribute, type);
                this.createSkeleton(node, type);

                var cmsl = [];
                cmsl[0] = this.makeCMS(restValues, "lhsSelect");
                cmsl[1] = this.makeCMS(selectedValue, "rhsSelect");

                if(type != CONSTANTS.DIVTYPE.USER) {
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

            createSkeleton: function(node, type) {
                var table = dojo.create("table");
                node.appendChild(table);

                var row = dojo.create("tr");
                table.appendChild(row);
                var col = dojo.create("td");
                row.appendChild(col);

                var select = dojo.create("select");
                select.id = "lhsSelect";
                col.appendChild(select);

                col = dojo.create("td");
                var tempAdd = dojo.create("div");
                col.appendChild(tempAdd);
                var tempRemove = dojo.create("div");
                col.appendChild(tempRemove);
                row.appendChild(col);

                var addButtonObj = new Button({label:"Add"}, tempAdd);
                var removeButtonObj = new Button({label:"Remove"}, tempRemove);

                if(type == CONSTANTS.DIVTYPE.USER) {
                    dojo.connect(addButtonObj, "onClick", lang.hitch(this, "moveUserLhsToRhs"));
                    dojo.connect(removeButtonObj, "onClick", lang.hitch(this, "moveUserRhsToLhs"));
                } else if(type == CONSTANTS.DIVTYPE.ADMIN) {
                    dojo.connect(addButtonObj, "onClick", lang.hitch(this, "moveAdminLhsToRhs"));
                    dojo.connect(removeButtonObj, "onClick", lang.hitch(this, "moveAdminRhsToLhs"));
                } else if(type == CONSTANTS.DIVTYPE.FACTORY) {
                    dojo.connect(addButtonObj, "onClick", lang.hitch(this, "moveFactoryLhsToRhs"));
                    dojo.connect(removeButtonObj, "onClick", lang.hitch(this, "moveFactoryRhsToLhs"));
                } else {
                    console.log("unknown type = " + type);
                }

                col = dojo.create("td");
                select = dojo.create("select");
                select.id = "rhsSelect";
                col.appendChild(select);
                row.appendChild(col);
            },

            moveUserLhsToRhs: function() {
                this.moveLhsToRhs(CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.USER][0], CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.USER][1]);
            },
            moveUserRhsToLhs: function() {
                this.moveRhsToLhs(CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.USER][1]);
            },
            moveAdminLhsToRhs: function() {
                this.moveLhsToRhs(CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.ADMIN][0], CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.ADMIN][1]);
            },
            moveAdminRhsToLhs: function() {
                this.moveRhsToLhs(CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.ADMIN][1]);
            },
            moveFactoryLhsToRhs: function() {
                this.moveLhsToRhs(CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.FACTORY][0], CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.FACTORY][1]);
            },
            moveFactoryRhsToLhs: function() {
                this.moveRhsToLhs(CheckedMultiSelect.checkedMSList[CONSTANTS.DIVTYPE.FACTORY][1]);
            },

            moveLhsToRhs: function(lhsCMS, rhsCMS) {
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
            },

            moveRhsToLhs: function(rhsCMS) {
                var msRhsOptions = rhsCMS.getOptions();
                for (var i = 0; i < msRhsOptions.length; i++) {
                    if (msRhsOptions[i].selected == true) {
                        console.log("selected option = " + msRhsOptions[i].value + " label = " + msRhsOptions[i].label);
                        rhsCMS.removeOption(msRhsOptions[i]);
                    }
                }
            }
        });

        CheckedMultiSelect.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.CHECKEDMULTISELECT));
        CheckedMultiSelect.POSTFIX = "_CheckedMultiSelect";
        CheckedMultiSelect.checkedMSList = [];

        return CheckedMultiSelect;
    });