define(["../dashboard/src/main/js/dojo/_base/declare", "dojo/i18n", "dashboard/logger/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!dashboard/config/nls/config",
    "dashboard/config/widgets/ConfigWidgetNumberSpinner", "dashboard/config/widgets/ConfigWidgetComboBox", "dashboard/config/widgets/ConfigWidgetRadioButton", "dashboard/config/widgets/ConfigWidgetCheckedMultiSelect" ],

    function (declare, i18n, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString, ConfigWidgetNumberSpinner, ConfigWidgetComboBox, ConfigWidgetRadioButton, ConfigWidgetCheckedMultiSelect) {

        dashboard.classnames.ConfigViewClusterGrid = "dashboard.config.views.ConfigViewClusterGrid";

        var ConfigViewClusterGrid = declare(dashboard.classnames.ConfigViewClusterGrid, null, {
            getAttrib: function(data) {
                return data.cge;
            },

            getAttribIgnoreList: function() {
                var ignore = [];
                ignore["allUserClusters"] = "allUserClusters";
                return ignore;
            },

            renderAttributes: function(data) {
                var gridConfig = data.cge;
                for(var attribute in gridConfig) {
                    var adminSetting = gridConfig[attribute].adminSetting;
                    var factoryModified = gridConfig[attribute].factoryModified;
                    var factoryReadOnly = gridConfig[attribute].factoryReadOnly;
                    var userSetting = gridConfig[attribute].userSetting;
                    console.log("adminSetting = " + adminSetting + " factoryModified = " + factoryModified + " factoryReadOnly = " + factoryReadOnly + " userSetting = " + userSetting);
                }

                var clusterRefreshTime = "clusterRefreshTime";
                if(gridConfig[clusterRefreshTime] != null) {
                    var ns = new ConfigWidgetNumberSpinner();
                    ConfigViewClusterGrid.CLUSTERREFRESHTIME = ns.renderNumberSpinner(gridConfig[clusterRefreshTime].userSetting, clusterRefreshTime, 10, 60, 1);
                }

                var clusterNames = "clusterNames";
                if(gridConfig[clusterNames] != null) {
                    var values = data.cge.allUserClusters;
                    var cb = new ConfigWidgetCheckedMultiSelect();
                    ConfigViewClusterGrid.CLUSTERS = cb.renderCheckedMultiSelect(gridConfig[clusterNames].userSetting, clusterNames, values);
                }
            },

            saveValues: function() {
                var refreshTime, clusters = [];
                if(ConfigViewClusterGrid.CLUSTERREFRESHTIME != null) {
                    refreshTime = ConfigViewClusterGrid.CLUSTERREFRESHTIME[CONFIGCONSTANTS.DIVTYPE.USER].get('value');
                }

                var clusterNames = "clusterNames";
                if(ConfigViewClusterGrid.CLUSTERS != null) {
                    var rhsCMS = ConfigWidgetCheckedMultiSelect.checkedMSList[clusterNames + CONFIGCONSTANTS.DIVTYPE.USER][1];
                    var msRhsOptions = rhsCMS.getOptions();
                    for (var j = 0; j < msRhsOptions.length; j++) {
                        clusters[j] = msRhsOptions[j].value;
                    }
                }

                var saveData = {
                    type: CONFIGCONSTANTS.TYPE.SAVE,
                    saveType: CONFIGCONSTANTS.SAVE.CLUSTERGRID,
                    refreshTime:refreshTime,
                    clusters:clusters
                };
                ConfigUtility.xhrPostCentral(CONFIGCONSTANTS.ACTION.CLUSTERGRIDSAVE, saveData);
                console.log("cluster grid save refreshTime = " + refreshTime);
            }
        });

        ConfigViewClusterGrid.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigViewClusterGrid));
        ConfigViewClusterGrid.CLUSTERREFRESHTIME = null;
        ConfigViewClusterGrid.CLUSTERS = null;

        return ConfigViewClusterGrid;
    });