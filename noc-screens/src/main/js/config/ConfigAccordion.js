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
                    subtype:CONSTANTS.SUBTYPE.ACCORDIONMETA,
                    custom:[]
                };
                Utility.xhrPostCentral(CONSTANTS.ACTION.PAGESET, viewMeta);
            },

            renderAccordion: function(data) {
                console.log("in render accordion. data = " + dojo.toJson(data));
                var pageList = data.pageListVO;
                for(var i=0;i<pageList.length; i++) {
                    var a = this.getNewA(pageList[i].id);
                    on(a, "click", lang.hitch(this, "renderPageAttrib"));
                    a.innerHTML = ConfigAccordion.IMAGE + pageList[i].name;
                    this.appendToAccDiv(a, config.PageElements.AccPane.domNode);
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
                aPane.appendChild(a);
                var linebreak = dojo.create("br");
                aPane.appendChild(linebreak);
            },

            showPageConfig: function(id) {
                var viewMeta = {
                    id:id,
                    type:CONSTANTS.TYPE.ACCORDION,
                    subtype:CONSTANTS.SUBTYPE.ACCORDIONDATA,
                    custom:[]
                };
                Utility.xhrPostCentral(CONSTANTS.ACTION.PAGESET, viewMeta);
            },

            renderConfigParameters: function(data) {
                var paneWidth = config.PageElements.CpCenterInner.w;
                var paneHeight = config.PageElements.CpCenterInner.h;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                config.PageElements.CpCenterInner.addChild(gridContainer);
                gridContainer.disableDnd();

                for(var i=0;i<20;i++) {
                    var titlePane = new TitlePane({
                        splitter:false,
                        style:"width:"+paneWidth,
                        content:"<div id='"+i+"' style='width: 100%; height: 100%;'></div>",
                        title:"Attribute Pane",
                        toggleable:true
                    });
                    gridContainer.addChild(titlePane, 0);
                    titlePane.toggle();
                }

                gridContainer.startup();
                gridContainer.resize();

            }
        });

        ConfigAccordion.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.ACCORDION));
        ConfigAccordion.IMAGE = "<img src=\".\/images\/Icon_ArrowRight_SW_16.gif\" border=\"0\" align=\"top\">";

        return ConfigAccordion;
    });