define(['require', "dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants", "noc/Logger"],

    function (require, declare, i18n, TitlePane, GridContainer, i18nString, Utility, CONSTANTS, Logger) {

        var ClusterZones = declare(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES, null, {

            create:function (data, input) {

                console.log("data = " + dojo.toJson(data));
                console.log("input = " + dojo.toJson(input));

                var paneWidth = data.dimensions.width;
                var paneHeight = data.dimensions.height;
                var nbZ = 6;
                var styleString = "width: " + (paneWidth / nbZ) + "; height: " + (paneHeight / 5) + ";"
                console.log("style string = " + styleString);
                var titlepanes = [];
                for (var i = 0; i < input.clusterVOs.length; i++) {
                    titlepanes[i] = new TitlePane({
                        splitter:false,
                        style:styleString,
                        content:"<div id='" + input.clusterVOs[i].clusterName + "' style='width: 100%; height: 100%;'></div>",
                        title:input.clusterVOs[i].clusterName,
                        toggleable:false
                    });
                }

                var gridContainer = new GridContainer({nbZones:nbZ, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                noc.pages.AllClusterAvailability.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                var j = 0, k = 0;
                for (var i = 0; i < input.clusterVOs.length; i++) {
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
                    setTimeout(this.periodicCluster, period * 1000);
                    period += ClusterZones.CLUSTER_STAGGER_PERIOD;
                }

                // do the first time population immediately
                for (var i = 0; i < input.clusterVOs.length; i++) {
                    this.periodicClusterPost();
                }
            },

            periodicCluster:function () {
                setInterval(noc.Widgets.Availability.ClusterZones.prototype.periodicClusterPost,
                    ClusterZones.POSTSET.dataset.length * ClusterZones.CLUSTER_STAGGER_PERIOD * 1000);
            },

            periodicClusterPost:function () {
                var clusterDataSet = ClusterZones.POSTSET.dataset[ClusterZones.CLUSTER_COUNTER];

                console.log("querying for cluster = " + clusterDataSet.name);

                var viewMeta = {
                    id:clusterDataSet.id,
                    name:clusterDataSet.name,
                    type:CONSTANTS.TYPE.AVAILABILITY,
                    subtype:CONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER2,
                    dimensions:[clusterDataSet.width, clusterDataSet.height],
                    position:[0, 0],
                    custom:[clusterDataSet.custom]
                };
                Utility.xhrPostCentral(CONSTANTS.ACTION.AVAILABILITY.CLUSTER, viewMeta);

                ClusterZones.CLUSTER_COUNTER++;
                if (ClusterZones.CLUSTER_COUNTER > (ClusterZones.POSTSET.dataset.length - 1)) {
                    ClusterZones.CLUSTER_COUNTER = 0;
                }
            }
        });

        // static variables of this class
        ClusterZones.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES));

        ClusterZones.POSTSET = {};
        ClusterZones.CLUSTER_COUNTER = 0;
        ClusterZones.CLUSTER_STAGGER_PERIOD = 3;

        return ClusterZones;
    });