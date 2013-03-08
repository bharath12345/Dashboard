define(['require', "dojo/_base/declare", "dojo/i18n", 'dgrid/Grid', "dojo/request/xhr", "dojo/_base/lang",
    "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/noc/Logger"],

    function (require, declare, i18n, Grid, xhr, lang, i18nString, NocUtility, NOCCONSTANTS, Logger) {

        var AvailabilityGrid = declare(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITYGRID, null, {

            create:function (data) {
                AvailabilityGrid.LOG.log(Logger.SEVERITY.SEVERE, "triggering availability grid creation");
                this.data = data;

                var options = {};
                options.pageName = data.name;
                options.componentName = data.custom[0];
                options.clusterName = data.custom[1];

                xhr(NOCCONSTANTS.ACTION.AVAILABILITY.COMPONENTMETA, {
                    handleAs:"json",
                    method:"POST",
                    query:options,
                    headers:NocUtility.JSON_HEADER
                }).then(function (data) {
                        require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITY)], function (Availability) {
                            new Availability().renderGrid(data);
                        });
                    }, function (err) {
                        // Handle the error condition
                        AvailabilityGrid.LOG.log(Logger.SEVERITY.SEVERE, "xhr error = " + err);
                    }, function (evt) {
                        //AvailabilityGrid.LOG.log(Logger.SEVERITY.SEVERE, "xhr event = " + evt);
                    });
            }
        });

        // static variables of this class
        AvailabilityGrid.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITYGRID));

        AvailabilityGrid.PageCounter = 0;
        AvailabilityGrid.CP = null;
        AvailabilityGrid.GridID = 0;

        return AvailabilityGrid;
    });