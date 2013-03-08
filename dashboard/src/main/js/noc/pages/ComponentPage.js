define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/_base/lang", "dojo/i18n!noc/nls/noc", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility", "dashboard/noc/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, lang, i18nString, NOCCONSTANTS, NocUtility, Logger) {

        var ComponentPage = declare(NOCCONSTANTS.CLASSNAME.PAGES.COMPONENTPAGE, null, {

            loadPage:function () {

                ComponentPage.LOG.log(Logger.SEVERITY.SEVERE, "in component load page");

                ComponentPage.CP = noc.PageLoader.CpCenter[2];

                var xpos=0, ypos=0;

                var viewMeta = {
                    width: ComponentPage.CP.w,
                    height: ComponentPage.CP.h
                };
                NocUtility.xhrPostCentral(NOCCONSTANTS.ACTION.COMPONENT.ZONES, dojo.toJson(viewMeta));
            }

        });

        // static variables of this class
        ComponentPage.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.PAGES.COMPONENTPAGE));

        ComponentPage.CP = null;

        return ComponentPage;
    });