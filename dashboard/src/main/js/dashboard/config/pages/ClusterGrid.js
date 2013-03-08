define(["dojo/_base/declare", "dojo/i18n", "dashboard/logger/Logger",
    "dashboard/config/ConfigUtility", "dashboard/config/ConfigConstants", "dojo/i18n!dashboard/config/nls/config",
    "dashboard/config/widgets/NumberSpinner", "dashboard/config/widgets/ComboBox", "dashboard/config/widgets/RadioButton", "dashboard/config/widgets/CheckedMultiSelect" ],

    function (declare, i18n, Logger, ConfigUtility, CONFIGCONSTANTS, i18nString, NumberSpinner, ComboBox, RadioButton, CheckedMultiSelect) {

        var ClusterGrid = declare(CONFIGCONSTANTS.CLASSNAME.CLUSTERGRID, null, {
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
                    var ns = new NumberSpinner();
                    ClusterGrid.CLUSTERREFRESHTIME = ns.renderNumberSpinner(gridConfig[clusterRefreshTime].userSetting, clusterRefreshTime, 10, 60, 1);
                }

                var clusterNames = "clusterNames";
                if(gridConfig[clusterNames] != null) {
                    var values = data.cge.allUserClusters;
                    var cb = new CheckedMultiSelect();
                    ClusterGrid.CLUSTERS = cb.renderCheckedMultiSelect(gridConfig[clusterNames].userSetting, clusterNames, values);
                }
            },

            saveValues: function() {
                var refreshTime, clusters = [];
                if(ClusterGrid.CLUSTERREFRESHTIME != null) {
                    refreshTime = ClusterGrid.CLUSTERREFRESHTIME[CONFIGCONSTANTS.DIVTYPE.USER].get('value');
                }

                var clusterNames = "clusterNames";
                if(ClusterGrid.CLUSTERS != null) {
                    var rhsCMS = CheckedMultiSelect.checkedMSList[clusterNames + CONFIGCONSTANTS.DIVTYPE.USER][1];
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

        ClusterGrid.LOG = Logger.addTimer(new Logger(CONFIGCONSTANTS.CLASSNAME.CLUSTERGRID));
        ClusterGrid.CLUSTERREFRESHTIME = null;
        ClusterGrid.CLUSTERS = null;

        return ClusterGrid;
    });