define(["dojo/_base/declare"],

    function (declare) {

        var AllApplicationIncidentView = declare("dashboard.noc.views.AllApplicationIncidentView", dashboard.abstract.AbstractView, {

            renderView: function(uuid, borderContainer) {

            }

        });

        AllApplicationIncidentView.LOG = Logger.addTimer(new Logger("dashboard.noc.views.AllApplicationIncidentView"));

        return AllApplicationIncidentView;
    });