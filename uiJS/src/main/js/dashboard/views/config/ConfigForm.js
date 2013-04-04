define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dashboard/abstract/AbstractForm", "dijit/form/Form", "dashboard/helper/ButtonHelper", "dojo/_base/lang",
    "dojo/on", "dojox/layout/TableContainer", "dojo/dom-construct"],

    function (declare, i18n, i18nString, Logger, AbstractForm, Form, ButtonHelper, lang, on, TableContainer, domConstruct) {

        dashboard.classnames.ConfigForm = "dashboard.config.ConfigForm";

        var ConfigForm = declare(dashboard.classnames.ConfigForm, [AbstractForm, Form], {

            pageType: dashboard.pageTypes.CONFIG, // this is the default; in case of 'main' dashboard calls, this is overwritten in the constructor

            constructor: function(pageType) {
                // if its a new window then the pageType will be Config, else Dashboard
                this.pageType = pageType;
            },

            createToolbarButtons:function () {
                dashboard.dom.Toolbar[this.pageType].destroyDescendants(false);

                var buttonHelper = new ButtonHelper();
                var button = buttonHelper.getSave();
                on(button, "click", lang.hitch(this, this.saveConfig)); // this is a superclass call
                dashboard.dom.Toolbar[this.pageType].addChild(button);
            },

            startup: function() {
                this.inherited(arguments);
            },

            launch: function() {
                var tableDiv = dojo.create('div', {style:'width: 100%; height: 100%;'});
                this.attr('content', tableDiv);

                if(this.tableCount == 1) {
                    this.configTable = new TableContainer({cols:this.columnCount, "labelWidth":"150"}, tableDiv);
                    return;
                }

                this.configTable = [];
                for(var i=0;i<this.tableCount;i++) {
                    var layerDef = dojo.create('div', {style:'width: 100%; height: 40px;'});
                    tableDiv.appendChild(layerDef);
                    this.configTable.push(new TableContainer({cols: this.columnCount[i],"labelWidth": "150"}, layerDef));
                }

            },

            addHeadingRow: function(tableContainer) {
                var table = tableContainer.domNode.childNodes[0];

                var thead = dojo.create('thead');
                //table.appendChild(thead);
                domConstruct.place(thead, table, "first");

                var row = dojo.create('tr');
                thead.appendChild(row);

                for(var i=0;i<this.headings.length;i++) {
                    var blankCol = dojo.create('th');
                    row.appendChild(blankCol);
                    var col = dojo.create('th');
                    col.className = 'configTableHead';
                    col.innerHTML = this.headings[i];
                    row.appendChild(col);
                }
            }

        });

        ConfigForm.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigForm));

        return ConfigForm;
    });