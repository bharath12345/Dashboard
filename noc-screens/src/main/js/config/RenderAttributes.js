define(["dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dijit/layout/TabContainer", "dijit/layout/ContentPane", "dijit/form/Button", "dijit/Toolbar",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, TitlePane, GridContainer, TabContainer, ContentPane, Button, Toolbar,
              Logger, Utility, CONSTANTS, i18nString) {

        var RenderAttributes = declare(CONSTANTS.CLASSNAME.RENDERATTRIBUTES, null, {

            renderConfigParameters: function(data, pageObj) {
                console.log("renderConfigParameters data = " + dojo.toJson(data));

                var tc = this.createTabs();

                this.createTitlePaneGrid(pageObj.getAttrib(data), pageObj.getAttribIgnoreList());
                this.createToolbarButtons();

                // all the title panes have been rendered - now render the innards
                RenderAttributes.PAGEOBJ = pageObj;
                pageObj.renderAttributes(data);

                this.cleanupRendering(tc);
                config.Config.STANDBY.hide();
            },

            cleanupRendering: function(tc) {
                // make the tab buttons larger
                var innerPane = dojo.query(".dijitTabInner", tc.domNode);
                for (var i = 0; i < innerPane.length; i++) {
                    innerPane[i].style.width = 300;
                }

                // remove the boundary and padding of inner center pane
                config.ConfigPageElements.CpCenterInner.domNode.style.padding=0;
                config.ConfigPageElements.CpCenterInner.domNode.style.border=0;

                config.ConfigPageElements.CpTopInner.domNode.style.padding=0;
                config.ConfigPageElements.TopBc.resize();
            },

            createTabs: function() {
                config.ConfigPageElements.CpCenterInner.destroyDescendants(false);

                var tc = new TabContainer({style: "height: 100%; width: 100%;"});
                config.ConfigPageElements.CpCenterInner.addChild(tc);

                RenderAttributes.LOOKNFEELPANE = new ContentPane({title: "Look and Feel", style: "height: 100%; width: 100%;"});
                tc.addChild(RenderAttributes.LOOKNFEELPANE);

                RenderAttributes.DATAPANE = new ContentPane({title: "Data", style: "height: 100%; width: 100%;"});
                tc.addChild(RenderAttributes.DATAPANE);

                tc.startup();
                tc.resize();
                return tc;
            },

            createTitlePaneGrid: function(attribContainer, ignoreList) {
                var paneWidth = RenderAttributes.LOOKNFEELPANE.domNode.offsetWidth;
                var paneHeight = RenderAttributes.LOOKNFEELPANE.domNode.offsetHeight;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";";
                console.log("style string = " + styleString);

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                RenderAttributes.LOOKNFEELPANE.addChild(gridContainer);
                gridContainer.disableDnd();

                for(var attribute in attribContainer) {
                    if(ignoreList[attribute]!=null) {
                        continue;
                    }
                    var titlePane = new TitlePane({
                        splitter:false,
                        style:"width:"+paneWidth,
                        content:this.getInnerDivString(attribute),
                        title:i18nString[attribute],
                        toggleable:true
                    });
                    gridContainer.addChild(titlePane, 0);
                    titlePane.toggle();
                }

                gridContainer.startup();
                gridContainer.resize();
            },

            getInnerDivString: function(attribute) {
                var divString = "<div class='tabbable tabs-left'>";
                divString += "<ul class='nav nav-tabs'>";
                for(var i=0;i<3;i++) {
                    switch(i) {
                        case 0: divString += "<li class='active'><a href='#" + attribute+CONSTANTS.DIVTYPE.USER + "' data-toggle='tab'>User Config</a></li>";
                            break;
                        case 1: divString += "<li><a href='#" + attribute+CONSTANTS.DIVTYPE.ADMIN + "' data-toggle='tab'>Admin Config</a></li>";
                            break;
                        case 2: divString += "<li><a href='#" + attribute+CONSTANTS.DIVTYPE.FACTORY + "' data-toggle='tab'>Factory Config</a></li>";
                            break;
                    }
                }
                divString += "</ul>";
                divString += "<div class='tab-content'>";
                for(var i=0;i<3;i++) {
                    divString += "<div id='";
                    divString += attribute;
                    switch(i) {
                        case 0:
                            divString += CONSTANTS.DIVTYPE.USER;
                            divString += "' class='tab-pane active'"; // this is coming from bootstrap
                            break;

                        case 1:
                            divString += CONSTANTS.DIVTYPE.ADMIN;
                            divString += "' class='tab-pane fade'";
                            break;

                        case 2:
                            divString += CONSTANTS.DIVTYPE.FACTORY;
                            divString += "' class='tab-pane fade'";
                            break;
                    }
                    //divString += " style='width: 100%; height: 100%;'";
                    divString += ">";
                    divString += "</div>";
                }
                divString += "</div>";
                return divString;
            },

            createToolbarButtons: function() {
                config.ConfigPageElements.CpTopInner.destroyDescendants(false);

                var toolbar = new Toolbar({});
                config.ConfigPageElements.CpTopInner.addChild(toolbar);

                var button = new Button({
                    showLabel: true,
                    label: "Save",
                    iconClass:'dijitEditorIcon dijitEditorIconSave',
                    onClick: function(){
                        RenderAttributes.PAGEOBJ.saveValues();
                    }
                });
                toolbar.addChild(button);
            }
        });

        RenderAttributes.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.RENDERATTRIBUTES));

        RenderAttributes.LOOKNFEELPANE = null;
        RenderAttributes.DATAPANE = null;

        RenderAttributes.PAGEOBJ = null;

        return RenderAttributes;
    });