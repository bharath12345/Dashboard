define(["dojo/_base/declare", 'dojox/widget/Standby', "dojo/io-query"],

    function (declare, Standby, ioQuery) {

        var Helper = declare("dashboard.helper.Helper", null, {});

        Helper.JSON_HEADER = { 'Content-Type':'application/json' };

        Helper.showLoading = function() {
            dashboard.STANDBY = new Standby({target:dashboard.TopBc.domNode});
            document.body.appendChild(dashboard.STANDBY.domNode);
            dashboard.STANDBY.startup();
            dashboard.STANDBY.show();
        };

        Helper.getClassPath = function(name) {
            return name.replace(/\./g, "/");
        };

        Helper.createDomAndShowPage = function(accordionObject) {
            var uri = document.URL;
            var query = uri.substring(uri.indexOf("?") + 1, uri.length);
            var queryObject = ioQuery.queryToObject(query);

            viewObject = accordionObject.getView(queryObject.viewName, true);

            viewObject.createDom();

            Helper.showLoading();

            accordionObject.showView(queryObject.viewId, queryObject.viewName, queryObject.viewType, true);
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
                    data.name = input.param.name;
                }
                console.log("data type = " + data.type + " sub type = " + data.subtype);
            } else {
                console.log("input param is undefind");
            }
            if(input.login != undefined && input.login.type != undefined) {
                data.type = parseInt(input.login.type);
                console.log("login data type = " + data.type);
            }
            return data;
        };

        return Helper;
    });