define(["dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer", "dijit/Toolbar",
    "dashboard/helper/ButtonHelper"],

    function (declare, i18n, ContentPane, BorderContainer, Toolbar, ButtonHelper) {

        var AbstractView = declare("dashboard.abstract.AbstractView", null, {

            "-chains-":{
                createDom:"after"
            },

            createDom:function () {
                this.createTopContainers(document.body);
                this.createMast();
            },

            createTopContainers:function (docBody) {
                dashboard.dom.TopBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    gutters:false,
                    style: "width: 100%; height: 100%;"
                });

                dashboard.dom.CpMast = new ContentPane({
                    region:"top",
                    splitter:false,
                    style:"height:25px;"
                });

                dashboard.dom.CpTopCenter = new ContentPane({
                    region:"center",
                    splitter:false
                });

                dashboard.dom.TopBc.addChild(dashboard.dom.CpMast);
                dashboard.dom.TopBc.addChild(dashboard.dom.CpTopCenter);
                dashboard.dom.TopBc.placeAt(docBody);
                dashboard.dom.TopBc.startup();

                dashboard.dom.TopBc.resize();
            },

            createMast:function () {
                var mastheadA1Logo = "./images/masthead/25pix-appnomic_logo-2.png";
                var mastheadAppName = "./images/masthead/mast_a1.png";

                var mastDiv = dojo.create("div");
                mastDiv.className = "masthead";
                dashboard.dom.CpMast.domNode.appendChild(mastDiv);

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
            },

            createInnerMenuAndPanes: function(paneDom) {
                dashboard.dom.InnerBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    gutters: false,
                    style: "width: 100%; height: 100%;"
                });

                dashboard.dom.CpMenu = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "height: 40px"
                });

                dashboard.dom.CpCenterInner = new ContentPane({
                    region:"center",
                    splitter:false
                });

                dashboard.dom.InnerBc.addChild(dashboard.dom.CpMenu);
                dashboard.dom.InnerBc.addChild(dashboard.dom.CpCenterInner);
                dashboard.dom.InnerBc.placeAt(paneDom);
                dashboard.dom.InnerBc.startup();
                dashboard.dom.InnerBc.resize();

                dashboard.dom.InnerBc.resize();
                dashboard.dom.TopBc.resize();

                this.createMenuRegions();
            },

            createMenuRegions: function() {
                dashboard.dom.MenuBc = new BorderContainer({
                    liveSplitters:false,
                    persist:true,
                    gutters: false
                });

                dashboard.dom.topMenuPane = new ContentPane({
                    region: "top",
                    splitter:false,
                    style: "height: 15px;"
                });
                dashboard.dom.MenuBc.addChild(dashboard.dom.topMenuPane);

                dashboard.dom.bottomMenuPane = new ContentPane({
                    region: "center",
                    splitter:false
                });
                dashboard.dom.MenuBc.addChild(dashboard.dom.bottomMenuPane);

                dashboard.dom.MenuBc.placeAt(dashboard.dom.CpMenu);
                dashboard.dom.MenuBc.startup();
                dashboard.dom.MenuBc.resize();
                dashboard.dom.TopBc.resize();

                this.addToolbar();
            },

            addToolbar: function() {
                dashboard.dom.toolbar = new Toolbar({});
                dashboard.dom.toolbar.placeAt(dashboard.dom.bottomMenuPane);
                dashboard.dom.toolbar.startup();
                dashboard.dom.TopBc.resize();
            }

        });

        return AbstractView;
    });