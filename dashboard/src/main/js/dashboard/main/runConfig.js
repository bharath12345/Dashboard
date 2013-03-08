/**
 * This file is used to reconfigure parts of the loader at runtime for this application. We've put this extra
 * configuration in a separate file, instead of adding it directly to the JSP
 * Look for more details in runDashboard.js
 */
require({
    // The base path for all packages and modules.
    baseUrl:'./js/dashboard',

    packages:[
        {name:'dojo', location:'../dojo'},
        {name:'dijit', location:'../dijit'},
        {name:'dojox', location:'../dojox'},
        {name:'dgrid', location:'../dgrid'},
        {name:'xstyle', location:'../xstyle'},
        {name:'put-selector', location:'../put-selector'},
        {name:'dbind', location:'../dbind'},
        {name:'Dashboard', location:'.', main:'Dashboard' },
        {name:'Config', location:'config', main:'Config' }
    ]
}, [ 'Config' ]);
