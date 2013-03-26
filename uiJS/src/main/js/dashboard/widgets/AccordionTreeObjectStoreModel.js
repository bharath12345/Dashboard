define(["dojo/_base/declare", "dijit/tree/ObjectStoreModel"],

    function (declare, ObjectStoreModel) {

        var AccordionTreeObjectStoreModel = declare("dashboard.widgets.AccordionTreeObjectStoreModel", ObjectStoreModel, {

            mayHaveChildren: function(parent) {
                return this.store.getChildren(parent).length > 0;
            }
        });

        return AccordionTreeObjectStoreModel;
    });