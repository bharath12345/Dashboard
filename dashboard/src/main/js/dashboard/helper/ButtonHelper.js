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

            //ToDo : Tooltip Labels are Horrible. I have named them to icon names themselves. Correct this

            /*
                The 16px ones
             */

            getActive:function () {
                var label = "Active";
                var className = 'ActiveToolbarButton';
                return this.getButton(label, className);
            },
            getArrowDown:function () {
                var label = "ArrowDown";
                var className = 'ArrowDownToolbarButton';
                return this.getButton(label, className);
            },
            getArrowLeft:function () {
                var label = "ArrowLeft";
                var className = 'ArrowLeftToolbarButton';
                return this.getButton(label, className);
            },
            getArrowRight:function () {
                var label = "ArrowRight";
                var className = 'ArrowRightToolbarButton';
                return this.getButton(label, className);
            },
            getArrowUp:function () {
                var label = "ArrowUp";
                var className = 'ArrowUpToolbarButton';
                return this.getButton(label, className);
            },
            getBackToPreviousNodeGroupMap:function () {
                var label = "BackToPreviousNodeGroupMap";
                var className = 'BackToPreviousNodeGroupMapToolbarButton';
                return this.getButton(label, className);
            },
            getClose:function () {
                var label = "Close";
                var className = 'CloseToolbarButton';
                return this.getButton(label, className);
            },
            getConfiguration:function () {
                var label = "Configuration";
                var className = 'ConfigurationToolbarButton';
                return this.getButton(label, className);
            },
            getDelete:function () {
                var label = "Delete";
                var className = 'DeleteToolbarButton';
                return this.getButton(label, className);
            },
            getEdit:function () {
                var label = "Edit";
                var className = 'EditToolbarButton';
                return this.getButton(label, className);
            },
            getExtension:function () {
                var label = "Extension";
                var className = 'ExtensionToolbarButton';
                return this.getButton(label, className);
            },
            getFastForwardToEnd:function () {
                var label = "FastForwardToEnd";
                var className = 'FastForwardToEndToolbarButton';
                return this.getButton(label, className);
            },
            getFilterUndo:function () {
                var label = "FilterUndo";
                var className = 'FilterUndoToolbarButton';
                return this.getButton(label, className);
            },
            getFind:function () {
                var label = "Find";
                var className = 'FindToolbarButton';
                return this.getButton(label, className);
            },
            getFirst:function () {
                var label = "First";
                var className = 'FirstToolbarButton';
                return this.getButton(label, className);
            },
            getFitToContent:function () {
                var label = "FitToContent";
                var className = 'FitToContentToolbarButton';
                return this.getButton(label, className);
            },
            getGo:function () {
                var label = "Go";
                var className = 'GoToolbarButton';
                return this.getButton(label, className);
            },
            getGraphs:function () {
                var label = "Graphs";
                var className = 'GraphsToolbarButton';
                return this.getButton(label, className);
            },
            getIncidentBrowsing:function () {
                var label = "IncidentBrowsing";
                var className = 'IncidentBrowsingToolbarButton';
                return this.getButton(label, className);
            },
            getIncidentManagement:function () {
                var label = "IncidentManagement";
                var className = 'IncidentManagementToolbarButton';
                return this.getButton(label, className);
            },
            getIndicateKeyIncidents:function () {
                var label = "IndicateKeyIncidents";
                var className = 'IndicateKeyIncidentsToolbarButton';
                return this.getButton(label, className);
            },
            getInformational:function () {
                var label = "Informational";
                var className = 'InformationalToolbarButton';
                return this.getButton(label, className);
            },
            getIntegrationModule:function () {
                var label = "IntegrationModule";
                var className = 'IntegrationModuleToolbarButton';
                return this.getButton(label, className);
            },
            getInventory:function () {
                var label = "Inventory";
                var className = 'InventoryToolbarButton';
                return this.getButton(label, className);
            },
            getLast:function () {
                var label = "Last";
                var className = 'LastToolbarButton';
                return this.getButton(label, className);
            },
            getLogout:function () {
                var label = "Logout";
                var className = 'LogoutToolbarButton';
                return this.getButton(label, className);
            },
            getManage:function () {
                var label = "Manage";
                var className = 'ManageToolbarButton';
                return this.getButton(label, className);
            },
            getManagementMode:function () {
                var label = "ManagementMode";
                var className = 'ManagementModeToolbarButton';
                return this.getButton(label, className);
            },
            getMap:function () {
                var label = "Map";
                var className = 'MapToolbarButton';
                return this.getButton(label, className);
            },
            getMapEmphasis:function () {
                var label = "MapEmphasis";
                var className = 'MapEmphasisToolbarButton';
                return this.getButton(label, className);
            },
            getMibBrowser:function () {
                var label = "MibBrowser";
                var className = 'MibBrowserToolbarButton';
                return this.getButton(label, className);
            },
            getMonitoring:function () {
                var label = "Monitoring";
                var className = 'MonitoringToolbarButton';
                return this.getButton(label, className);
            },
            getNew:function () {
                var label = "New";
                var className = 'NewToolbarButton';
                return this.getButton(label, className);
            },
            getNewMapping:function () {
                var label = "NewMapping";
                var className = 'NewMappingToolbarButton';
                return this.getButton(label, className);
            },
            getNewdocument:function () {
                var label = "Newdocument";
                var className = 'NewdocumentToolbarButton';
                return this.getButton(label, className);
            },
            getNext:function () {
                var label = "Next";
                var className = 'NextToolbarButton';
                return this.getButton(label, className);
            },
            getNot:function () {
                var label = "Not";
                var className = 'NotToolbarButton';
                return this.getButton(label, className);
            },
            getOneToOne:function () {
                var label = "OneToOne";
                var className = 'OneToOneToolbarButton';
                return this.getButton(label, className);
            },
            getOpen:function () {
                var label = "Open";
                var className = 'OpenToolbarButton';
                return this.getButton(label, className);
            },
            getOpenInAnalysisPane:function () {
                var label = "OpenInAnalysisPane";
                var className = 'OpenInAnalysisPaneToolbarButton';
                return this.getButton(label, className);
            },
            getOpenIncidentConfig:function () {
                var label = "OpenIncidentConfig";
                var className = 'OpenIncidentConfigToolbarButton';
                return this.getButton(label, className);
            },
            getOpenNodeGroupMap:function () {
                var label = "OpenNodeGroupMap";
                var className = 'OpenNodeGroupMapToolbarButton';
                return this.getButton(label, className);
            },
            getOpenNodeGroupMap:function () {
                var label = "OpenNodeGroupMap";
                var className = 'OpenNodeGroupMapToolbarButton';
                return this.getButton(label, className);
            },
            getOwnIncident:function () {
                var label = "OwnIncident";
                var className = 'OwnIncidentToolbarButton';
                return this.getButton(label, className);
            },
            getPin:function () {
                var label = "Pin";
                var className = 'PinToolbarButton';
                return this.getButton(label, className);
            },
            getPrevious:function () {
                var label = "Previous";
                var className = 'PreviousToolbarButton';
                return this.getButton(label, className);
            },
            getQuickFind:function () {
                var label = "QuickFind";
                var className = 'QuickFindToolbarButton';
                return this.getButton(label, className);
            },
            getQuickView:function () {
                var label = "QuickView";
                var className = 'QuickViewToolbarButton';
                return this.getButton(label, className);
            },
            getRefresh:function () {
                var label = "Refresh";
                var className = 'RefreshToolbarButton';
                return this.getButton(label, className);
            },
            getRefreshStatus:function () {
                var label = "RefreshStatus";
                var className = 'RefreshStatusToolbarButton';
                return this.getButton(label, className);
            },
            getRefreshStop:function () {
                var label = "RefreshStop";
                var className = 'RefreshStopToolbarButton';
                return this.getButton(label, className);
            },
            getRestoreDefault:function () {
                var label = "RestoreDefault";
                var className = 'RestoreDefaultToolbarButton';
                return this.getButton(label, className);
            },
            getRestoreFilter:function () {
                var label = "RestoreFilter";
                var className = 'RestoreFilterToolbarButton';
                return this.getButton(label, className);
            },
            getRewindToBeginning:function () {
                var label = "RewindToBeginning";
                var className = 'RewindToBeginningToolbarButton';
                return this.getButton(label, className);
            },
            getSave:function () {
                var label = "Save";
                var className = 'SaveToolbarButton';
                return this.getButton(label, className);
            },
            getSaveClose:function () {
                var label = "SaveClose";
                var className = 'SaveCloseToolbarButton';
                return this.getButton(label, className);
            },
            getSaveLayout:function () {
                var label = "SaveLayout";
                var className = 'SaveLayoutToolbarButton';
                return this.getButton(label, className);
            },
            getSaveNew:function () {
                var label = "SaveNew";
                var className = 'SaveNewToolbarButton';
                return this.getButton(label, className);
            },
            getSignedInUsers:function () {
                var label = "SignedInUsers";
                var className = 'SignedInUsersToolbarButton';
                return this.getButton(label, className);
            },
            getSmartAction:function () {
                var label = "SmartAction";
                var className = 'SmartActionToolbarButton';
                return this.getButton(label, className);
            },
            getStatusRefresh:function () {
                var label = "StatusRefresh";
                var className = 'StatusRefreshToolbarButton';
                return this.getButton(label, className);
            },
            getStepWizard:function () {
                var label = "StepWizard";
                var className = 'StepWizardToolbarButton';
                return this.getButton(label, className);
            },
            getStop:function () {
                var label = "Stop";
                var className = 'StopToolbarButton';
                return this.getButton(label, className);
            },
            getSupport:function () {
                var label = "Support";
                var className = 'SupportToolbarButton';
                return this.getButton(label, className);
            },
            getSwapPathNodes:function () {
                var label = "SwapPathNodes";
                var className = 'SwapPathNodesToolbarButton';
                return this.getButton(label, className);
            },
            getTableHorizontal:function () {
                var label = "TableHorizontal";
                var className = 'TableHorizontalToolbarButton';
                return this.getButton(label, className);
            },
            getTestGraph:function () {
                var label = "TestGraph";
                var className = 'TestGraphToolbarButton';
                return this.getButton(label, className);
            },
            getTextWrap:function () {
                var label = "TextWrap";
                var className = 'TextWrapToolbarButton';
                return this.getButton(label, className);
            },
            getTooltip:function () {
                var label = "Tooltip";
                var className = 'TooltipToolbarButton';
                return this.getButton(label, className);
            },
            getTopology:function () {
                var label = "Topology";
                var className = 'TopologyToolbarButton';
                return this.getButton(label, className);
            },
            getTree:function () {
                var label = "Tree";
                var className = 'TreeToolbarButton';
                return this.getButton(label, className);
            },
            getTroubleshooting:function () {
                var label = "Troubleshooting";
                var className = 'TroubleshootingToolbarButton';
                return this.getButton(label, className);
            },
            getUndo:function () {
                var label = "Undo";
                var className = 'UndoToolbarButton';
                return this.getButton(label, className);
            },
            getView:function () {
                var label = "View";
                var className = 'ViewToolbarButton';
                return this.getButton(label, className);
            },
            getViewAction:function () {
                var label = "ViewAction";
                var className = 'ViewActionToolbarButton';
                return this.getButton(label, className);
            },
            getViewNewWindow:function () {
                var label = "ViewNewWindow";
                var className = 'ViewNewWindowToolbarButton';
                return this.getButton(label, className);
            },
            getWarning:function () {
                var label = "Warning";
                var className = 'WarningToolbarButton';
                return this.getButton(label, className);
            },
            getWindowClose:function () {
                var label = "WindowClose";
                var className = 'WindowCloseToolbarButton';
                return this.getButton(label, className);
            },
            getWindowMaximize:function () {
                var label = "WindowMaximize";
                var className = 'WindowMaximizeToolbarButton';
                return this.getButton(label, className);
            },
            getWindowMinimize:function () {
                var label = "WindowMinimize";
                var className = 'WindowMinimizeToolbarButton';
                return this.getButton(label, className);
            },
            getWindowRestore:function () {
                var label = "WindowRestore";
                var className = 'WindowRestoreToolbarButton';
                return this.getButton(label, className);
            },
            getWizard3:function () {
                var label = "Wizard3";
                var className = 'Wizard3ToolbarButton';
                return this.getButton(label, className);
            },
            getZoomIn:function () {
                var label = "ZoomIn";
                var className = 'ZoomInToolbarButton';
                return this.getButton(label, className);
            },
            getZoomOut:function () {
                var label = "ZoomOut";
                var className = 'ZoomOutToolbarButton';
                return this.getButton(label, className);
            },


            /*
             The SMALLER 11px ONES
             */

            getCollapse:function () {
                var label = "Collapse";
                var className = 'CollapseToolbarButton';
                return this.getButton(label, className);
            },
            getExpand:function () {
                var label = "Expand";
                var className = 'ExpandToolbarButton';
                return this.getButton(label, className);
            },
            getRefreshSmaller:function () {
                var label = "Refresh";
                var className = 'RefreshToolbarButton';
                return this.getButton(label, className);
            },
            getTreeCollapse:function () {
                var label = "TreeCollapse";
                var className = 'TreeCollapseToolbarButton';
                return this.getButton(label, className);
            },
            getTreeExpand:function () {
                var label = "TreeExpand";
                var className = 'TreeExpandToolbarButton';
                return this.getButton(label, className);
            }

        });

        //ToDo: Add a tooltip to all the buttons


        return ButtonHelper;
    });