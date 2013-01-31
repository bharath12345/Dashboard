define(['require', "dojo/_base/declare", "dojo/i18n",
    "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants", "noc/Logger"],

    function (require, declare, i18n, i18nString, Utility, CONSTANTS, Logger) {

        var AllClusterAvailability = declare(CONSTANTS.CLASSNAME.PAGES.ALLCLUSTERAVAILABILITY, null, {

            loadPage:function (pageNumber, pageName) {

                AllClusterAvailability.CP = noc.PageLoader.CpCenter[pageNumber];

                var xpos=0, ypos=0;

                var viewMeta = {
                    id:0,
                    name: pageName,
                    type: CONSTANTS.TYPE.AVAILABILITY,
                    subtype: CONSTANTS.SUBTYPE.AVAILABILITY.ALLCLUSTER,
                    dimensions:[AllClusterAvailability.CP.w, AllClusterAvailability.CP.h],
                    position:[xpos,ypos],
                    custom: []
                };

                Utility.xhrPostCentral(CONSTANTS.ACTION.AVAILABILITY.CLUSTERZONES, viewMeta);

            }
        });

        // static variables of this class
        AllClusterAvailability.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.PAGES.ALLCLUSTERAVAILABILITY));

        AllClusterAvailability.CP = null;

        return AllClusterAvailability;
    });