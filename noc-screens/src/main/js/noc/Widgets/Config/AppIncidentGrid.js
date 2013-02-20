define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "noc/Logger", "noc/Constants", "noc/Utility",
    "noc/pages/IncidentPage"],

    function (declare, i18n, i18nString, Logger, CONSTANTS, Utility, IncidentPage) {

        var AppIncidentGrid = declare(CONSTANTS.CLASSNAME.WIDGETS.CONFIG.APPINCIDENTGRID, null, {

            applyConfig:function (data) {

                var applicationRefreshTime = "applicationRefreshTime";
                var value = data.agcVO[applicationRefreshTime].value;

                var fontName = "fontName";
                value = data.agcVO[fontName].value;

                var fontSize = "fontSize";
                value = parseInt(data.agcVO[fontSize].value);
                if(value < 10) {
                    value = 10;
                }
                console.log("font size retrived = " + value);
                var cell = dojo.query("td.dgrid-cell", IncidentPage.CP.domNode);
                for (var i = 0; i < cell.length; i++) {
                    cell[i].style.fontSize = value;
                }

                var showAllGreenApplications = "showAllGreenApplications";
                value = data.agcVO[showAllGreenApplications].value;
            }

        });

        AppIncidentGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.WIDGETS.CONFIG.APPINCIDENTGRID));

        return AppIncidentGrid;
    });