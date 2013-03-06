define(["../dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer",
    "dijit/MenuBar", "dijit/MenuBarItem", "dijit/Menu", "dijit/MenuItem", "dijit/PopupMenuItem", "dijit/PopupMenuBarItem", "noc/Logger",
    "dashboard/DashboardUtility", "dashboard/DashboardConstants", "dojo/i18n!dashboard/nls/dashboard"],

    function (declare, i18n, ContentPane, BorderContainer, MenuBar, MenuBarItem, Menu, MenuItem, PopupMenuItem, PopupMenuBarItem,
              Logger, DashboardUtility, DBCONSTANTS, i18nString) {

        var DashboardContainers = declare(DBCONSTANTS.CLASSNAME.DASHBOARD.CONTAINER, null, {
            // create an Accordion with multiple links like in NNMi

            createPageElements: function() {
                this.createTopContainers();
                this.createCenterContainers();
                this.createMenu();
                this.createCenterInnerContainers();
                this.createMast();
            },

            createTopContainers: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                document.body.appendChild(node);

                DashboardContainers.TopBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                DashboardContainers.CpMast = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;height:25px;"
                });

                DashboardContainers.CpTopCenter = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                DashboardContainers.TopBc.addChild(DashboardContainers.CpMast);
                DashboardContainers.TopBc.addChild(DashboardContainers.CpTopCenter);
                DashboardContainers.TopBc.startup();

                DashboardContainers.CpMast.domNode.style.padding = "0";
                this.removeBoderPadding(DashboardContainers.CpTopCenter.domNode);
                DashboardContainers.TopBc.resize();

                this.removeTopAndExpand5(DashboardContainers.CpMast.domNode);
                this.removeLeftAndExpand5(DashboardContainers.CpMast.domNode);
                DashboardContainers.TopBc.resize();
            },

            createCenterContainers: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                DashboardContainers.CpTopCenter.domNode.appendChild(node);

                DashboardContainers.CenterBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                DashboardContainers.CpMenu = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;height:35px;"
                });

                DashboardContainers.CpLeft = new ContentPane({
                    region:"left",
                    splitter:true,
                    style: "width:20%;top:0;left:0;"
                });

                DashboardContainers.CpCenter = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                DashboardContainers.CenterBc.addChild(DashboardContainers.CpMenu);
                DashboardContainers.CenterBc.addChild(DashboardContainers.CpLeft);
                DashboardContainers.CenterBc.addChild(DashboardContainers.CpCenter);
                DashboardContainers.CenterBc.startup();
                DashboardContainers.CenterBc.resize();

                DashboardContainers.CpMenu.domNode.style.top = 0;
                DashboardContainers.CpMenu.domNode.style.left = 0;

                this.removeBoderPadding(DashboardContainers.CpMenu.domNode);
                this.removeBoderPadding(DashboardContainers.CpLeft.domNode);
                this.removeBoderPadding(DashboardContainers.CpCenter.domNode);

                DashboardContainers.CenterBc.resize();
                DashboardContainers.TopBc.resize();
            },

            createMenu: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                DashboardContainers.CpMenu.domNode.appendChild(node);

                var menuBar = new MenuBar({}, node);

                //////////
                var fileMenu = new Menu({id: "fileMenu"});
                fileMenu.addChild( new MenuItem({id: "signout",label: "Sign Out"}) );
                menuBar.addChild( new PopupMenuBarItem({id: "file",label: "File",popup: fileMenu}) );

                ///////

                var actionMenu = new Menu({id: "actionMenu"});
                fileMenu.addChild( new MenuItem({id: "someaction",label: "Some Action"}) );
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

                DashboardContainers.CenterBc.resize();
                DashboardContainers.TopBc.resize();
            },

            createCenterInnerContainers: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                DashboardContainers.CpCenter.domNode.appendChild(node);

                DashboardContainers.InnerBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                DashboardContainers.CpTopInner = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                DashboardContainers.CpCenterInner = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                DashboardContainers.InnerBc.addChild(DashboardContainers.CpTopInner);
                DashboardContainers.InnerBc.addChild(DashboardContainers.CpCenterInner);
                DashboardContainers.InnerBc.startup();
                DashboardContainers.InnerBc.resize();
            },

            removeBoderPadding: function (domNode) {
                domNode.style.borderStyle = "none";
                domNode.style.padding = "0";
            },

            removeTopAndExpand5: function(domNode) {
                domNode.style.top = "0";
                domNode.style.height+=5;
            },

            removeLeftAndExpand5: function(domNode) {
                domNode.style.left = "0";
                domNode.style.width+=5;
            },

            createMast: function() {
                var mastheadA1Logo = "./images/25pix-appnomic_logo-2.png";
                var mastheadAppName = "./images/mast_a1.png";

                var headerTrayDiv = dojo.create("div");
                headerTrayDiv.id= "headerTray";
                headerTrayDiv.className = "pageHeader";
                DashboardContainers.CpMast.domNode.appendChild(headerTrayDiv);

                var headerTrayBody = dojo.create("div");
                headerTrayBody.id = "headerTrayBody";
                headerTrayDiv.appendChild(headerTrayBody);

                var mastTable = dojo.create("table");
                mastTable.className = "masthead";
                mastTable.setAttribute("cellspacing", "0");
                mastTable.setAttribute("cellpadding", "0");
                mastTable.setAttribute("border", "0");
                headerTrayDiv.appendChild(mastTable);

                var mastBody = dojo.create("tbody");
                mastTable.appendChild(mastBody);

                var mastRow = dojo.create("tr");
                mastBody.appendChild(mastRow);

                var mastCol = dojo.create("td");
                mastCol.className = "logo";

                var image = dojo.create("img");
                image.setAttribute("alt", "Appnomic");
                image.setAttribute("src", mastheadA1Logo);

                mastRow.appendChild(mastCol);
                mastCol.appendChild(image);

                mastCol = dojo.create("td");
                mastCol.className = "mastheadTitle";

                image = dojo.create("img");
                image.setAttribute("alt", "AppsOne");
                image.setAttribute("src", mastheadAppName);

                mastRow.appendChild(mastCol);
                mastCol.appendChild(image);
            }

        });

        DashboardContainers.LOG = Logger.addTimer(new Logger(DBCONSTANTS.CLASSNAME.PAGEELEMENTS));

        return DashboardContainers;
    });