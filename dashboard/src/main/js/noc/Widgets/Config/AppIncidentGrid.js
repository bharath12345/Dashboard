define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility",
    "noc/pages/IncidentPage", "noc/Widgets/Incident/ApplicationGrid"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility, IncidentPage, ApplicationGrid) {

        var AppAlertGrid = declare(CONSTANTS.CLASSNAME.WIDGETS.CONFIG.APPINCIDENTGRID, null, {});

        AppAlertGrid.applyConfig = function () {
            if(AppAlertGrid.CONFIG == null) {
                console.log("no config received yet to apply");
                return;
            } else {
                console.log("applying config");
            }

            var applicationRefreshTime = "applicationRefreshTime";
            var value = AppAlertGrid.CONFIG.agcVO[applicationRefreshTime].value;

            var fontName = "fontName";
            var fontValue = AppAlertGrid.CONFIG.agcVO[fontName].value;

            var fontSize = "fontSize";
            value = parseInt(AppAlertGrid.CONFIG.agcVO[fontSize].value);
            if (value < 6) {
                value = 18;
            }
            console.log("font size retrived = " + value);
            var cell = dojo.query(".dgrid-cell, .label", IncidentPage.CP.domNode);
            for (var i = 0; i < cell.length; i++) {
                cell[i].style.fontSize = value;
                cell[i].style.verticalAlign = "middle";
                cell[i].style.fontFamily = fontValue;
            }

            var showAllGreenApplications = "showAllGreenApplications";
            value = AppAlertGrid.CONFIG.agcVO[showAllGreenApplications].value;

            ApplicationGrid.Grid.resize();
        };

        AppAlertGrid.setConfig = function (data) {
            console.log("config set");
            AppAlertGrid.CONFIG = data;
        };


        AppAlertGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.CONFIG.APPINCIDENTGRID));
        AppAlertGrid.CONFIG = null;

        return AppAlertGrid;
    });