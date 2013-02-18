define(["dojo/_base/declare", "dojo/i18n", "dijit/TitlePane", "dojox/layout/GridContainer",
    "noc/Logger",
    "config/Utility", "config/Constants", "dojo/i18n!config/nls/config", "config/pages/IncidentGrid"],

    function (declare, i18n, TitlePane, GridContainer, Logger, Utility, CONSTANTS, i18nString, IncidentGrid) {

        var RenderAttributes = declare(CONSTANTS.CLASSNAME.RENDERATTRIBUTES, null, {

            renderConfigParameters: function(data) {
                console.log("renderConfigParameters data = " + data);

                var paneWidth = config.PageElements.CpCenterInner.w;
                var paneHeight = config.PageElements.CpCenterInner.h;
                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                var gridContainer = new GridContainer({nbZones:1, isAutoOrganized:true,
                    style:"width: 100%; height: 100%;"});
                config.PageElements.CpCenterInner.addChild(gridContainer);
                gridContainer.disableDnd();

                for(var attribute in data.agcVO) {
                    var titlePane = new TitlePane({
                        splitter:false,
                        style:"width:"+paneWidth,
                        content:"<div id='"+attribute+"' style='width: 100%; height: 100%;'></div>",
                        title:attribute,
                        toggleable:true
                    });
                    gridContainer.addChild(titlePane, 0);
                    titlePane.toggle();
                }

                gridContainer.startup();
                gridContainer.resize();

                // all the title panes have been rendered - now render the innards
                var ag = new IncidentGrid();
                ag.renderAttributes(data);
            }
        });

        RenderAttributes.LOG = Logger.addTimer(new Logger(CONSTANTS.CLASSNAME.RENDERATTRIBUTES));

        return RenderAttributes;
    });