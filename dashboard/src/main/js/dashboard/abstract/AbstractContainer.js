define(["dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer", "noc/Logger"],

    function (declare, i18n, ContentPane, BorderContainer, Logger) {

        var AbstractContainer = declare("dashboard.abstract.AbstractContainer", null, {
            // create an Accordion with multiple links like in NNMi

            createTopContainers: function(docBody) {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                docBody.appendChild(node);

                AbstractContainer.TopBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                AbstractContainer.CpMast = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;height:25px;"
                });

                AbstractContainer.CpTopCenter = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                AbstractContainer.TopBc.addChild(AbstractContainer.CpMast);
                AbstractContainer.TopBc.addChild(AbstractContainer.CpTopCenter);
                AbstractContainer.TopBc.startup();

                AbstractContainer.CpMast.domNode.style.padding = "0";
                this.removeBoderPadding(AbstractContainer.CpTopCenter.domNode);
                AbstractContainer.TopBc.resize();

                this.removeTopAndExpand5(AbstractContainer.CpMast.domNode);
                this.removeLeftAndExpand5(AbstractContainer.CpMast.domNode);
                AbstractContainer.TopBc.resize();
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
                AbstractContainer.CpMast.domNode.appendChild(headerTrayDiv);

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

        AbstractContainer.LOG = Logger.addTimer(new Logger("dashboard.abstract.AbstractContainer"));

        return AbstractContainer;
    });