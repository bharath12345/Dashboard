define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc",
    "dijit/layout/ContentPane", "dojox/layout/GridContainer", 'dashboard/widgets/AoneDgrid', "dojo/request/xhr", "dojo/_base/lang", "dojo/store/Memory",
    "dashboard/logger/Logger", "dashboard/helper/Scheduler", "dashboard/helper/Helper", "dashboard/noc/analysistab/ApplicationAnalysisPane"],

    function (declare, i18n, i18nString, ContentPane, GridContainer, Grid, xhr, lang, Memory,
              Logger, Scheduler, Helper, ApplicationAnalysisPane) {

        dashboard.classnames.IncidentGridConfig = "dashboard.noc.views.NocViewIncident.IncidentGridConfig";

        var IncidentGridConfig = declare(dashboard.classnames.IncidentGridConfig, null, {

            applyConfig:function () {
                if (IncidentGridConfig.CONFIG == null) {
                    console.log("no config received yet to apply");
                    return;
                } else {
                    console.log("applying config");
                }

                var applicationRefreshTime = "applicationRefreshTime";
                var value = IncidentGridConfig.CONFIG.agcVO[applicationRefreshTime].value;

                var fontName = "fontName";
                var fontValue = IncidentGridConfig.CONFIG.agcVO[fontName].value;

                var fontSize = "fontSize";
                value = parseInt(IncidentGridConfig.CONFIG.agcVO[fontSize].value);
                if (value < 6) {
                    value = 18;
                }
                console.log("font size retrived = " + value);
                var cell = dojo.query(".dgrid-cell, .label", dashboard.dom.CpCenterInner.domNode);
                for (var i = 0; i < cell.length; i++) {
                    cell[i].style.fontSize = value;
                    cell[i].style.verticalAlign = "middle";
                    cell[i].style.fontFamily = fontValue;
                }

                var showAllGreenApplications = "showAllGreenApplications";
                value = IncidentGridConfig.CONFIG.agcVO[showAllGreenApplications].value;

                IncidentGrid.Grid.resize();
            },

            setConfig:function (data) {
                console.log("config set");
                IncidentGridConfig.CONFIG = data;
            }

        });

        IncidentGridConfig.LOG = Logger.addTimer(new Logger(dashboard.classnames.IncidentGridConfig));
        IncidentGridConfig.CONFIG = null;


        /*
         *
         *
         */

        dashboard.classnames.IncidentData = "dashboard.noc.views.NocViewIncident.IncidentData";

        var IncidentData = declare(dashboard.classnames.IncidentData, null, {

            create:function (data, input) {

                var customMetrics = dojo.fromJson(data.custom[0]);
                console.log("custom len = " + customMetrics.length);
                for (var i = 0; i < customMetrics.length; i++) {
                    var metric = customMetrics[i];
                    var nodeId = data.name + "_" + data.id + "_" + metric;
                    console.log("node id = " + nodeId);
                    var node = dojo.byId(nodeId);
                    Helper.removeChildren(document.getElementById(nodeId));

                    for (var j = 0; j < input.applicationDataVO.metrics.length; j++) {
                        var payload = input.applicationDataVO.metrics[j];
                        if (payload.name != metric) {
                            continue;
                        }

                        var highAlert = payload.count[0];
                        var mediumAlert = payload.count[1];
                        var lowAlert = payload.count[2];

                        if (parseInt(highAlert) > 0) {
                            var highSpan = dojo.create("span");
                            highSpan.className = "label label-important";
                            highSpan.innerHTML = highAlert;
                            highSpan.style.width = "40";
                            node.appendChild(highSpan);
                        }

                        if (parseInt(mediumAlert) > 0) {
                            var mediumSpan = dojo.create("span");
                            mediumSpan.className = "label label-warning";
                            mediumSpan.innerHTML = mediumAlert;
                            mediumSpan.style.width = "40";
                            node.appendChild(mediumSpan);
                        }

                        var lowSpan = dojo.create("span");
                        lowSpan.className = "label label-success";
                        lowSpan.innerHTML = lowAlert;
                        lowSpan.style.width = "40";
                        node.appendChild(lowSpan);

                        break;
                    }
                }

                var nwigc = new IncidentGridConfig();
                nwigc.applyConfig();
                dashboard.dom.STANDBY.hide();
            }

        });

        IncidentData.LOG = Logger.addTimer(new Logger(dashboard.classnames.IncidentData));

        /*
         *
         *
         */

        dashboard.classnames.IncidentGrid = "dashboard.noc.views.NocViewIncident.IncidentGrid";

        var IncidentGrid = declare(dashboard.classnames.IncidentGrid, null, {

            create:function (data, input) {

                var columnMeta = [
                    {
                        field:"appName",
                        label:"Application Name",
                        resizable: true
                    },
                    {
                        field: "id",
                        label: "id",
                        unhidable: true,
                        hidden: true
                    }
                ];

                IncidentGrid.DATACLASS = input.applicationVO.dataActionClass;

                var metrics = input.applicationVO.metrics;
                for (var i = 0; i < metrics.length; i++) {
                    var col = {};
                    col.field = metrics[i];
                    col.label = i18nString[metrics[i]];
                    col.reorderable = true;
                    col.resizable = true;
                    columnMeta.push(col);
                }

                // create blank grid
                var gridata = [];
                for (var i = 0; i < input.applicationVO.applications.length; i++) {
                    var row = {};
                    var apps = input.applicationVO.applications;
                    row.appName = apps[i].name;
                    row.id = apps[i].id;
                    for (var j = 0; j < metrics.length; j++) {
                        row[metrics[j]] = "";
                    }
                    gridata.push(row);
                }

                var gridDataStore = new Memory({data:gridata});
                IncidentGrid.Grid = new Grid({
                    store: gridDataStore,
                    columns:columnMeta,
                    rowsPerPage: 25,
                    pagingLinks: 1,
                    pagingTextBox: true,
                    firstLastArrows: true,
                    pageSizeOptions: [15, 20, 25, 30]
                }, data.name);
                IncidentGrid.Grid.on(".dgrid-row:click", lang.hitch(this, this.handleRowClick));

                var textNode = dojo.query(".dgrid-cell", IncidentGrid.Grid.domNode);
                console.log("count of dgrid cells = " + textNode.length);
                for (var i = 0; i < textNode.length; i++) {
                    textNode[i].style.fontSize = "12px";
                }

                // assign ids to nodes
                for (var i = 0; i < input.applicationVO.applications.length; i++) {
                    var apps = input.applicationVO.applications;
                    for (var j = 0; j < metrics.length; j++) {
                        dojo.query("#IncidentGrid-row-" + i + " td.field-" + metrics[j]).forEach(function (node) {
                            node.id = apps[i].name + "_" + apps[i].id + "_" + metrics[j];
                        });
                    }
                }

                IncidentGrid.POSTSET.metricsJson = dojo.toJson(metrics);
                IncidentGrid.POSTSET.dataset = [];

                for (var i = 0; i < input.applicationVO.applications.length; i++) {
                    var apps = input.applicationVO.applications;
                    var datum = {};
                    datum.id = apps[i].id;
                    datum.name = apps[i].name;
                    IncidentGrid.POSTSET.dataset.push(datum);
                }

                // do the first time population immediately
                for (var i = 0; i < IncidentGrid.POSTSET.dataset.length; i++) {
                    this.periodicAppPost();
                }

                Scheduler.POLLER = this;
                this.startStaggeredDatabasePolling();
            },

            handleRowClick: function(evt) {
                var row = IncidentGrid.Grid.row(evt);
                // row.element == the element with the dgrid-row class
                // row.id == the identity of the item represented by the row
                // row.data == the item represented by the row

                console.log("row element = " + dojo.toJson(row.element));
                console.log("row id = " + dojo.toJson(row.id));
                console.log("row data = " + dojo.toJson(row.data));

                var appName = row.data.appName;
                var appId = row.data.id;

                var analysisPane = new ApplicationAnalysisPane();
                analysisPane.launch(appName, appId);
            },

            startStaggeredDatabasePolling:function () {
                var period = 1;
                for (var i = 0; i < IncidentGrid.POSTSET.dataset.length; i++) {
                    // first one launches after one second
                    // 2nd one at 4 sec, 3rd one at 7 sec and so on till --> 1 + (3*20) = 61 seconds
                    var timer = setTimeout(dojo.hitch(this, this.periodicApp), period * 1000);
                    period += IncidentGrid.APP_STAGGER_PERIOD;
                    Scheduler.TIMERS.push(timer);
                }
            },

            periodicApp:function () {
                var timer = setInterval(dojo.hitch(this, this.periodicAppPost),
                    IncidentGrid.POSTSET.dataset.length * IncidentGrid.APP_STAGGER_PERIOD * 1000);
                Scheduler.TIMERS.push(timer);
            },

            periodicAppPost:function () {
                var appDataSet = IncidentGrid.POSTSET.dataset[IncidentGrid.APP_COUNTER];
                console.log("querying for app = " + appDataSet.name);

                var viewMeta = {
                    id:appDataSet.id,
                    name:appDataSet.name,
                    dimensions:[0, 0],
                    position:[0, 0],
                    custom:[IncidentGrid.POSTSET.metricsJson]
                };

                xhr(IncidentGrid.DATACLASS, {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.createIncidentGridData));

                IncidentGrid.APP_COUNTER++;
                if (IncidentGrid.APP_COUNTER > (IncidentGrid.POSTSET.dataset.length - 1)) {
                    IncidentGrid.APP_COUNTER = 0;
                }
            },

            createIncidentGridData: function(input) {
                var data = Helper.parseInput(input);
                new IncidentData().create(data, input);
            }
        });

        IncidentGrid.LOG = Logger.addTimer(new Logger(dashboard.classnames.IncidentGrid));

        IncidentGrid.POSTSET = {};
        IncidentGrid.APP_COUNTER = 0;
        IncidentGrid.APP_STAGGER_PERIOD = 3;
        IncidentGrid.CONFIG_PERIOD = 5;
        IncidentGrid.Grid = null;
        IncidentGrid.DATACLASS = null;

        /*

         */

        dashboard.classnames.NocViewIncident = "dashboard.noc.views.NocViewIncident";

        var NocViewIncident = declare(dashboard.classnames.NocViewIncident, null, {

            loadPage:function (pageName) {

                var paneWidth = dashboard.dom.CpCenterInner.w;
                var paneHeight = dashboard.dom.CpCenterInner.h;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                dashboard.dom.topMenuPane.domNode.innerHTML = "<div class='text-center alert alert-info heading'>Alerts Grid</div>";

                var titlePane = new ContentPane({
                    splitter:false,
                    style:styleString,
                    content:"<div id='" + pageName + "' style='width: 100%; height: 100%;'></div>"
                });

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                dashboard.dom.CpCenterInner.addChild(gridContainer);
                gridContainer.disableDnd();

                gridContainer.addChild(titlePane, 0);
                gridContainer.startup();
                gridContainer.resize();

                var xpos = 0, ypos = 0;
                var viewMeta = {
                    id:pageName,
                    name:pageName,
                    dimensions:[dashboard.dom.CpCenterInner.w, dashboard.dom.CpCenterInner.h],
                    position:[xpos, ypos],
                    custom:[]
                };
                xhr("alert/ApplicationMeta.action", {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.createIncidentGridMeta));
            },

            createIncidentGridMeta:function (input) {
                var data = Helper.parseInput(input);
                new IncidentGrid().create(data, input);
            }
        });

        // static variables of this class
        NocViewIncident.LOG = Logger.addTimer(new Logger(dashboard.classnames.NocViewIncident));

        return NocViewIncident;
    });