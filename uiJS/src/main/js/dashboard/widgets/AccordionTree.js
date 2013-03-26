define(["dojo/_base/declare", "dijit/Tree"],

    function (declare, Tree) {

        var AccordionTree = declare("dashboard.widgets.AccordionTree", Tree, {

            getIconClass: function(/*dojo.store.Item*/ item, /*Boolean*/ opened){
                //console.log("item = " + dojo.toJson(item));

                if(item.type == null || item.type == undefined) {
                    return (!item || this.model.mayHaveChildren(item)) ? (opened ? "dijitFolderOpened" : "dijitFolderClosed") : "dijitLeaf"
                }

                switch(item.type.toUpperCase()) {
                    case "DIRECTORY":
                        return opened ? "dijitFolderOpened" : "dijitFolderClosed";

                    case "CONFIGURATION":
                        return "configurationTreeLeaf";

                    case "GRID":
                        return "tableTreeLeaf";

                    case "TOPOLOGY":
                        return "topologyTreeLeaf";

                }

                return "dijitLeaf";
            }
        });

        return AccordionTree;
    });