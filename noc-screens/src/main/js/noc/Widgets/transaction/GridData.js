define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", 'dgrid/Grid', "noc/Logger", "noc/Constants", "noc/Utility"],

    function (declare, i18n, i18nString, Grid, Logger, CONSTANTS, Utility) {

        var GridData = declare(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA, null, {

            create: function(data, input) {
                // 1) Create two rows in the client area of the title pane
                // 2) in the top row write the name of the Transaction
                // 3) In the second row interpret the response and fill the 3 cells for
                //   Tx-Volume, Tx-Alerts, Tx-response-time
            }

        });

        GridData.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA));

        return GridData;
    });