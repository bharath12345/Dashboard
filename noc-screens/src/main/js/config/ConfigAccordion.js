define(["dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer", "dojo/on", "dojo/_base/lang",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, TitlePane, GridContainer, on, lang, Logger, Utility, CONSTANTS, i18nString) {

        var ConfigAccordion = declare(CONSTANTS.CLASSNAME.ACCORDION, null, {

            loadAccordion: function() {
                var viewMeta = {
                    id:"",
                    name:"",
                    type:CONSTANTS.TYPE.ACCORDION,
                    custom:[]
                };
                Utility.xhrPostCentral(CONSTANTS.ACTION.PAGESET, viewMeta);
            },

            renderAccordion: function(data) {
                console.log("in render accordion. data = " + dojo.toJson(data));
                var pageList = data.pageListVO;
                for(var i=0;i<pageList.length; i++) {
                    try {
                        //console.log("rendering = " + pageList[i].id);
                        var a = this.getNewA(pageList[i].id);
                        on(a, "click", lang.hitch(this, "renderPageAttrib"));
                        a.innerHTML = ConfigAccordion.IMAGE + pageList[i].name;
                        this.appendToAccDiv(a, config.ConfigPageElements.AccPane.domNode);
                    } catch(e) {
                        console.log("exception = " + e);
                    }
                }
            },

            renderPageAttrib: function(event) {
                //console.log("event in renderPageAttrib = " + event.target+ " type = " + typeof(event.target));
                var splitArray = String(event.target).split("/");
                var pageId = parseInt(splitArray[splitArray.length-1]);
                this.showPageConfig(pageId);
            },

            getNewA:function (name) {
                var a = dojo.create("a");
                a.className = "document";
                a.href = name;
                a.onclick = function () {
                    return false;
                };
                return a;
            },

            appendToAccDiv:function (a, aPane) {
                var linkDiv = dojo.create("div");
                linkDiv.className = "linkDiv";
                aPane.appendChild(linkDiv);
                linkDiv.appendChild(a);
            },

            showPageConfig: function(id) {
                var viewMeta = {
                    id:id,
                    type:CONSTANTS.TYPE.PAGECONFIG,
                    custom:[]
                };
                var actionClass;
                switch(id) {
                    case 0: // this is Alerts Grid
                        actionClass = CONSTANTS.ACTION.ALERTGRIDATTRIBUTES;
                        break;

                    case 1: // this is Clusters Grid
                        actionClass = CONSTANTS.ACTION.CLUSTERGRIDATTRIBUTES;
                        break;

                    case 2: // this is transaction Grid
                        actionClass = CONSTANTS.ACTION.TRANSACTIONGRIDATTRIBUTES;
                        break;

                    case 3: // this is Topology Map
                        actionClass = CONSTANTS.ACTION.TOPOLOGYATTRIBUTES;
                        break;

                    default:
                        console.log("Unknown page id = " + id);
                        return;
                }
                Utility.xhrPostCentral(actionClass, viewMeta);
            }
        });

        ConfigAccordion.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.ACCORDION));
        ConfigAccordion.IMAGE = "<img src=\".\/images\/Icon_ArrowRight_SW_16.gif\" border=\"0\" align=\"top\">";

        return ConfigAccordion;
    });