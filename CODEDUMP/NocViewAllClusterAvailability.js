define(['require', "../../../dojo/_base/declare", "../dashboard/src/main/js/dojo/i18n",
    "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/logger/Logger"],

    function (require, declare, i18n, i18nString, NocUtility, NOCCONSTANTS, Logger) {

        var NocViewAllClusterAvailability = declare(NOCCONSTANTS.CLASSNAME.PAGES.ALLCLUSTERAVAILABILITY, null, {

            loadPage:function (pageName) {

                var xpos=0, ypos=0;
                var viewMeta = {
                    id:0,
                    name: pageName,
                    type: NOCCONSTANTS.TYPE.AVAILABILITY,
                    subtype: NOCCONSTANTS.SUBTYPE.AVAILABILITY.ALLCLUSTER,
                    dimensions:[dashboard.CpCenterInner.w, dashboard.CpCenterInner.h],
                    position:[xpos,ypos],
                    custom: []
                };

                NocUtility.xhrPostCentral(NOCCONSTANTS.ACTION.AVAILABILITY.CLUSTERZONES, viewMeta);

            }
        });

        // static variables of this class
        NocViewAllClusterAvailability.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.PAGES.ALLCLUSTERAVAILABILITY));

        return NocViewAllClusterAvailability;
    });