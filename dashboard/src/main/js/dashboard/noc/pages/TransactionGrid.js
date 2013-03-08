define(['require', "dojo/_base/declare", "dojo/i18n",
    "dojo/i18n!noc/nls/noc", "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/noc/Logger"],

    function (require, declare, i18n, i18nString, NocUtility, NOCCONSTANTS, Logger) {

        var TransactionGrid = declare(NOCCONSTANTS.CLASSNAME.PAGES.TRANSACTIONGRID, null, {

            loadPage:function (pageNumber, pageName) {

                TransactionGrid.CP = noc.PageLoader.CpCenter[pageNumber];

                var xpos=0, ypos=0;

                var viewMeta = {
                    id:0,
                    name: pageName,
                    type: NOCCONSTANTS.TYPE.TRANSACTION,
                    subtype: NOCCONSTANTS.SUBTYPE.TRANSACTION.META,
                    dimensions:[TransactionGrid.CP.w, TransactionGrid.CP.h],
                    position:[xpos,ypos],
                    custom: []
                };

                NocUtility.xhrPostCentral(NOCCONSTANTS.ACTION.TRANSACTION.META, viewMeta);

            }
        });

        // static variables of this class
        TransactionGrid.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.PAGES.TRANSACTIONGRID));

        TransactionGrid.CP = null;

        return TransactionGrid;
    });