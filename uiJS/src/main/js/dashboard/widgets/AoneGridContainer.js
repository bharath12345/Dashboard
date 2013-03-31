define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dijit/TitlePane", "dojox/layout/GridContainer"],

    function (declare, i18n, i18nString, Logger, TitlePane, GridContainer) {

        dashboard.classnames.AoneGridContainer = "dashboard.widgets.AoneGridContainer";

        var AoneGridContainer = declare(dashboard.classnames.AoneGridContainer, GridContainer, {

            isAutoOrganized:true,
            style:"width: 100%; height: 100%;",
            titlepanes: [],
            nbZones: 7,

            setCount:function (count) {
                this.count = count;
                var gridConfig = this.computeZones(count);
                this.nbZones = gridConfig[0];
                this.rows = gridConfig[1];
                this.roundoff = gridConfig[2];
            },

            setStyle: function(parentContentPane) {
                var width = parentContentPane.domNode.parentNode.offsetWidth - 20;
                var height = parentContentPane.domNode.offsetHeight;
                console.log("view port width = " + width + " height = " + height);

                this.styleString = "width: " + (width / this.nbZones) + "; height: " + (height / this.rows) + ";"
                console.log("style string = " + this.styleString);
            },

            setTitlePanes: function(titlepanes) {
                this.titlepanes = titlepanes;
                for (var i = this.count; i < this.roundoff; i++) {
                    this.titlepanes[i] = new TitlePane({
                        splitter:false,
                        style:this.styleString,
                        content:"<div style='width: 100%; height: 100%;'></div>",
                        title:"",
                        toggleable:false
                    });
                }
            },

            startup:function () {

                this.inherited(arguments);

                this.disableDnd();

                var j = 0, k = 0;
                for (var i = 0; i < this.titlepanes.length; i++) {
                    j = (i % this.nbZones);
                    k = parseInt(i / this.nbZones);
                    this.addChild(this.titlepanes[i], j, k);
                }

                this.resize();

                this.cleanupRendering();

            },

            computeZones:function () {
                // screen width is higher than length. Following are the configs -
                // 4 Tx columns, 0-8 Row = 0-32
                // 5 Tx columns, 6-10 Row = 33-50
                // 6 Tx columns, 8-12 Row = 51-72
                // 7 Tx columns, 10-14 Row = 72-98
                // So the maximum cluster supported on a single page is 98

                var gridConfig = [];
                if (this.count < 33) {
                    gridConfig[0] = 4; // 0th entry in the array is for nbZones or column
                    gridConfig[1] = 8; // this is for the row
                    gridConfig[2] = 32; // number of grids being accomodated
                } else if (this.count > 32 && this.count < 51) {
                    gridConfig[0] = 5;
                    gridConfig[1] = 10;
                    gridConfig[2] = 50;
                } else if (this.count > 50 && this.count < 73) {
                    gridConfig[0] = 6;
                    gridConfig[1] = 12;
                    gridConfig[2] = 72;
                } else if (this.count > 72 && this.count < 99) {
                    gridConfig[0] = 7;
                    gridConfig[1] = 14;
                    gridConfig[2] = 98;
                } else {
                    console.log("Invalid this.count for tx zones = " + this.count);
                    return null;
                }
                return gridConfig;
            },

            cleanupRendering:function () {
                // remove padding
                var innerPane = dojo.query(".dijitTitlePaneContentInner", this.domNode);
                //console.log("inner len = " + innerPane.length);
                for (var i = 0; i < innerPane.length; i++) {
                    innerPane[i].style.padding = 0;
                }

                var textNode = dojo.query(".dijitTitlePaneTextNode", this.domNode);
                for (var i = 0; i < textNode.length; i++) {
                    textNode[i].style.fontSize = "11px";
                }

                var head = dojo.query(".dijitTitlePaneTitle", this.domNode)
                for (var i = 0; i < head.length; i++) {
                    head[i].style.padding = 0;
                    head[i].style.minHeight = 0;
                }

                var headFocus = dojo.query(".dijitTitlePaneTitleFocus", this.domNode)
                for (var i = 0; i < headFocus.length; i++) {
                    headFocus[i].style.margin = 0;
                    headFocus[i].style.padding = 0;
                }
            }
        });

        AoneGridContainer.LOG = Logger.addTimer(new Logger(dashboard.classnames.AoneGridContainer));

        return AoneGridContainer;
    });