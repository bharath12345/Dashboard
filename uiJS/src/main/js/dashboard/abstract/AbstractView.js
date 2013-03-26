define(["dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer", "dijit/Toolbar",
    "dijit/layout/TabContainer", "dojo/on", "dojo/_base/lang",
    "dashboard/helper/ButtonHelper"],

    function (declare, i18n, ContentPane, BorderContainer, Toolbar, TabContainer, on, lang, ButtonHelper) {

        dashboard.classnames.AbstractView = "dashboard.abstract.AbstractView";

        var AbstractView = declare(dashboard.classnames.AbstractView, null, {

            "-chains-":{
                createDom:"after" //method is called after its superclass’ method
            },

            createDom:function () {
                this.createTopContainers(document.body);
                this.createMast();
            },

            getContentPane: function(region, splitter, style) {
                return new ContentPane({
                    region:region,
                    splitter:splitter,
                    style: style
                });
            },

            getBorderContainer: function() {
                return new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    gutters:false,
                    style: "width: 100%; height: 100%;"
                });
            },

            getToolbar: function(paneToPlace) {
                var toolbar = new Toolbar({});
                toolbar.placeAt(paneToPlace);
                toolbar.startup();
                return toolbar;
            },

            addCPstartBC: function(bc, cpList, paneToPlace) {
                for(var i=0; i< cpList.length; i++) {
                    bc.addChild(cpList[i]);
                }
                bc.placeAt(paneToPlace);
                bc.startup();
                dashboard.dom.TopBc.resize();
            },

            createTopContainers:function (docBody) {
                dashboard.dom.TopBc = this.getBorderContainer();
                var cpList = [];
                cpList.push(dashboard.dom.CpMast = this.getContentPane("top",false,"height:25px;"));
                cpList.push(dashboard.dom.CpTopCenter = this.getContentPane("center",false, ""));
                this.addCPstartBC(dashboard.dom.TopBc, cpList, docBody);
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

            /*
             * This creates
             *   a) Menu area which holds heading and toolbar buttons
             *   b) Central area which holds the real content
             *   c) if 'analysisPaneRequired' flag is set to true then the vertically split panes for AbstractAnalysisPane is
             *       created - otherwise, not.
             */
            createInnerMenuAndPanes: function(paneDom, viewName) {
                var innerBc = this.getBorderContainer();

                var cpList = [];
                var cpMenu = this.getContentPane("top",false,"height: 40px");
                cpList.push(cpMenu);

                dashboard.dom.CpCenterInner[viewName] = this.getContentPane("center",false, "");
                cpList.push(dashboard.dom.CpCenterInner[viewName]);
                this.addCPstartBC(innerBc, cpList, paneDom);

                this.createMenuRegions(viewName, cpMenu);
            },

            createMenuRegions: function(viewName, cpMenu) {
                var menuBc = this.getBorderContainer();
                var cpList = [];
                cpList.push(dashboard.dom.TopMenuPane[viewName] = this.getContentPane("top",false,"height: 15px;"));

                var bottomMenuPane = this.getContentPane("center",false,"overflow: hidden;");
                cpList.push(bottomMenuPane);
                this.addCPstartBC(menuBc, cpList, cpMenu);

                dashboard.dom.Toolbar[viewName] = this.getToolbar(bottomMenuPane);
                dashboard.dom.TopBc.resize();
            },

            /*
             *   The split screens - top and bottom - for content and analysis'panes - this holds only for the 'main'
             *   dashboard. This is never permitted within the tab of any analyis pane. So - CpCenterInnerTop &
             *   CpCenterInnerBottom do NOT have to be arrays
             */
            createSplitCenterPanes: function(cpCenterInner, contentView) {
                dashboard.dom.InnerBcSplit = this.getBorderContainer();
                var cpList = [];
                cpList.push(dashboard.dom.CpCenterInnerTop = contentView);
                cpList.push(dashboard.dom.CpCenterInnerBottom = this.getContentPane("bottom",true,"display: none;"));
                this.addCPstartBC(dashboard.dom.InnerBcSplit, cpList, cpCenterInner);
                this.createAnalysisTabContainer();
            },

            createAnalysisTabContainer: function() {
                dashboard.dom.AnalysisPaneBc = this.getBorderContainer();
                var cpList = [];
                cpList.push(dashboard.dom.CpAnalysisPaneCenter = this.getContentPane("center",false,"height: 100%"));
                this.addCPstartBC(dashboard.dom.AnalysisPaneBc, cpList, dashboard.dom.CpCenterInnerBottom);

                ///

                dashboard.dom.AnalysisPaneTC = new TabContainer({style: "height: 100%; width: 100%;"});
                dashboard.dom.AnalysisPaneTC.placeAt(dashboard.dom.CpAnalysisPaneCenter);
                dashboard.dom.AnalysisPaneTC.startup();

                //

                dashboard.dom.AnalysisPaneBc.resize();
            }

        });

        return AbstractView;
    }
);