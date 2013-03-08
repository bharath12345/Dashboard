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
            srcScript = "./js/dashboard/main/runConfig.js";
        }

        domConstruct.create(node,
            {
                type:'text/javascript',
                src: srcScript
            }, win.body(), "first");
    });
