define(["dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer",
    "dijit/layout/AccordionContainer",
    "noc/Utility", "noc/Logger",
    "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, ContentPane, BorderContainer, AccordionContainer, Utility, Logger, CONSTANTS, i18nString) {

        var Config = declare(CONSTANTS.CLASSNAME.CONFIG, null, {
            // create an Accordion with multiple links like in NNMi

            load: function() {
                this.createTopContainers();
                this.createCenterContainers();
                this.createAccordion();
                this.createMast();
            },

            createTopContainers: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                document.body.appendChild(node);

                Config.TopBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                Config.CpTop = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;height:25px;"
                });

                Config.CpLeft = new ContentPane({
                    region:"left",
                    splitter:true,
                    style: "width:20%;top:0;left:0;"
                });

                Config.CpCenter = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                Config.TopBc.addChild(Config.CpTop);
                Config.TopBc.addChild(Config.CpLeft);
                Config.TopBc.addChild(Config.CpCenter);
                Config.TopBc.startup();

                Config.CpTop.domNode.style.padding = "0";
                this.removeBoderPadding(Config.CpLeft.domNode);
                this.removeBoderPadding(Config.CpCenter.domNode);
                Config.TopBc.resize();

                this.removeTopAndExpand5(Config.CpTop.domNode);
                this.removeLeftAndExpand5(Config.CpTop.domNode);
                this.removeLeftAndExpand5(Config.CpLeft.domNode);
                Config.TopBc.resize();
            },

            createCenterContainers: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                Config.CpCenter.domNode.appendChild(node);

                Config.InnerBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                Config.CpTopInner = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                Config.CpCenterInner = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                Config.InnerBc.addChild(Config.CpTopInner);
                Config.InnerBc.addChild(Config.CpCenterInner);
                Config.InnerBc.startup();
                Config.InnerBc.resize();
            },

            createAccordion: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                Config.CpLeft.domNode.appendChild(node);

                Config.AccContainer = new AccordionContainer({}, node);
                Config.AccPane = new ContentPane({
                    region:"center",
                    title:"NOC Screens",
                    selected:true
                });
                Config.AccContainer.addChild(Config.AccPane);
                Config.AccContainer.startup();
                Config.AccContainer.resize();
                Config.TopBc.resize();
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
                var mastheadA1Logo = "./images/masthead_logo.png";
                var mastheadAppName = "./images/mast_appsone.png";

                var headerTrayDiv = dojo.create("div");
                headerTrayDiv.id= "headerTray";
                headerTrayDiv.className = "pageHeader";
                Config.CpTop.domNode.appendChild(headerTrayDiv);

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

        Config.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.CONFIG));

        return Config;
    });