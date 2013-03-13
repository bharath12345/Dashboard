define(["dojo/_base/declare", "dijit/form/Button", "dijit/Tooltip", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard"],

    function (declare, Button, Tooltip, i18n, i18nString) {

        dashboard.classnames.ButtonHelper = "dashboard.helper.ButtonHelper";

        var ButtonHelper = declare(dashboard.classnames.ButtonHelper, null, {

            getButton:function (label, className) {
                var id = this.getId(label, className);
                var button = new Button({
                    id:id,
                    showLabel:false,
                    label:label,
                    iconClass:className
                });
                new Tooltip({
                    connectId:[id],
                    label:label
                });
                return button;
            },

            getId:function (label, className) {
                return label + "_" + className;
            },

            getDelete:function () {
                var label = "Delete";
                var className = 'deleteToolbarButton';
                return this.getButton(label, className);
            },

            getRefresh:function () {
                var label = "Refresh";
                var className = 'refreshToolbarButton';
                return this.getButton(label, className);
            },

            getStatusRefresh:function () {
                var label = "Status Refresh";
                var className = 'statusRefreshToolbarButton';
                return this.getButton(label, className);
            },

            getAnalysisPane:function () {
                var label = "Open in Analysis Pane";
                var className = 'openInAnalysisPaneToolbarButton';
                return this.getButton(label, className);
            },

            getOpen:function () {
                var label = "Open";
                var className = 'openToolbarButton';
                return this.getButton(label, className);
            },

            getWizard:function () {
                var label = "Wizard";
                var className = 'wizardToolbarButton';
                return this.getButton(label, className);
            },

            getWizardPage:function () {
                var label = "Wizard Page";
                var className = 'wizardPageToolbarButton';
                return this.getButton(label, className);
            },

            getMapping:function () {
                var label = "New Mapping";
                var className = 'newMappingToolbarButton';
                return this.getButton(label, className);
            },

            getNewWindow:function () {
                var label = "New View Window";
                var className = 'newViewWindowToolbarButton';
                return this.getButton(label, className);
            },

            getFitToContent:function () {
                var label = "Fit To Content";
                var className = 'fitToContentToolbarButton';
                return this.getButton(label, className);
            },

            getOneToOne:function () {
                var label = "One To One";
                var className = 'oneToOneToolbarButton';
                return this.getButton(label, className);
            },

            getZoomOut:function () {
                var label = "Zoom Out";
                var className = 'zoomOutToolbarButton';
                return this.getButton(label, className);
            },

            getZoomIn:function () {
                var label = "Zoom In";
                var className = 'zoomInToolbarButton';
                return this.getButton(label, className);
            },

            getStopRefresh:function () {
                var label = "Stop Refresh";
                var className = 'stopRefreshToolbarButton';
                return this.getButton(label, className);
            },

            getRestoreDefault:function () {
                var label = "Restore Default";
                var className = 'restoreDefaultToolbarButton';
                return this.getButton(label, className);
            },

            getRestoreFilter:function () {
                var label = "Restore Filter";
                var className = 'restoreFilterToolbarButton';
                return this.getButton(label, className);
            },

            getFind:function () {
                var label = "Find";
                var className = 'findToolbarButton';
                return this.getButton(label, className);
            },

            getOpenNodeGroupMap:function () {
                var label = "Open Node Group";
                var className = 'openNodeGroupMapToolbarButton';
                return this.getButton(label, className);
            },

            getSaveLayout:function () {
                var label = "Save Layout";
                var className = 'saveLayoutToolbarButton';
                return this.getButton(label, className);
            },

            getSwapPath:function () {
                var label = "Swap Path Nodes";
                var className = 'swapPathNodesToolbarButton';
                return this.getButton(label, className);
            },

            getComputePath:function () {
                var label = "Compute Path";
                var className = 'computePathToolbarButton';
                return this.getButton(label, className);
            },

            getFirst:function () {
                var label = "First";
                var className = 'firstToolbarButton';
                return this.getButton(label, className);
            },

            getLast:function () {
                var label = "Last";
                var className = 'lastToolbarButton';
                return this.getButton(label, className);
            },

            getPrevious:function () {
                var label = "Previous";
                var className = 'previousToolbarButton';
                return this.getButton(label, className);
            },

            getNext:function () {
                var label = "Next";
                var className = 'nextToolbarButton';
                return this.getButton(label, className);
            },

            getClose:function () {
                var label = "Close";
                var className = 'closeToolbarButton';
                return this.getButton(label, className);
            },

            getSave:function () {
                var label = "Save";
                var className = 'saveToolbarButton';
                return this.getButton(label, className);
            },

            getSaveAndClose:function () {
                var label = "Save And Close";
                var className = 'saveAndCloseToolbarButton';
                return this.getButton(label, className);
            },

            getSaveAndNew:function () {
                var label = "Save And New";
                var className = 'saveAndNewToolbarButton';
                return this.getButton(label, className);
            },

            getNew:function () {
                var label = "New";
                var className = 'newToolbarButton';
                return this.getButton(label, className);
            },

            getToggleEmphasis:function () {
                var label = "Toggle Emphasis";
                var className = 'toggleEmphasisToolbarButton';
                return this.getButton(label, className);
            },

            getTooltipToggle:function () {
                var label = "Tooltip Toggle";
                var className = 'tooltipToggleToolbarButton';
                return this.getButton(label, className);
            },

            getTextWrapToggle:function () {
                var label = "Textwrap Toggle";
                var className = 'textWrapToggleToolbarButton';
                return this.getButton(label, className);
            },

            getFindToggle:function () {
                var label = "Find";
                var className = 'findToggleToolbarButton';
                return this.getButton(label, className);
            },

            getIndicateKeyIncidents:function () {
                var label = "Indicate Key Incidents";
                var className = 'indicateKeyIncidentsToolbarButton';
                return this.getButton(label, className);
            },

            getGo:function () {
                var label = "Go";
                var className = 'goToolbarButton';
                return this.getButton(label, className);
            },

            getStop:function () {
                var label = "Stop";
                var className = 'stopToolbarButton';
                return this.getButton(label, className);
            }

        });

        //ToDo: Add a tooltip to all the buttons


        return ButtonHelper;
    });