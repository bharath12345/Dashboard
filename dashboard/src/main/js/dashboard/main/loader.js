var pageTypes = {
    CONFIG:0,
    NOC:1,
    TOPOLOGY:2,
    CONFIGDASHBOARD:3,
    ALERT:4
};

dashboard = {};
dashboard.classnames = {};
dashboard.dom = {};

require(["dojo/io-query", "dojo/dom-construct", "dojo/_base/window", 'dojo/domReady!' ],

    function (ioQuery, domConstruct, win) {
        if(document.getElementById("loader") != null) {
            console.log("disallowing second loader");
            return;
        }

        var uri = document.URL;
        var node = domConstruct.create("script");
        var srcScript;

        if (uri.indexOf("viewId") == -1) {
            console.log("Launching Appsone Main Dashboard...");
            srcScript = "./js/dashboard/main/runDashboard.js";
        } else {
            var uri = document.URL;
            var query = uri.substring(uri.indexOf("?") + 1, uri.length);
            var queryObject = ioQuery.queryToObject(query);
            //console.log("Query object = " + dojo.toJson(queryObject));

            switch(parseInt(queryObject.viewCategory)) {
                case pageTypes.CONFIG:
                    console.log("Launching Appsone Config View...");
                    srcScript = "./js/dashboard/main/runConfig.js";
                    break;

                case pageTypes.NOC:
                    console.log("Launching Appsone NOC View...");
                    srcScript = "./js/dashboard/main/runNoc.js";
                    break;

                case pageTypes.TOPOLOGY:
                    console.log("Launching Appsone Topology View...");
                    srcScript = "./js/dashboard/main/runTopology.js";
                    break;

                case pageTypes.CONFIGDASHBOARD:
                    console.log("Launching Appsone Configurable Dashboards View...");
                    srcScript = "./js/dashboard/main/runConfigurableDashboard.js";
                    break;

                case pageTypes.ALERT:
                    console.log("Launching Appsone Alerts View...");
                    srcScript = "./js/dashboard/main/runAlert.js";
                    break;

                default:
                    console.log("unknown page category = " + queryObject.viewCategory);
                    return;
            }
        }

        domConstruct.create(node,
            {
                type:'text/javascript',
                id: "loader",
                src: srcScript
            }, win.body(), "first");
    }
);
