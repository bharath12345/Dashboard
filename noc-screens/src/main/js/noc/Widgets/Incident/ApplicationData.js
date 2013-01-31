define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", 'dgrid/Grid', "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Grid, Logger, CONSTANTS, Utility) {

        var ApplicationData = declare(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONDATA, null, {

            create: function(data, input) {
                customMetrics = dojo.fromJson(data.custom[0]);
                for(var i=0;i<customMetrics.length;i++) {
                    var metric = customMetrics[i];
                    var nodeId = data.name + "_" + data.id + "_" + metric;
                    console.log("node id = " + nodeId);
                    var node = dojo.byId(nodeId);

                    for(var j=0;j<input.applicationDataVO.metrics.length;j++) {
                        var payload = input.applicationDataVO.metrics[j];
                        if(payload.name != metric) {
                            continue;
                        }

                        var highAlert = payload.count[0];
                        var mediumAlert = payload.count[1];
                        var lowAlert = payload.count[2];

                        var highSpan = dojo.create("span");
                        highSpan.className = "label label-important";
                        highSpan.innerHTML = highAlert;
                        node.appendChild(highSpan);

                        var mediumSpan = dojo.create("span");
                        mediumSpan.className = "label label-warning";
                        mediumSpan.innerHTML = mediumAlert;
                        node.appendChild(mediumSpan);

                        var lowSpan = dojo.create("span");
                        lowSpan.className = "label label-info";
                        lowSpan.innerHTML = lowAlert;
                        node.appendChild(lowSpan);

                        break;
                    }

                }
            }

        });

        ApplicationData.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONDATA));

        return ApplicationData;
    });