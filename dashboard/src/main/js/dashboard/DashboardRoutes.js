define(["dojo/_base/declare", "dojo/_base/lang", 'crossroads', 'dashboard/logger/Logger', "dashboard/helper/Helper"],

    function (declare, lang, crossroads, Logger, Helper) {

        dashboard.classnames.DashboardRoutes = "dashboard.DashboardRoutes";

        var DashboardRoutes = declare(dashboard.classnames.DashboardRoutes, null, {

            loadMainPage:function () {
                require(['dashboard/DashboardView', 'dashboard/DashboardAccordion', "dashboard/views/noc/NocAccordion"],

                    function (DashboardView, DashboardAccordion, NocAccordion) {

                        console.log("Staring A1 Dashboard");

                        var dView = new DashboardView();
                        dView.createDom();

                        Helper.showLoading();

                        var ca = new DashboardAccordion();
                        ca.loadAccordion();


                    }
                );
            },

            loadCrossRoadRoutes:function () {

                var hashString = document.URL.substring(document.URL.indexOf("#") + 1, document.URL.length);
                console.log("hash string = " + hashString);

                crossroads.routed.add(console.log, console); //log all routes
                crossroads.bypassed.add(console.log, console); //log all requests that were bypassed

                dashboard.routes.push(crossroads.addRoute('/noc/:uuid:/:name:/:type:', lang.hitch(this, this.nocMatch)));
                dashboard.routes.push(crossroads.addRoute('/config/:uuid:/:name:/:type:', lang.hitch(this, this.configMatch)));
                dashboard.routes.push(crossroads.addRoute('/topology/:uuid:/:name:/:type:', lang.hitch(this, this.topologyMatch)));
                dashboard.routes.push(crossroads.addRoute('/custom/:uuid:/:name:/:type:', lang.hitch(this, this.customMatch)));

                crossroads.parse(hashString);

            },

            nocMatch:function (uuid, name, type) {
                console.log("NOC - Name = " + name + " type = " + type + " uuid = " + uuid);

                require(["dashboard/views/noc/NocUtility", "dashboard/views/noc/NocAccordion"],
                    function (NocUtility, NocAccordion) {
                        Logger.initialize();
                        NocUtility.InitKeyControls();

                        var nocAccordion = new NocAccordion();
                        DashboardRoutes.createDomAndShowPage(nocAccordion, uuid, name, type);
                    }
                );
            },

            configMatch: function(uuid, name, type) {
                console.log("CONFIG - Name = " + name + " type = " + type + " uuid = " + uuid);

                require(['dashboard/config/ConfigAccordion'],
                    function (ConfigAccordion) {
                        var configAccordion = new ConfigAccordion();
                        DashboardRoutes.createDomAndShowPage(configAccordion, uuid, name, type);
                    }
                );
            },

            topologyMatch: function(uuid, name, type) {
                console.log("TOPOLOGY - Name = " + name + " type = " + type + " uuid = " + uuid);

                require(["dashboard/views/topology/TopologyAccordion"],

                    function (TopologyAccordion) {
                        var topoAccordion = new TopologyAccordion();
                        DashboardRoutes.createDomAndShowPage(topoAccordion, uuid, name, type);
                    });
            },

            customMatch: function(uuid, name, type) {
                console.log("CUSTOM - Name = " + name + " type = " + type + " uuid = " + uuid);

                require(["dashboard/views/custom/CustomAccordion"],
                    function (Logger, CustomUtility, CustomAccordion, Helper) {
                        var customAccordion = new CustomAccordion();
                        DashboardRoutes.createDomAndShowPage(customAccordion, uuid, name, type);
                    }
                );
            }
        });

        DashboardRoutes.createDomAndShowPage = function(accordionObject, uuid, name, type) {
            var viewObject = accordionObject.getView(name, true);
            viewObject.createDom();
            Helper.showLoading();
            accordionObject.showView(uuid, name, type, true);
        };

        DashboardRoutes.LOG = Logger.addTimer(new Logger(dashboard.classnames.DashboardRoutes));

        return DashboardRoutes;
    }
);