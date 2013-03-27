define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    'dgrid/OnDemandGrid', "dgrid/extensions/ColumnHider", "dgrid/extensions/ColumnReorder", "dgrid/extensions/ColumnResizer",
    "dgrid/extensions/DijitRegistry", "dgrid/extensions/Pagination", "dgrid/Selection", "dgrid/extensions/CompoundColumns"],

    function (declare, i18n, i18nString, Logger, Grid, ColumnHider, ColumnReorder, ColumnResizer, DijitRegistry, Pagination,
              Selection, CompoundColumns) {

        dashboard.classnames.AoneDgrid = "dashboard.widgets.AoneDgrid";

        var AoneDgrid = declare(dashboard.classnames.AoneDgrid, [Grid, Selection, CompoundColumns, ColumnHider,
            ColumnResizer, DijitRegistry, Pagination], {

            // 1) OnDemandGrid works with CompoundColumns, but, dgrid/Grid does NOT
            // 2) Adding ColumnReorder mixin screws up the whole thing - no grid gets rendered - this is probably
            //		due to the limitation of CompoundColumns - it does not work with all extensions per 
            // 		the documentation in dgrid website
            // 3) ColumnHider Mixin is needed for the 'id' column to be hidden

        });

        AoneDgrid.LOG = Logger.addTimer(new Logger(dashboard.classnames.AoneDgrid));

        return AoneDgrid;
    });