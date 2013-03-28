define(["dojo/_base/declare", 'dojox/widget/Standby', "dojo/io-query", "dojo/_base/xhr", "dojo/_base/lang"],

    function (declare, Standby, ioQuery, xhr, lang) {

        dashboard.classnames.Helper = "dashboard.helper.Helper";

        var Helper = declare(dashboard.classnames.Helper, null, {});

        Helper.JSON_HEADER = { 'Content-Type':'application/json' };

        Helper.showLoading = function() {
            dashboard.dom.STANDBY = new Standby({target:dashboard.dom.TopBc.domNode});
            document.body.appendChild(dashboard.dom.STANDBY.domNode);
            dashboard.dom.STANDBY.startup();
            dashboard.dom.STANDBY.show();
        };

        Helper.getClassPath = function(name) {
            return name.replace(/\./g, "/");
        };

        Helper.removeChildren = function (elem) {
            if(elem == null || elem == undefined) {
                return;
            }
            while (elem.hasChildNodes()) {
                Helper.removeChildren(elem.lastChild)
                elem.removeChild(elem.lastChild);
            }
        };

        Helper.parseInput = function(input) {
            var data = {};
            if(input.param != undefined) {
                if(input.param.id != undefined) {
                    data.id = input.param.id[0]; // Struts sends the response back with parameters as the key
                }
                if(input.param.type != undefined) {
                    data.type = parseInt(input.param.type[0]);
                }
                if(input.param.subtype != undefined) {
                    data.subtype = parseInt(input.param.subtype[0]);
                }
                if(input.param.dimensions != undefined) {
                    data.dimensions = {};
                    data.dimensions.width = parseInt(input.param.dimensions[0]);
                    data.dimensions.height = parseInt(input.param.dimensions[1]);
                }
                if(input.param.position != undefined) {
                    data.position = {};
                    data.position.xpos = parseInt(input.param.position[0]);
                    data.position.ypos = parseInt(input.param.position[1]);
                }
                if(input.param.custom != undefined) {
                    data.custom = input.param.custom;
                }
                if(input.param.name != undefined) {
                    data.name = input.param.name[0];
                }
            } else {
                console.log("input param is undefind");
            }
            if(input.login != undefined && input.login.type != undefined) {
                data.type = parseInt(input.login.type);
            }
            //console.log("converted data = " + dojo.toJson(data));
            return data;
        };

        Helper.getHeading = function(stringObject) {
            return "<div class='text-center alert alert-info heading'>" + stringObject + "</div>";
        }

        Helper.createView = function(viewObject, pageType, formObject) {
            viewObject.createSplitCenterPanes(dashboard.dom.CpCenterInner[pageType], formObject);
        };

        return Helper;
    });