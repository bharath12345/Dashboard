/**
 * This file is the application's main JavaScript file. It is listed as a dependency in run.js and will automatically
 * load when run.js loads.
 *
 * Our first dependency is to the `dojo/has` module, which allows us to conditionally execute code based on
 * configuration settings or environmental information. Unlike a normal conditional, these branches can be compiled
 * away by the build system; see `staticHasFeatures` in dashboard.profile.js for more information.
 *
 * Our second dependency is to the special module `require`; this allows us to make additional require calls using
 * module IDs relative to this module within the body of the define callback.
 *
 * In all cases, whatever function is passed to define() is only invoked once, and the returned value is cached.
 *
 * More information about everything described about the loader throughout this file can be found at
 * <http://dojotoolkit.org/reference-guide/loader/amd.html>.
 */
define([ 'dojo/has', 'require' ], function (has, require) {

    /**
     * This Dashboard.js file conditionally executes different code depending upon the host environment it is loaded in.
     * This is an increasingly common pattern when dealing with applications that run in different environments that
     * require different functionality (i.e. client/server or desktop/tablet/phone).
     */

    dashboard = {};
    dashboard.classnames = {};
    dashboard.dom = {};
    dashboard.routes = {};

    var uri = document.URL;
    if (uri.indexOf("#") == -1) {

        require(['dashboard/DashboardView', 'dashboard/DashboardAccordion',
            "dashboard/helper/Helper", "dashboard/noc/NocAccordion", 'dojo/domReady!' ],

            function (DashboardView, DashboardAccordion, Helper, NocAccordion) {

                console.log("Staring A1 Dashboard");

                var dView = new DashboardView();
                dView.createDom();

                Helper.showLoading();

                var ca = new DashboardAccordion();
                ca.loadAccordion();

                // the default view is the "All Applications Alerts Grid"
                var nocA = NocAccordion();
                nocA.showView("", "Application Alerts Dashboard", "", false);

            });
    }
    else {
        require(['crossroads'], function(crossroads){
            var hashString = uri.substring(uri.indexOf("#")+1, uri.length);
            console.log("hash string = " + hashString);

            crossroads.routed.add(console.log, console); //log all routes
            console.log("getting into routing area");

            var r = crossroads.addRoute('/noc/:name:/:type:/:uuid:', function nocMatch(name, type, uuid) {
                console.log("Name = " + name + " type = " + type + " uuid = " + uuid);

                require(['dashboard/logger/Logger',
                    "dashboard/noc/NocUtility", "dashboard/noc/NocAccordion", "dashboard/helper/Helper",
                    'dojo/domReady!' ],

                    function (Logger, NocUtility, NocAccordion, Helper) {
                        Logger.initialize();
                        NocUtility.InitKeyControls();

                        var nocAccordion = new NocAccordion();
                        var viewObject = nocAccordion.getView(name, true);

                        viewObject.createDom();

                        Helper.showLoading();

                        nocAccordion.showView(uuid, name, type, true);

                    });
            });

            var route1 = crossroads.addRoute('/news/:id:', function(id){
                console.log(id);
            });

            //crossroads.parse('/noc/test/test/test');
            //crossroads.parse('/news/123');
            crossroads.parse(hashString);



        });

    }

});
