define(['require', "dojo/_base/declare", "dojo/i18n",
    "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/noc/Logger"],

    function (require, declare, i18n, i18nString, NocUtility, NOCCONSTANTS, Logger) {

        var AllClusterAvailability = declare(NOCCONSTANTS.CLASSNAME.PAGES.ALLCLUSTERAVAILABILITY, null, {

            loadPage:function (pageNumber, pageName) {

                AllClusterAvailability.CP = noc.PageLoader.CpCenter[pageNumber];

                var xpos=0, ypos=0;

                var viewMeta = {
                    id:0,
                    name: pageName,
                    type: NOCCONSTANTS.TYPE.AVAILABILITY,
                    subtype: NOCCONSTANTS.SUBTYPE.AVAILABILITY.ALLCLUSTER,
                    dimensions:[AllClusterAvailability.CP.w, AllClusterAvailability.CP.h],
                    position:[xpos,ypos],
                    custom: []
                };

                NocUtility.xhrPostCentral(NOCCONSTANTS.ACTION.AVAILABILITY.CLUSTERZONES, viewMeta);

            }
        });

        // static variables of this class
        AllClusterAvailability.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.PAGES.ALLCLUSTERAVAILABILITY));

        AllClusterAvailability.CP = null;

        return AllClusterAvailability;
    });