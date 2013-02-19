define(["dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dijit/layout/TabContainer", "dijit/layout/ContentPane", "dijit/form/Button",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config", "config/pages/IncidentGrid"],

    function (declare, i18n, TitlePane, GridContainer, TabContainer, ContentPane, Button,
              Logger, Utility, CONSTANTS, i18nString, IncidentGrid) {

        var RenderAttributes = declare(CONSTANTS.CLASSNAME.RENDERATTRIBUTES, null, {

            renderConfigParameters: function(data) {
                console.log("renderConfigParameters data = " + data);

                var tc = new TabContainer({style: "height: 100%; width: 100%;"});
                config.PageElements.CpCenterInner.addChild(tc);

                var cp1 = new ContentPane({title: "Look and Feel", style: "height: 100%; width: 100%;"});
                tc.addChild(cp1);

                var cp2 = new ContentPane({title: "Data", style: "height: 100%; width: 100%;"});
                tc.addChild(cp2);

                tc.startup();
                tc.resize();

                var paneWidth = cp1.domNode.offsetWidth;
                var paneHeight = cp1.domNode.offsetHeight;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";";
                console.log("style string = " + styleString);

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                cp1.addChild(gridContainer);
                gridContainer.disableDnd();

                for(var attribute in data.agcVO) {
                    var titlePane = new TitlePane({
                        splitter:false,
                        style:"width:"+paneWidth,
                        content:"<div id='"+attribute+"' style='width: 100%; height: 100%;'></div>",
                        title:attribute,
                        toggleable:true
                    });
                    gridContainer.addChild(titlePane, 0);
                    titlePane.toggle();
                }

                gridContainer.startup();
                gridContainer.resize();

                // all the title panes have been rendered - now render the innards
                var ag = new IncidentGrid();
                ag.renderAttributes(data);

                var innerPane = dojo.query(".dijitTabInner", tc.domNode);
                for (var i = 0; i < innerPane.length; i++) {
                    innerPane[i].style.width = 300;
                }

                config.PageElements.CpCenterInner.domNode.style.padding=0;
                config.PageElements.CpCenterInner.domNode.style.border=0;

                var myButton = new Button({
                    showLabel: true,
                    label: "Save",
                    iconClass:'dijitEditorIcon dijitEditorIconSave',
                    onClick: function(){
                        // Do something:
                        alert("ok, I shall save!");
                    }
                });
                config.PageElements.CpTopInner.addChild(myButton);
                config.PageElements.CpTopInner.domNode.style.padding=0;

                config.PageElements.TopBc.resize();
            }
        });

        RenderAttributes.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.RENDERATTRIBUTES));

        return RenderAttributes;
    });