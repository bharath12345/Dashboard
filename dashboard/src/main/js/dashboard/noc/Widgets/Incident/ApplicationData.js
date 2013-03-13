define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", 'dgrid/Grid', "dashboard/logger/Logger", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility",
            "dashboard/noc/widgets/incident/AppIncidentGrid"],

    function (declare, i18n, i18nString, Grid, Logger, NOCCONSTANTS, NocUtility, AppIncidentGrid) {

        dashboard.classnames.ApplicationData = "dashboard.noc.widgets.incident.ApplicationData";

        var ApplicationData = declare(dashboard.classnames.ApplicationData, null, {

            create:function (data, input) {
                customMetrics = dojo.fromJson(data.custom[0]);
                for (var i = 0; i < customMetrics.length; i++) {
                    var metric = customMetrics[i];
                    var nodeId = data.name + "_" + data.id + "_" + metric;
                    console.log("node id = " + nodeId);
                    var node = dojo.byId(nodeId);
                    NocUtility.removeChildren(document.getElementById(nodeId));

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
                AppIncidentGrid.applyConfig();
                dashboard.STANDBY.hide();
            }

        });

        ApplicationData.LOG = Logger.addTimer(new Logger(dashboard.classnames.ApplicationData));

        return ApplicationData;
    });