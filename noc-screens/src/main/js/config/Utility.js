define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!config/nls/config", "dojo/request/xhr", "dijit/Dialog",
    "config/Constants", "noc/Logger"],

    function (declare, i18n, i18nString, xhr, Dialog, CONSTANTS, Logger) {

        var Utility = declare(CONSTANTS.CLASSNAME.UTILITY, null, {});

        Utility.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.UTILITY));

        Utility.JSON_HEADER = { 'Content-Type':'application/json' };

        Utility.xhrPostCentral = function (url, options) {
            xhr(url, {
                handleAs:"json",
                method:"POST",
                query:options,
                headers:Utility.JSON_HEADER
            }).then(function (data) {
                    // Do something with the handled data
                    Utility.handleResponse(data);
                }, function (err) {
                    // Handle the error condition
                    Utility.LOG.log(Logger.SEVERITY.SEVERE, "xhr error = " + err);
                }, function (evt) {
                    // Handle a progress event from the request if the
                    // browser supports XHR2
                    //Utility.LOG.log(Logger.SEVERITY.SEVERE, "xhr event = " + evt);
                });
        };

        Utility.handleResponse = function(data) {
            var type = parseInt(data.param.type[0]);
            console.log("response type = " + type);
            switch(type) {
                case CONSTANTS.TYPE.ACCORDION:
                    Utility.handleAccordion(data);
                    break;

                case CONSTANTS.TYPE.PAGECONFIG:
                    Utility.handlePageConfig(data);
                    break;

                case CONSTANTS.TYPE.SAVE:
                    Utility.handleSave(data);
                    break;

                default:
                    console.log("unknown response type = " + type);
                    return;
            }
        };

        Utility.handleSave = function(data) {
            var saveType = parseInt(data.param.saveType[0]);
            var title = "Save Success", content;
            switch(saveType) {
                case CONSTANTS.SAVE.INCIDENTGRID:
                    content = "Save of Alert Grid Configuration Successful.";
                    break;

                case CONSTANTS.SAVE.CLUSTERGRID:
                    content = "Save of Cluster Grid Configuration Successful.";
                    break;

                default:
                    console.log("Unknown save type = " + saveType);
                    return;
            }

            if(Utility.SAVE_DIALOG == null) {
                Utility.SAVE_DIALOG = new Dialog({
                    title: title,
                    content: content
                });
                Utility.SAVE_DIALOG.show();
            } else {
                Utility.SAVE_DIALOG.attr("content", content);
                Utility.SAVE_DIALOG.attr("title", title);
                Utility.SAVE_DIALOG.show();
            }
            setTimeout(function(){config.Utility.SAVE_DIALOG.hide();}, 4*1000);
        };

        Utility.handleAccordion = function(data) {
            console.log("classname = " + CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.ACCORDION));;
            require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.ACCORDION)], function (ConfigAccordion) {
                var ca = new ConfigAccordion();
                ca.renderAccordion(data);
            });
        };

        Utility.handlePageConfig = function(data) {
            require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.RENDERATTRIBUTES)], function (RenderAttributes) {
                var id = parseInt(data.param.id[0]);
                var ra = new RenderAttributes();
                switch(id) {
                    case 0:
                        require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.INCIDENTGRID)], function(IncidentGrid) {
                            var incidentGrid = new IncidentGrid();
                            ra.renderConfigParameters(data, incidentGrid);
                        });
                        break;

                    case 1:
                        require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.CLUSTERGRID)], function(ClusterGrid) {
                            var clusterGrid = new ClusterGrid();
                            ra.renderConfigParameters(data, clusterGrid);
                        });
                        break;

                    case 2:
                        require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.TRANSACTIONGRID)], function(TransactionGrid) {
                            var transactionGrid = new TransactionGrid();
                            ra.renderConfigParameters(data, transactionGrid);
                        });
                        break;

                    case 3:
                        require([CONSTANTS.getClassPath(CONSTANTS.CLASSNAME.TOPOLOGY)], function(Topology) {
                            var topology = new Topology();
                            ra.renderConfigParameters(data, topology);
                        });
                        break;

                    default:
                        console.log("Unknown page id = " + id);
                        return;
                }
            });
        };

        Utility.getConfigDiv = function(attribute, type) {
            var divToAdd = dojo.byId(attribute + type);
            divToAdd.style.margin=1;
            //divToAdd.style.paddingLeft=1;

            var node = dojo.create("div");
            divToAdd.appendChild(node);
            return node;
        };

        Utility.SAVE_DIALOG = null;

        return Utility;
    });