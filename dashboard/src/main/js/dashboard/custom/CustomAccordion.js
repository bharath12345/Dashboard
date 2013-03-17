define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/topology/nls/topology", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAccordion", "dashboard/helper/Scheduler", "dashboard/custom/CustomView"],

    function (declare, i18n, i18nString, Logger, AbstractAccordion, Scheduler, CustomView) {

        dashboard.classnames.CustomAccordion = "dashboard.custom.CustomAccordion";

        var CustomAccordion = declare(dashboard.classnames.CustomAccordion, AbstractAccordion, {

            LAYOUTS: "Custom Layouts",
            VIEWS: "Custom Views",

            showView: function(id, name, type, newWindow) {
                console.log("show custom dashboards called with id = " + id + " and name = " + name);

                var customView = this.getView(name);
                customView.loadMenu(id, name, type);
                customView.createSplitCenterPanes();

                switch(name) {
                    case this.LAYOUTS:
                        break;

                    case this.VIEWS:
                        break;

                    default:
                        console.log("Unknown page id = " + id);
                        return;
                }
            },

            getView: function(name, newWindow) {
                var customView = CustomAccordion.VIEWMAP[name];
                if(customView == null) {
                    customView = new CustomView(newWindow);
                    customView.setAccordion(this);
                    CustomAccordion.VIEWMAP[name] = customView; // there should be only one view per name (filtered views are for later)
                }
                return customView;
            }
        });

        CustomAccordion.LOG = Logger.addTimer(new Logger(dashboard.classnames.CustomAccordion));

        CustomAccordion.VIEWMAP = {};

        return CustomAccordion;
    });