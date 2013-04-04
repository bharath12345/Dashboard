define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    'dgrid/OnDemandGrid', "dgrid/extensions/ColumnHider", "dgrid/extensions/ColumnReorder", "dgrid/extensions/ColumnResizer",
    "dgrid/extensions/DijitRegistry", "dgrid/extensions/Pagination", "dgrid/Selection", "dgrid/extensions/CompoundColumns",
    "dgrid/Keyboard", "dojo/store/Memory", "dojo/_base/lang", "dojo/store/Observable"],

    function (declare, i18n, i18nString, Logger, Grid, ColumnHider, ColumnReorder, ColumnResizer, DijitRegistry, Pagination,
              Selection, CompoundColumns, Keyboard, Memory, lang, Observable) {

        dashboard.classnames.AoneDgrid = "dashboard.widgets.AoneDgrid";

        var CompoundColumnsGrid = declare(dashboard.classnames.AoneDgrid, [Grid, Selection, CompoundColumns, ColumnHider,
            ColumnResizer, DijitRegistry, Pagination, Keyboard]);

        var AoneDgrid = declare(dashboard.classnames.AoneDgrid, null, {

            // 1) OnDemandGrid works with CompoundColumns, but, dgrid/Grid does NOT
            // 2) Adding ColumnReorder mixin screws up the whole thing - no grid gets rendered - this is probably
            //		due to the limitation of CompoundColumns - it does not work with all extensions per 
            // 		the documentation in dgrid website
            // 3) ColumnHider Mixin is needed for the 'id' column to be hidden

            setColumnMeta: function(columnMeta) {
                this.columnMeta = columnMeta;
            },

            setData: function(gridata) {
                this.gridDataStore = Observable(new Memory({data:gridata,
                    idProperty:'id',
                    query : function(query, options) {
                        options = options || {};
                        //options.sort = [ {
                        //    attribute : [{attribute:"appName"}]
                        //} ];
                        return Memory.prototype.query.call(this, query, options);
                    }
                }));
            },

            render: function(div) {
                this.grid = new CompoundColumnsGrid({
                    store:this.gridDataStore,
                    columns:this.columnMeta,
                    rowsPerPage:35, // this should not be hard-coded like this - depending on the real estate, do a compute
                    pagingLinks:1,
                    pagingTextBox:true,
                    firstLastArrows:true,
                    pageSizeOptions:[5, 10, 15, 20, 25, 30]
                }, div);
                this.grid.refresh();
            },

            addRow: function(row) {
                this.gridDataStore.put(row, {overwrite:true});
                this.grid.refresh();
            },

            getRow: function(evt) {
                return this.grid.row(evt);
            },

            handleRowClick: function(object) {
                this.grid.on(".dgrid-row:click", lang.hitch(object, object.handleRowClick));
            }

        });

        AoneDgrid.LOG = Logger.addTimer(new Logger(dashboard.classnames.AoneDgrid));

        return AoneDgrid;
    });