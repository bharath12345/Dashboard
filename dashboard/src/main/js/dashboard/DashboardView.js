define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dijit/layout/ContentPane", "dijit/layout/BorderContainer",
    "dijit/MenuBar", "dijit/MenuBarItem", "dijit/Menu", "dijit/MenuItem", "dijit/PopupMenuItem", "dijit/PopupMenuBarItem", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractView"],

    function (declare, i18n, i18nString, ContentPane, BorderContainer, MenuBar, MenuBarItem, Menu, MenuItem,
              PopupMenuItem, PopupMenuBarItem,
              Logger, AbstractView) {

        dashboard.classnames.DashboardView = "dashboard.DashboardView";

        var DashboardView = declare(dashboard.classnames.DashboardView, AbstractView, {
            // create an Accordion with multiple links like in NNMi

            createDom: function() {
                this.createCenterContainers();
                this.createMenu();
                this.createInnerMenuAndPanes(dashboard.dom.CpCenter.domNode, false, dashboard.pageTypes.dashboard);
            },

            createCenterContainers: function() {
                dashboard.dom.CenterBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    gutters: false
                });

                dashboard.dom.CpMenuTop = new ContentPane({
                    region:"top",
                    splitter:false
                });

                dashboard.dom.CpLeft = new ContentPane({
                    region:"left",
                    splitter:true,
                    style: "width:20%;"
                });

                dashboard.dom.CpCenter = new ContentPane({
                    region:"center",
                    splitter:false
                });

                dashboard.dom.CenterBc.addChild(dashboard.dom.CpMenuTop);
                dashboard.dom.CenterBc.addChild(dashboard.dom.CpLeft);
                dashboard.dom.CenterBc.addChild(dashboard.dom.CpCenter);
                dashboard.dom.CenterBc.placeAt(dashboard.dom.CpTopCenter);
                dashboard.dom.CenterBc.startup();
                dashboard.dom.CenterBc.resize();

                dashboard.dom.CenterBc.resize();
                dashboard.dom.TopBc.resize();
            },

            createMenu: function() {
                var menuBar = new MenuBar({});

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

                menuBar.placeAt(dashboard.dom.CpMenuTop);
                menuBar.startup();
                fileMenu.startup();
                actionMenu.startup();
                helpMenu.startup();

                dashboard.dom.CenterBc.resize();
                dashboard.dom.TopBc.resize();
            }

        });

        DashboardView.LOG = Logger.addTimer(new Logger(dashboard.classnames.DashboardView));

        return DashboardView;
    });