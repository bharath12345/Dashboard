define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility",
    "noc/pages/IncidentPage", "noc/Widgets/Incident/ApplicationGrid"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility, IncidentPage, ApplicationGrid) {

        var AppAlertGrid = declare(CONSTANTS.CLASSNAME.WIDGETS.CONFIG.APPINCIDENTGRID, null, {

            applyConfig:function (data) {

                var applicationRefreshTime = "applicationRefreshTime";
                var value = data.agcVO[applicationRefreshTime].value;

                var fontName = "fontName";
                value = data.agcVO[fontName].value;

                var fontSize = "fontSize";
                value = parseInt(data.agcVO[fontSize].value);
                if(value < 10) {
                    value = 18;
                }
                console.log("font size retrived = " + value);
                var cell = dojo.query(".dgrid-cell", IncidentPage.CP.domNode);
                for (var i = 0; i < cell.length; i++) {
                    cell[i].style.fontSize = value;
                }

                var showAllGreenApplications = "showAllGreenApplications";
                value = data.agcVO[showAllGreenApplications].value;

                ApplicationGrid.Grid.resize();
            }

        });

        AppAlertGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.CONFIG.APPINCIDENTGRID));

        return AppAlertGrid;
    });