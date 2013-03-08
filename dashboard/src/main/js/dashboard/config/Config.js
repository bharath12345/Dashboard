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
 *
 * More details also in Dashboard.js
 */
define([ 'dojo/has', 'require' ], function (has, require) {

    if (has('host-browser')) {

        require(['dojox/widget/Standby', "dojo/io-query",
            'dashboard/config/ConfigConstants', 'dashboard/config/ConfigAccordion', "dashboard/config/ConfigView",
            'dojo/domReady!' ],

            function (Standby, ioQuery, CONFIGCONSTANTS, ConfigAccordion, ConfigView) {
                var configView = new ConfigView(true);
                configView.createNewWindowConfigDom();

                var uri = document.URL;
                var query = uri.substring(uri.indexOf("?") + 1, uri.length);
                var queryObject = ioQuery.queryToObject(query);

                console.log("Query object = " + dojo.toJson(queryObject));

                var configAccordion = new ConfigAccordion();
                configAccordion.showPageConfig(queryObject.viewId, queryObject.viewName, true);
            });
    }
    else {
        // Eventually, will actually have a useful server implementation here :)
        console.log('AppsOne JavaScript server side code (if and when it is developed) will go here!');
    }

});
