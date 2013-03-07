define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, i18nString) {

        // this is a completely static class
        var TOPOLOGY = declare("noc.Topology", null, {});

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        TOPOLOGY.NODEMAP = [];

        return TOPOLOGY;
    });