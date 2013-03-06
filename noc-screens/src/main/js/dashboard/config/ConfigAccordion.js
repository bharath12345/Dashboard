define(["dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer", "dojo/on", "dojo/_base/lang",
    "noc/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, TitlePane, GridContainer, on, lang, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString) {

        var ConfigAccordion = declare(CONFIGCONSTANTS.CLASSNAME.ACCORDION, null, {

            renderAccordion: function(data) {
                console.log("in render accordion. data = " + dojo.toJson(data));
                var pageList = data.pageListVO;
                for(var i=0;i<pageList.length; i++) {
                    try {
                        //console.log("rendering = " + pageList[i].id);
                        var a = this.getNewA(pageList[i].id);
                        on(a, "click", lang.hitch(this, "renderPageAttrib"));
                        a.innerHTML = ConfigAccordion.IMAGE + pageList[i].name;
                        this.appendToAccDiv(a, dojo.byId(data.param.name[0]));
                    } catch(e) {
                        console.log("exception = " + e);
                    }
                }
                ConfigAccordion.LINKARRAY[0].click();
            },

            renderPageAttrib: function(event) {
                //console.log("event in renderPageAttrib = " + event.target+ " type = " + typeof(event.target));
                dashboard.STANDBY.show();
                var pageId = this.getIdFromUrl(event.target);
                this.setMarker(pageId);
                this.showPageConfig(pageId);
            },

            getIdFromUrl: function(ss) {
                var splitArray = String(ss).split("/");
                return parseInt(splitArray[splitArray.length-1]);
            },

            setMarker: function(pageId) {
                for(var i=0;i<ConfigAccordion.LINKARRAY.length;i++) {
                    var hrefVal = this.getIdFromUrl(ConfigAccordion.LINKARRAY[i].href);
                    //console.log("href = " + hrefVal + " compare = " + pageId);
                    if(hrefVal == pageId) {
                        ConfigAccordion.LINKARRAY[i].style.color = "rgb(0, 51, 102)";
                    } else {
                        ConfigAccordion.LINKARRAY[i].style.color = "rgb(0, 136, 204)";
                    }
                }
            },

            getNewA:function (name) {
                var a = dojo.create("a");
                a.className = "document";
                a.href = name;
                a.onclick = function () {return false;};
                ConfigAccordion.LINKARRAY.push(a);
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
        ConfigAccordion.IMAGE = "<img src=\".\/images\/Icon_ArrowRight_SW_16.gif\" border=\"0\" align=\"top\">";
        ConfigAccordion.LINKARRAY = [];

        return ConfigAccordion;
    });