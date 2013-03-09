define(["dojo/_base/declare", "dijit/form/Button"],

    function (declare, Button) {

        var ButtonHelper = declare("dashboard.abstract.ButtonHelper", null, {});

        //ToDo: Add a tooltip to all the buttons

        ButtonHelper.getButton = function(label, className) {
            var button = new Button({
                showLabel: false,
                label: label,
                iconClass: className
            });
            return button;
        };

        ButtonHelper.getSave = function() {
            return ButtonHelper.getButton("Save", 'dijitEditorIcon dijitEditorIconSave');
        };

        ButtonHelper.getRefresh = function() {
            return ButtonHelper.getButton("Refresh", "");
        };

        ButtonHelper.getPopUpWindow = function() {
            return ButtonHelper.getButton("Pop Out", 'newViewWindowToolbarButton');
        };

        ButtonHelper.getCloseWindow = function() {
            return ButtonHelper.getButton("Close", "");
        };

        return ButtonHelper;
    });