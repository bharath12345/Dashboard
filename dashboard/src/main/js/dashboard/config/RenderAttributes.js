define(["dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dijit/layout/TabContainer", "dijit/layout/ContentPane", "dojo/on", "dojo/_base/lang",
    "dashboard/logger/Logger", "dashboard/config/ConfigView",
    "dashboard/config/ConfigConstants", "dojo/i18n!dashboard/config/nls/config", "dashboard/helper/ButtonHelper"],

    function (declare, i18n, TitlePane, GridContainer, TabContainer, ContentPane, on, lang, Logger, ConfigView, CONFIGCONSTANTS, i18nString, ButtonHelper) {

        /*
         A New object of RenderAttributes is created on the click of any link in the Accordion.
         RenderAttributes has a static variables for Id, Name and Type which holds the values for the
         view being displayed
         */

        dashboard.classnames.RenderAttributes = "dashboard.config.RenderAttributes";

        var RenderAttributes = declare(dashboard.classnames.RenderAttributes, null, {

            renderConfigParameters:function (data, pageObj) {
                console.log("renderConfigParameters data = " + dojo.toJson(data));
                RenderAttributes.ID = data.param.id[0]; // this is the UUID
                RenderAttributes.NAME = data.param.name[0];
                RenderAttributes.TYPE = data.param.type[0];
                if (data.param.newWindow[0] == "false") {
                    RenderAttributes.NEWWINDOW = false;
                } else {
                    RenderAttributes.NEWWINDOW = true;
                }

                var tc = this.createTabs();
                this.createTitlePaneGrid(pageObj.getAttrib(data), pageObj.getAttribIgnoreList());
                this.createToolbarButtons();

                // all the title panes have been rendered - now render the innards
                RenderAttributes.PAGEOBJ = pageObj;
                pageObj.renderAttributes(data);

                this.cleanupRendering(tc);
                dashboard.STANDBY.hide();
            },

            cleanupRendering:function (tc) {
                // make the tab buttons larger
                var innerPane = dojo.query(".dijitTabInner", tc.domNode);
                for (var i = 0; i < innerPane.length; i++) {
                    innerPane[i].style.width = 300;
                }
            },

            createTabs:function () {

                var tc = new TabContainer({style:"height: 100%; width: 100%;"});
                dashboard.CpCenterInner.addChild(tc);

                RenderAttributes.LOOKNFEELPANE = new ContentPane({title:"Look and Feel", style:"height: 100%; width: 100%;"});
                tc.addChild(RenderAttributes.LOOKNFEELPANE);

                RenderAttributes.DATAPANE = new ContentPane({title:"Data", style:"height: 100%; width: 100%;"});
                tc.addChild(RenderAttributes.DATAPANE);

                tc.startup();
                tc.resize();
                return tc;
            },

            createTitlePaneGrid:function (attribContainer, ignoreList) {
                var paneWidth = RenderAttributes.LOOKNFEELPANE.domNode.offsetWidth;
                var paneHeight = RenderAttributes.LOOKNFEELPANE.domNode.offsetHeight;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";";
                console.log("style string = " + styleString);

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                RenderAttributes.LOOKNFEELPANE.addChild(gridContainer);
                gridContainer.disableDnd();

                for (var attribute in attribContainer) {
                    if (ignoreList[attribute] != null) {
                        continue;
                    }
                    var titlePane = new TitlePane({
                        splitter:false,
                        style:"width:" + paneWidth,
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

            getInnerDivString:function (attribute) {
                var divString = "<div class='tabbable tabs-left'>";
                divString += "<ul class='nav nav-tabs'>";
                for (var i = 0; i < 3; i++) {
                    switch (i) {
                        case 0:
                            divString += "<li class='active'><a href='#" + attribute + CONFIGCONSTANTS.DIVTYPE.USER + "' data-toggle='tab'>User Config</a></li>";
                            break;
                        case 1:
                            divString += "<li><a href='#" + attribute + CONFIGCONSTANTS.DIVTYPE.ADMIN + "' data-toggle='tab'>Admin Config</a></li>";
                            break;
                        case 2:
                            divString += "<li><a href='#" + attribute + CONFIGCONSTANTS.DIVTYPE.FACTORY + "' data-toggle='tab'>Factory Config</a></li>";
                            break;
                    }
                }
                divString += "</ul>";
                divString += "<div class='tab-content'>";
                for (var i = 0; i < 3; i++) {
                    divString += "<div id='";
                    divString += attribute;
                    switch (i) {
                        case 0:
                            divString += CONFIGCONSTANTS.DIVTYPE.USER;
                            divString += "' class='tab-pane active'"; // this is coming from bootstrap
                            break;

                        case 1:
                            divString += CONFIGCONSTANTS.DIVTYPE.ADMIN;
                            divString += "' class='tab-pane fade'";
                            break;

                        case 2:
                            divString += CONFIGCONSTANTS.DIVTYPE.FACTORY;
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

            createToolbarButtons:function () {
                dashboard.toolbar.destroyDescendants(false);

                var buttonHelper = new ButtonHelper();

                var button = buttonHelper.getSave();
                on(button, "click", function () {
                    RenderAttributes.PAGEOBJ.saveValues();
                });
                dashboard.toolbar.addChild(button);

                button = buttonHelper.getNewWindow();
                on(button, "click", function () {
                    ConfigView.launchNewWindowConfigPane(RenderAttributes.ID, RenderAttributes.NAME, RenderAttributes.TYPE);
                });
                dashboard.toolbar.addChild(button);

                dashboard.toolbar.addChild(buttonHelper.getDelete());
                dashboard.toolbar.addChild(buttonHelper.getRefresh());
                dashboard.toolbar.addChild(buttonHelper.getStatusRefresh());
                dashboard.toolbar.addChild(buttonHelper.getAnalysisPane());
                dashboard.toolbar.addChild(buttonHelper.getOpen());
                dashboard.toolbar.addChild(buttonHelper.getWizard());
                dashboard.toolbar.addChild(buttonHelper.getWizardPage());
                dashboard.toolbar.addChild(buttonHelper.getMapping());
                dashboard.toolbar.addChild(buttonHelper.getFitToContent());
                dashboard.toolbar.addChild(buttonHelper.getOneToOne());
                dashboard.toolbar.addChild(buttonHelper.getZoomOut());
                dashboard.toolbar.addChild(buttonHelper.getZoomIn());
                dashboard.toolbar.addChild(buttonHelper.getStopRefresh());
                dashboard.toolbar.addChild(buttonHelper.getRestoreDefault());
                dashboard.toolbar.addChild(buttonHelper.getRestoreFilter());
                dashboard.toolbar.addChild(buttonHelper.getFind());
                dashboard.toolbar.addChild(buttonHelper.getOpenNodeGroupMap());
                dashboard.toolbar.addChild(buttonHelper.getSaveLayout());
                dashboard.toolbar.addChild(buttonHelper.getSwapPath());
                dashboard.toolbar.addChild(buttonHelper.getComputePath());
                dashboard.toolbar.addChild(buttonHelper.getFirst());
                dashboard.toolbar.addChild(buttonHelper.getLast());
                dashboard.toolbar.addChild(buttonHelper.getPrevious());
                dashboard.toolbar.addChild(buttonHelper.getNext());
                dashboard.toolbar.addChild(buttonHelper.getClose());
                dashboard.toolbar.addChild(buttonHelper.getSaveAndClose());
                dashboard.toolbar.addChild(buttonHelper.getSaveAndNew());
                dashboard.toolbar.addChild(buttonHelper.getNew());
                dashboard.toolbar.addChild(buttonHelper.getToggleEmphasis());
                dashboard.toolbar.addChild(buttonHelper.getTooltipToggle());
                dashboard.toolbar.addChild(buttonHelper.getTextWrapToggle());
                dashboard.toolbar.addChild(buttonHelper.getFindToggle());
                dashboard.toolbar.addChild(buttonHelper.getIndicateKeyIncidents());
                dashboard.toolbar.addChild(buttonHelper.getGo());
                dashboard.toolbar.addChild(buttonHelper.getStop());


                dashboard.bottomMenuPane.resize();
                dashboard.TopBc.resize();

            }
        });

        RenderAttributes.LOG = Logger.addTimer(new Logger(dashboard.classnames.RenderAttributes));

        RenderAttributes.LOOKNFEELPANE = null;
        RenderAttributes.DATAPANE = null;

        RenderAttributes.PAGEOBJ = null;

        RenderAttributes.ID = null;
        RenderAttributes.NAME = null;
        RenderAttributes.TYPE = null;

        return RenderAttributes;
    });