define(["dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer", "dijit/Toolbar", "dijit/layout/TabContainer",
    "dashboard/helper/ButtonHelper"],

    function (declare, i18n, ContentPane, BorderContainer, Toolbar, TabContainer, ButtonHelper) {

        dashboard.classnames.AbstractView = "dashboard.abstract.AbstractView";

        var AbstractView = declare(dashboard.classnames.AbstractView, null, {

            "-chains-":{
                createDom:"after" //method is called after its superclass’ method
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

            createInnerMenuAndPanes: function(paneDom, analysisPaneRequired) {
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

                if(analysisPaneRequired) {
                    this.createSplitCenterPanes();
                }
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
            },

            createSplitCenterPanes: function() {
                dashboard.dom.InnerBcSplit = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    gutters: false,
                    style: "width: 100%; height: 100%;"
                });

                dashboard.dom.CpCenterInnerTop = new ContentPane({
                    region:"center",
                    splitter:true,
                    style: "height: 100%"
                });

                dashboard.dom.CpCenterInnerBottom = new ContentPane({
                    region:"bottom",
                    splitter:true,
                    style: "height: 20px"
                });

                dashboard.dom.InnerBcSplit.addChild(dashboard.dom.CpCenterInnerTop);
                dashboard.dom.InnerBcSplit.addChild(dashboard.dom.CpCenterInnerBottom);
                dashboard.dom.InnerBcSplit.placeAt(dashboard.dom.CpCenterInner);
                dashboard.dom.InnerBcSplit.startup();
                dashboard.dom.InnerBcSplit.resize();

                dashboard.dom.InnerBc.resize();
                dashboard.dom.TopBc.resize();

                this.createAnalysisTabContainer();
            },

            createAnalysisTabContainer: function() {
                dashboard.dom.AnalysisPaneBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    gutters: false,
                    style: "width: 100%; height: 100%;"
                });

                dashboard.dom.CpAnalysisPaneTop = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "height: 20px"
                });

                dashboard.dom.CpAnalysisPaneCenter = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "height: 100%"
                });

                dashboard.dom.AnalysisPaneBc.addChild(dashboard.dom.CpAnalysisPaneTop);
                dashboard.dom.AnalysisPaneBc.addChild(dashboard.dom.CpAnalysisPaneCenter);
                dashboard.dom.AnalysisPaneBc.placeAt(dashboard.dom.CpCenterInnerBottom);
                dashboard.dom.AnalysisPaneBc.startup();
                dashboard.dom.AnalysisPaneBc.resize();
                dashboard.dom.InnerBc.resize();
                dashboard.dom.TopBc.resize();

                ///

                dashboard.dom.AnalysisPaneTC = new TabContainer({style: "height: 100%; width: 100%;"});
                dashboard.dom.AnalysisPaneTC.placeAt(dashboard.dom.CpAnalysisPaneCenter);
                dashboard.dom.AnalysisPaneTC.startup();

                //

                dashboard.dom.AnalysisPaneContolBar = new Toolbar({});
                dashboard.dom.AnalysisPaneContolBar.placeAt(dashboard.dom.CpAnalysisPaneTop);
                dashboard.dom.AnalysisPaneContolBar.startup();
                dashboard.dom.AnalysisPaneBc.resize();

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getWindowMinimize();
                dashboard.dom.AnalysisPaneContolBar.addChild(button);
                button = buttonHelper.getWindowRestore();
                dashboard.dom.AnalysisPaneContolBar.addChild(button);
                button = buttonHelper.getWindowMaximize();
                dashboard.dom.AnalysisPaneContolBar.addChild(button);

            }

        });

        return AbstractView;
    });