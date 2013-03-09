define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dijit/layout/ContentPane", "dijit/layout/BorderContainer",
    "dijit/MenuBar", "dijit/MenuBarItem", "dijit/Menu", "dijit/MenuItem", "dijit/PopupMenuItem", "dijit/PopupMenuBarItem", "dashboard/logger/Logger",
    "dashboard/DashboardUtility", "dashboard/DashboardConstants", "dashboard/abstract/AbstractView"],

    function (declare, i18n, i18nString, ContentPane, BorderContainer, MenuBar, MenuBarItem, Menu, MenuItem,
              PopupMenuItem, PopupMenuBarItem,
              Logger, DashboardUtility, DBCONSTANTS, AbstractView) {

        var DashboardView = declare(DBCONSTANTS.CLASSNAME.DASHBOARD.VIEW, AbstractView, {
            // create an Accordion with multiple links like in NNMi

            createDom: function() {
                this.createCenterContainers();
                this.createMenu();
                this.createCenterInnerContainers();
            },

            createCenterContainers: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                dashboard.CpTopCenter.domNode.appendChild(node);

                DashboardView.CenterBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;",
                    gutters: false
                }, node);

                DashboardView.CpMenu = new ContentPane({
                    region:"top",
                    splitter:false
                });

                DashboardView.CpLeft = new ContentPane({
                    region:"left",
                    splitter:true,
                    style: "width:20%;top:0;left:0;"
                });

                DashboardView.CpCenter = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                DashboardView.CenterBc.addChild(DashboardView.CpMenu);
                DashboardView.CenterBc.addChild(DashboardView.CpLeft);
                DashboardView.CenterBc.addChild(DashboardView.CpCenter);
                DashboardView.CenterBc.startup();
                DashboardView.CenterBc.resize();

                DashboardView.CenterBc.resize();
                dashboard.TopBc.resize();
            },

            createMenu: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                DashboardView.CpMenu.domNode.appendChild(node);

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

                DashboardView.CenterBc.resize();
                dashboard.TopBc.resize();
            },

            createCenterInnerContainers: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                DashboardView.CpCenter.domNode.appendChild(node);

                DashboardView.InnerBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;",
                    gutters: false
                }, node);

                DashboardView.CpTopInner = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                DashboardView.CpCenterInner = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                DashboardView.InnerBc.addChild(DashboardView.CpTopInner);
                DashboardView.InnerBc.addChild(DashboardView.CpCenterInner);
                DashboardView.InnerBc.startup();
                DashboardView.InnerBc.resize();
            }

        });

        DashboardView.LOG = Logger.addTimer(new Logger(DBCONSTANTS.CLASSNAME.DASHBOARD.VIEW));

        return DashboardView;
    });