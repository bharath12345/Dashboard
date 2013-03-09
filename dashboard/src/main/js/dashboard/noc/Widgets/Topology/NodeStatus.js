define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/noc/nls/noc", "dashboard/logger/Logger", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility"],

    function (declare, i18n, i18nString, Logger, NOCCONSTANTS, NocUtility) {

        var NodeStatus = declare(NOCCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.NODESTATUS, null, {

            create: function(data, input) {

            }
        });

        NodeStatus.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.WIDGETS.TOPOLOGY.NODESTATUS));

        return NodeStatus;
    });