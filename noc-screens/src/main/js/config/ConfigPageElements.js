define(["dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer",
    "dijit/layout/AccordionContainer",
    "noc/Logger",
    "config/Utility",
    "config/Constants", "dojo/i18n!config/nls/config"],

    function (declare, i18n, ContentPane, BorderContainer, AccordionContainer, Utility, Logger, CONSTANTS, i18nString) {

        var ConfigPageElements = declare(CONSTANTS.CLASSNAME.PAGEELEMENTS, null, {
            // create an Accordion with multiple links like in NNMi

            createPageElements: function() {
                this.createTopContainers();
                this.createCenterContainers();
                this.createAccordion();
                this.createMast();
            },

            createTopContainers: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                document.body.appendChild(node);

                ConfigPageElements.TopBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                ConfigPageElements.CpTop = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;height:25px;"
                });

                ConfigPageElements.CpLeft = new ContentPane({
                    region:"left",
                    splitter:true,
                    style: "width:20%;top:0;left:0;"
                });

                ConfigPageElements.CpCenter = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                ConfigPageElements.TopBc.addChild(ConfigPageElements.CpTop);
                ConfigPageElements.TopBc.addChild(ConfigPageElements.CpLeft);
                ConfigPageElements.TopBc.addChild(ConfigPageElements.CpCenter);
                ConfigPageElements.TopBc.startup();

                ConfigPageElements.CpTop.domNode.style.padding = "0";
                this.removeBoderPadding(ConfigPageElements.CpLeft.domNode);
                this.removeBoderPadding(ConfigPageElements.CpCenter.domNode);
                ConfigPageElements.TopBc.resize();

                this.removeTopAndExpand5(ConfigPageElements.CpTop.domNode);
                this.removeLeftAndExpand5(ConfigPageElements.CpTop.domNode);
                this.removeLeftAndExpand5(ConfigPageElements.CpLeft.domNode);
                ConfigPageElements.TopBc.resize();
            },

            createCenterContainers: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                ConfigPageElements.CpCenter.domNode.appendChild(node);

                ConfigPageElements.InnerBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                ConfigPageElements.CpTopInner = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                ConfigPageElements.CpCenterInner = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                ConfigPageElements.InnerBc.addChild(ConfigPageElements.CpTopInner);
                ConfigPageElements.InnerBc.addChild(ConfigPageElements.CpCenterInner);
                ConfigPageElements.InnerBc.startup();
                ConfigPageElements.InnerBc.resize();
            },

            createAccordion: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                ConfigPageElements.CpLeft.domNode.appendChild(node);

                ConfigPageElements.AccContainer = new AccordionContainer({}, node);
                ConfigPageElements.AccPane = new ContentPane({
                    region:"center",
                    title:"NOC Screens",
                    selected:true
                });
                ConfigPageElements.AccContainer.addChild(ConfigPageElements.AccPane);
                ConfigPageElements.AccContainer.startup();
                ConfigPageElements.AccContainer.resize();
                ConfigPageElements.TopBc.resize();
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
                ConfigPageElements.CpTop.domNode.appendChild(headerTrayDiv);

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

        ConfigPageElements.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.PAGEELEMENTS));

        return ConfigPageElements;
    });