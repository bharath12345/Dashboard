define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/analytics/nls/analytics", "dojo/i18n!dashboard/nls/dashboard",
    "dashboard/logger/Logger", "dojo/_base/lang",
    "dashboard/abstract/AbstractAccordion", "dashboard/helper/Scheduler", "dashboard/helper/Helper",
    "dashboard/views/analytics/AnalyticsView"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, lang, AbstractAccordion, Scheduler, Helper, AnalyticsView) {

        dashboard.classnames.AnalyticsAccordion = "dashboard.analytics.AnalyticsAccordion";

        var AnalyticsAccordion = declare(dashboard.classnames.AnalyticsAccordion, AbstractAccordion, {

            showView: function(enumId, uuid, name, type, newWindow) {
                console.log("view id = " + enumId + " name = " + name + " uuid = " + uuid + " type = " + type);

                this.analyticsView = this.getView(name);
                this.analyticsView.loadMenu(enumId, uuid, name, type);

                dashboard.dom.TopMenuPane[this.analyticsView.pageType].domNode.innerHTML = Helper.getHeading(dashboardI18nString[name]);

                switch(parseInt(enumId)) {
                    case dashboard.enumMap.ANALYTICS.SQL_DB_OUTLIERS:
                        require(["dashboard/views/analytics/forms/SqlDBOutliersGridForm"], lang.hitch(this, function (SqlDBOutliersGridForm) {
                            Helper.createView(this.analyticsView, this.analyticsView.pageType, new SqlDBOutliersGridForm(this.analyticsView.pageType));
                        }));
                        break;

                    default:
                        console.log("Unknown page id = " + enumId);
                        return;
                }
            },

            getView: function(name, newWindow) {
                if(this.analyticsView == null || this.analyticsView == undefined) {
                    this.analyticsView = new AnalyticsView(newWindow);
                    this.analyticsView.setAccordion(this);
                }
                return this.analyticsView;
            }
        });

        AnalyticsAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.AnalyticsAccordion));

        return AnalyticsAccordion;
    });