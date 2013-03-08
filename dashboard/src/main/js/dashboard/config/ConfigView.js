define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "noc/Logger",
    "dashboard/abstract/AbstractView", "dashboard/WindowManager", "dashboard/abstract/AbstractContainer"],

    function (declare, i18n, i18nString, Logger, AbstractView, WindowManager, AbstractContainer) {

        var ConfigView = declare("dashboard.config.ConfigView", [AbstractView, AbstractContainer], {

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            getConfigMenuPane: function() {
                if(!this.newWindow) {
                    return dashboard.DashboardContainers.CpTopInner;
                }
                return dashboard.config.CpMenu;
            },

            getConfigCentralPane: function() {
                if(!this.newWindow) {
                    return dashboard.DashboardContainers.CpCenterInner;
                }
                return dashboard.config.CpCenter;
            },

            getTopBorderContainer: function() {
                return dashboard.AbstractContainer.TopBc;
            },

            createNewWindowConfigDom: function() {
                this.createTopContainers();
                this.createMast();

                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                AbstractContainer.CpTopCenter.domNode.appendChild(node);

                dashboard.config.CenterBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                dashboard.config.CpMenu = new ContentPane({
                    region:"top",
                    splitter:false,
                    style: "top:0;left:0;height:35px;"
                });

                dashboard.config.CpCenter = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                dashboard.config.CenterBc.addChild(DashboardContainer.CpMenu);
                dashboard.config.CenterBc.addChild(DashboardContainer.CpCenter);
                dashboard.config.CenterBc.startup();
                dashboard.config.CenterBc.resize();

                dashboard.config.CpMenu.domNode.style.top = 0;
                dashboard.config.CpMenu.domNode.style.left = 0;

                this.removeBoderPadding(dashboard.config.CpMenu.domNode);
                this.removeBoderPadding(dashboard.config.CpCenter.domNode);

                dashboard.config.CenterBc.resize();
                AbstractContainer.TopBc.resize();
            }
        });

        ConfigView.LOG = Logger.addTimer(new Logger("dashboard.config.ConfigView"));

        ConfigView.launchNewWindowConfigPane = function(id, name, type) {
            // launch the child window
            var wm = new WindowManager();
            wm.getNewWindow(id, name, type);
        };

        return ConfigView;
    });