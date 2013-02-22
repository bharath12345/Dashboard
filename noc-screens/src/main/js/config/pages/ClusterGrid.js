define(["dojo/_base/declare", "dojo/i18n", "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config",
    "config/widgets/NumberSpinner", "config/widgets/ComboBox", "config/widgets/RadioButton", "config/widgets/CheckedMultiSelect" ],

    function (declare, i18n, Logger, Utility, CONSTANTS, i18nString, NumberSpinner, ComboBox, RadioButton, CheckedMultiSelect) {

        var ClusterGrid = declare(CONSTANTS.CLASSNAME.CLUSTERGRID, null, {
            getAttrib: function(data) {
                return data.cge;
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
                    var values = data.allUserClusters;
                    var cb = new CheckedMultiSelect();
                    ClusterGrid.CLUSTERS = cb.renderCheckedMultiSelect(gridConfig[clusterNames].userSetting, clusterNames, values);
                }
            },

            saveValues: function() {
                var refreshTime, clusters;
                if(ClusterGrid.CLUSTERREFRESHTIME != null) {
                    refreshTime = ClusterGrid.CLUSTERREFRESHTIME[CONSTANTS.DIVTYPE.USER].get('value');
                }

                if(ClusterGrid.CLUSTERS != null) {
                    clusters = ClusterGrid.CLUSTERS[CONSTANTS.DIVTYPE.USER].get('value');
                }

                var saveData = {
                    type: CONSTANTS.TYPE.SAVE,
                    saveType: CONSTANTS.SAVE.CLUSTERGRID,
                    refreshTime:refreshTime,
                    clusters:clusters
                };
                Utility.xhrPostCentral(CONSTANTS.ACTION.CLUSTERGRIDSAVE, saveData);
                console.log("cluster grid save refreshTime = " + refreshTime);
            }
        });

        ClusterGrid.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.CLUSTERGRID));
        ClusterGrid.CLUSTERREFRESHTIME = null;
        ClusterGrid.CLUSTERS = null;

        return ClusterGrid;
    });