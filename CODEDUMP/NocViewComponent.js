define(['require', "../../../dojo/_base/declare", "../dashboard/src/main/js/dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/_base/lang", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility", "dashboard/logger/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, lang, i18nString, NOCCONSTANTS, NocUtility, Logger) {

        var NocViewComponent = declare(NOCCONSTANTS.CLASSNAME.PAGES.COMPONENTPAGE, null, {

            loadPage:function () {

                NocViewComponent.LOG.log(Logger.SEVERITY.SEVERE, "in component load page");

                NocViewComponent.CP = noc.PageLoader.CpCenter[2];

                var xpos=0, ypos=0;

                var viewMeta = {
                    width: NocViewComponent.CP.w,
                    height: NocViewComponent.CP.h
                };
                NocUtility.xhrPostCentral(NOCCONSTANTS.ACTION.COMPONENT.ZONES, dojo.toJson(viewMeta));
            }

        });

        // static variables of this class
        NocViewComponent.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.PAGES.COMPONENTPAGE));

        NocViewComponent.CP = null;

        return NocViewComponent;
    });