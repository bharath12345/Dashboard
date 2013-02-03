define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer", "dojo/window",
    "dojo/i18n!noc/nls/noc", "noc/pages/AvailabilityPage", "noc/pages/TxTreemapPage",
    "noc/pages/ComponentPage", "noc/pages/TxTimeSeriesPage", "noc/pages/IncidentPage", "noc/pages/AllClusterAvailability",
    "noc/pages/TransactionGrid",
    "noc/Logger", "noc/Constants", "noc/Utility"],

    function (require, declare, i18n, ContentPane, BorderContainer, win,
              i18nString, AvailabilityPage, TxTreemapPage, ComponentPage,
              TxTimeSeriesPage, IncidentPage, AllClusterAvailability, TransactionGrid, Logger, CONSTANTS, Utility) {

        var PageLoader = declare(CONSTANTS.CLASSNAME.PAGELOADER, null, {

            initMain:function () {

                PageLoader.LOG.log(Logger.SEVERITY.SEVERE, "Logging Success!");

                var viewPort = win.getBox();
                PageLoader.LOG.log(Logger.SEVERITY.SEVERE, "window height = " + viewPort.h + " width = " + viewPort.w);

                this.createSections(viewPort);

                new IncidentPage().loadPage(0, "IncidentGrid");
                new AllClusterAvailability().loadPage(1, "AllClusterAvailability");
                new TransactionGrid().loadPage(2, "TransactionGrid");
                return;

                //setTimeout(function(){new TxTimeSeriesPage().loadPage()}, 10*1000);
                //setTimeout(function(){new ComponentPage().loadPage()}, 20*1000);
                //setTimeout(function(){new TxTreemapPage().loadPage()}, 30*1000);
                //setTimeout(function(){new TxServiceLevelPage().loadPage()}, 40*1000);

                var startPageCounter = 3;
                for(var i=0;i<PageLoader.TotalPages;i++) {
                    new AvailabilityPage().loadPage(i+startPageCounter, "availabilityPage_" + (i+startPageCounter), PageLoader.Pages[i].componentName, PageLoader.Pages[i].clusterName);
                }

                //PageLoader.pageScroll(viewPort);
            },

            getViewPortDimensions: function(viewPort) {
                if(viewPort == null || viewPort == undefined) {
                    viewPort = win.getBox();
                }
                if(PageLoader.ViewPortStyle == null) {
                    PageLoader.ViewPortStyle="width: " + (document.body.clientWidth) + "; height: " + (document.body.clientHeight) + ";";
                    return PageLoader.ViewPortStyle;
                }
                return PageLoader.ViewPortStyle;
            },

            getSection: function(viewPort) {
                var section = dojo.create("section");
                section.style.cssText = this.getViewPortDimensions(viewPort);
                section.style.overflow = "hidden";
                document.body.appendChild(section);
                return section;
            },

            createSections: function(viewPort) {
                this.createBorderContainer(this.getSection(), viewPort, 0);
                this.createBorderContainer(this.getSection(), viewPort, 1);
                this.createBorderContainer(this.getSection(), viewPort, 2);
                return;

                var startPageCounter = 3;
                for(var i=startPageCounter; i<PageLoader.TotalPages+startPageCounter; i++) {
                    this.createBorderContainer(this.getSection(), viewPort, i);
                }
            },

            createBorderContainer: function(section, viewPort, pageCounter) {
                var node = dojo.create("div");
                node.style.cssText = this.getViewPortDimensions(viewPort);
                section.appendChild(node);

                PageLoader.TopBc[pageCounter] = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true
                    //style: this.getViewPortDimensions(viewPort)
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

            removeBorderPadding: function (domNode) {
                domNode.style.borderStyle = "none";
                domNode.style.padding = "0px";
            }

        });

        PageLoader.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.PAGELOADER));

        // static variables of this class

        // when the page loads, this variable is set to 0
        // after that, this counter is spinning between 1 to 5
        PageLoader.PageCounter = 0;

        PageLoader.TopBc = [];
        PageLoader.CpTop = [];
        PageLoader.CpCenter = [];
        PageLoader.CpBottom = [];

        PageLoader.ViewPortStyle = null;

        PageLoader.pageScroll = function(viewPort) {
            if(PageLoader.PageCounter >= 5) {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                PageLoader.PageCounter = 1;
            } else {
                if(PageLoader.PageCounter != 0) {
                    if(viewPort == null || viewPort == undefined) {
                        viewPort = win.getBox();
                    }
                    window.scrollBy(0, (0.98*viewPort.h)); // horizontal and vertical scroll increments
                }
                PageLoader.PageCounter++;
            }
            scrolldelay = setTimeout('noc.PageLoader.pageScroll()', 2 * 1000);
        };

        PageLoader.TotalPages = 0;
        PageLoader.Pages = [];

        // Total = 1 + 5 + 8 + 7 + 3 = 24 Clusters of 4 Types
        // 1 DB
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "DB",clusterName: "ALL"};

        /*PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "LINUXHOST",clusterName: "ALL"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "WINDOWSHOST",clusterName: "ALL"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "CUSTOM",clusterName: "ALL"};
         PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "CLUSTER",clusterName: "ALL"};*/

        // 4 WEB Servers
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "WEB_SERVER",clusterName: "FLXRET_IHS"};
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "WEB_SERVER",clusterName: "FLXRET_DB"};
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "WEB_SERVER",clusterName: "CRMNextCommIIS"};
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "WEB_SERVER",clusterName: "FinnoneLOS_WebSrv"};
        PageLoader.Pages[PageLoader.TotalPages++] = {componentName: "WEB_SERVER",clusterName: "ENET_IHS"};

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