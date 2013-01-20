define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/_base/lang", "dojo/i18n!noc/nls/noc"],

    function (require, declare, i18n, TitlePane, GridContainer, lang, i18nString) {

        var ComponentPage = declare("noc.pages.ComponentPage", null, {

            loadPage:function () {

                console.log("in component load page");

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

        ComponentPage.CP = null;

        return ComponentPage;
    });