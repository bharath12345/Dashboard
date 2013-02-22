define(["dojo/_base/declare", "dojo/i18n", "dojox/form/CheckedMultiSelect", "dijit/form/Button", "dojo/_base/lang",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, DojoCheckedMultiSelect, Button, lang, Logger, Utility, CONSTANTS, i18nString) {

        var CheckedMultiSelect = declare(CONSTANTS.CLASSNAME.CHECKEDMULTISELECT, null, {
            renderCheckedMultiSelect: function(selectedValues, attribute, restValues) {

                var checkedMSList = [];

                var type = CONSTANTS.DIVTYPE.USER;
                checkedMSList[CONSTANTS.DIVTYPE.USER] = this.getCMSL(attribute, type, selectedValues, restValues);

                /*type = CONSTANTS.DIVTYPE.ADMIN;
                checkedMSList[CONSTANTS.DIVTYPE.ADMIN] = this.getCMSL(attribute, type, "");

                type = CONSTANTS.DIVTYPE.FACTORY;
                checkedMSList[CONSTANTS.DIVTYPE.FACTORY] = this.getCMSL(attribute, type, "");
                */

                return checkedMSList;
            },

            getCMSL: function(attribute, type, selectedValue, restValues) {
                var node = Utility.getConfigDiv(attribute, type);
                this.createSkeleton(node);

                CheckedMultiSelect.lhsCMS = this.makeCMS(restValues, "lhsSelect");
                CheckedMultiSelect.rhsCMS = this.makeCMS(selectedValue, "rhsSelect");

                if(type != CONSTANTS.DIVTYPE.USER) {
                    lhsCMS.set('disabled','disabled');
                    rhsCMS.set('disabled','disabled');
                }
                return cmsl;
            },

            makeCMS: function(values, id) {
                var options = [];
                for(var i=0;i<values;i++) {
                    options[i] = {label:values[i], value:values[i], selected:false};
                }
                var CMS = new CheckedMultiSelect({
                    multiple:true,
                    name:"multiselect",
                    style:CheckedMultiSelect.msStyle
                }, id);
                CMS.addOption(options);
                return CMS;
            },

            createSkeleton: function(node) {
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

                dojo.connect(addButtonObj, "onClick", lang.hitch(this, "moveLhsToRhs"));
                dojo.connect(removeButtonObj, "onClick", lang.hitch(this, "moveRhsToLhs"));

                col = dojo.create("td");
                select = dojo.create("select");
                select.id = "rhsSelect";
                col.appendChild(select);
            },

            moveLhsToRhs: function() {
                var msLhsOptions = CheckedMultiSelect.lhsCMS.getOptions();
                var msRhsOptions = CheckedMultiSelect.rhsCMS.getOptions();
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
                        CheckedMultiSelect.rhsCMS.addOption(newRhsOption);
                    }
                }
            },

            moveRhsToLhs: function() {
                var msRhsOptions = CheckedMultiSelect.rhsCMS.getOptions();
                for (var i = 0; i < msRhsOptions.length; i++) {
                    if (msRhsOptions[i].selected == true) {
                        console.log("selected option = " + msRhsOptions[i].value + " label = " + msRhsOptions[i].label);
                        CheckedMultiSelect.rhsCMS.removeOption(msRhsOptions[i]);
                    }
                }
            }
        });

        CheckedMultiSelect.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.CHECKEDMULTISELECT));
        CheckedMultiSelect.POSTFIX = "_CheckedMultiSelect";
        CheckedMultiSelect.msStyle = "width: 250px, height:400px;";
        CheckedMultiSelect.lhsCMS = null;
        CheckedMultiSelect.rhsCMS = null;

        return CheckedMultiSelect;
    });