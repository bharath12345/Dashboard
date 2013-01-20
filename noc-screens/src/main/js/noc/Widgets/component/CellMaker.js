define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants"],

    function (require, declare, i18n, i18nString, Logger, CONSTANTS) {

        // this is a completely static class
        var CellMaker = declare("noc.component.CellMaker", null, {

            create:function (data) {
                // data has all 3 - component name, kpi name and value
                // find the cell with the id and set its background color 
            }

        });

        return CellMaker;
    });