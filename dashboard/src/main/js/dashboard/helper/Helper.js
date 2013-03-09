define(["dojo/_base/declare", 'dojox/widget/Standby', "dojo/io-query"],

    function (declare, Standby, ioQuery) {

        var Helper = declare("dashboard.abstract.Helper", null, {});

        Helper.JSON_HEADER = { 'Content-Type':'application/json' };

        Helper.showLoading = function() {
            var node = dojo.create("div");
            document.body.appendChild(node);

            dashboard.STANDBY = new Standby({target:node});
            document.body.appendChild(dashboard.STANDBY.domNode);
            dashboard.STANDBY.startup();
            dashboard.STANDBY.show();
        };

        Helper.hideLoading = function() {
            dashboard.STANDBY.hide();
        };

        Helper.createDomAndShowPage = function(viewObject, accordionObject) {
            viewObject.createDom();

            var uri = document.URL;
            var query = uri.substring(uri.indexOf("?") + 1, uri.length);
            var queryObject = ioQuery.queryToObject(query);

            accordionObject.showPageConfig(queryObject.viewId, queryObject.viewName, queryObject.viewType, true);
        };

        return Helper;
    });