define(["dojo/_base/declare"],

    function (declare) {

        var AbstractView = declare("dashboard.abstract.AbstractView", null, {

            launchInNewWindow: function() {
                // all inherited classes should override this
            }

        });

        return AbstractView;
    });