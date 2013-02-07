define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility) {

        var RenderNodes = declare(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES, null, {

            create: function(data, input) {
                var xpos=0, ypos=0;

                var viewMeta = {
                    id:pageName,
                    name: pageName,
                    type: CONSTANTS.TYPE.TOPOLOGY,
                    subtype: CONSTANTS.SUBTYPE.TOPOLOGY.CONNECTIVITY,
                    dimensions:[0, 0],
                    position:[xpos,ypos],
                    custom: []
                };

                Utility.xhrPostCentral(CONSTANTS.ACTION.TOPOLOGY.CONNECTIONS, viewMeta);

            }
        });

        RenderNodes.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.RENDERNODES));

        return RenderNodes;
    });