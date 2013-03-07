define(['require', "dojo/_base/declare", "dojo/i18n",
    "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants", "noc/Logger"],

    function (require, declare, i18n, i18nString, Utility, CONSTANTS, Logger) {

        var TransactionGrid = declare(CONSTANTS.CLASSNAME.PAGES.TRANSACTIONGRID, null, {

            loadPage:function (pageNumber, pageName) {

                TransactionGrid.CP = noc.PageLoader.CpCenter[pageNumber];

                var xpos=0, ypos=0;

                var viewMeta = {
                    id:0,
                    name: pageName,
                    type: CONSTANTS.TYPE.TRANSACTION,
                    subtype: CONSTANTS.SUBTYPE.TRANSACTION.META,
                    dimensions:[TransactionGrid.CP.w, TransactionGrid.CP.h],
                    position:[xpos,ypos],
                    custom: []
                };

                Utility.xhrPostCentral(CONSTANTS.ACTION.TRANSACTION.META, viewMeta);

            }
        });

        // static variables of this class
        TransactionGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.PAGES.TRANSACTIONGRID));

        TransactionGrid.CP = null;

        return TransactionGrid;
    });