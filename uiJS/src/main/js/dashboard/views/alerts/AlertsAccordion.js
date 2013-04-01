define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAccordion", "dashboard/helper/Scheduler", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, Logger, AbstractAccordion, Scheduler, Helper) {

        dashboard.classnames.AlertsAccordion = "dashboard.alerts.AlertsAccordion";

        var AlertsAccordion = declare(dashboard.classnames.AlertsAccordion, AbstractAccordion, {

            showView: function(enumId, uuid, name, type, newWindow) {
                console.log("view id = " + enumId + " name = " + name + " uuid = " + uuid + " type = " + type);

                this.alertView = this.getView(name);
                this.alertView.loadMenu(enumId, uuid, name, type);

                dashboard.dom.TopMenuPane[this.alertView.pageType].domNode.innerHTML = Helper.getHeading(dashboardI18nString[name]);

                // ToDo: Change this switch away from Name to some ID
                switch(parseInt(enumId)) {
                    case dashboard.enumMap.ALERTS.SQL_DB_OUTLIERS:
                        require(["dashboard/views/alerts/forms/SqlDBOutliersGridForm"], lang.hitch(this, function (SqlDBOutliersGridForm) {
                            Helper.createView(this.alertView, this.alertView.pageType, new SqlDBOutliersGridForm(this.alertView.pageType));
                        }));
                        break;

                    default:
                        console.log("Unknown page id = " + enumId);
                        return;
                }
            },

            getView: function(name, newWindow) {
                if(this.alertView == null || this.alertView == undefined) {
                    this.alertView = new alertView();
                    this.alertView.setAccordion(this);
                }
                return this.alertView;
            }
        });

        AlertsAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.AlertsAccordion));

        return AlertsAccordion;
    });