define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/layout/ContentPane", "dijit/layout/BorderContainer", "dojo/window",
    "dojo/i18n!noc/nls/noc", "noc/pages/AvailabilityPage", "noc/pages/TxTreemapPage",
    "noc/pages/ComponentPage", "noc/pages/TxTimeSeriesPage", "noc/pages/AlertPage", "noc/pages/TxServiceLevelPage"],

    function (require, declare, i18n, ContentPane, BorderContainer, win,
              i18nString, AvailabilityPage, TxTimeSeriesPage, ComponentPage,
              TxTreemapPage, AlertPage, TxServiceLevelPage) {

        var PageLoader = declare("noc.PageLoader", null, {

            initMain:function () {

                // 1. the idea is that every div will be populated by its own AJAX call
                // 2. all that will be assigned to the div is the URL to query from and some meta for the
                //  kind of info it has to render
                // 3.
                //
                //
                var viewPort = win.getBox();
                console.log("window height = " + viewPort.h + " width = " + viewPort.w);

                this.createSections(viewPort);

                new AvailabilityPage().loadPage();
                new TxTimeSeriesPage().loadPage();
                new ComponentPage().loadPage();
                new TxTreemapPage().loadPage();
                new AlertPage().loadPage();
                new TxServiceLevelPage().loadPage();

                //PageLoader.pageScroll(viewPort);
            },

            getViewPortDimensions: function(viewPort) {
                if(viewPort == null || viewPort == undefined) {
                    viewPort = win.getBox();
                }
                return "width: " + (document.body.clientWidth - 15) + "; height: " + (document.body.clientHeight - 15) + ";";
            },

            getSection: function(viewPort) {
                var section = dojo.create("section");
                section.style.cssText = this.getViewPortDimensions(viewPort);
                document.body.appendChild(section);
                return section;
            },

            createSections: function(viewPort) {
                this.createBorderContainer(this.getSection(), viewPort, 0);
                this.createBorderContainer(this.getSection(), viewPort, 1);
                this.createBorderContainer(this.getSection(), viewPort, 2);
                this.createBorderContainer(this.getSection(), viewPort, 3);
                this.createBorderContainer(this.getSection(), viewPort, 4);
            },

            createBorderContainer: function(section, viewPort, pageCounter) {
                var node = dojo.create("div");
                node.style.cssText = this.getViewPortDimensions(viewPort);
                section.appendChild(node);

                PageLoader.TopBc[pageCounter] = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: this.getViewPortDimensions(viewPort)
                }, node);

                PageLoader.CpTop[pageCounter] = new ContentPane({
                    region:"top",
                    splitter:false
                });

                PageLoader.CpCenter[pageCounter] = new ContentPane({
                    region:"center",
                    splitter:false
                });

                PageLoader.CpBottom[pageCounter] = new ContentPane({
                    region:"bottom",
                    splitter:false
                });

                PageLoader.TopBc[pageCounter].addChild(PageLoader.CpTop[pageCounter]);
                PageLoader.TopBc[pageCounter].addChild(PageLoader.CpCenter[pageCounter]);
                PageLoader.TopBc[pageCounter].addChild(PageLoader.CpBottom[pageCounter]);
                PageLoader.TopBc[pageCounter].startup();

                // remove all contentpane paddings and top/bottom contentpane border
                this.removeBorderPadding(PageLoader.CpTop[pageCounter].domNode);
                PageLoader.CpCenter[pageCounter].domNode.style.padding = "0px";
                this.removeBorderPadding(PageLoader.CpBottom[pageCounter].domNode);

                // remove offset of all contentpane
                var childCP = PageLoader.TopBc[pageCounter].domNode.childNodes;
                for(var i = 0; i < childCP.length; i++) {
                    //console.log(childCP[i]);
                    childCP[i].style.left = "0px";
                    childCP[i].style.top = "0px";
                    //console.log(childCP[i]);
                }

                PageLoader.TopBc[pageCounter].resize();

            },

            removeBorderPadding: function (domNode) {
                domNode.style.borderStyle = "none";
                domNode.style.padding = "0px";
            }

        });

        // static variables of this class

        // when the page loads, this variable is set to 0
        // after that, this counter is spinning between 1 to 5
        PageLoader.PageCounter = 0;

        PageLoader.TopBc = [];
        PageLoader.CpTop = [];
        PageLoader.CpCenter = [];
        PageLoader.CpBottom = [];

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

        return PageLoader;
    });