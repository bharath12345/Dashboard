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
                dashboard.TopBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    gutters:false,
                    style: "width: 100%; height: 100%;"
                });

                dashboard.CpMast = new ContentPane({
                    region:"top",
                    splitter:false,
                    style:"height:25px;"
                });

                dashboard.CpTopCenter = new ContentPane({
                    region:"center",
                    splitter:false
                });

                dashboard.TopBc.addChild(dashboard.CpMast);
                dashboard.TopBc.addChild(dashboard.CpTopCenter);
                dashboard.TopBc.placeAt(docBody);
                dashboard.TopBc.startup();

                dashboard.TopBc.resize();
            },

            createMast:function () {
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
            },

            createInnerMenuAndPanes: function(paneDom) {
                dashboard.InnerBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    gutters: false,
                    style: "width: 100%; height: 100%;"
                });

                dashboard.CpMenu = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "height: 40px"
                });

                dashboard.CpCenterInner = new ContentPane({
                    region:"center",
                    splitter:false
                });

                dashboard.InnerBc.addChild(dashboard.CpMenu);
                dashboard.InnerBc.addChild(dashboard.CpCenterInner);
                dashboard.InnerBc.placeAt(paneDom);
                dashboard.InnerBc.startup();
                dashboard.InnerBc.resize();

                dashboard.InnerBc.resize();
                dashboard.TopBc.resize();

                this.createMenuRegions();
            },

            createMenuRegions: function() {
                dashboard.MenuBc = new BorderContainer({
                    liveSplitters:false,
                    persist:true,
                    gutters: false
                });

                dashboard.topMenuPane = new ContentPane({
                    region: "top",
                    splitter:false,
                    style: "height: 15px;"
                });
                dashboard.MenuBc.addChild(dashboard.topMenuPane);

                dashboard.bottomMenuPane = new ContentPane({
                    region: "center",
                    splitter:false
                });
                dashboard.MenuBc.addChild(dashboard.bottomMenuPane);

                dashboard.MenuBc.placeAt(dashboard.CpMenu);
                dashboard.MenuBc.startup();
                dashboard.MenuBc.resize();
                dashboard.TopBc.resize();

                this.addToolbar();
            },

            addToolbar: function() {
                dashboard.toolbar = new Toolbar({});

                var buttonHelper = new ButtonHelper();
                dashboard.toolbar.addChild(buttonHelper.getRefresh());

                dashboard.toolbar.placeAt(dashboard.bottomMenuPane);
                dashboard.toolbar.startup();
                dashboard.TopBc.resize();
            }

        });

        return AbstractView;
    });