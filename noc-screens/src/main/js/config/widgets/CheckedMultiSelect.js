define(["dojo/_base/declare", "dojo/i18n", "dojox/form/CheckedMultiSelect",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, DojoCheckedMultiSelect, Logger, Utility, CONSTANTS, i18nString) {

        var CheckedMultiSelect = declare(CONSTANTS.CLASSNAME.CHECKEDMULTISELECT, null, {
            renderCheckedMultiSelect: function(userData, attribute, values) {

                var checkedMSList = [];

                var type = CONSTANTS.DIVTYPE.USER;
                checkedMSList[CONSTANTS.DIVTYPE.USER] = this.getCMSL(attribute, type, userData);

                type = CONSTANTS.DIVTYPE.ADMIN;
                checkedMSList[CONSTANTS.DIVTYPE.ADMIN] = this.getCMSL(attribute, type, "");

                type = CONSTANTS.DIVTYPE.FACTORY;
                checkedMSList[CONSTANTS.DIVTYPE.FACTORY] = this.getCMSL(attribute, type, "");

                return checkedMSList;
            },

            getCMSL: function(attribute, type, selectedValue) {
                var node = Utility.getConfigDiv(attribute, type);
                var cmsl = null;
                if(type != CONSTANTS.DIVTYPE.USER) {
                    cmsl.set('disabled','disabled');
                }
                return cmsl;
            }
        });

        CheckedMultiSelect.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.CHECKEDMULTISELECT));
        CheckedMultiSelect.POSTFIX = "_CheckedMultiSelect";

        return CheckedMultiSelect;
    });