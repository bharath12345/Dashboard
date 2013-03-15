define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    'dgrid/Grid', "dgrid/extensions/ColumnHider"],

    function (declare, i18n, i18nString, Logger, Grid, ColumnHider) {

        dashboard.classnames.AoneDgrid = "dashboard.widgets.AoneDgrid";

        var AoneDgrid = declare(dashboard.classnames.AoneDgrid, [Grid, ColumnHider], {

        });

        AoneDgrid.LOG = Logger.addTimer(new Logger(dashboard.classnames.AoneDgrid));

        return AoneDgrid;
    });