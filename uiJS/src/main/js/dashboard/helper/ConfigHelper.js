define(["dojo/_base/declare", "dojo/i18n", "dojo/i18n!dashboard/nls/dashboard", "dashboard/logger/Logger"],

    function (declare, i18n, i18nString, Logger) {

        dashboard.classnames.ConfigHelper = "dashboard.helper.ConfigHelper";

        var ConfigHelper = declare(dashboard.classnames.ConfigHelper, null, {});

        ConfigHelper.addSuggest = function(inputId, suggestArray) {
            $('#'+inputId).tagSuggest({
                tags: suggestArray
                //url: 'tagging.php',
                //delay: 250
            });

            var tagAjaxParent = dojo.byId(inputId).parentNode;
            var tagMatches = tagAjaxParent.childNodes[1];
            dojo.destroy(tagMatches); // remove from DOM and place it outside the dojo input div container
            tagAjaxParent.parentNode.parentNode.appendChild(tagMatches);
        };

        ConfigHelper.arrayUnique = function (array) {
            var a = array.concat();
            for (var i = 0; i < a.length; ++i) {
                for (var j = i + 1; j < a.length; ++j) {
                    if (a[i] === a[j])
                        a.splice(j--, 1);
                }
            }
            return a;
        };

        ConfigHelper.LOG = Logger.addTimer(new Logger(dashboard.classnames.ConfigHelper));

        return ConfigHelper;
    });