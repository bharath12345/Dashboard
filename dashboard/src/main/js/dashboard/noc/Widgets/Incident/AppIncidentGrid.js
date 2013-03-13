define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/logger/Logger", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility",
    "dashboard/noc/pages/IncidentPage", "dashboard/noc/widgets/incident/ApplicationGrid"],

    function (declare, i18n, i18nString, Logger, NOCCONSTANTS, NocUtility, IncidentPage, ApplicationGrid) {

        dashboard.classnames.AppIncidentGrid = "dashboard.noc.widgets.incident.AppIncidentGrid";
        
        var AppIncidentGrid = declare(dashboard.classnames.AppIncidentGrid, null, {});

        AppIncidentGrid.applyConfig = function () {
            if(AppIncidentGrid.CONFIG == null) {
                console.log("no config received yet to apply");
                return;
            } else {
                console.log("applying config");
            }

            var applicationRefreshTime = "applicationRefreshTime";
            var value = AppIncidentGrid.CONFIG.agcVO[applicationRefreshTime].value;

            var fontName = "fontName";
            var fontValue = AppIncidentGrid.CONFIG.agcVO[fontName].value;

            var fontSize = "fontSize";
            value = parseInt(AppIncidentGrid.CONFIG.agcVO[fontSize].value);
            if (value < 6) {
                value = 18;
            }
            console.log("font size retrived = " + value);
            var cell = dojo.query(".dgrid-cell, .label", dashboard.CpCenterInner.domNode);
            for (var i = 0; i < cell.length; i++) {
                cell[i].style.fontSize = value;
                cell[i].style.verticalAlign = "middle";
                cell[i].style.fontFamily = fontValue;
            }

            var showAllGreenApplications = "showAllGreenApplications";
            value = AppIncidentGrid.CONFIG.agcVO[showAllGreenApplications].value;

            ApplicationGrid.Grid.resize();
        };

        AppIncidentGrid.setConfig = function (data) {
            console.log("config set");
            AppIncidentGrid.CONFIG = data;
        };


        AppIncidentGrid.LOG = Logger.addTimer(new Logger(dashboard.classnames.AppIncidentGrid));
        AppIncidentGrid.CONFIG = null;

        return AppIncidentGrid;
    });