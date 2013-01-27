define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants"],

    function (declare, i18n, i18nString, Logger, CONSTANTS) {

        var AlertAvailabilityGrid = declare("noc.Widgets.Alert.AlertAvailabilityGrid", null, {

            createComponentString: function(data, input) {
                dojo.query("#" + data.custom[0] + " " + data.custom[1]).forEach(function (node) {
                    node.innerHTML = data.name + "Static Alerts = " + data.alert.static + " Dynamic Alerts = " + data.alert.dynamic;
                });
            },

            createClusterString: function(data, input) {
                dojo.query("#" + data.custom[0] + " " + data.custom[1]).forEach(function (node) {
                    node.innerHTML = data.name + "Static Alerts = " + data.alert.static + " Dynamic Alerts = " + data.alert.dynamic;
                });
            },

            createAlertString: function(data, input) {
                dojo.query("#" + data.custom[0] + " " + data.custom[1]).forEach(function (node) {
                    node.innerHTML = data.name + "Static Alerts = " + data.alert.static + " Dynamic Alerts = " + data.alert.dynamic;
                });
            }

        });

        return AlertAvailabilityGrid;
    });