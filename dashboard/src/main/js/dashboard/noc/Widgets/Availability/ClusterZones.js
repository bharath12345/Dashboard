define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/logger/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, i18nString, NocUtility, NOCCONSTANTS, Logger) {

        var ClusterZones = declare(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES, null, {

            computeZones:function (count) {
                // screen width is higher than length. Following are the configs -
                // 2 Cluster columns, 1 Row = 2
                // 2 Cluster columns, 2 Rows = 4
                // 3 Cluster columns, 2 Rows = 6
                // 4 Cluster Columns, 2 Rows = 8
                // 4 Cluster Columns, 3 Rows = 12
                // 5 Cluster Columns, 3 Rows = 15
                // 6 Cluster Columns, 3 Rows = 18 ==> This is the MAX
                // So the maximum cluster supported on a single page is 18

                var gridConfig = [];
                if (count < 3) {
                    gridConfig[0] = 2; // 0th entry in the array is for nbZ or column
                    gridConfig[1] = 1; // this is for the row
                    gridConfig[2] = 2; // number of grids being accomodated
                } else if (count > 2 && count < 5) {
                    gridConfig[0] = 2;
                    gridConfig[1] = 2;
                    gridConfig[2] = 4;
                } else if (count > 4 && count < 7) {
                    gridConfig[0] = 3;
                    gridConfig[1] = 2;
                    gridConfig[2] = 6;
                } else if (count > 6 && count < 9) {
                    gridConfig[0] = 4;
                    gridConfig[1] = 2;
                    gridConfig[2] = 6;
                } else if (count > 8 && count < 13) {
                    gridConfig[0] = 4;
                    gridConfig[1] = 3;
                    gridConfig[2] = 12;
                } else if (count > 12 && count < 16) {
                    gridConfig[0] = 5;
                    gridConfig[1] = 3;
                    gridConfig[2] = 15;
                } else if (count > 15 && count < 19) {
                    gridConfig[0] = 6;
                    gridConfig[1] = 3;
                    gridConfig[2] = 18;
                } else {
                    console.log("Invalid count for cluster zones = " + count);
                    return null;
                }
                return gridConfig;
            },

            create:function (data, input) {

                console.log("data = " + dojo.toJson(data));
                console.log("input = " + dojo.toJson(input));

                if(input.clusterVOs == null || input.clusterVOs.length == 0) {
                    dashboard.CpCenterInner.domNode.innerHTML="No Clusters configured for display on the dashboard";
                    return;
                }

                var gridConfig = this.computeZones(input.clusterVOs.length);
                var nbZ = gridConfig[0];
                var nbA = gridConfig[1];
                var roundoff = gridConfig[2];

                var paneWidth = data.dimensions.width;
                var paneHeight = data.dimensions.height;

                var styleString = "width: " + (paneWidth / nbZ) + "; height: " + (paneHeight / nbA) + ";"
                console.log("style string = " + styleString);

                var titlepanes = [];
                for (var i = 0; i < roundoff; i++) {
                    if (input.clusterVOs[i] == null) {
                        titlepanes[i] = new TitlePane({
                            splitter:false,
                            style:styleString,
                            content:"<div style='width: 100%; height: 100%;'></div>",
                            title:"",
                            toggleable:false
                        });
                    } else {
                        titlepanes[i] = new TitlePane({
                            splitter:false,
                            style:styleString,
                            content:"<div id='" + input.clusterVOs[i].clusterName + "' style='width: 100%; height: 100%;'></div>",
                            title:input.clusterVOs[i].clusterName,
                            toggleable:false
                        });
                    }
                }

                var gridContainer = new GridContainer({nbZones:nbZ, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                dashboard.CpCenterInner.addChild(gridContainer);
                gridContainer.disableDnd();

                var j = 0, k = 0;
                for (var i = 0; i < roundoff; i++) {
                    j = (i % nbZ);
                    k = parseInt(i / nbZ);
                    gridContainer.addChild(titlepanes[i], j, k);
                }
                gridContainer.startup();
                gridContainer.resize();

                // remove padding
                var innerPane = dojo.query(".dijitTitlePaneContentInner", gridContainer.domNode);
                console.log("inner len = " + innerPane.length);
                for (var i = 0; i < innerPane.length; i++) {
                    innerPane[i].style.padding = 0;
                }

                ClusterZones.POSTSET.dataset = [];
                for (var i = 0; i < input.clusterVOs.length; i++) {
                    var datum = {};
                    datum.id = input.clusterVOs[i].id;
                    datum.name = input.clusterVOs[i].clusterName;
                    datum.width = titlepanes[i].domNode.offsetWidth;
                    datum.height = titlepanes[i].domNode.offsetHeight;
                    datum.custom = 10;
                    ClusterZones.POSTSET.dataset.push(datum);
                }

                var period = 1;
                for (var i = 0; i < input.clusterVOs.length; i++) {
                    // first cluster launches after one second
                    // 2nd cluster at 11 sec, 3rd cluster at 21 sec and so on till --> 1 + (cluter-count*10) seconds
                    var timer = setTimeout(this.periodicCluster, period * 1000);
                    period += ClusterZones.CLUSTER_STAGGER_PERIOD;
                    ClusterZones.TIMERS.push(timer);
                }

                // do the first time population immediately
                for (var i = 0; i < input.clusterVOs.length; i++) {

                    this.periodicClusterPost();
                }
            },

            periodicCluster:function () {
                var timer = setInterval(dashboard.noc.widgets.availability.ClusterZones.prototype.periodicClusterPost,
                    ClusterZones.POSTSET.dataset.length * ClusterZones.CLUSTER_STAGGER_PERIOD * 1000);
                ClusterZones.TIMERS.push(timer);
            },

            periodicClusterPost:function () {
                var clusterDataSet = ClusterZones.POSTSET.dataset[ClusterZones.CLUSTER_COUNTER];

                console.log("querying for cluster = " + clusterDataSet.name);

                var viewMeta = {
                    id:clusterDataSet.id,
                    name:clusterDataSet.name,
                    type:NOCCONSTANTS.TYPE.AVAILABILITY,
                    subtype:NOCCONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER2,
                    dimensions:[clusterDataSet.width, clusterDataSet.height],
                    position:[0, 0],
                    custom:[clusterDataSet.custom]
                };
                NocUtility.xhrPostCentral(NOCCONSTANTS.ACTION.AVAILABILITY.CLUSTER, viewMeta);

                ClusterZones.CLUSTER_COUNTER++;
                if (ClusterZones.CLUSTER_COUNTER > (ClusterZones.POSTSET.dataset.length - 1)) {
                    ClusterZones.CLUSTER_COUNTER = 0;
                }
            }
        });

        // static variables of this class
        ClusterZones.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES));

        ClusterZones.POSTSET = {};
        ClusterZones.CLUSTER_COUNTER = 0;
        ClusterZones.CLUSTER_STAGGER_PERIOD = 3;

        ClusterZones.TIMERS = [];

        return ClusterZones;
    });