define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/topology/nls/topology", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractAccordion", "dashboard/helper/Scheduler", "dashboard/views/custom/CustomView", "dashboard/helper/Helper"],

    function (declare, i18n, i18nString, dashboardI18nString, Logger, AbstractAccordion, Scheduler, CustomView, Helper) {

        dashboard.classnames.CustomAccordion = "dashboard.custom.CustomAccordion";

        var CustomAccordion = declare(dashboard.classnames.CustomAccordion, AbstractAccordion, {

            showView: function(enumId, uuid, name, type, newWindow) {
                console.log("view id = " + enumId + " name = " + name + " uuid = " + uuid + " type = " + type);

                var customView = this.getView(name);
                customView.createToolbarButtons(enumId, uuid, name, type);

                switch(parseInt(enumId)) {
                    case dashboard.enumMap.CUSTOM.CUSTOM_LAYOUTS:
                        break;

                    case this.dashboard.enumMap.CUSTOM.CUSTOM_VIEWS:
                        break;

                    default:
                        console.log("Unknown page id = " + enumId);
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