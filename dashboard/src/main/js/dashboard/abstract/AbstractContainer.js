define(["dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer", "dashboard/logger/Logger"],

    function (declare, i18n, ContentPane, BorderContainer, Logger) {

        var AbstractContainer = declare("dashboard.abstract.AbstractContainer", null, {
            // create an Accordion with multiple links like in NNMi

            createTopContainers: function(docBody) {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                docBody.appendChild(node);

                dashboard.TopBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;",
                    gutters: false
                }, node);

                dashboard.CpMast = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;height:25px;"
                });

                dashboard.CpTopCenter = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                dashboard.TopBc.addChild(dashboard.CpMast);
                dashboard.TopBc.addChild(dashboard.CpTopCenter);
                dashboard.TopBc.startup();

                dashboard.TopBc.resize();
            },

            createMast: function() {
                var mastheadA1Logo = "./images/25pix-appnomic_logo-2.png";
                var mastheadAppName = "./images/mast_a1.png";

                var mastDiv = dojo.create("div");
                mastDiv.className = "masthead";
                dashboard.CpMast.domNode.appendChild(mastDiv);

                var mastLogo = dojo.create("span");
                mastLogo.className = "logo";

                var image = dojo.create("img");
                image.setAttribute("alt", "Appnomic");
                image.setAttribute("src", mastheadA1Logo);

                mastDiv.appendChild(mastLogo);
                mastLogo.appendChild(image);

                var mastTitle = dojo.create("span");
                mastTitle.className = "mastheadTitle";

                image = dojo.create("img");
                image.setAttribute("alt", "AppsOne");
                image.setAttribute("src", mastheadAppName);

                mastDiv.appendChild(mastTitle);
                mastTitle.appendChild(image);
            }

        });

        AbstractContainer.LOG = Logger.addTimer(new Logger("dashboard.abstract.AbstractContainer"));

        return AbstractContainer;
    });