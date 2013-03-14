define(['require', "../dashboard/target/dashboard/js/dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer", "dojo/window",
    "dojo/i18n!dashboard/noc/nls/noc"],

    function (require, declare, i18n, ContentPane, BorderContainer, win, i18nString) {

        var PageLoader = declare(NOCCONSTANTS.CLASSNAME.PAGELOADER, null, {

            initMain:function () {

                PageLoader.LOG.log(Logger.SEVERITY.SEVERE, "Logging Success!");

                var startPageCounter = 0;
                this.createIncidentSectionAndPage(startPageCounter++);
                //this.createClusterAvailabilitySectionAndPage(startPageCounter++);
                this.createTxGridSectionAndPage(startPageCounter++);
                //this.createTopology(startPageCounter++);

                //for(var i=0;i<PageLoader.TotalPages;i++) {
                //    this.createAvailabilitySectionAndPage(startPageCounter++);
                //}

                //setTimeout(function(){new NocViewTxTimeSeries().loadPage()}, 10*1000);
                //setTimeout(function(){new NocViewComponent().loadPage()}, 20*1000);
                //setTimeout(function(){new NocViewTxTreemapPage().loadPage()}, 30*1000);
                //setTimeout(function(){new TxServiceLevelPage().loadPage()}, 40*1000);

                PageLoader.SCROLL_TIMER = setInterval(this.pageScroll, PageLoader.SCROLL_PERIOD);
            },

            pageScroll:function (pageCount) {
                if(PageLoader.PageStack.length < 2) {
                    console.log("less than 2 views in stack. nothing to scroll");
                    return;
                }
                PageLoader.PageStack[PageLoader.PageCounter].scrollIntoView();
                PageLoader.PageCounter++;
                if (PageLoader.PageCounter >= PageLoader.PageStack.length) {
                    PageLoader.PageCounter = 0;
                }
            },

            createTopology: function(pageNum) {
                this.createBorderContainer(this.getSection(pageNum), pageNum);
                new TopologyView().loadPage(pageNum, "NetBankingTopology");
            },

            createIncidentSectionAndPage:function (pageNum) {
                this.createBorderContainer(this.getSection(pageNum), pageNum);
                new NocViewIncident().loadPage(pageNum, "IncidentGrid");
            },

            createClusterAvailabilitySectionAndPage:function (pageNum) {
                this.createBorderContainer(this.getSection(pageNum), pageNum);
                new NocViewAllClusterAvailability().loadPage(pageNum, "NocViewAllClusterAvailability");
            },

            createTxGridSectionAndPage:function (pageNum) {
                this.createBorderContainer(this.getSection(pageNum), pageNum);
                new NocViewTransactionGrid().loadPage(pageNum, "NocViewTransactionGrid");
            },

            createAvailabilitySectionAndPage:function (pageNum) {
                this.createBorderContainer(this.getSection(pageNum), pageNum);
                new NocViewAvailability().loadPage(pageNum, "availabilityPage_" + (pageNum), PageLoader.Pages[pageNum].componentName, PageLoader.Pages[pageNum].clusterName);
            },

            getViewPortDimensions:function () {
                if (PageLoader.ViewPortStyle == null) {
                    PageLoader.ViewPortStyle = "width: " + (document.body.clientWidth) + "; height: " + (document.body.clientHeight) + ";";
                    return PageLoader.ViewPortStyle;
                }
                return PageLoader.ViewPortStyle;
            },

            getSection:function (pageNum) {
                var section = dojo.create("section");
                section.id = PageLoader.SECTION + pageNum;
                section.style.cssText = this.getViewPortDimensions();
                section.style.overflow = "hidden";
                document.body.appendChild(section);

                var link = dojo.create("a");
                link.setAttribute("name", "page"+(pageNum+1));
                section.appendChild(link);

                PageLoader.PageStack.push(section);
                return section;
            },

            createBorderContainer:function (section, pageCounter) {
                var node = dojo.create("div");
                node.style.cssText = this.getViewPortDimensions();
                section.appendChild(node);

                PageLoader.TopBc[pageCounter] = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    gutters: false
                    //style: this.getViewPortDimensions()
                }, node);

                //PageLoader.CpTop[pageCounter] = new ContentPane({
                //    region:"top",
                //    splitter:false
                //});

                PageLoader.CpCenter[pageCounter] = new ContentPane({
                    region:"center",
                    splitter:false
                });

                //PageLoader.CpBottom[pageCounter] = new ContentPane({
                //    region:"bottom",
                //    splitter:false
                //});

                //PageLoader.TopBc[pageCounter].addChild(PageLoader.CpTop[pageCounter]);
                PageLoader.TopBc[pageCounter].addChild(PageLoader.CpCenter[pageCounter]);
                //PageLoader.TopBc[pageCounter].addChild(PageLoader.CpBottom[pageCounter]);
                PageLoader.TopBc[pageCounter].startup();

                // remove all contentpane paddings and top/bottom contentpane border
                //this.removeBorderPadding(PageLoader.CpTop[pageCounter].domNode);
                PageLoader.CpCenter[pageCounter].domNode.style.padding = "0px";
                //this.removeBorderPadding(PageLoader.CpBottom[pageCounter].domNode);

                // remove offset of all contentpane
                PageLoader.CpCenter[pageCounter].domNode.style.left = "0";
                PageLoader.CpCenter[pageCounter].domNode.style.top = "0";
                PageLoader.CpCenter[pageCounter].domNode.style.overflow = "hidden";

                PageLoader.TopBc[pageCounter].resize();
                PageLoader.CpCenter[pageCounter].domNode.style.overflow = "hidden";

            },

            removeBorderPadding:function (domNode) {
                domNode.style.borderStyle = "none";
                domNode.style.padding = "0px";
            }

        });

        PageLoader.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.PAGELOADER));

        // static variables of this class
        PageLoader.SECTION = "section_";

        PageLoader.TopBc = [];
        //PageLoader.CpTop = [];
        PageLoader.CpCenter = [];
        //PageLoader.CpBottom = [];

        PageLoader.ViewPortStyle = null;

        PageLoader.PageStack = [];
        PageLoader.PageCounter = 0;

        PageLoader.SCROLL_TIMER = null;
        PageLoader.SCROLL_PERIOD = 10 * 1000;

        PageLoader.TotalPages = 0;
        PageLoader.Pages = [];

        // Total = 1 + 5 + 8 + 7 + 3 = 24 Clusters of 4 Types
        // 1 DB
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName:"DB", clusterName:"ALL"};

        /*PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "LINUXHOST",clusterName: "ALL"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "WINDOWSHOST",clusterName: "ALL"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "CUSTOM",clusterName: "ALL"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "CLUSTER",clusterName: "ALL"};*/

        // 4 WEB Servers
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName:"WEB_SERVER", clusterName:"FLXRET_IHS"};
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName:"WEB_SERVER", clusterName:"FLXRET_DB"};
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName:"WEB_SERVER", clusterName:"CRMNextCommIIS"};
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName:"WEB_SERVER", clusterName:"FinnoneLOS_WebSrv"};
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName:"WEB_SERVER", clusterName:"ENET_IHS"};

        // 8 APP Servers of type FLXRETWAS
        /*PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FLXRETWAS1"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FLXRETWAS2"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FLXRETWAS3"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FLXRETWAS4"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FLXRETWAS5"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FLXRETWAS6"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FLXRETWAS7"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FLXRETWAS8"};

         // 7 APP Servers of type FinnoneLOSWAS
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FinnoneLOSWAS1"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FinnoneLOSWAS2"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FinnoneLOSWAS3"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FinnoneLOSWAS4"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FinnoneLOSWAS5"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FinnoneLOSWAS6"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FinnoneLOSWAS7"};

         // 3 APP Servers miscellaneous
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "FLXRETWASALL"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "NCB_UAT_APP"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "APP_SERVER",clusterName: "ENETWASALL"};*/

        return PageLoader;
    });