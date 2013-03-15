define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    'dgrid/Grid', "dgrid/extensions/ColumnHider", "dgrid/extensions/ColumnReorder", "dgrid/extensions/ColumnResizer",
    "dgrid/extensions/DijitRegistry", "dgrid/extensions/Pagination", "dgrid/Selection"],

    function (declare, i18n, i18nString, Logger, Grid, ColumnHider, ColumnReorder, ColumnResizer, DijitRegistry, Pagination, Selection) {

        dashboard.classnames.AoneDgrid = "dashboard.widgets.AoneDgrid";

        var AoneDgrid = declare(dashboard.classnames.AoneDgrid, [Grid, ColumnHider, ColumnReorder, ColumnResizer, DijitRegistry, Pagination, Selection], {

            // the Grid + ColumnHider Mixin is needed for the 'id' column to be hidden

        });

        AoneDgrid.LOG = Logger.addTimer(new Logger(dashboard.classnames.AoneDgrid));

        return AoneDgrid;
    });