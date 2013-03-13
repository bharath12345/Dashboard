define(["dojo/_base/declare", "dijit/form/Button", "dijit/Tooltip", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard"],

    function (declare, Button, Tooltip, i18n, i18nString) {

        var ButtonHelper = declare("dashboard.helper.ButtonHelper", null, {});

        //ToDo: Add a tooltip to all the buttons

        ButtonHelper.getButton = function(label, className) {
            var id = ButtonHelper.getId(label,className);
            var button = new Button({
                id: id,
                showLabel: false,
                label: label,
                iconClass: className
            });
            new Tooltip({
                connectId: [id],
                label: label
            });
            return button;
        };

        ButtonHelper.getId = function(label, className) {
            return label + "_" + className;
        };

        ButtonHelper.getDelete = function() {
            var label = "Delete"; var className = 'deleteToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getRefresh = function() {
            var label = "Refresh"; var className = 'refreshToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getStatusRefresh = function() {
            var label = "Status Refresh"; var className = 'statusRefreshToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getAnalysisPane = function() {
            var label = "Open in Analysis Pane"; var className = 'openInAnalysisPaneToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getOpen = function() {
            var label = "Open"; var className = 'openToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getWizard = function() {
            var label = "Wizard"; var className = 'wizardToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getWizardPage = function() {
            var label = "Wizard Page"; var className = 'wizardPageToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getMapping = function() {
            var label = "New Mapping"; var className = 'newMappingToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getNewWindow = function() {
            var label = "New View Window"; var className = 'newViewWindowToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getFitToContent = function() {
            var label = "Fit To Content"; var className = 'fitToContentToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getOneToOne = function() {
            var label = "One To One"; var className = 'oneToOneToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getZoomOut = function() {
            var label = "Zoom Out"; var className = 'zoomOutToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getZoomIn = function() {
            var label = "Zoom In"; var className = 'zoomInToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getStopRefresh = function() {
            var label = "Stop Refresh"; var className = 'stopRefreshToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getRestoreDefault = function() {
            var label = "Restore Default"; var className = 'restoreDefaultToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getRestoreFilter = function() {
            var label = "Restore Filter"; var className = 'restoreFilterToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getFind = function() {
            var label = "Find"; var className = 'findToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getOpenNodeGroupMap = function() {
            var label = "Open Node Group"; var className = 'openNodeGroupMapToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getSaveLayout = function() {
            var label = "Save Layout"; var className = 'saveLayoutToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getSwapPath = function() {
            var label = "Swap Path Nodes"; var className = 'swapPathNodesToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getComputePath = function() {
            var label = "Compute Path"; var className = 'computePathToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getFirst = function() {
            var label = "First"; var className = 'firstToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getLast = function() {
            var label = "Last"; var className = 'lastToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getPrevious = function() {
            var label = "Previous"; var className = 'previousToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getNext = function() {
            var label = "Next"; var className = 'nextToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getClose = function() {
            var label = "Close"; var className = 'closeToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getSave = function() {
            var label = "Save"; var className = 'saveToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getSaveAndClose = function() {
            var label = "Save And Close"; var className = 'saveAndCloseToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getSaveAndNew = function() {
            var label = "Save And New"; var className = 'saveAndNewToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getNew = function() {
            var label = "New"; var className = 'newToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getToggleEmphasis = function() {
            var label = "Toggle Emphasis"; var className = 'toggleEmphasisToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getTooltipToggle = function() {
            var label = "Tooltip Toggle"; var className = 'tooltipToggleToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getTextWrapToggle = function() {
            var label = "Textwrap Toggle"; var className = 'textWrapToggleToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getFindToggle = function() {
            var label = "Find"; var className = 'findToggleToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getIndicateKeyIncidents = function() {
            var label = "Indicate Key Incidents"; var className = 'indicateKeyIncidentsToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getGo = function() {
            var label = "Go"; var className = 'goToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        ButtonHelper.getStop = function() {
            var label = "Stop"; var className = 'stopToolbarButton';
            return ButtonHelper.getButton(label, className);
        };

        return ButtonHelper;
    });