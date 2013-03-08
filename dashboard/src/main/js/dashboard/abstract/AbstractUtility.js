define(["dojo/_base/declare", 'dojox/widget/Standby'],

    function (declare, Standby) {

        var AbstractUtility = declare("dashboard.abstract.AbstractUtility", null, {});

        AbstractUtility.JSON_HEADER = { 'Content-Type':'application/json' };

        AbstractUtility.showLoading = function() {
            var node = dojo.create("div");
            document.body.appendChild(node);

            dashboard.STANDBY = new Standby({target:node});
            document.body.appendChild(dashboard.STANDBY.domNode);
            dashboard.STANDBY.startup();
            dashboard.STANDBY.show();
        };

        AbstractUtility.hideLoading = function() {
            dashboard.STANDBY.hide();
        }

        return AbstractUtility;
    });