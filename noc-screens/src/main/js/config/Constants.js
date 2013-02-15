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

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.TYPE = {};
        CONSTANTS.SUBTYPE = {};

        CONSTANTS.TYPE.ACCORDION = 1;
        CONSTANTS.SUBTYPE.ACCORDION = 1;

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.ACTION = {};
        CONSTANTS.ACTION.PAGESET = "config/pages.action";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.WIDGETS = {};
        CONSTANTS.WIDGETS.ACCORDION = "config/ConfigAccordion";

        return CONSTANTS;
    });