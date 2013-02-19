define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!config/nls/config"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var CONSTANTS = declare("config.Constants", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.CLASSNAME = {};
        CONSTANTS.CLASSNAME.CONFIG = "config.Config";
        CONSTANTS.CLASSNAME.ACCORDION = "config.Accordion";
        CONSTANTS.CLASSNAME.PAGEELEMENTS = "config.PageElements";
        CONSTANTS.CLASSNAME.RENDERATTRIBUTES = "config.RenderAttributes";
        CONSTANTS.CLASSNAME.UTILITY = "config.Utility";

        CONSTANTS.CLASSNAME.INCIDENTGRID = "config.pages.IncidentGrid";

        CONSTANTS.CLASSNAME.COMBOBOX = "config.widgets.ComboBox";
        CONSTANTS.CLASSNAME.NUMBERSPINNER = "config.widgets.NumberSpinner";
        CONSTANTS.CLASSNAME.RADIOBUTTON = "config.widgets.RadioButton";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.TYPE = {};

        CONSTANTS.TYPE.ACCORDION = 1;
        CONSTANTS.TYPE.PAGECONFIG = 2;

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.ACTION = {};
        CONSTANTS.ACTION.PAGESET = "config/pages.action";
        CONSTANTS.ACTION.ALERTGRIDATTRIBUTES = "config/alertGridDetailsRetrieve";

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        CONSTANTS.WIDGETS = {};
        CONSTANTS.WIDGETS.ACCORDION = "config/ConfigAccordion";
        CONSTANTS.WIDGETS.RENDERATTRIBUTES = "config/RenderAttributes";

        CONSTANTS.WIDGETS.COMBOBOX = "config/widgets/ComboBox";
        CONSTANTS.WIDGETS.NUMBERSPINNER = "config/widgets/NumberSpinner";
        CONSTANTS.WIDGETS.RADIOBUTTON = "config/widgets/RadioButton";

        return CONSTANTS;
    });