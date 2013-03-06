define(["../dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer",
    "noc/Logger",
    "dashboard/DashboardUtility", "dashboard/DashboardConstants", "dojo/i18n!dashboard/nls/dashboard"],

    function (declare, i18n, ContentPane, BorderContainer, Logger, DashboardUtility, DBCONSTANTS, i18nString) {

        var DashboardContainers = declare(DBCONSTANTS.CLASSNAME.DASHBOARD.CONTAINER, null, {
            // create an Accordion with multiple links like in NNMi

            createPageElements: function() {
                this.createTopContainers();
                this.createCenterContainers();
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

                DashboardContainers.CpTop = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;height:25px;"
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

                DashboardContainers.TopBc.addChild(DashboardContainers.CpTop);
                DashboardContainers.TopBc.addChild(DashboardContainers.CpLeft);
                DashboardContainers.TopBc.addChild(DashboardContainers.CpCenter);
                DashboardContainers.TopBc.startup();

                DashboardContainers.CpTop.domNode.style.padding = "0";
                this.removeBoderPadding(DashboardContainers.CpLeft.domNode);
                this.removeBoderPadding(DashboardContainers.CpCenter.domNode);
                DashboardContainers.TopBc.resize();

                this.removeTopAndExpand5(DashboardContainers.CpTop.domNode);
                this.removeLeftAndExpand5(DashboardContainers.CpTop.domNode);
                this.removeLeftAndExpand5(DashboardContainers.CpLeft.domNode);
                DashboardContainers.TopBc.resize();
            },

            createCenterContainers: function() {
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
                DashboardContainers.CpTop.domNode.appendChild(headerTrayDiv);

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