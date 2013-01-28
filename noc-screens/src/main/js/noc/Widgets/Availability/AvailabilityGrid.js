define(['require', "dojo/_base/declare", "dojo/i18n", 'dgrid/Grid', "dojo/request/xhr", "dojo/_base/lang",
    "dojo/i18n!noc/nls/noc", "noc/Utility", "noc/Constants"],

    function (require, declare, i18n, Grid, xhr, lang, i18nString, Utility, CONSTANTS) {

        var AvailabilityGrid = declare("noc.Components.Availability.AvailabilityGrid", null, {

            create:function (data) {
                console.log("triggering availability grid creation");
                this.data = data;
                /*d3.json(CONSTANTS.ACTION.AVAILABILITY.META, dojo.hitch(this, function (error, m) {
                 console.log("err " + error);
                 console.log("m " + m);
                 this.renderGrid(m);
                 }));*/

                var options = {};
                options.componentName = data.custom[0];
                options.pageName = data.name;

                xhr(CONSTANTS.ACTION.AVAILABILITY.COMPONENTMETA, {
                    handleAs:"json",
                    method:"POST",
                    query:options,
                    headers:Utility.JSON_HEADER
                }).then(function (data) {
                        console.log("data = " + data);
                        require([CONSTANTS.WIDGETS.AVAILABILITY.AVAILABILITY], function (Availability) {
                            new Availability().renderGrid(data);
                        });
                    }, function (err) {
                        // Handle the error condition
                        console.log("xhr error = " + err);
                    }, function (evt) {
                        console.log("xhr event = " + evt);
                    });
            }
        });

        // static variables of this class

        AvailabilityGrid.PageCounter = 0;
        AvailabilityGrid.CP = null;
        AvailabilityGrid.GridID = 0;

        return AvailabilityGrid;
    });