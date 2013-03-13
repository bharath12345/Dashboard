define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dojo/request/xhr", "dojo/keys", "dojo/on", "dijit/Dialog",
    "dashboard/noc/NocConstants", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, xhr, keys, on, Dialog, NOCCONSTANTS, Logger) {

        dashboard.classnames.NocUtility = "dashboard.noc.NocUtility";

        var NocUtility = declare(dashboard.classnames.NocUtility, null, {});

        NocUtility.JSON_HEADER = { 'Content-Type':'application/json' };

        NocUtility.xhrPostCentral = function (url, options) {
            xhr(url, {
                handleAs:"json",
                method:"POST",
                query:options,
                headers:NocUtility.JSON_HEADER
            }).then(function (data) {
                    // Do something with the handled data
                    //NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr data = " + data);
                    NocUtility.manageView(data);
                }, function (err) {
                    // Handle the error condition
                    NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr error = " + err);
                }, function (evt) {
                    // Handle a progress event from the request if the
                    // browser supports XHR2
                    //NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr event = " + evt);
                    //noc.NocUtility.manageView(evt);
                });
        };

        NocUtility.removeChildren = function (elem) {
            while (elem.hasChildNodes()) {
                NocUtility.removeChildren(elem.lastChild)
                elem.removeChild(elem.lastChild);
            }
        };

        NocUtility.InitKeyControls = function () {
            on(document.body, "keypress", function (evt) {
                var charOrCode = evt.charCode || evt.keyCode;
                switch (charOrCode) {
                    case keys.ESCAPE:
                        // stop all timers and stop scrolling on first keypress
                        // on second keypress restart all
                        require(["dashboard/noc/PageLoader"], function (PageLoader) {
                            if (NocUtility.ESCAPE_HIT == false) {
                                NocUtility.ESCAPE_HIT = true;
                                clearInterval(PageLoader.SCROLL_TIMER);
                                var title = "Escape Hit";
                                var content = "Stopped scrolling and refresh of all data";
                                if(NocUtility.ESCAPE_DIALOG == null) {
                                    NocUtility.ESCAPE_DIALOG = new Dialog({
                                        title: title,
                                        content: content
                                    });
                                    NocUtility.ESCAPE_DIALOG.show();
                                } else {
                                    NocUtility.ESCAPE_DIALOG.attr("content", content);
                                    NocUtility.ESCAPE_DIALOG.attr("title", title);
                                    NocUtility.ESCAPE_DIALOG.show();
                                }
                            } else {
                                NocUtility.ESCAPE_HIT = false;
                                PageLoader.SCROLL_TIMER = setInterval(PageLoader.prototype.pageScroll, PageLoader.SCROLL_PERIOD);
                                if(NocUtility.ESCAPE_DIALOG != null) {
                                    NocUtility.ESCAPE_DIALOG.attr("content", "Restarted scrolling and refresh of data");
                                    NocUtility.ESCAPE_DIALOG.attr("title", "Escape Hit Cleared");
                                    NocUtility.ESCAPE_DIALOG.show();
                                } else {
                                    console.log("somehow escape dialog not initialized");
                                }
                            }
                            setTimeout(function(){dashboard.noc.NocUtility.ESCAPE_DIALOG.hide();}, 2*1000);
                        });
                        break;
                    case keys.SPACE:
                        // stop scrolling but NOT timers on first keypress
                        // restart scroll on second keypress

                        require(["dashboard/noc/PageLoader"], function (PageLoader) {
                            if (NocUtility.SPACE_HIT == false) {
                                NocUtility.SPACE_HIT = true;
                                clearInterval(PageLoader.SCROLL_TIMER);
                                var title = "Space Hit";
                                var content = "Stopped scrolling but data refresh continues...";
                                if(NocUtility.SPACE_DIALOG == null) {
                                    NocUtility.SPACE_DIALOG = new Dialog({
                                        title: title,
                                        content: content
                                    });
                                    NocUtility.SPACE_DIALOG.show();
                                } else {
                                    NocUtility.SPACE_DIALOG.attr("content", content);
                                    NocUtility.ESCAPE_DIALOG.attr("title", title);
                                    NocUtility.SPACE_DIALOG.show();
                                }
                            } else {
                                NocUtility.SPACE_HIT = false;
                                PageLoader.SCROLL_TIMER = setInterval(PageLoader.prototype.pageScroll, PageLoader.SCROLL_PERIOD);
                                if(NocUtility.SPACE_DIALOG != null) {
                                    NocUtility.SPACE_DIALOG.attr("content", "Restarted scrolling and refresh of data");
                                    NocUtility.SPACE_DIALOG.attr("title", "Space Hit Cleared");
                                    NocUtility.SPACE_DIALOG.show();
                                } else {
                                    console.log("Somehow space hit but dialog not initialized");
                                }
                            }
                            setTimeout(function(){dashboard.noc.NocUtility.SPACE_DIALOG.hide();}, 2*1000);
                        });
                        break;
                }
            })
        };

        NocUtility.addView = function (data) {
            var viewData = {};
            viewData.viewId = data.viewId;
            viewData.data = data;
            NocUtility.views.push(viewData);
        };

        NocUtility.manageView = function(input) {
            try {
                var data = Helper.parseInput(input);

                //NocUtility.addView(data);

                switch(data.type) {
                    case NOCCONSTANTS.TYPE.LOGIN:
                        require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.LOGIN)], function (Login) {
                            Login.successPostProcess(data);
                        });
                        break;

                    case NOCCONSTANTS.TYPE.AVAILABILITY:
                        NocUtility.manageAvailabilitySubView(data, input);
                        break;

                    case NOCCONSTANTS.TYPE.INCIDENT:
                        NocUtility.manageIncidentSubView(data, input);
                        break;

                    case NOCCONSTANTS.TYPE.COMPONENT_ZONES:
                        require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.COMPONENT.ZONES)], function (Zones) {
                            new Zones().create(input);
                        });
                        break;

                    case NOCCONSTANTS.TYPE.COMPONENT_DATA:
                        require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.COMPONENT.CELLMAKER)], function (CellMaker) {
                            new CellMaker().create(input);
                        });
                        break;

                    case NOCCONSTANTS.TYPE.TRANSACTION:
                        NocUtility.manageTransactionSubView(data, input);
                        break;

                    case NOCCONSTANTS.TYPE.CONFIG:
                        NocUtility.manageConfig(data, input);
                        break;

                    default:
                        Logger.log("NocUtility","unknown data type = " + data.type);
                        break;
                }
            } catch ( e) {
                NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "exception e = " + e);
            }
        };

        NocUtility.manageConfig = function(data, input) {
            switch(data.subtype) {
                case NOCCONSTANTS.SUBTYPE.APPINCIDENTGRID:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPINCIDENTGRID)], function (AppIncidentGrid) {
                        AppIncidentGrid.setConfig(input);
                    });
                    break;

                default:
                    Logger.log("NocUtility","unknown config data sub type = " + data.subtype);
                    break;
            }
        };

        NocUtility.manageTransactionSubView = function(data, input){
            switch(data.subtype) {
                case NOCCONSTANTS.SUBTYPE.TRANSACTION.META:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDMETA)], function (GridMeta) {
                        new GridMeta().create(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.TRANSACTION.DATA:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA)], function (GridData) {
                        new GridData().create(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.TRANSACTION.APPDATA:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.TRANSACTION.GRIDDATA)], function (GridData) {
                        new GridData().createUsingApp(data, input);
                    });
                    break;
            }
        };

        NocUtility.manageAvailabilitySubView = function(data, input) {
            switch(data.subtype) {
                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.COMPONENT:
                    //NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "component grid data received");
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX)], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.componentDataVO);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER:
                    //NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "cluster grid data received");
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX)], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.clusterDataVO);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.INSTANCE:
                    //NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "instance grid data received");
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX)], function (AvailMatrix) {
                        new AvailMatrix().create(data, input.compInstanceDataVO);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.META:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILABILITYGRID)], function (AvailabilityGrid) {
                        new AvailabilityGrid().create(data);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.ALLCLUSTER:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.CLUSTERZONES)], function (ClusterZones) {
                        new ClusterZones().create(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.AVAILABILITY.CLUSTER2:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.AVAILABILITY.AVAILMATRIX2)], function (AvailMatrix2) {
                        new AvailMatrix2().create(data, input.clusterDataVO);
                    });
                    break;

                default:
                    NocUtility.LOG.log(Logger.SEVERITY.SEVERE, "unknown availability type = " + data.subtype);
            }
        };

        NocUtility.manageComponentSubView = function(data, input) {

        };

        NocUtility.manageIncidentSubView = function(data, input) {
            switch(data.subtype) {
                case NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.COMPONENT:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID)], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createComponentString(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.CLUSTER:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID)], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createClusterString(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.INCIDENT.AVAILABILITY.INSTANCE:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.INCIDENT.INCIDENTAVAILABILITYGRID)], function (IncidentAvailabilityGrid) {
                        new IncidentAvailabilityGrid().createIncidentString(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.INCIDENT.META:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONGRID)], function (ApplicationGrid) {
                        new ApplicationGrid().create(data, input);
                    });
                    break;

                case NOCCONSTANTS.SUBTYPE.INCIDENT.DATA:
                    require([NOCCONSTANTS.getClassPath(NOCCONSTANTS.CLASSNAME.WIDGETS.INCIDENT.APPLICATIONDATA)], function (ApplicationData) {
                        new ApplicationData().create(data, input);
                    });
                    break;
            }
        };

        NocUtility.views = [];

        NocUtility.LOG = new Logger(dashboard.classnames.NocUtility);

        NocUtility.SPACE_HIT = false;
        NocUtility.ESCAPE_HIT = false;

        NocUtility.ESCAPE_DIALOG = null;
        NocUtility.SPACE_DIALOG = null;

        return NocUtility;
    });