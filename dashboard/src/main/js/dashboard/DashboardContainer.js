define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dijit/layout/ContentPane", "dijit/layout/BorderContainer",
    "dijit/MenuBar", "dijit/MenuBarItem", "dijit/Menu", "dijit/MenuItem", "dijit/PopupMenuItem", "dijit/PopupMenuBarItem", "noc/Logger",
    "dashboard/DashboardUtility", "dashboard/DashboardConstants", "dashboard/abstract/AbstractContainer"],

    function (declare, i18n, i18nString, ContentPane, BorderContainer, MenuBar, MenuBarItem, Menu, MenuItem, PopupMenuItem, PopupMenuBarItem,
              Logger, DashboardUtility, DBCONSTANTS, AbstractContainer) {

        var DashboardContainer = declare(DBCONSTANTS.CLASSNAME.DASHBOARD.CONTAINER, AbstractContainer, {
            // create an Accordion with multiple links like in NNMi

            createPageElements: function() {
                this.createTopContainers(document.body); // call to the base class
                this.createCenterContainers();
                this.createMenu();
                this.createCenterInnerContainers();
                this.createMast(); // call to the base class
            },

            createCenterContainers: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                dashboard.CpTopCenter.domNode.appendChild(node);

                DashboardContainer.CenterBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                DashboardContainer.CpMenu = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;height:35px;"
                });

                DashboardContainer.CpLeft = new ContentPane({
                    region:"left",
                    splitter:true,
                    style: "width:20%;top:0;left:0;"
                });

                DashboardContainer.CpCenter = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                DashboardContainer.CenterBc.addChild(DashboardContainer.CpMenu);
                DashboardContainer.CenterBc.addChild(DashboardContainer.CpLeft);
                DashboardContainer.CenterBc.addChild(DashboardContainer.CpCenter);
                DashboardContainer.CenterBc.startup();
                DashboardContainer.CenterBc.resize();

                DashboardContainer.CpMenu.domNode.style.top = 0;
                DashboardContainer.CpMenu.domNode.style.left = 0;

                this.removeBoderPadding(DashboardContainer.CpMenu.domNode);
                this.removeBoderPadding(DashboardContainer.CpLeft.domNode);
                this.removeBoderPadding(DashboardContainer.CpCenter.domNode);

                DashboardContainer.CenterBc.resize();
                dashboard.TopBc.resize();
            },

            createMenu: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                DashboardContainer.CpMenu.domNode.appendChild(node);

                var menuBar = new MenuBar({}, node);

                //////////
                var fileMenu = new Menu({id: "fileMenu"});
                fileMenu.addChild( new MenuItem({id: "signout",label: "Sign Out"}) );
                menuBar.addChild( new PopupMenuBarItem({id: "file",label: "File",popup: fileMenu}) );

                ///////

                var actionMenu = new Menu({id: "actionMenu"});
                actionMenu.addChild( new MenuItem({id: "someaction",label: "Some Action"}) );
                menuBar.addChild( new PopupMenuBarItem({id: "action",label: "Action",popup: actionMenu}) );

                ///////

                var helpMenu = new Menu({id: "helpMenu"});
                helpMenu.addChild( new MenuItem({id: "somehelp",label: "Some Help"}) );
                menuBar.addChild( new PopupMenuBarItem({id: "help",label: "Help",popup: helpMenu}) );

                ////////

                menuBar.startup();
                fileMenu.startup();
                actionMenu.startup();
                helpMenu.startup();

                DashboardContainer.CenterBc.resize();
                dashboard.TopBc.resize();
            },

            createCenterInnerContainers: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                DashboardContainer.CpCenter.domNode.appendChild(node);

                DashboardContainer.InnerBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                DashboardContainer.CpTopInner = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                DashboardContainer.CpCenterInner = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                DashboardContainer.InnerBc.addChild(DashboardContainer.CpTopInner);
                DashboardContainer.InnerBc.addChild(DashboardContainer.CpCenterInner);
                DashboardContainer.InnerBc.startup();
                DashboardContainer.InnerBc.resize();
            }

        });

        DashboardContainer.LOG = Logger.addTimer(new Logger(DBCONSTANTS.CLASSNAME.PAGEELEMENTS));

        return DashboardContainer;
    });