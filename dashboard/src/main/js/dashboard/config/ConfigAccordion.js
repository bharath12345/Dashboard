define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "noc/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dashboard/abstract/AbstractAccordion"],

    function (declare, i18n, i18nString, Logger, ConfigUtility, CONFIGCONSTANTS, AbstractAccordion) {

        var ConfigAccordion = declare(CONFIGCONSTANTS.CLASSNAME.ACCORDION, AbstractAccordion, {

            renderAccordion: function(data) {
                // keep in mind that the superclass's method will be called after this method is finished due to the
                // custom chain configuration
                console.log("in config render accordion. data = " + dojo.toJson(data));
                this.data = data.pageListVO;
                this.param = data.param;
            },

            showPageConfig: function(id) {
                console.log("show page config called with id = " + id);
                var viewMeta = {
                    id:id,
                    type:CONFIGCONSTANTS.TYPE.PAGECONFIG,
                    custom:[]
                };
                var actionClass;
                switch(id) {
                    case 0: // this is Alerts Grid
                        actionClass = CONFIGCONSTANTS.ACTION.ALERTGRIDATTRIBUTES;
                        break;

                    case 1: // this is Clusters Grid
                        actionClass = CONFIGCONSTANTS.ACTION.CLUSTERGRIDATTRIBUTES;
                        break;

                    case 2: // this is transaction Grid
                        actionClass = CONFIGCONSTANTS.ACTION.TRANSACTIONGRIDATTRIBUTES;
                        break;

                    case 3: // this is Topology Map
                        actionClass = CONFIGCONSTANTS.ACTION.TOPOLOGYATTRIBUTES;
                        break;

                    case 4:
                        actionClass = CONFIGCONSTANTS.ACTION.GLOBALATTRIBUTES;
                        break;

                    default:
                        console.log("Unknown page id = " + id);
                        return;
                }
                ConfigUtility.xhrPostCentral(actionClass, viewMeta);
            }
        });

        ConfigAccordion.LOG = Logger.addTimer(new Logger(CONFIGCONSTANTS.CLASSNAME.ACCORDION));

        return ConfigAccordion;
    });