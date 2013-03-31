define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/noc/nls/noc",
    "dijit/layout/ContentPane", "dojox/layout/GridContainer", 'dashboard/widgets/AoneDgrid', "dojo/request/xhr", "dojo/_base/lang", "dojo/store/Memory",
    "dashboard/logger/Logger", "dashboard/helper/Scheduler", "dashboard/helper/Helper", "dashboard/analysis/ApplicationAnalysisPane",
    "dashboard/abstract/AbstractForm"],

    function (declare, i18n, i18nString, ContentPane, GridContainer, Grid, xhr, lang, Memory, Logger, Scheduler, Helper,
              ApplicationAnalysisPane, AbstractForm) {

        /*
         *
         *
         */

        dashboard.classnames.IncidentData = "dashboard.noc.forms.NocApplicationIncidentForm.IncidentData";

        var IncidentData = declare(dashboard.classnames.IncidentData, null, {

            create:function (data, input) {

                var row = {};
                row.appName = data.name;
                row.id = data.id;

                var customMetrics = dojo.fromJson(data.custom[0]);
                console.log("custom len = " + customMetrics.length);
                for (var i = 0; i < customMetrics.length; i++) {
                    var metric = customMetrics[i];

                    for (var j = 0; j < input.applicationDataVO.metrics.length; j++) {
                        var payload = input.applicationDataVO.metrics[j];
                        if (payload.name != metric) {
                            continue;
                        }

                        row[metric + "_" + IncidentGrid.CRITICAL] = payload.count[0];
                        row[metric + "_" + IncidentGrid.MAJOR] = payload.count[1];
                        row[metric + "_" + IncidentGrid.MINOR] = Math.floor(Math.random() * 100);

                        break;
                    }
                }

                NocApplicationIncidentForm.Grid.addRow(row);
                dashboard.dom.STANDBY.hide();
            }

        });

        IncidentData.LOG = Logger.addTimer(new Logger(dashboard.classnames.IncidentData));

        /*
         *
         *
         */

        dashboard.classnames.IncidentGrid = "dashboard.noc.forms.NocApplicationIncidentForm.IncidentGrid";

        var IncidentGrid = declare(dashboard.classnames.IncidentGrid, null, {

            create:function (data, input) {

                var columnMeta = [
                    {
                        field:"appName",
                        label:"Application Name",
                        resizable:true
                    },
                    {
                        field:"id",
                        label:"id",
                        unhidable:true,
                        hidden:true
                    }
                ];

                IncidentGrid.DATACLASS = input.applicationVO.dataActionClass;

                var metrics = input.applicationVO.metrics;
                for (var i = 0; i < metrics.length; i++) {
                    var col = {};
                    col.label = i18nString[metrics[i]];
                    //col.field = metrics[i]; // because of child columns, there is NO field
                    col.reorderable = true;
                    col.resizable = true;
                    col.children = [];

                    var subcol = {};
                    subcol.field = metrics[i] + "_" + IncidentGrid.CRITICAL;
                    subcol.label = i18nString[IncidentGrid.CRITICAL];
                    subcol.reorderable = true;
                    subcol.resizable = true;
                    col.children.push(subcol);

                    subcol = {};
                    subcol.field = metrics[i] + "_" + IncidentGrid.MAJOR;
                    subcol.label = i18nString[IncidentGrid.MAJOR];
                    subcol.reorderable = true;
                    subcol.resizable = true;
                    col.children.push(subcol);

                    subcol = {};
                    subcol.field = metrics[i] + "_" + IncidentGrid.MINOR;
                    subcol.label = i18nString[IncidentGrid.MINOR];
                    subcol.reorderable = true;
                    subcol.resizable = true;
                    col.children.push(subcol);

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
                        row[metrics[j] + "_" + IncidentGrid.CRITICAL] = "";
                        row[metrics[j] + "_" + IncidentGrid.MAJOR] = "";
                        row[metrics[j] + "_" + IncidentGrid.MINOR] = "";
                    }
                    gridata.push(row);
                }

                if(input.applicationVO.applications.length < 25) {
                    for(var z = input.applicationVO.applications.length; z < 25; z++) {
                        var row = {};
                        row.appName = "blank row";
                        row.id = " ";
                        for (var j = 0; j < metrics.length; j++) {
                            row[metrics[j] + "_" + IncidentGrid.CRITICAL] = " ";
                            row[metrics[j] + "_" + IncidentGrid.MAJOR] = " ";
                            row[metrics[j] + "_" + IncidentGrid.MINOR] = " ";
                        }
                        gridata.push(row);
                    }
                }

                try {

                    NocApplicationIncidentForm.Grid = new Grid();
                    NocApplicationIncidentForm.Grid.setColumnMeta(columnMeta);
                    NocApplicationIncidentForm.Grid.setData(gridata);
                    NocApplicationIncidentForm.Grid.render(data.name);
                    NocApplicationIncidentForm.Grid.handleRowClick(this); // the handleRowClick() callback is invoked in this case

                } catch (e) {
                    console.log("exception = " + e);
                }

                // assign ids to nodes
                for (var j = 0; j < metrics.length; j++) {
                    dojo.query("td.field-" + metrics[j] + "_" + IncidentGrid.CRITICAL).forEach(function (node) {
                        node.style.color = "red";
                    });

                    dojo.query("td.field-" + metrics[j] + "_" + IncidentGrid.MAJOR).forEach(function (node) {
                        node.style.color = "orange";
                    });

                    dojo.query("td.field-" + metrics[j] + "_" + IncidentGrid.MINOR).forEach(function (node) {
                        node.style.color = "blue";
                    });
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

            handleRowClick:function (evt) {
                var row = NocApplicationIncidentForm.Grid.getRow(evt);

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

            createIncidentGridData:function (input) {
                var data = Helper.parseInput(input);
                new IncidentData().create(data, input);
            }
        });

        IncidentGrid.LOG = Logger.addTimer(new Logger(dashboard.classnames.IncidentGrid));

        IncidentGrid.POSTSET = {};
        IncidentGrid.APP_COUNTER = 0;
        IncidentGrid.APP_STAGGER_PERIOD = 3;
        IncidentGrid.CONFIG_PERIOD = 5;
        IncidentGrid.DATACLASS = null;

        IncidentGrid.CRITICAL = "critical";
        IncidentGrid.MAJOR = "major";
        IncidentGrid.MINOR = "minor";


        /*

         */

        dashboard.classnames.NocApplicationIncidentForm = "dashboard.noc.forms.NocApplicationIncidentForm";

        var NocApplicationIncidentForm = declare(dashboard.classnames.NocApplicationIncidentForm, AbstractForm, {

            startup:function () {
                this.inherited(arguments);

                this.attr('content', dojo.create('div', {'id':NocApplicationIncidentForm.PAGENAME, style:'width: 100%; height: 100%;'}));

                var xpos = 0, ypos = 0;
                var viewMeta = {
                    id:NocApplicationIncidentForm.PAGENAME,
                    name:NocApplicationIncidentForm.PAGENAME,
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
                if (input.applicationVO == null || input.applicationVO == undefined || input.applicationVO.applications.length == 0) {
                    this.attr('content', "No Applications configured to display on the dashboard");
                    dashboard.dom.STANDBY.hide();
                    return;
                }
                var data = Helper.parseInput(input);
                new IncidentGrid().create(data, input);
            }
        });

        NocApplicationIncidentForm.PAGENAME = "NocApplicationIncidentForm";
        // static variables of this class
        NocApplicationIncidentForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.NocApplicationIncidentForm));

        return NocApplicationIncidentForm;
    });