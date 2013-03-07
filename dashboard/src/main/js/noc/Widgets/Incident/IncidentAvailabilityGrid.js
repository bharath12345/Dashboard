define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility) {

        var IncidentAvailabilityGrid = declare(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID, null, {

            createComponentString: function(data, input) {
                dojo.query("#" + data.custom[0] + " " + data.custom[1]).forEach(function (node) {
                    node.innerHTML = data.name + "Static Incidents = " + data.alert.static + " Dynamic Incidents = " + data.alert.dynamic;
                });
            },

            createClusterString: function(data, input) {
                dojo.query("#" + data.custom[0] + " " + data.custom[1]).forEach(function (node) {
                    node.innerHTML = data.name + "Static Incidents = " + data.alert.static + " Dynamic Incidents = " + data.alert.dynamic;
                });
            },

            createIncidentString: function(data, input) {
                dojo.query("#" + data.custom[0] + " " + data.custom[1]).forEach(function (node) {
                    node.innerHTML = data.name + "Static Incidents = " + data.alert.static + " Dynamic Incidents = " + data.alert.dynamic;
                });
            }

        });

        IncidentAvailabilityGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID));

        return IncidentAvailabilityGrid;
    });