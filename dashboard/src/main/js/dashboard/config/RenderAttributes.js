define(["dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dijit/layout/TabContainer", "dijit/layout/ContentPane", "dojo/on", "dojo/_base/lang",
    "dashboard/logger/Logger", "dashboard/config/ConfigView", "dashboard/config/ConfigUtility",
    "dojo/i18n!dashboard/config/nls/config", "dashboard/helper/ButtonHelper"],

    function (declare, i18n, TitlePane, GridContainer, TabContainer, ContentPane, on, lang, Logger, ConfigView, ConfigUtility, i18nString, ButtonHelper) {

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
                dashboard.dom.STANDBY.hide();
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
                dashboard.dom.CpCenterInner[dashboard.pageTypes.dashboard].addChild(tc);

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
                            divString += "<li class='active'><a href='#" + attribute + ConfigUtility.USER + "' data-toggle='tab'>User Config</a></li>";
                            break;
                        case 1:
                            divString += "<li><a href='#" + attribute + ConfigUtility.ADMIN + "' data-toggle='tab'>Admin Config</a></li>";
                            break;
                        case 2:
                            divString += "<li><a href='#" + attribute + ConfigUtility.FACTORY + "' data-toggle='tab'>Factory Config</a></li>";
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
                            divString += ConfigUtility.USER;
                            divString += "' class='tab-pane active'"; // this is coming from bootstrap
                            break;

                        case 1:
                            divString += ConfigUtility.ADMIN;
                            divString += "' class='tab-pane fade'";
                            break;

                        case 2:
                            divString += ConfigUtility.FACTORY;
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
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].destroyDescendants(false);

                var buttonHelper = new ButtonHelper();

                var button = buttonHelper.getSave();
                on(button, "click", function () {
                    RenderAttributes.PAGEOBJ.saveValues();
                });
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(button);

                button = buttonHelper.getViewNewWindow();
                on(button, "click", function () {
                    ConfigView.launchNewWindowConfigPane(RenderAttributes.ID, RenderAttributes.NAME, RenderAttributes.TYPE);
                });
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(button);

                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getGraphs());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getIncidentBrowsing());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getIncidentManagement());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getIndicateKeyIncidents());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getInformational());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getIntegrationModule());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getInventory());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getLast());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getLogout());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getManage());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getManagementMode());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getMap());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getMapEmphasis());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getMibBrowser());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getMonitoring());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getNew());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getNewMapping());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getNewdocument());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getNext());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getNot());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getOneToOne());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getOpen());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getOpenInAnalysisPane());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getOpenIncidentConfig());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getOpenNodeGroupMap());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getOpenNodeGroupMap());
                dashboard.dom.Toolbar[dashboard.pageTypes.dashboard].addChild(buttonHelper.getOwnIncident());

                dashboard.dom.TopBc.resize();

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