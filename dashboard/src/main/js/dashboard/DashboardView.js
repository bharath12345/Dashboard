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
                this.createInnerMenuAndPanes(dashboard.CpCenter.domNode);
            },

            createCenterContainers: function() {
                dashboard.CenterBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    gutters: false
                });

                dashboard.CpMenuTop = new ContentPane({
                    region:"top",
                    splitter:false
                });

                dashboard.CpLeft = new ContentPane({
                    region:"left",
                    splitter:true,
                    style: "width:20%;"
                });

                dashboard.CpCenter = new ContentPane({
                    region:"center",
                    splitter:false
                });

                dashboard.CenterBc.addChild(dashboard.CpMenuTop);
                dashboard.CenterBc.addChild(dashboard.CpLeft);
                dashboard.CenterBc.addChild(dashboard.CpCenter);
                dashboard.CenterBc.placeAt(dashboard.CpTopCenter);
                dashboard.CenterBc.startup();
                dashboard.CenterBc.resize();

                dashboard.CenterBc.resize();
                dashboard.TopBc.resize();
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

                menuBar.placeAt(dashboard.CpMenuTop);
                menuBar.startup();
                fileMenu.startup();
                actionMenu.startup();
                helpMenu.startup();

                dashboard.CenterBc.resize();
                dashboard.TopBc.resize();
            }

        });

        DashboardView.LOG = Logger.addTimer(new Logger(DBCONSTANTS.CLASSNAME.DASHBOARD.VIEW));

        return DashboardView;
    });