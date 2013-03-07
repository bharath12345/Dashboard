define(["dojo/_base/declare"],

    function (declare) {

        var AbstractView = declare("dashboard.abstract.AbstractView", null, {

            renderView: function(uuid, borderContainer) {

            }

        });

        AbstractView.LOG = Logger.addTimer(new Logger("dashboard.abstract.AbstractView"));

        return AbstractView;
    });