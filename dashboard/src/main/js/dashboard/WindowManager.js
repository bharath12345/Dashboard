define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "noc/Logger",
    "dojox/uuid/generateRandomUuid", "dojo/io-query"],

    function (declare, i18n, i18nString, Logger, generateRandomUuid, ioQuery) {

        var WindowManager = declare("dashboard.WindowManager", null, {

            // Variables to make new windows come up tiled
            newWindowTopOffset:200,
            newWindowLeftOffset:200,
            newWindowTopMaxOffset:200,
            newWindowLeftMaxOffset:200,
            newWindowInc:20,

            // ToDo: Firefox arranges its windows nicely, but IE just puts them all
            // on top of each other.  manually arrange IE windows some day

            default_width:975,
            default_height:710,

            getNewWindow:function (viewId, viewName, viewType) {

                if(viewId == null || viewId == undefined || viewId.length == 0) {
                    viewId = generateRandomUuid();
                    console.log("generated uuid = " + viewId);
                }

                var uri = "index.jsp";
                var query = {
                    viewId: viewId,
                    viewName: viewName,
                    viewType: viewType
                };
                // Assemble the new uri with its query string attached.
                var queryStr = ioQuery.objectToQuery(query);
                uri = uri + "?" + queryStr;

                var winName = this.getTargetWindowName(viewId);

                var windowOptions = 'toolbar=0,location=0,status=1,resizable=1,scrollbars=1,width=' + this.default_width
                    + ',height=' + this.default_height + ',top=' + this.newWindowTopMaxOffset + ',left=' + this.newWindowLeftOffset;

                var newWindow = window.open(uri, winName, windowOptions);
                newWindow.focus();

                WindowManager.STACK[viewId] = newWindow; //ToDo: remove from this stack when window is closed
                return newWindow;
            },

            getTargetWindowName:function (winName) {
                var targetWindowName = winName.replace(/\./g, '_');

                // IE does not allow spaces in window name
                targetWindowName = targetWindowName.replace(/\ /g, '_');

                // IE does not allow spaces in window name: + is space after URL encoding
                targetWindowName = targetWindowName.replace(/\+/g, '_');

                // Can get % when we do URL Encoding of the ID and ID is user entered
                targetWindowName = targetWindowName.replace(/\%/g, '_');

                // Can get a '-' character - replace it
                targetWindowName = targetWindowName.replace(/\-/g, '_');

                return targetWindowName;
            }
        });

        WindowManager.STACK = {};

        WindowManager.LOG = Logger.addTimer(new Logger("dashboard.WindowManager"));

        return WindowManager;
    });