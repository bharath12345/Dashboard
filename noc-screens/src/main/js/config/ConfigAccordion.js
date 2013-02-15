define(["dojo/_base/declare", "dojo/i18n",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, Logger, Utility, CONSTANTS, i18nString) {

        var ConfigAccordion = declare(CONSTANTS.CLASSNAME.ACCORDION, null, {

            loadAccordion: function() {
                var viewMeta = {
                    id:pageName,
                    name:pageName,
                    type:CONSTANTS.TYPE.ACCORDION,
                    subtype:CONSTANTS.SUBTYPE.ACCORDION,
                    custom:[]
                };
                Utility.xhrPostCentral(CONSTANTS.ACTION.PAGESET, viewMeta);
            },

            renderAccordion: function() {
                var pageList = data.pageListVO;
                for(var i=0;i<pageList.length; i++) {
                    var a = this.getNewA();
                    a.onclick = function () {
                        this.showPageConfig(pageList[i].name, pageList[i].id);
                    };
                    a.innerHTML = ConfigAccordion.IMAGE + pageList[i].name;
                    this.appendToAccDiv(a, ConfigPageElements.AccPane.domNode);
                }
            },

            getNewA:function () {
                var a = dojo.create("a");
                a.className = "document";
                a.href = "#";
                return a;
            },

            appendToAccDiv:function (a, aPane) {
                aPane.appendChild(a);
                var linebreak = dojo.create("br");
                aPane.appendChild(linebreak);
            }
        });

        ConfigAccordion.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.ACCORDION));
        ConfigAccordion.IMAGE = "<img src=\".\/images\/Icon_ArrowRight_SW_16.gif\" border=\"0\" align=\"top\">";


        return ConfigAccordion;
    });