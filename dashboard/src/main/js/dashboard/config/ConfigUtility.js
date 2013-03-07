define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/config/nls/config", "dojo/request/xhr", "dijit/Dialog",
    "dashboard/config/ConfigConstants", "noc/Logger"],

    function (declare, i18n, i18nString, xhr, Dialog, CONFIGCONSTANTS, Logger) {

        var ConfigUtility = declare(CONFIGCONSTANTS.CLASSNAME.UTILITY, null, {});

        ConfigUtility.LOG = Logger.addTimer(new Logger(CONFIGCONSTANTS.CLASSNAME.UTILITY));

        ConfigUtility.JSON_HEADER = { 'Content-Type':'application/json' };

        ConfigUtility.xhrPostCentral = function (url, options) {
            xhr(url, {
                handleAs:"json",
                method:"POST",
                query:options,
                headers:ConfigUtility.JSON_HEADER
            }).then(function (data) {
                    // Do something with the handled data
                    ConfigUtility.handleResponse(data);
                }, function (err) {
                    // Handle the error condition
                    ConfigUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr error = " + err);
                }, function (evt) {
                    // Handle a progress event from the request if the
                    // browser supports XHR2
                    //ConfigUtility.LOG.log(Logger.SEVERITY.SEVERE, "xhr event = " + evt);
                });
        };

        ConfigUtility.handleResponse = function (data) {
            var type = parseInt(data.param.type[0]);
            console.log("response type = " + type);
            switch (type) {
                case CONFIGCONSTANTS.TYPE.PAGECONFIG:
                    ConfigUtility.handlePageConfig(data);
                    break;

                case CONFIGCONSTANTS.TYPE.SAVE:
                    ConfigUtility.handleSave(data);
                    break;

                default:
                    console.log("unknown response type = " + type);
                    return;
            }
        };

        ConfigUtility.handleSave = function (data) {
            var saveType = parseInt(data.param.saveType[0]);
            var title = "Save Success", content;
            switch (saveType) {
                case CONFIGCONSTANTS.SAVE.INCIDENTGRID:
                    content = "Save of Alert Grid Configuration Successful.";
                    break;

                case CONFIGCONSTANTS.SAVE.CLUSTERGRID:
                    content = "Save of Cluster Grid Configuration Successful.";
                    break;

                case CONFIGCONSTANTS.SAVE.TRANSACTIONGRID:
                    content = "Save of Transaction Grid Configuration Successful.";
                    break;

                case CONFIGCONSTANTS.SAVE.TOPOLOGY:
                    content = "Save of Topology Configuration Successful.";
                    break;

                case CONFIGCONSTANTS.SAVE.GLOBAL:
                    content = "Save of Global Configuration Successful.";
                    break;

                default:
                    console.log("Unknown save type = " + saveType);
                    return;
            }

            if (ConfigUtility.SAVE_DIALOG == null) {
                ConfigUtility.SAVE_DIALOG = new Dialog({
                    title:title,
                    content:content
                });
                ConfigUtility.SAVE_DIALOG.show();
            } else {
                ConfigUtility.SAVE_DIALOG.attr("content", content);
                ConfigUtility.SAVE_DIALOG.attr("title", title);
                ConfigUtility.SAVE_DIALOG.show();
            }
            setTimeout(function () {
                config.ConfigUtility.SAVE_DIALOG.hide();
            }, 4 * 1000);
        };

        ConfigUtility.handlePageConfig = function (data) {
            require([CONFIGCONSTANTS.getClassPath(CONFIGCONSTANTS.CLASSNAME.RENDERATTRIBUTES),
                CONFIGCONSTANTS.getClassPath(CONFIGCONSTANTS.CLASSNAME.ACCORDION)],
                function (RenderAttributes, ConfigAccordion) {

                    var ra = new RenderAttributes();

                    var id = parseInt(data.param.id[0]);
                    var name = data.param.name[0];
                    console.log("page config for id = " + id + " name = " + name);

                    var configAcc = new ConfigAccordion();
                    var handle = configAcc.responseHandles[name];
                    handle(data, ra);
                });
        };

        ConfigUtility.getConfigDiv = function (attribute, type) {
            var divToAdd = dojo.byId(attribute + type);
            divToAdd.style.margin = 1;
            //divToAdd.style.paddingLeft=1;

            var node = dojo.create("div");
            divToAdd.appendChild(node);
            return node;
        };

        ConfigUtility.SAVE_DIALOG = null;

        return ConfigUtility;
    });