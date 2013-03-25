define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/views/config/nls/config", "dojo/request/xhr", "dijit/Dialog",
    "dashboard/logger/Logger", "dashboard/helper/Helper", "dojo/store/Memory"],

    function (declare, i18n, i18nString, xhr, Dialog, Logger, Helper, Memory) {

        dashboard.classnames.ConfigUtility = "dashboard.config.ConfigUtility";

        var ConfigUtility = declare(dashboard.classnames.ConfigUtility, null, {});

        ConfigUtility.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigUtility));

        ConfigUtility.USER = "_user";
        ConfigUtility.ADMIN = "_admin";
        ConfigUtility.FACTORY = "_factory";

        ConfigUtility.handleSave = function (data) {
            var saveType = parseInt(data.param.saveType[0]);
            var title = "Save Success", content;
            switch (saveType) {
                case 1:
                    content = "Save of Alert Grid Configuration Successful.";
                    break;

                case 2:
                    content = "Save of Transaction Grid Configuration Successful.";
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
                dashboard.config.ConfigUtility.SAVE_DIALOG.hide();
            }, 4 * 1000);
        };

        ConfigUtility.getConfigDiv = function (attribute, type) {
            var divToAdd = dojo.byId(attribute + type);
            divToAdd.style.margin = 1;
            //divToAdd.style.paddingLeft=1;

            var node = dojo.create("div");
            divToAdd.appendChild(node);
            return node;
        };

        ConfigUtility.getMemoryStore = function(array, iconPath) {
            var dataArray = [];
            var tagImage = "<img width='16px' height='16px' src=" + iconPath + "/>";
            for(var i =0; i < array.length; i++) {
                var dataObj = {};
                dataObj['name'] = array[i];
                dataObj['label'] = tagImage + array[i];
                dataArray.push(dataObj);
            }
            var stateStore = new Memory({data: dataArray});
            return stateStore;
        };

        ConfigUtility.SAVE_DIALOG = null;

        return ConfigUtility;
    });