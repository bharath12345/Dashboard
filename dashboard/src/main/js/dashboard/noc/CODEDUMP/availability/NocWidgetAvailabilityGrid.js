define(['require', "../../../../dojo/_base/declare", "dojo/i18n", 'dgrid/Grid', "dojo/request/xhr", "dojo/_base/lang",
    "dojo/i18n!dashboard/noc/nls/noc", "dashboard/noc/NocUtility", "dashboard/noc/NocConstants", "dashboard/logger/Logger"],

    function (require, declare, i18n, Grid, xhr, lang, i18nString, NocUtility, NOCCONSTANTS, Logger) {

        var NocWidgetAvailabilityGrid = declare(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITYGRID, null, {

            create:function (data) {
                NocWidgetAvailabilityGrid.LOG.log(Logger.SEVERITY.SEVERE, "triggering availability grid creation");
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
                        require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITY)], function (NocWidgetAvailability) {
                            new NocWidgetAvailability().renderGrid(data);
                        });
                    }, function (err) {
                        // Handle the error condition
                        NocWidgetAvailabilityGrid.LOG.log(Logger.SEVERITY.SEVERE, "xhr error = " + err);
                    }, function (evt) {
                        //NocWidgetAvailabilityGrid.LOG.log(Logger.SEVERITY.SEVERE, "xhr event = " + evt);
                    });
            }
        });

        // static variables of this class
        NocWidgetAvailabilityGrid.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITYGRID));

        NocWidgetAvailabilityGrid.PageCounter = 0;
        NocWidgetAvailabilityGrid.CP = null;
        NocWidgetAvailabilityGrid.GridID = 0;

        return NocWidgetAvailabilityGrid;
    });