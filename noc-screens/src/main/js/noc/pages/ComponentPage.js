define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/_base/lang", "dojo/i18n!noc/nls/noc", "noc/Constants", "noc/Utility", "noc/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, lang, i18nString, CONSTANTS, Utility, Logger) {

        var ComponentPage = declare(CONSTANTS.CLASSNAME.PAGES.COMPONENTPAGE, null, {

            loadPage:function () {

                ComponentPage.LOG.log(Logger.SEVERITY.SEVERE, "in component load page");

                ComponentPage.CP = noc.PageLoader.CpCenter[2];

                var xpos=0, ypos=0;

                var viewMeta = {
                    width: ComponentPage.CP.w,
                    height: ComponentPage.CP.h
                };
                Utility.xhrPostCentral(CONSTANTS.ACTION.COMPONENT.ZONES, dojo.toJson(viewMeta));
            }

        });

        // static variables of this class
        ComponentPage.LOG = new Logger(CONSTANTS.CLASSNAME.PAGES.COMPONENTPAGE);

        ComponentPage.CP = null;

        return ComponentPage;
    });