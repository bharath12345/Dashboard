define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger",
    "dijit/_WidgetBase", "dijit/form/TextBox"],

    function (declare, i18n, i18nString, Logger, _WidgetBase, TextBox) {

        dashboard.classnames.AoneFormValue = "dashboard.widgets.AoneFormValue";

        var AoneFormValue = declare(dashboard.classnames.AoneFormValue, [_WidgetBase,TextBox], {

            style:"border:0; width: 100%; overflow: visible",

            startup:function () {

                this.inherited(arguments);

                this.textbox.readOnly = true;
            }
        });

        AoneFormValue.LOG = Logger.addTimer(new Logger(dashboard.classnames.AoneFormValue));

        return AoneFormValue;
    });