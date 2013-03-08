define(["dojo/_base/declare"],

    function (declare) {

        var AbstractView = declare("dashboard.abstract.AbstractView", null, {

            "-chains-":{
                createNewWindowConfigDom:"after"
            },

            getTopBorderContainer:function () {
                return dashboard.TopBc;
            },

            createNewWindowConfigDom:function () {
                this.createTopContainers(document.body);
                this.createMast();
            }

        });

        return AbstractView;
    });