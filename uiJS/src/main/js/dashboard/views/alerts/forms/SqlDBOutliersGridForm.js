define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger", "dashboard/abstract/AbstractForm",
    "dashboard/helper/Helper", "dojo/request/xhr", "dojo/_base/lang", 'dashboard/widgets/AoneDgrid'],

    function (declare, i18n, i18nString, Logger, AbstractForm, Helper, xhr, lang, Grid) {

        dashboard.classnames.SqlDBOutliersGridForm = "dashboard.alerts.form.SqlDBOutliersGridForm";

        var SqlDBOutliersGridForm = declare(dashboard.classnames.SqlDBOutliersGridForm, AbstractForm, {

            startup:function () {
                this.inherited(arguments);

                this.innerDIV = dojo.create('div', {style:'width: 100%; height: 100%;'});
                this.attr('content', this.innerDIV);

                var viewMeta = {};
                xhr("alert/ApplicationMeta.action", {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.createGridMeta));
            },

            createGridMeta:function (data, input) {

                this.columns = input.sqlQueryOutlierMetaVO.columns;
                var columnMeta = [];
                for (var i = 0; i < this.columns.length; i++) {
                    var col = {};
                    col.label = i18nString[this.columns[i]];
                    col.field = this.columns[i];
                    col.reorderable = true;
                    col.resizable = true;
                    if (this.columns[i] == "id") {
                        col.unhidable = true;
                        col.hidden = true;
                    }
                    columnMeta.push(col);
                }

                // create one blank grid data row
                var gridata = [];
                var row = {};
                for (var i = 0; i < this.columns.length; i++) {
                    row[this.columns[i]] = " "; // just a space in all cols
                }
                gridata.push(row);

                try {

                    SqlDBOutliersGridForm.Grid = new Grid();
                    SqlDBOutliersGridForm.Grid.setColumnMeta(columnMeta);
                    SqlDBOutliersGridForm.Grid.setData(gridata);
                    SqlDBOutliersGridForm.Grid.render(this.innerDIV);
                    SqlDBOutliersGridForm.Grid.handleRowClick(this); // the handleRowClick() callback is invoked in this case

                } catch (e) {
                    console.log("exception = " + e);
                }

                var viewMeta = {};
                xhr(input.sqlQueryOutlierMetaVO.dataActionClass, {
                    handleAs:"json",
                    method:"POST",
                    query:viewMeta,
                    headers:Helper.JSON_HEADER
                }).then(lang.hitch(this, this.createGridData));


            },

            handleRowClick:function (evt) {
                var row = NocApplicationIncidentForm.Grid.getRow(evt);

                // row.element == the element with the dgrid-row class
                // row.id == the identity of the item represented by the row
                // row.data == the item represented by the row

                console.log("row element = " + dojo.toJson(row.element));
                console.log("row id = " + dojo.toJson(row.id));
                console.log("row data = " + dojo.toJson(row.data));

            },

            createGridData: function(data, input) {
                var dataArray = input.sqlQueryOutlierDataVOList;
                for (var i = 0; i < dataArray.length; i++) {
                    var row = {};
                    for (var j = 0; j < this.columns.length; j++) {
                        row[this.columns[j]] = dataArray[i][this.columns[j]];
                    }
                    SqlDBOutliersGridForm.Grid.addRow(row);
                }
                dashboard.dom.STANDBY.hide();
            }

        });

        SqlDBOutliersGridForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.SqlDBOutliersGridForm));
        SqlDBOutliersGridForm.PAGENAME = "";

        return SqlDBOutliersGridForm;
    });