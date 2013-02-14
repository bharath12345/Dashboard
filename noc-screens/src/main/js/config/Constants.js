define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!config/nls/config"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var CONSTANTS = declare("config.Constants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.CLASSNAME = {};
        CONSTANTS.CLASSNAME.CONFIG = "config.Config";
        CONSTANTS.CLASSNAME.ACCORDION = "config.Accordion";
        CONSTANTS.CLASSNAME.PAGEELEMENTS = "config.PageElements";
        CONSTANTS.CLASSNAME.UTILITY = "config.Utility";


        return CONSTANTS;
    });