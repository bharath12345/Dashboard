define(["dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dijit/layout/TabContainer", "dijit/layout/ContentPane", "dijit/form/Button", "dijit/Toolbar",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config", "config/pages/IncidentGrid"],

    function (declare, i18n, TitlePane, GridContainer, TabContainer, ContentPane, Button, Toolbar,
              Logger, Utility, CONSTANTS, i18nString, IncidentGrid) {

        var RenderAttributes = declare(CONSTANTS.CLASSNAME.RENDERATTRIBUTES, null, {

            renderConfigParameters: function(data) {
                console.log("renderConfigParameters data = " + data);

                var tc = this.createTabs();
                this.createTitlePaneGrid(data);
                this.createToolbarButtons();

                // all the title panes have been rendered - now render the innards
                RenderAttributes.INCIDENTGRID = new IncidentGrid();
                RenderAttributes.INCIDENTGRID.renderAttributes(data);

                this.cleanupRendering(tc);
            },

            cleanupRendering: function(tc) {
                // make the tab buttons larger
                var innerPane = dojo.query(".dijitTabInner", tc.domNode);
                for (var i = 0; i < innerPane.length; i++) {
                    innerPane[i].style.width = 300;
                }

                // remove the boundary and padding of inner center pane
                config.PageElements.CpCenterInner.domNode.style.padding=0;
                config.PageElements.CpCenterInner.domNode.style.border=0;

                config.PageElements.CpTopInner.domNode.style.padding=0;
                config.PageElements.TopBc.resize();
            },

            createTabs: function() {
                var tc = new TabContainer({style: "height: 100%; width: 100%;"});
                config.PageElements.CpCenterInner.addChild(tc);

                RenderAttributes.LOOKNFEELPANE = new ContentPane({title: "Look and Feel", style: "height: 100%; width: 100%;"});
                tc.addChild(RenderAttributes.LOOKNFEELPANE);

                RenderAttributes.DATAPANE = new ContentPane({title: "Data", style: "height: 100%; width: 100%;"});
                tc.addChild(RenderAttributes.DATAPANE);

                tc.startup();
                tc.resize();
                return tc;
            },

            createTitlePaneGrid: function(data) {
                var paneWidth = RenderAttributes.LOOKNFEELPANE.domNode.offsetWidth;
                var paneHeight = RenderAttributes.LOOKNFEELPANE.domNode.offsetHeight;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";";
                console.log("style string = " + styleString);

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                RenderAttributes.LOOKNFEELPANE.addChild(gridContainer);
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
            },

            createToolbarButtons: function() {
                var toolbar = new Toolbar({});
                config.PageElements.CpTopInner.addChild(toolbar);

                var button = new Button({
                    showLabel: true,
                    label: "Save",
                    iconClass:'dijitEditorIcon dijitEditorIconSave',
                    onClick: function(){
                        var refreshTime = IncidentGrid.APPLICATIONREFRESHTIME.get('value');
                        var fontName = IncidentGrid.FONTNAME.get('value');
                        var fontSize = IncidentGrid.FONTSIZE.get('value');
                        var showGreenApp = IncidentGrid.SHOWALLGREEN.get('value');
                        console.log("refreshTime = " + refreshTime + " fontName = " + fontName + " fontSize = " + fontSize + " showGreen = " + showGreenApp);
                    }
                });
                toolbar.addChild(button);
            }
        });

        RenderAttributes.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.RENDERATTRIBUTES));
        RenderAttributes.LOOKNFEELPANE = null;
        RenderAttributes.DATAPANE = null;
        RenderAttributes.INCIDENTGRID = null;

        return RenderAttributes;
    });