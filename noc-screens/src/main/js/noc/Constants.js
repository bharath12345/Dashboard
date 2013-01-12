define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var CONSTANTS = declare("noc.Constants", null, {});

        CONSTANTS.AVAILABILITY = 1;
        CONSTANTS.AVAILABILITY_DATA = 2;

        return CONSTANTS;
    });