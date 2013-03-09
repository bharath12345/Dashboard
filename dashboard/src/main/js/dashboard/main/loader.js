var pageTypes = {
    CONFIG:0,
    NOC:1,
    TOPOLOGY:2,
    CONFIGDASHBOARD:3,
    ALERT:4
};

require(["dojo/io-query", "dojo/dom-construct", "dojo/_base/window", 'dojo/domReady!' ],

    function (ioQuery, domConstruct, win) {
        var uri = document.URL;
        var node = domConstruct.create("script");
        var srcScript;

        if (uri.indexOf("viewId") == -1) {
            console.log("Launching Appsone Main Dashboard...");
            srcScript = "./js/dashboard/main/runDashboard.js";
        } else {
            console.log("Launching Appsone View...");
            var uri = document.URL;
            var query = uri.substring(uri.indexOf("?") + 1, uri.length);
            var queryObject = ioQuery.queryToObject(query);
            //console.log("Query object = " + dojo.toJson(queryObject));

            switch(parseInt(queryObject.viewCategory)) {
                case pageTypes.CONFIG:
                    srcScript = "./js/dashboard/main/runConfig.js";
                    break;

                case pageTypes.NOC:
                    srcScript = "./js/dashboard/main/runNoc.js";
                    break;

                case pageTypes.TOPOLOGY:
                    srcScript = "./js/dashboard/main/runTopology.js";
                    break;

                case pageTypes.CONFIGDASHBOARD:
                    srcScript = "./js/dashboard/main/runConfigurableDashboard.js";
                    break;

                case pageTypes.ALERT:
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
                src: srcScript
            }, win.body(), "first");
    }
);
