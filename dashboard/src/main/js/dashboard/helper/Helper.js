define(["dojo/_base/declare", 'dojox/widget/Standby', "dojo/io-query"],

    function (declare, Standby, ioQuery) {

        var Helper = declare("dashboard.abstract.Helper", null, {});

        Helper.JSON_HEADER = { 'Content-Type':'application/json' };

        Helper.showLoading = function() {
            dashboard.STANDBY = new Standby({target:dashboard.TopBc.domNode});
            document.body.appendChild(dashboard.STANDBY.domNode);
            dashboard.STANDBY.startup();
            dashboard.STANDBY.show();
        };

        Helper.createDomAndShowPage = function(accordionObject) {
            var uri = document.URL;
            var query = uri.substring(uri.indexOf("?") + 1, uri.length);
            var queryObject = ioQuery.queryToObject(query);

            viewObject = accordionObject.getView(queryObject.viewName, true);

            viewObject.createDom();

            Helper.showLoading();

            accordionObject.showView(queryObject.viewId, queryObject.viewName, queryObject.viewType, true);
        };

        return Helper;
    });