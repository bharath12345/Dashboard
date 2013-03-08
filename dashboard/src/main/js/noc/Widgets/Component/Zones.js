define(['require', "dojo/_base/declare", "dojo/i18n", "dojo/i18n!noc/nls/noc", "dashboard/noc/Logger", "dashboard/noc/NocConstants", "dashboard/noc/NocUtility"],

    function (require, declare, i18n, i18nString, Logger, NOCCONSTANTS, NocUtility) {

        // this is a completely static class
        var Zones = declare(NOCCONSTANTS.CLASSNAME.WIDGETS.COMPONENT.ZONES, null, {

            create:function (data) {
                var paneWidth, paneHeight, nbZones;
                var width = parseInt(data.componentMatrixZonesVO.width);
                var height = parseInt(data.componentMatrixZonesVO.height);

                // matrix will be 2x2, 2x3 and 3x3
                var zoneNames = componentMatrixZonesVO.zoneNames;
                switch(zoneNames.length) {
                    case 4:
                        paneWidth = width/2;
                        paneHeight = height/2;
                        nbZones = 2;
                        break;
                    case 6:
                        paneWidth = width/3;
                        paneHeight = height/2;
                        nbZones = 3;
                        break;
                    case 9:
                        paneWidth = width/3;
                        paneHeight = height/3;
                        nbZones = 3;
                        break;
                    default:
                        Zones.LOG.log(Logger.SEVERITY.SEVERE, "unusual number of zones = "+zoneNames.length);
                        return;
                }

                var gridContainer = new GridContainer({"nbZones": nbZones, isAutoOrganized: true,
                    style: "width: 100%; height: 100%;", "class": "soria"});
                noc.pages.ComponentPage.CP.addChild(gridContainer);
                gridContainer.disableDnd();

                var styleString = "width: " + paneWidth + "; height: " + paneHeight + ";"

                var j = 0, k = 0;
                for(var i = 0; i<zoneNames.length;i++) {
                    var zoneName = zoneNames[i] + "Zone";
                    gridContainer.addChild(
                        new TitlePane({ title:zoneNames[i],
                            content: "<div id=" + zoneName + " style='width:100%;height:100%;'></div>",
                            style: styleString, "class": "soria", toggleable: false}), j, k);

                    k = (i%nbZones);
                    j = parseInt(i/nbZones);
                }

                gridContainer.startup();
                gridContainer.resize();

                for(var i = 0; i<zoneNames.length;i++) {
                    var zoneName = zoneNames[i] + "Zone";
                    this.fetchMeta(zoneName,
                        NOCCONSTANTS.ACTION.COMPONENT.META + "?zoneName="+zoneName,
                        paneWidth, paneHeight, 40, 40);
                }
            },

            fetchMeta: function(id, jsonStore, gridWidth, gridHeight, topLeftX, topLeftY) {
                d3.json(jsonStore, dojo.hitch (this, function(m) {
                    var data = new Array();
                    var gridItemWidth = gridWidth/m.matrix.length; // total width / num of cols
                    var gridItemHeight = gridHeight/m.matrix[0].columns.length; // total height / num of rows

                    var ypos = topLeftY;

                    for(var i=0; i<m.matrix.length; i++) {
                        var xpos = topLeftX;
                        data[i] = new Array();
                        var columnSet = m.matrix[i].columns;
                        var componentName = m.matrix[i].componentName;
                        for(var j=0; j<columnSet.length;j++) {
                            var id = componentName + "_" + columnSet[j].kpiname;
                            data[i][j] = {
                                name: columnSet[j].kpiname,
                                width: gridItemWidth,
                                height: gridItemHeight,
                                x: xpos,
                                y: ypos,
                                id: id
                            };
                            xpos += gridItemWidth;
                        }
                        ypos += gridItemHeight;
                    }

                    this.renderGrid(data, id, gridWidth, gridHeight);

                    for(var i=0; i<m.matrix.length; i++) {
                        var componentName = m.matrix[i].componentName;
                        var columnSet = m.matrix[i].columns;
                        for(var j=0; j<columnSet.length;j++) {
                            var kpiName = columnSet[j].kpiname;

                            // now fetch data for this component-name and kpi-name
                            var viewMeta = {
                                id: "NA",
                                type: NOCCONSTANTS.TYPE.COMPONENT_DATA,
                                dimensions:[gridWidth,gridHeight],
                                position: [0,0],
                                custom: [componentName,kpiName]
                            };
                            NocUtility.xhrPostCentral(
                                NOCCONSTANTS.ACTION.COMPONENT.DATA,
                                dojo.toJson(viewMeta));
                        }
                    }
                }));
            }

        });

        Zones.LOG = Logger.addTimer(new Logger(NOCCONSTANTS.CLASSNAME.WIDGETS.COMPONENT.ZONES));

        return Zones;
    });