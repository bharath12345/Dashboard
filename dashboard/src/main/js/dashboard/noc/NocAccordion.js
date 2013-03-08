define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "dashboard/logger/Logger",
    "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/abstract/AbstractAccordion"],

    function (declare, i18n, i18nString, Logger, NocUtility, NOCCONSTANTS, AbstractAccordion) {

        var NocAccordion = declare(NOCCONSTANTS.CLASSNAME.ACCORDION, AbstractAccordion, {

            renderAccordion: function(data) {
                // keep in mind that the superclass's method will be called after this method is finished due to the
                // custom chain configuration
                console.log("in NOC render accordion. data = " + dojo.toJson(data));
                this.data = data.pageListVO;
                this.param = data.param;
            },

            showPageConfig: function(id) {

            }
        });

        NocAccordion.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.ACCORDION));

        return NocAccordion;
    });