define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dijit/layout/ContentPane", "dijit/layout/BorderContainer",
    "dashboard/abstract/AbstractView", "dashboard/WindowManager", "dashboard/main/loader"],

    function (declare, i18n, i18nString, Logger, ContentPane, BorderContainer, AbstractView, WindowManager, loader) {

        var NocView = declare("dashboard.noc.NocView", AbstractView, {

            constructor: function(newWindow) {
                this.newWindow = newWindow;
            },

            getConfigCentralPane: function() {
                if(!this.newWindow) {
                    return dashboard.DashboardView.CpCenterInner;
                }
                return dashboard.noc.CpCenter;
            },

            createDom: function() {
                var node = dojo.create("div");
                node.style.cssText = "width: 100%; height: 100%;";
                dashboard.CpTopCenter.domNode.appendChild(node);

                dashboard.noc.CenterBc = new BorderContainer({
                    design:"headline",
                    liveSplitters:false,
                    persist:true,
                    style: "top:0;left:0;"
                }, node);

                dashboard.noc.CpCenter = new ContentPane({
                    region:"center",
                    splitter:false,
                    style: "top:0;left:0;"
                });

                dashboard.noc.CenterBc.addChild(dashboard.noc.CpCenter);
                dashboard.noc.CenterBc.startup();
                dashboard.noc.CenterBc.resize();

                this.removeBoderPadding(dashboard.noc.CpCenter.domNode);

                dashboard.noc.CenterBc.resize();
                dashboard.TopBc.resize();
            }
        });

        NocView.LOG = Logger.addTimer(new Logger("dashboard.noc.NocView"));

        NocView.launchNewWindowConfigPane = function(id, name, type) {
            // launch the child window
            var wm = new WindowManager();
            wm.getNewWindow(id, name, type, pageTypes.NOC);
        };

        return NocView;
    });